import React from 'react';
import { ArrowRight, BarChart3, Target, Zap, Users, TrendingUp, CheckCircle2, Shield, BookOpen, Layers, Clock, Star, ChevronRight, Search, PenTool, Globe, LineChart, Megaphone, Sparkles } from 'lucide-react';
import AuditForm from '../components/AuditForm';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import './Home.css';

const homeFaqs = [
    {
        question: "Do you only work with SaaS companies?",
        answer: "Yes. We exclusively partner with B2B SaaS companies. This specialization means we understand your business model, customer acquisition costs, churn metrics, and sales cycles better than generic marketing agencies."
    },
    {
        question: "How long until we see tangible results?",
        answer: "You'll see early indicators like improved keyword rankings and impression share within 30-45 days. Measurable increases in qualified inbound lead volume typically occur between days 60-90 as our engine takes full effect."
    },
    {
        question: "Who writes the content and copy?",
        answer: "Our in-house team of specialized B2B SaaS writers. We conduct deep-dive interviews with your team during the onboarding phase to extract the subject matter expertise required to write authoritative, high-converting content for your specific ICP."
    },
    {
        question: "Do you handle the implementation or just strategy?",
        answer: "Both. The 90-Day Plan is a fully 'done-for-you' execution sprint. From writing the code for technical SEO fixes to publishing the blog posts and building the Looker Studio dashboards, our team handles the heavy lifting."
    }
];

const Home = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="SaaS GTM Agency — 90-Day Go-to-Market Plan for Inbound Growth"
                description="The definitive 90-day go-to-market engine for high-growth SaaS businesses. Turn your product into a pipeline-generating machine."
                url="/"
            />

            {/* ─── HERO ─── */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="container hero-grid">
                    <header className="hero-text">
                        <span className="section-label" aria-hidden="true"><Sparkles size={14} /> GTM for SaaS</span>
                        <h1 id="hero-heading">Turn Your SaaS Into an <span className="accent-text">Inbound Lead Machine</span> in 90 Days</h1>
                        <p>A battle-tested 3-month go-to-market plan that fixes your SEO, content gaps, and conversion funnels — so you get more demos, more trials, and more revenue.</p>
                        <div className="hero-stats-row" role="group" aria-label="Key performance indicators">
                            <div className="hero-stat">
                                <strong>250%</strong>
                                <span>Avg. Traffic Boost</span>
                            </div>
                            <div className="hero-stat">
                                <strong>40+</strong>
                                <span>SaaS Brands Scaled</span>
                            </div>
                            <div className="hero-stat">
                                <strong>12X</strong>
                                <span>Avg. ROI Year 1</span>
                            </div>
                        </div>
                        <div className="hero-btns">
                            <a href="#audit-form" className="btn-primary">Get Free Audit <ArrowRight size={18} aria-hidden="true" /></a>
                            <a href="/plan" className="btn-secondary">See the 90-Day Plan</a>
                        </div>
                    </header>
                    <aside className="hero-form-col" aria-label="Free GTM audit form">
                        <AuditForm />
                    </aside>
                </div>
            </section>

            {/* ─── TRUSTED BY ─── */}
            <section className="trusted-by" aria-label="Trusted by companies">
                <div className="container">
                    <p className="trusted-label">Trusted by growth-stage SaaS teams worldwide</p>
                    <div className="trusted-logos" role="list">
                        {['CloudBase', 'SyncFlow', 'DataPipe', 'MetricStar', 'ApiForge', 'NovaSaaS'].map((name) => (
                            <div key={name} className="logo-placeholder" role="listitem">{name}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROBLEM ─── */}
            <section className="problem-section" aria-labelledby="problem-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">The Challenge</span>
                        <h2 id="problem-heading">Why Most SaaS Companies <span className="accent-text">Struggle</span> With Inbound</h2>
                        <p>You've built a great product. But your website doesn't convert, your content doesn't rank, and your pipeline is unpredictable.</p>
                    </header>
                    <div className="problems-grid" role="list">
                        {[
                            { icon: <Search size={24} />, title: 'Invisible on Google', desc: 'Your ideal customers search for solutions daily — but they find your competitors instead. No SEO strategy means no organic leads.' },
                            { icon: <PenTool size={24} />, title: 'Content Without Strategy', desc: 'Random blog posts don\'t drive pipeline. Without keyword mapping and ICP alignment, your content is just noise.' },
                            { icon: <Globe size={24} />, title: 'Website That Doesn\'t Convert', desc: 'Visitors land on your site and leave. Bad CTAs, unclear messaging, and no lead magnets mean wasted traffic.' },
                            { icon: <Users size={24} />, title: 'No Inbound System', desc: 'You rely on outbound and paid ads. When you stop spending, leads stop coming. There\'s no compounding engine.' },
                        ].map((item) => (
                            <article key={item.title} className="problem-card card" role="listitem">
                                <div className="problem-icon" aria-hidden="true">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SOLUTION ─── */}
            <section className="solution-section" aria-labelledby="solution-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">Our Solution</span>
                        <h2 id="solution-heading">A 90-Day Engine That <span className="accent-text">Compounds</span></h2>
                        <p>We don't do "random acts of marketing." We build a systematic inbound machine tailored to your ICP, your market, and your growth stage.</p>
                    </header>
                    <div className="solution-timeline">
                        {[
                            { month: '01', title: 'Audit & Strategy', desc: 'Deep-dive technical SEO audit, competitor analysis, ICP mapping, and high-intent keyword research.', color: 'var(--color-accent)' },
                            { month: '02', title: 'Content & Funnels', desc: 'Pillar content creation, lead magnet design, landing page builds, and LinkedIn thought leadership.', color: 'var(--color-charcoal)' },
                            { month: '03', title: 'Scale & Automate', desc: 'Paid acceleration, email nurture sequences, backlink campaigns, and attribution dashboard setup.', color: 'var(--color-success)' },
                        ].map((item) => (
                            <article key={item.month} className="timeline-card card">
                                <div className="timeline-badge" style={{ background: item.color }}>Month {item.month}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a href="/plan" className="learn-more" aria-label={`Learn more about ${item.title}`}>Learn more <ChevronRight size={16} aria-hidden="true" /></a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FEATURES ─── */}
            <section className="features-section" aria-labelledby="features-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">What's Included</span>
                        <h2 id="features-heading">Everything You Need to <span className="accent-text">Dominate</span> Inbound</h2>
                        <p>Each engagement includes a comprehensive set of deliverables designed for maximum impact.</p>
                    </header>
                    <div className="features-grid" role="list">
                        {[
                            { icon: <Search size={22} />, title: 'Technical SEO Audit', desc: 'Full site crawl, speed optimization, schema markup, and indexation fixes.' },
                            { icon: <BarChart3 size={22} />, title: 'Competitor Intelligence', desc: 'Backlink gaps, content gaps, keyword overlap, and positioning opportunities.' },
                            { icon: <Target size={22} />, title: 'ICP & Keyword Mapping', desc: 'Bottom-of-funnel keyword strategy mapped to buyer intent stages.' },
                            { icon: <PenTool size={22} />, title: 'Content Engine', desc: '10+ SEO-optimized articles, comparison pages, and alternative pages per month.' },
                            { icon: <Layers size={22} />, title: 'Landing Page Design', desc: 'High-converting pages with A/B testing, social proof, and clear CTAs.' },
                            { icon: <Megaphone size={22} />, title: 'LinkedIn Strategy', desc: 'Founder thought leadership, content calendar, and engagement playbook.' },
                            { icon: <LineChart size={22} />, title: 'Paid Ads Setup', desc: 'Google Ads and LinkedIn Ads campaigns optimized for demo bookings.' },
                            { icon: <BookOpen size={22} />, title: 'Lead Magnets', desc: 'eBooks, ROI calculators, and templates designed to capture high-intent leads.' },
                            { icon: <Shield size={22} />, title: 'Analytics & Attribution', desc: 'Custom dashboard tracking every touchpoint from first click to closed deal.' },
                        ].map((item) => (
                            <article key={item.title} className="feature-card card" role="listitem">
                                <div className="feature-icon" aria-hidden="true">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── RESULTS ─── */}
            <section className="results-section" aria-labelledby="results-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">Proven Results</span>
                        <h2 id="results-heading">Real Impact for <span className="accent-text">Real SaaS</span> Companies</h2>
                    </header>
                    <div className="results-grid" role="list">
                        {[
                            { metric: '327%', label: 'Increase in Organic Traffic', company: 'B2B SaaS, Series A' },
                            { metric: '5.2X', label: 'More Qualified Leads', company: 'HR Tech Startup' },
                            { metric: '68%', label: 'Reduction in CAC', company: 'DevOps Platform' },
                            { metric: '$2.1M', label: 'Pipeline Generated in 90 Days', company: 'FinTech SaaS' },
                        ].map((item) => (
                            <article key={item.metric} className="result-card" role="listitem">
                                <div className="result-metric">{item.metric}</div>
                                <div className="result-label">{item.label}</div>
                                <div className="result-company">{item.company}</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="testimonials-section" aria-labelledby="testimonials-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label"><Star size={14} aria-hidden="true" /> Testimonials</span>
                        <h2 id="testimonials-heading">What Founders <span className="accent-text">Say</span></h2>
                    </header>
                    <div className="testimonials-grid" role="list">
                        {[
                            { quote: 'In 90 days, they built an inbound engine that now generates 60% of our pipeline. Best investment we made this year.', name: 'Sarah Chen', role: 'CEO, CloudBase', avatar: 'SC' },
                            { quote: 'Their GTM audit uncovered issues we had no idea existed. Within weeks of fixing them, our organic traffic doubled.', name: 'Marcus Webb', role: 'Head of Growth, SyncFlow', avatar: 'MW' },
                            { quote: 'We went from zero inbound leads to 45 qualified demos per month. The content strategy alone was worth the entire engagement.', name: 'Priya Patel', role: 'Founder, DataPipe', avatar: 'PP' },
                        ].map((item) => (
                            <figure key={item.name} className="testimonial-card card" role="listitem">
                                <div className="stars" aria-label="5 out of 5 stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#d97706" color="#d97706" aria-hidden="true" />)}
                                </div>
                                <blockquote className="testimonial-quote">&ldquo;{item.quote}&rdquo;</blockquote>
                                <figcaption className="testimonial-author">
                                    <div className="testimonial-avatar" aria-hidden="true">{item.avatar}</div>
                                    <div>
                                        <cite className="testimonial-name">{item.name}</cite>
                                        <div className="testimonial-role">{item.role}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="process-section" aria-labelledby="process-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">How It Works</span>
                        <h2 id="process-heading">From Audit to <span className="accent-text">Revenue</span> in 4 Steps</h2>
                    </header>
                    <ol className="process-grid">
                        {[
                            { num: '01', title: 'Free Audit', desc: 'Submit your website above and get a comprehensive GTM health check report within minutes.' },
                            { num: '02', title: 'Strategy Call', desc: 'We review your audit together and create a customized 90-day inbound roadmap.' },
                            { num: '03', title: 'Execution Sprint', desc: 'Our team executes while you focus on your product. Weekly syncs keep you in the loop.' },
                            { num: '04', title: 'Results & Handoff', desc: 'We deliver a fully operational inbound engine with documentation and training.' },
                        ].map((item) => (
                            <li key={item.num} className="process-step">
                                <div className="process-num" aria-hidden="true">{item.num}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={homeFaqs} />

            {/* ─── FINAL CTA ─── */}
            <section className="final-cta" aria-labelledby="cta-heading">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 id="cta-heading">Ready to Stop Guessing and Start Growing?</h2>
                            <p>Join 40+ SaaS companies that transformed their inbound with our 90-day GTM engine.</p>
                            <div className="cta-checks" role="list">
                                <span role="listitem"><CheckCircle2 size={18} aria-hidden="true" /> Free comprehensive audit</span>
                                <span role="listitem"><CheckCircle2 size={18} aria-hidden="true" /> No long-term contracts</span>
                                <span role="listitem"><CheckCircle2 size={18} aria-hidden="true" /> Results in 90 days</span>
                            </div>
                            <a href="#audit-form" className="btn-primary cta-btn">Get Your Free Audit Now <ArrowRight size={18} aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
