import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css';

const CaseStudies = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="SaaS Growth Case Studies | Real Results"
                description="Explore our B2B SaaS case studies. See how we've helped tech companies achieve 300%+ traffic growth and scale their inbound pipeline."
                url="/case-studies"
            />
            <section className="hero">
                <div className="container" style={{ textAlign: 'center' }}>
                    <header className="hero-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label"><Star size={14} /> Proven Results</span>
                        <h1>SaaS Growth <span className="accent-text">Case Studies</span></h1>
                        <p>Read exactly how we helped these B2B SaaS companies scale their inbound engine in 90 days.</p>
                    </header>
                </div>
            </section>

            <section className="results-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="results-grid">
                        <article className="result-card card">
                            <div className="result-metric">327%</div>
                            <div className="result-label">Traffic Boost</div>
                            <div className="result-company">Enterprise DevOps SaaS</div>
                            <p style={{ marginTop: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>We rebuilt their technical SEO foundation and launched 12 pillar content pieces, generating 327% MoM traffic growth.</p>
                        </article>
                        <article className="result-card card">
                            <div className="result-metric">5.2X</div>
                            <div className="result-label">More SQLs</div>
                            <div className="result-company">HR Tech Startup</div>
                            <p style={{ marginTop: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Switching from generic blog posts to BOFU comparison pages drove a 5.2x increase in Sales Qualified Leads.</p>
                        </article>
                        <article className="result-card card">
                            <div className="result-metric">68%</div>
                            <div className="result-label">Lower CAC</div>
                            <div className="result-company">FinTech API Platform</div>
                            <p style={{ marginTop: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Replacing expensive paid search with compounding organic lead magnets cut Customer Acquisition Cost significantly.</p>
                        </article>
                        <article className="result-card card">
                            <div className="result-metric">$2.1M</div>
                            <div className="result-label">Sales Pipeline</div>
                            <div className="result-company">Cybersecurity SaaS</div>
                            <p style={{ marginTop: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A full 90-day execution sprint generated $2.1M in tracked pipeline value via our Looker Studio attribution model.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to be our next success story?</h2>
                        <p>Book a free 30-minute strategy call with our founders today.</p>
                        <a href="/contact" className="btn-primary cta-btn">Book Your Strategy Call <ArrowRight size={18} /></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
