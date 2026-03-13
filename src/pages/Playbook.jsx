import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css';
import '../pages/Contact.css'; // For form styles

const Playbook = () => {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = (e) => {
        e.preventDefault();
        setDownloaded(true);
    };

    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="SaaS GTM Playbook | Free 90-Day Growth Guide"
                description="Download our exact 90-day inbound growth methodology. Learn how we conduct audits, map keyword intent, and scale SaaS revenue."
                url="/playbook"
            />
            <section className="hero">
                <div className="container" style={{ textAlign: 'center' }}>
                    <header className="hero-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label"><BookOpen size={14} /> Free Download</span>
                        <h1>The B2B SaaS Inbound <span className="accent-text">GTM Playbook</span></h1>
                        <p>Get the exact 90-day step-by-step methodology we use to scale SaaS pipeline by 250%. Sent straight to your inbox.</p>
                    </header>
                </div>
            </section>

            <section className="contact-content" style={{ background: 'var(--bg-secondary)', padding: '60px 0' }}>
                <div className="container contact-grid">
                    <aside className="contact-info-col">
                        <div className="what-expect card">
                            <h3>Inside the Playbook:</h3>
                            <ul className="expect-list">
                                <li><CheckCircle2 size={16} /> How to conduct a 48-hour technical SEO audit</li>
                                <li><CheckCircle2 size={16} /> The ICP Keyword Intent mapping framework</li>
                                <li><CheckCircle2 size={16} /> 3 lead magnets that actually convert B2B buyers</li>
                                <li><CheckCircle2 size={16} /> The exact LinkedIn organic strategy for founders</li>
                                <li><CheckCircle2 size={16} /> Looker Studio attribution dashboard template</li>
                            </ul>
                        </div>
                    </aside>

                    <div className="contact-form-col">
                        {downloaded ? (
                            <div className="card success-card" role="status" aria-live="polite">
                                <div className="success-icon"><CheckCircle2 size={44} /></div>
                                <h2>Playbook Sent!</h2>
                                <p>Check your email inbox. The GTM Playbook is on its way.</p>
                                <a href="/" className="btn-secondary" style={{ marginTop: '20px' }}>Back to Home</a>
                            </div>
                        ) : (
                            <form onSubmit={handleDownload} className="card contact-form">
                                <h2 style={{ marginBottom: '16px' }}>Download the Playbook</h2>
                                <div className="form-group">
                                    <label htmlFor="playbook-name">First Name</label>
                                    <input id="playbook-name" type="text" placeholder="Sarah" required />
                                </div>
                                <div className="form-group" style={{ marginBottom: '24px' }}>
                                    <label htmlFor="playbook-email">Work Email</label>
                                    <input id="playbook-email" type="email" placeholder="sarah@saas-company.com" required />
                                </div>
                                <button type="submit" className="btn-primary submit-btn">
                                    Send Me The Playbook <ArrowRight size={16} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Playbook;
