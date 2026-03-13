import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory OTP store (use Redis in production)
const otpStore = new Map();

// Configure transporter — uses Ethereal for demo (real SMTP for production)
let transporter;

async function createTransporter() {
    // Check for real SMTP environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    console.log('🔍 Checking SMTP Env:', {
        hasHost: !!SMTP_HOST,
        hasPort: !!SMTP_PORT,
        hasUser: !!SMTP_USER,
        hasPass: !!SMTP_PASS
    });

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
        transporter = nodemailer.createTransport({
            service: SMTP_HOST.includes('gmail') ? 'gmail' : undefined,
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT || '587'),
            secure: SMTP_PORT === '465',
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });
        console.log('✅ Real SMTP configured:', SMTP_HOST);
    } else {
        // Fallback to Ethereal for testing
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
        console.log('📧 Ethereal test account configured:', testAccount.user);
        console.log('   Preview emails at: https://ethereal.email/login');
    }
}

// POST /api/send-otp
app.post('/api/send-otp', async (req, res) => {
    if (!transporter) await createTransporter();
    const { email, websiteUrl } = req.body;

    if (!email || !websiteUrl) {
        return res.status(400).json({ error: 'Email and website URL are required.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP with 10 min expiry
    otpStore.set(email, {
        otp,
        websiteUrl,
        expiresAt: Date.now() + 10 * 60 * 1000,
    });

    try {
        const info = await transporter.sendMail({
            from: `"SaaS GTM Agency" <${process.env.SMTP_USER || 'audit@saasgtm.agency'}>`,
            to: email,
            subject: 'Your Free GTM Audit - Verification Code',
            html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; padding: 40px; background: #f8fafc; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0f172a; font-size: 24px; margin: 0;">🚀 SaaS GTM Agency</h1>
            <p style="color: #64748b; margin-top: 8px;">Your Free Audit Verification</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0;">
            <p style="color: #334155; margin-bottom: 20px;">Use this code to verify your email and unlock your free GTM audit report:</p>
            <div style="font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #e84430; padding: 20px; background: #fef1ef; border-radius: 12px; margin-bottom: 20px;">
              ${otp}
            </div>
            <p style="color: #94a3b8; font-size: 13px;">This code expires in 10 minutes.</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
            Auditing: <strong>${websiteUrl}</strong>
          </p>
        </div>
      `,
        });

        console.log('OTP sent to:', email, '| OTP:', otp);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

        res.json({
            success: true,
            message: 'Verification code sent to your email.',
            previewUrl: nodemailer.getTestMessageUrl(info), // For demo only
        });
    } catch (err) {
        console.error('Email error:', err);
        res.status(500).json({ error: 'Failed to send verification email.' });
    }
});

// POST /api/verify-otp
app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ error: 'Email and OTP are required.' });
    }

    const stored = otpStore.get(email);

    if (!stored) {
        return res.status(400).json({ error: 'No verification pending. Please request a new code.' });
    }

    if (Date.now() > stored.expiresAt) {
        otpStore.delete(email);
        return res.status(400).json({ error: 'Code expired. Please request a new one.' });
    }

    if (stored.otp !== otp) {
        return res.status(400).json({ error: 'Invalid code. Please try again.' });
    }

    // OTP verified — generate mock report data
    otpStore.delete(email);

    const report = {
        websiteUrl: stored.websiteUrl,
        email,
        generatedAt: new Date().toISOString(),
        overallScore: Math.floor(60 + Math.random() * 30),
        categories: [
            {
                name: 'Technical SEO',
                score: Math.floor(40 + Math.random() * 50),
                findings: [
                    'Missing meta descriptions on 12 pages',
                    'Page load time is 4.2s (target: < 2s)',
                    'No structured data (JSON-LD) detected',
                    'Mobile-first indexing issues found',
                ],
            },
            {
                name: 'Content Strategy',
                score: Math.floor(30 + Math.random() * 50),
                findings: [
                    'Blog publishing frequency: 1 post/month (recommend 4+)',
                    'No pillar content strategy detected',
                    'Missing comparison & alternative pages',
                    'Low word count on key landing pages (avg 300 words)',
                ],
            },
            {
                name: 'Lead Generation',
                score: Math.floor(20 + Math.random() * 60),
                findings: [
                    'No lead magnets (ebooks, calculators, templates)',
                    'CTA placement is below the fold on 8/10 pages',
                    'No email capture forms on blog posts',
                    'Missing exit-intent popup strategy',
                ],
            },
            {
                name: 'Competitor Positioning',
                score: Math.floor(35 + Math.random() * 45),
                findings: [
                    'Top 3 competitors outrank you on 85% of target keywords',
                    'Missing "vs" and comparison landing pages',
                    'Competitors have 3x more backlinks on average',
                    'No G2/Capterra review strategy detected',
                ],
            },
        ],
        recommendations: [
            'Implement a 90-day content sprint targeting bottom-of-funnel keywords',
            'Create 3 lead magnets aligned to your ICP pain points',
            'Fix critical technical SEO issues to improve crawlability',
            'Launch a LinkedIn thought leadership program for founders',
            'Build "vs competitor" and "alternative to" landing pages',
        ],
    };

    res.json({ success: true, report });
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production' || process.env.VITE_VERCEL_ENV) {
    createTransporter().then(() => {
        app.listen(PORT, () => {
            console.log(`\n🚀 API server running on http://localhost:${PORT}`);
        });
    });
}

export default app;
