import React from 'react';
import { Search, PenTool, TrendingUp, CheckCircle2, ArrowRight, Target, BarChart3, Globe, Layers, Megaphone, BookOpen, Shield, LineChart, Users, Clock, FileText, Zap, Cpu, Mail as MailIcon, Share2, Database, Settings } from 'lucide-react';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import './Plan.css';

const planFaqs = [
    {
        question: "Do you offer month-to-month retainers?",
        answer: "No. We found that open-ended retainers lead to stalled momentum. We strictly operate in intense 90-day sprints. This forces alignment, sets strict deadlines, and ensures you get a fully operational inbound engine without paying us forever."
    },
    {
        question: "What happens after the 90 days?",
        answer: "You have two choices. Most partners train their internal marketing teams using the complete playbook and documentation we hand over. Alternatively, if you want us to continue scaling the engine and running paid campaigns, we offer a 'Scale' partnership for select graduates of the 90-day program."
    },
    {
        question: "Do you guarantee results?",
        answer: "While it's impossible (and unethical) to guarantee specific revenue numbers or Google positions, we guarantee deliverables, timelines, and our strategic methodology. Our track record of boosting traffic by 250% on average speaks for itself."
    },
    {
        question: "How much of my team's time is required?",
        answer: "We need 2 hours from your leadership team during Week 1 for the ICP workshop. After that, we need just 30 minutes a week for our strategy sync. We handle 95% of the execution."
    }
];

const Plan = () => {
    const months = [
        {
            id: '01',
            title: 'Foundation & Deep Audit',
            subtitle: 'Weeks 1–4 · The Strategy Phase',
            icon: <Search size={28} />,
            color: 'var(--color-accent)',
            description: 'Before we create a single piece of content or touch a line of code, we do the work that 90% of agencies skip — a comprehensive audit of your technical infrastructure, competitive landscape, and buyer personas.',
            deliverables: [
                { icon: <Globe size={18} />, title: 'Technical SEO Audit', desc: 'Complete crawl of 100+ ranking factors including Core Web Vitals, schema markup, internal linking structure, and indexation health.' },
                { icon: <BarChart3 size={18} />, title: 'Competitor Deep Dive', desc: 'We analyze your top 5 competitors: their content strategy, backlink profile, paid spend, keyword overlap, and positioning gaps.' },
                { icon: <Target size={18} />, title: 'ICP Mapping Workshop', desc: 'Collaborative workshop to define your Ideal Customer Profile, buying triggers, decision-making units, and objection patterns.' },
                { icon: <Search size={18} />, title: 'Keyword Universe', desc: '500+ keyword opportunities organized by intent (TOFU/MOFU/BOFU), search volume, KD score, and revenue potential.' },
                { icon: <Layers size={18} />, title: 'CRO Roadmap', desc: 'Heatmap analysis, session recordings, and funnel audit to identify 15+ conversion improvement opportunities.' },
                { icon: <FileText size={18} />, title: 'Content Audit', desc: 'Audit of all existing content to identify refresh opportunities, consolidation targets, and content gaps.' },
            ],
            outcomes: [
                '360° understanding of your GTM landscape',
                'Prioritized action items ranked by impact vs effort',
                'Custom keyword strategy with 50+ target terms',
                'Technical SEO fixes deployed for quick wins',
            ]
        },
        {
            id: '02',
            title: 'Content Engine & Funnels',
            subtitle: 'Weeks 5–8 · The Building Phase',
            icon: <PenTool size={28} />,
            color: 'var(--color-charcoal)',
            description: 'With strategy locked, we deploy the content engine. Every piece of content is mapped to a specific ICP pain point, keyword cluster, and funnel stage — nothing is written by accident.',
            deliverables: [
                { icon: <PenTool size={18} />, title: '10+ Pillar Content Pieces', desc: 'Long-form, SEO-optimized articles targeting high-intent keywords: "best X for Y", "X vs Y", "how to solve Z problem".' },
                { icon: <Megaphone size={18} />, title: 'LinkedIn Content Machine', desc: 'Daily founder/exec ghostwriting, engagement strategy, comment army setup, and connection campaign for decision-makers.' },
                { icon: <BookOpen size={18} />, title: 'Lead Magnet Suite', desc: '3 lead magnets designed for each funnel stage: ROI calculator (BOFU), industry report (MOFU), checklist (TOFU).' },
                { icon: <Layers size={18} />, title: 'Landing Page Redesign', desc: 'Conversion-focused landing pages with social proof, benefit-driven copy, trust badges, and clear CTAs.' },
                { icon: <FileText size={18} />, title: 'Sales Enablement Content', desc: 'Case studies, one-pagers, battle cards, and email templates for your sales team to close faster.' },
                { icon: <Share2 size={18} />, title: 'Content Distribution', desc: 'Syndication across relevant communities: Hacker News, Product Hunt, industry Slacks, and Reddit.' },
            ],
            outcomes: [
                '40+ pieces of strategic content published',
                '3 fully designed lead magnets live',
                'LinkedIn generating 10+ inbound conversations/week',
                'Landing pages converting at 8%+ (industry avg: 2.5%)',
            ]
        },
        {
            id: '03',
            title: 'Scaling & Optimization',
            subtitle: 'Weeks 9–12 · The Growth Phase',
            icon: <TrendingUp size={28} />,
            color: 'var(--color-success)',
            description: 'We amplify what\'s working, double down on winning channels, and set up the automation layer so your inbound engine runs without constant manual effort.',
            deliverables: [
                { icon: <LineChart size={18} />, title: 'Paid Search Campaigns', desc: 'Google Ads campaigns for high-intent keywords, competitor conquesting, and retargeting audiences.' },
                { icon: <Megaphone size={18} />, title: 'LinkedIn Ads', desc: 'Sponsored content, InMail sequences, and lead gen form campaigns targeting your exact ICP job titles.' },
                { icon: <MailIcon size={18} />, title: 'Email Nurture Automation', desc: '5-sequence email drip campaigns for each lead magnet, with personalization tokens and behavioral triggers.' },
                { icon: <Shield size={18} />, title: 'Backlink Building', desc: 'Digital PR, guest posting on authority sites, HARO outreach, and partner co-marketing for domain authority.' },
                { icon: <Database size={18} />, title: 'Analytics & Attribution', desc: 'Custom Looker Studio dashboard with multi-touch attribution, pipeline tracking, and ROI calculations.' },
                { icon: <Settings size={18} />, title: 'CRM Integration', desc: 'HubSpot/Salesforce integration with lead scoring rules, workflow automations, and handoff triggers.' },
            ],
            outcomes: [
                'Paid channels generating positive ROAS within 2 weeks',
                '250%+ increase in qualified inbound leads',
                'Full attribution model from first touch to revenue',
                'Documented playbook for ongoing team execution',
            ]
        }
    ];

    const weeklyCalendar = [
        { week: 'Week 1–2', tasks: ['Technical SEO audit', 'Competitor research', 'ICP workshop', 'Keyword research kickoff'] },
        { week: 'Week 3–4', tasks: ['Content audit', 'CRO analysis', 'Quick-win SEO fixes', 'Keyword strategy finalization'] },
        { week: 'Week 5–6', tasks: ['Pillar content creation', 'LinkedIn setup', 'Lead magnet design', 'Landing page wireframes'] },
        { week: 'Week 7–8', tasks: ['Content publishing sprint', 'Landing page deployment', 'Sales enablement assets', 'Email sequence design'] },
        { week: 'Week 9–10', tasks: ['Paid ads launch', 'Email automation', 'Backlink outreach', 'Analytics dashboard build'] },
        { week: 'Week 11–12', tasks: ['Performance optimization', 'CRM integration', 'Team training', 'Scale strategy handoff'] },
    ];

    return (
        <div className="plan-page fade-in-up" id="main-content">
            <SEO
                title="The 90-Day GTM Plan | SaaS Growth Framework"
                description="We rebuild your technical SEO, rewrite high-converting ICP messaging, and establish a compounding inbound growth engine in exactly 12 weeks."
                url="/plan"
            />

            {/* Hero */}
            <section className="plan-hero" aria-labelledby="plan-hero-heading">
                <div className="container">
                    <span className="section-label">The 90-Day Roadmap</span>
                    <h1 id="plan-hero-heading">A Week-by-Week Path to <span className="accent-text">Inbound Dominance</span></h1>
                    <p>Every week has a purpose. Every deliverable ties to revenue. This isn't a retainer — it's a transformation sprint.</p>
                    <div className="plan-hero-stats" role="group" aria-label="Engagement overview">
                        <div className="plan-stat"><Clock size={18} aria-hidden="true" /><span>12 Weeks</span></div>
                        <div className="plan-stat"><FileText size={18} aria-hidden="true" /><span>65+ Deliverables</span></div>
                        <div className="plan-stat"><Users size={18} aria-hidden="true" /><span>Dedicated Team</span></div>
                        <div className="plan-stat"><Zap size={18} aria-hidden="true" /><span>Weekly Syncs</span></div>
                    </div>
                </div>
            </section>

            {/* Sprint Calendar */}
            <section className="sprint-calendar" aria-labelledby="sprint-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">Sprint Calendar</span>
                        <h2 id="sprint-heading">Your 12-Week <span className="accent-text">Execution Timeline</span></h2>
                    </header>
                    <div className="calendar-grid" role="list">
                        {weeklyCalendar.map((week) => (
                            <article key={week.week} className="calendar-card card" role="listitem">
                                <h3>{week.week}</h3>
                                <ul>
                                    {week.tasks.map((task, i) => (
                                        <li key={i}><CheckCircle2 size={14} aria-hidden="true" /> {task}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Month Breakdowns */}
            {months.map((month) => (
                <section key={month.id} className={`month-section ${month.id === '02' ? 'bg-alt' : ''}`} aria-labelledby={`month-${month.id}-heading`}>
                    <div className="container">
                        <div className="month-intro">
                            <div className="month-icon-badge" style={{ background: month.color }} aria-hidden="true">
                                {month.icon}
                            </div>
                            <div className="month-meta">
                                <span className="month-label" style={{ color: month.color }}>Month {month.id}</span>
                                <h2 id={`month-${month.id}-heading`}>{month.title}</h2>
                                <p className="month-subtitle">{month.subtitle}</p>
                            </div>
                        </div>
                        <p className="month-desc">{month.description}</p>

                        <h3 className="deliv-heading">Deliverables</h3>
                        <div className="deliverables-grid" role="list">
                            {month.deliverables.map((d) => (
                                <article key={d.title} className="deliverable-card card" role="listitem">
                                    <div className="deliv-icon" style={{ color: month.color }} aria-hidden="true">{d.icon}</div>
                                    <div>
                                        <h4>{d.title}</h4>
                                        <p>{d.desc}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="outcomes-box" style={{ borderColor: month.color }}>
                            <h3>Expected Outcomes</h3>
                            <div className="outcomes-list" role="list">
                                {month.outcomes.map((o, i) => (
                                    <div key={i} className="outcome-item" role="listitem">
                                        <CheckCircle2 size={18} style={{ color: month.color }} aria-hidden="true" />
                                        <span>{o}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* What's Included */}
            <section className="whats-included" aria-labelledby="included-heading">
                <div className="container">
                    <header className="section-header">
                        <span className="section-label">Beyond The Basics</span>
                        <h2 id="included-heading">What's Included With <span className="accent-text">Every Engagement</span></h2>
                    </header>
                    <div className="included-grid" role="list">
                        {[
                            { icon: <Users size={24} />, title: 'Dedicated Team', desc: 'A senior strategist, content writer, SEO specialist, and designer assigned to your account.' },
                            { icon: <Clock size={24} />, title: 'Weekly Strategy Calls', desc: '30-minute weekly syncs with screen-sharing to review progress and adjust priorities.' },
                            { icon: <BarChart3 size={24} />, title: 'Monthly ROI Reports', desc: 'Detailed reports showing traffic, rankings, leads, and pipeline attributed to our work.' },
                            { icon: <Cpu size={24} />, title: 'Tech Stack Guidance', desc: 'Recommendations on CMS, CRM, analytics, and marketing automation tools.' },
                            { icon: <Shield size={24} />, title: 'SOC 2 Compliant', desc: 'All data handled with enterprise-grade security. NDAs and DPAs available.' },
                            { icon: <FileText size={24} />, title: 'Full Documentation', desc: 'Complete playbook, brand guidelines, and SOPs handed over at project end.' },
                        ].map((item) => (
                            <article key={item.title} className="included-card card" role="listitem">
                                <div className="included-icon" aria-hidden="true">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={planFaqs} title="Plan FAQs" />

            {/* CTA */}
            <section className="plan-cta" aria-labelledby="plan-cta-heading">
                <div className="container">
                    <div className="plan-cta-card">
                        <h2 id="plan-cta-heading">Ready to Start Your 90-Day Sprint?</h2>
                        <p>Our intake is limited to 3 new partners per month to ensure quality execution.</p>
                        <div className="plan-cta-btns">
                            <a href="/contact" className="btn-primary">Book a Strategy Call <ArrowRight size={18} aria-hidden="true" /></a>
                            <a href="/#audit-form" className="btn-secondary inv">Get Free Audit First</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Plan;
