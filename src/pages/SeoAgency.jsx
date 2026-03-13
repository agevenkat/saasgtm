import React from 'react';
import { ArrowRight, Search, Target, CheckCircle2, Star, Zap } from 'lucide-react';
import AuditForm from '../components/AuditForm';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import '../pages/Home.css'; // Reusing Home styles for consistency

const seoFaqs = [
    {
        question: "Why do B2B SaaS companies need a specialized SEO agency?",
        answer: "SaaS SEO is fundamentally different from local or e-commerce SEO. You're dealing with long, complex sales cycles, highly educated buyers, and extremely competitive, high-difficulty keywords. We understand SaaS unit economics, LTV:CAC ratios, and how to map keywords to specific stages of the B2B buying journey."
    },
    {
        question: "Do you focus on technical SEO or content?",
        answer: "Both. Technical SEO ensures search engines can crawl, index, and understand your app and marketing site without friction. Content SEO ensures you have the right authoritative pages (product pages, comparisons, glossaries, blogs) to capture buyer intent. We execute on both fronts."
    },
    {
        question: "How do you measure SaaS SEO success?",
        answer: "We don't just measure traffic. We track the full funnel: Impressions -> Clicks -> Signups/Demos -> Pipeline Generated -> Closed Won Revenue. We integrate with your CRM (HubSpot, Salesforce) to attribute revenue directly to organic search."
    }
];

const SeoAgency = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="B2B SaaS SEO Agency | Scale Inbound Revenue"
                description="The premier B2B SaaS SEO agency for high-growth software companies. We turn organic search into a predictable pipeline of demo requests and trials."
                url="/saas-seo-agency"
                faqs={seoFaqs}
            />
            {/* ─── HERO ─── */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="container hero-grid">
                    <header className="hero-text">
                        <span className="section-label" aria-hidden="true"><Search size={14} /> B2B SaaS SEO Experts</span>
                        <h1 id="hero-heading">The Premier <span className="accent-text">B2B SaaS SEO Agency</span></h1>
                        <p>We help B2B software companies dominate search results, outrank competitors, and turn organic traffic into highly qualified demo requests and product signups.</p>
                        <div className="hero-stats-row" role="group">
                            <div className="hero-stat"><strong>#1</strong><span>Ranking Goal</span></div>
                            <div className="hero-stat"><strong>250%</strong><span>Avg. Organic Growth</span></div>
                            <div className="hero-stat"><strong>90 Days</strong><span>To See ROI</span></div>
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
                        <h2 className="accent-text">Why Your Current SEO Strategy Is Failing</h2>
                        <p>Most SaaS companies make the mistake of publishing generic "top of funnel" blog posts that drive vanity traffic but zero pipeline. As a specialized B2B SaaS SEO agency, we flip the script. We target high-intent "bottom of funnel" keywords first — like competitor comparisons, pricing searches, and specific use-case queries.</p>
                    </header>

                    <div className="problems-grid">
                        <div className="problem-card card">
                            <Target className="problem-icon" />
                            <h3>Keyword Intent Mapping</h3>
                            <p>We map exactly what your ideal customer profile (ICP) is searching for right before they make a buying decision.</p>
                        </div>
                        <div className="problem-card card">
                            <Zap className="problem-icon" />
                            <h3>Technical Dominance</h3>
                            <p>From schema markups for software applications to Core Web Vitals optimization, we build a flawless technical foundation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={seoFaqs} title="SaaS SEO FAQs" />

            {/* ─── CTA ─── */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to Dominate Your Niche?</h2>
                        <p>Get a free technical and content SEO audit of your SaaS website today.</p>
                        <a href="#audit-form" className="btn-primary cta-btn">Get Your Free SEO Audit</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeoAgency;
