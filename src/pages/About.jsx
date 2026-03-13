import React from 'react';
import { Users, Award, Briefcase, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css'; // Reuse base styles

const About = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="About SaaS GTM Agency | B2B Growth Engineers"
                description="Learn about our 90-day inbound growth methodology and meet the engineers behind the SaaS GTM engine."
                url="/about"
            />
            {/* ─── HERO ─── */}
            <section className="hero">
                <div className="container">
                    <header className="hero-text" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
                        <span className="section-label"><Users size={14} /> About SaaS GTM Agency</span>
                        <h1>We Are Software <span className="accent-text">Growth</span> Engineers</h1>
                        <p>Founded by former SaaS marketers and engineers, we understand unity economics, B2B sales cycles, and churn better than generic marketing agencies.</p>
                    </header>
                </div>
            </section>

            {/* ─── CONTENT ─── */}
            <section className="problem-section" style={{ background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="problems-grid">
                        <div className="problem-card card">
                            <Briefcase className="problem-icon" />
                            <h3>Our Philosophy</h3>
                            <p>We don't do 'random acts of marketing.' We build measurable, compounding inbound growth engines. You won't pay us forever, because we hand over the keys after 90 days.</p>
                        </div>
                        <div className="problem-card card">
                            <Award className="problem-icon" />
                            <h3>MQLs vs Vanity Traffic</h3>
                            <p>We hate vanity metrics. A million visitors means nothing if they don't convert. We optimize exclusively for pipeline, demo requests, and signups.</p>
                        </div>
                        <div className="problem-card card">
                            <Zap className="problem-icon" />
                            <h3>SaaS Specialists</h3>
                            <p>We only work with B2B SaaS. We don't do e-commerce, local businesses, or enterprise hardware. Focus makes us the best at what we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to see what we can do?</h2>
                        <p>Book a free 30-minute strategy call with our founders today.</p>
                        <a href="/contact" className="btn-primary cta-btn">Book Your Strategy Call</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
