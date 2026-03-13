import React from 'react';
import { PenTool, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css';

const Blog = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="GTM Blog | SaaS Growth & Inbound Strategy"
                description="Expert insights on B2B SaaS SEO, content marketing, and inbound growth. Learn how to scale your software pipeline with our latest articles."
                url="/blog"
            />
            <section className="hero">
                <div className="container" style={{ textAlign: 'center' }}>
                    <header className="hero-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label"><PenTool size={14} /> The GTM Blog</span>
                        <h1>SaaS Growth <span className="accent-text">Insights</span></h1>
                        <p>Actionable advice on B2B SaaS SEO, content marketing, lead generation, and inbound strategy.</p>
                    </header>
                </div>
            </section>

            <section className="problem-section" style={{ background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="problems-grid">
                        <article className="problem-card card">
                            <h3>How to Map SaaS Content to the Buyer's Journey</h3>
                            <p>Stop publishing generic content. Learn how to map TOFU, MOFU, and BOFU intent specifically for software buying cycles.</p>
                            <span className="learn-more" style={{ marginTop: '12px', display: 'inline-block' }}>Read Article <ArrowRight size={14} /></span>
                        </article>
                        <article className="problem-card card">
                            <h3>The 2026 B2B SaaS Technical SEO Checklist</h3>
                            <p>Are Core Web Vitals killing your signups? Use our exact technical audit checklist to ensure your app marketing site is mechanically perfect.</p>
                            <span className="learn-more" style={{ marginTop: '12px', display: 'inline-block' }}>Read Article <ArrowRight size={14} /></span>
                        </article>
                        <article className="problem-card card">
                            <h3>Why Your SaaS Lead Magnets Aren't Converting</h3>
                            <p>If nobody is downloading your eBook, your ICP doesn't care about it. Here's how to build high-fidelity lead magnets like calculators and benchmark reports.</p>
                            <span className="learn-more" style={{ marginTop: '12px', display: 'inline-block' }}>Read Article <ArrowRight size={14} /></span>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
