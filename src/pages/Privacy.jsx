import React from 'react';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css';

const Privacy = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="Privacy Policy | SaaS GTM Agency"
                description="Our commitment to data privacy and security. Learn how we handle your information with enterprise-grade protection."
                url="/privacy"
            />
            <section className="hero">
                <div className="container" style={{ textAlign: 'center' }}>
                    <header className="hero-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label"><Shield size={14} /> Legal</span>
                        <h1>Privacy <span className="accent-text">Policy</span></h1>
                        <p>Last updated: October 2026. We take your data and privacy seriously.</p>
                    </header>
                </div>
            </section>

            <section className="problem-section" style={{ background: 'var(--bg-primary)', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{ padding: '60px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Information We Collect</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
                            We collect information you provide directly to us when you request a GTM audit, sign up for a playbook, or communicate with us. This includes your name, email address, company URL, and any other information you choose to provide. Automated information is also collected via cookies and analytics software for site optimization.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. How We Use Information</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
                            We solely use the information collected to generate the requested website audits, provide consulting services, and occasionally send relevant SaaS marketing insights. We do not sell your personal data to third-party data brokers under any circumstances.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Data Security (SOC 2)</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
                            We implement enterprise-grade security practices to protect your information. Any sensitive business data shared during our engagements is protected under mutual non-disclosure agreements (NDAs).
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Contact Us</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            If you have any questions about this Privacy Policy or wish to request the deletion of your data, please contact us at <a href="mailto:privacy@saasgtm.agency" className="accent-text" style={{ fontWeight: 'bold' }}>privacy@saasgtm.agency</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
