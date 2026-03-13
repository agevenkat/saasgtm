import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import './Contact.css';

const contactFaqs = [
    {
        question: "Is this really a free strategy call?",
        answer: "Yes. It's a genuine 30-minute consultation with a senior GTM strategist, not a sales pitch with an SDR. We'll give you actionable advice whether we end up working together or not."
    },
    {
        question: "Do you offer white-label services for other agencies?",
        answer: "No. We work directly with SaaS founders and marketing leaders to ensure the highest quality of execution and communication."
    },
    {
        question: "What should I prepare for the call?",
        answer: "Just come ready to discuss your current revenue goals, what you've tried so far with inbound marketing, and your biggest bottlenecks. We'll handle the rest."
    }
];

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page fade-in-up" id="main-content">
            <SEO
                title="Book a Strategy Call | SaaS GTM Agency"
                description="Schedule a free 30-minute consultancy call with our senior GTM strategists. Let's discuss your inbound growth bottlenecks and how to fix them."
                url="/contact"
            />
            <section className="contact-hero" aria-labelledby="contact-heading">
                <div className="container">
                    <span className="section-label"><Calendar size={14} aria-hidden="true" /> Book a Call</span>
                    <h1 id="contact-heading">Let's Build Your <span className="accent-text">Growth Engine</span></h1>
                    <p>Book a free 30-minute GTM strategy call. We'll review your current inbound performance and show you exactly where the opportunities are.</p>
                </div>
            </section>

            <section className="contact-content" aria-label="Contact information and form">
                <div className="container contact-grid">
                    <aside className="contact-info-col">
                        <div className="info-card card">
                            <h2>Get In Touch</h2>
                            <address className="info-items">
                                <div className="info-item">
                                    <div className="info-icon-wrap" aria-hidden="true"><Mail size={18} /></div>
                                    <div>
                                        <p className="info-label">Email</p>
                                        <a href="mailto:growth@saasgtm.agency" className="info-value">growth@saasgtm.agency</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-wrap" aria-hidden="true"><Phone size={18} /></div>
                                    <div>
                                        <p className="info-label">Phone</p>
                                        <a href="tel:+15551234567" className="info-value">+1 (555) 123-4567</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-wrap" aria-hidden="true"><MapPin size={18} /></div>
                                    <div>
                                        <p className="info-label">Location</p>
                                        <p className="info-value">San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-wrap" aria-hidden="true"><Clock size={18} /></div>
                                    <div>
                                        <p className="info-label">Response Time</p>
                                        <p className="info-value">Within 24 hours</p>
                                    </div>
                                </div>
                            </address>
                        </div>

                        <div className="what-expect card">
                            <h3>What to Expect</h3>
                            <ul className="expect-list">
                                <li><CheckCircle2 size={16} aria-hidden="true" /> 30-minute strategy consultation</li>
                                <li><CheckCircle2 size={16} aria-hidden="true" /> Quick-win recommendations</li>
                                <li><CheckCircle2 size={16} aria-hidden="true" /> Custom roadmap preview</li>
                                <li><CheckCircle2 size={16} aria-hidden="true" /> No obligation, no pressure</li>
                            </ul>
                        </div>
                    </aside>

                    <div className="contact-form-col">
                        {submitted ? (
                            <div className="card success-card" role="status" aria-live="polite">
                                <div className="success-icon" aria-hidden="true"><CheckCircle2 size={44} /></div>
                                <h2>Message Received!</h2>
                                <p>One of our senior GTM strategists will reach out within 24 hours to schedule your call.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="card contact-form" aria-label="Book a strategy call">
                                <h2>Book Your Strategy Call</h2>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Full Name</label>
                                        <input id="contact-name" type="text" placeholder="John Smith" required autoComplete="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Work Email</label>
                                        <input id="contact-email" type="email" placeholder="john@company.com" required autoComplete="email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-url">Company URL</label>
                                        <input id="contact-url" type="url" placeholder="https://your-saas.com" required autoComplete="url" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-role">Your Role</label>
                                        <select id="contact-role" required>
                                            <option value="">Select...</option>
                                            <option>Founder / CEO</option>
                                            <option>Head of Marketing</option>
                                            <option>VP Growth</option>
                                            <option>Product Manager</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-revenue">Monthly Revenue</label>
                                    <select id="contact-revenue" required>
                                        <option value="">Select range...</option>
                                        <option>Pre-revenue</option>
                                        <option>$0 – $10K</option>
                                        <option>$10K – $50K</option>
                                        <option>$50K – $250K</option>
                                        <option>$250K+</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-challenge">Biggest GTM Challenge</label>
                                    <textarea id="contact-challenge" placeholder="Tell us about your biggest growth challenge..." rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn-primary submit-btn">
                                    Book My Call <Send size={16} aria-hidden="true" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={contactFaqs} title="Frequently Asked Questions" />
        </div>
    );
};

export default Contact;
