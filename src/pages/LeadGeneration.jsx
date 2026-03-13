import React from 'react';
import { Target, Users, Zap, Briefcase } from 'lucide-react';
import AuditForm from '../components/AuditForm';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import '../pages/Home.css';

const leadFaqs = [
    {
        question: "How are SaaS lead generation services different from standard B2B lead gen?",
        answer: "SaaS lead generation relies heavily on reducing friction, offering immediate value (like free trials or freemium tiers), and educating the buyer before they ever talk to sales. Our SaaS lead gen strategies optimize for MQLs (Marketing Qualified Leads) that actually turn into SQLs (Sales Qualified Leads), not just email signups."
    },
    {
        question: "Do you focus on inbound or outbound lead generation?",
        answer: "We are an inbound-first SaaS growth agency. While outbound has its place, we believe that building an inbound engine (SEO, content marketing, lead magnets, LinkedIn organic) creates compounding value that reduces your Customer Acquisition Cost (CAC) over time."
    },
    {
        question: "What kind of lead magnets do you create?",
        answer: "We build high-intent lead magnets that solve specific ICP problems. This includes interactive ROI calculators, industry benchmark reports, deep-dive teardowns, checklists, and templates that your ideal SaaS customers actually want to download."
    }
];

const LeadGeneration = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="SaaS Lead Generation Services | Predictable Inbound Pipeline"
                description="Scale your SaaS with high-quality inbound lead generation. We build automated funnels that attract your ideal customers and turn them into trials and demos."
                url="/saas-lead-generation"
            />
            {/* ─── HERO ─── */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="container hero-grid">
                    <header className="hero-text">
                        <span className="section-label"><Target size={14} /> SaaS Lead Generation Strategies</span>
                        <h1 id="hero-heading">The Top <span className="accent-text">SaaS Lead Generation Services</span> That Deliver Pipeline</h1>
                        <p>Stop buying cold email lists. Build a predictable, compounding inbound engine that generates highly qualified Product Demos and Trials for your SaaS.</p>
                        <div className="hero-stats-row" role="group">
                            <div className="hero-stat"><strong>MQLs</strong><span>Marketing Qualified</span></div>
                            <div className="hero-stat"><strong>SQLs</strong><span>Sales Qualified</span></div>
                            <div className="hero-stat"><strong>Lower</strong><span>CAC</span></div>
                        </div>
                    </header>
                    <aside className="hero-form-col">
                        <AuditForm />
                    </aside>
                </div>
            </section>

            {/* ─── CONTENT ─── */}
            <section className="problem-section">
                <div className="container">
                    <header className="section-header">
                        <h2 className="accent-text">Volume Is Vanity, Pipeline Is Sanity</h2>
                        <p>Most SaaS lead generation agencies promise you thousands of leads. But if those leads don't fit your ICP, don't attend demos, or immediately churn, they are worthless. We focus on B2B SaaS lead quality, building funnels that attract decision-makers with real intent to buy.</p>
                    </header>

                    <div className="problems-grid">
                        <div className="problem-card card">
                            <Zap className="problem-icon" />
                            <h3>High-Fidelity Lead Magnets</h3>
                            <p>We build lead generation assets like ROI calculators and benchmark reports that naturally filter for serious B2B buyers.</p>
                        </div>
                        <div className="problem-card card">
                            <Briefcase className="problem-icon" />
                            <h3>LinkedIn Social Selling</h3>
                            <p>We leverage your founders' LinkedIn profiles to execute organic lead generation strategies directly targeting ICP decision makers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={leadFaqs} title="SaaS Lead Gen FAQs" />

            {/* ─── CTA ─── */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready for Predictable Pipeline?</h2>
                        <p>Get a free lead generation funnel audit of your SaaS website today.</p>
                        <a href="#audit-form" className="btn-primary cta-btn">Get Your Free Lead Funnel Audit</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeadGeneration;
