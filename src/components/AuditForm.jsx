import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Mail, Globe, Loader2, CheckCircle2, ShieldCheck, AlertCircle, BarChart3, FileText, Target, TrendingUp } from 'lucide-react';
import './AuditForm.css';

const API_BASE = import.meta.env.VITE_API_URL || ''; // Empty string for relative path in production

const AuditForm = () => {
    const [step, setStep] = useState('form'); // form | otp | report
    const [email, setEmail] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [report, setReport] = useState(null);
    const otpRefs = useRef([]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE}/api/send-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, websiteUrl }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setStep('otp');
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOtpChange = (index, value) => {
        if (value.length > 1) value = value.slice(-1);
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const otpString = otp.join('');

        try {
            const res = await fetch(`${API_BASE}/api/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp: otpString }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setReport(data.report);
            setStep('report');
        } catch (err) {
            setError(err.message || 'Verification failed.');
        } finally {
            setLoading(false);
        }
    };

    const getScoreColor = (score) => {
        if (score >= 70) return '#22c55e';
        if (score >= 50) return '#eab308';
        return '#ef4444';
    };

    const getScoreLabel = (score) => {
        if (score >= 70) return 'Good';
        if (score >= 50) return 'Needs Work';
        return 'Critical';
    };

    const categoryIcons = {
        'Technical SEO': <Globe size={22} />,
        'Content Strategy': <FileText size={22} />,
        'Lead Generation': <Target size={22} />,
        'Competitor Positioning': <TrendingUp size={22} />,
    };

    return (
        <div className="audit-form-wrapper" id="audit-form">
            {step === 'form' && (
                <div className="audit-card">
                    <div className="audit-card-header">
                        <div className="audit-icon-wrap">
                            <BarChart3 size={28} />
                        </div>
                        <h3>Get Your Free GTM Audit</h3>
                        <p>Enter your details and we'll generate a comprehensive inbound marketing audit for your SaaS.</p>
                    </div>
                    <form onSubmit={handleSubmitForm} className="audit-inner-form">
                        <div className="form-field">
                            <label>
                                <Mail size={16} />
                                Work Email
                            </label>
                            <input
                                type="email"
                                placeholder="founder@your-saas.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label>
                                <Globe size={16} />
                                Website URL
                            </label>
                            <input
                                type="url"
                                placeholder="https://your-saas.com"
                                value={websiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="form-error"><AlertCircle size={16} /> {error}</div>}
                        <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                            {loading ? <><Loader2 size={18} className="spin" /> Sending Code...</> : <>Get My Report <ArrowRight size={18} /></>}
                        </button>
                        <p className="form-disclaimer">We'll email you a verification code. No spam, ever.</p>
                    </form>
                </div>
            )}

            {step === 'otp' && (
                <div className="audit-card otp-card">
                    <div className="audit-card-header">
                        <div className="audit-icon-wrap success">
                            <ShieldCheck size={28} />
                        </div>
                        <h3>Verify Your Email</h3>
                        <p>We sent a 6-digit code to <strong>{email}</strong>. Enter it below.</p>
                    </div>
                    <form onSubmit={handleVerifyOtp} className="audit-inner-form">
                        <div className="otp-inputs">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (otpRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                    className="otp-digit"
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>
                        {error && <div className="form-error"><AlertCircle size={16} /> {error}</div>}
                        <button type="submit" className="btn-primary submit-btn" disabled={loading || otp.join('').length < 6}>
                            {loading ? <><Loader2 size={18} className="spin" /> Verifying...</> : <>Verify & Generate Report <CheckCircle2 size={18} /></>}
                        </button>
                        <button type="button" className="resend-btn" onClick={() => { setStep('form'); setOtp(['', '', '', '', '', '']); setError(''); }}>
                            ← Change email or resend code
                        </button>
                    </form>
                </div>
            )}

            {step === 'report' && report && (
                <div className="report-container">
                    <div className="report-header">
                        <div className="report-score-ring" style={{ '--score-color': getScoreColor(report.overallScore) }}>
                            <div className="score-inner">
                                <span className="score-number">{report.overallScore}</span>
                                <span className="score-label">{getScoreLabel(report.overallScore)}</span>
                            </div>
                        </div>
                        <div>
                            <h3>GTM Audit Report</h3>
                            <p className="report-url">{report.websiteUrl}</p>
                            <p className="report-date">Generated on {new Date(report.generatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                    </div>

                    <div className="report-categories">
                        {report.categories.map((cat) => (
                            <div key={cat.name} className="report-cat-card">
                                <div className="cat-header">
                                    <div className="cat-icon">{categoryIcons[cat.name] || <BarChart3 size={22} />}</div>
                                    <div>
                                        <h4>{cat.name}</h4>
                                        <div className="cat-score-bar">
                                            <div className="cat-score-fill" style={{ width: `${cat.score}%`, background: getScoreColor(cat.score) }}></div>
                                        </div>
                                    </div>
                                    <span className="cat-score" style={{ color: getScoreColor(cat.score) }}>{cat.score}/100</span>
                                </div>
                                <ul className="cat-findings">
                                    {cat.findings.map((f, i) => (
                                        <li key={i}><AlertCircle size={14} /> {f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="report-recs">
                        <h4>💡 Top Recommendations</h4>
                        <ol>
                            {report.recommendations.map((rec, i) => (
                                <li key={i}>{rec}</li>
                            ))}
                        </ol>
                    </div>

                    <div className="report-cta">
                        <h4>Want the full 90-day execution plan?</h4>
                        <p>Our team will build a custom GTM roadmap based on these findings.</p>
                        <a href="/contact" className="btn-primary">Book a Strategy Call <ArrowRight size={18} /></a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuditForm;
