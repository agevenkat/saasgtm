import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const tiers = [
        {
            name: 'Launch Pad',
            price: '4,900',
            desc: 'Perfect for Seed-stage SaaS looking to find PMF and initial traction.',
            features: [
                'Month 1 Audit & Strategy',
                '3 Pillar Content Assets',
                'Basic SEO Optimization',
                'LinkedIn Founder Ghostwriting',
                'Organic Growth Playbook'
            ],
            cta: 'Start Small',
            popular: false
        },
        {
            name: 'Growth Engine',
            price: '8,500',
            desc: 'For scaling SaaS brands ready to dominate their category.',
            features: [
                'Full 90-Day GTM Roadmap',
                '10+ High-Intent Content Pieces',
                'Technical & On-Page SEO',
                'Paid Ads Management (Setup)',
                'Weekly Strategy Calls',
                'CRM & Lead Tracking'
            ],
            cta: 'Select Growth',
            popular: true
        },
        {
            name: 'Market Leader',
            price: '15,000',
            desc: 'Enterprise-grade GTM for Series A+ high-velocity SaaS.',
            features: [
                'Complete Inbound & Outbound Engine',
                'Unlimited Content Production',
                'Bi-Weekly PR & Outreach',
                'Comprehensive Competitor Takeover',
                'Dedicated GTM Manager',
                'Custom ROI Dashboard'
            ],
            cta: 'Contact for Enterprise',
            popular: false
        }
    ];

    return (
        <div className="pricing-page fade-in">
            <section className="pricing-hero">
                <div className="container">
                    <span className="badge">TRANSPARENT PRICING</span>
                    <h1>Invest in Your <span className="gradient-text">Future Pipeline</span></h1>
                    <p>One-time 3-month engagement. No long-term contracts. Just results.</p>
                </div>
            </section>

            <section className="pricing-grid-section">
                <div className="container pricing-grid">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`pricing-card ${tier.popular ? 'popular' : ''} glass-card`}>
                            {tier.popular && <div className="popular-badge">Most Popular</div>}
                            <h3>{tier.name}</h3>
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="amount">{tier.price}</span>
                                <span className="period">/mo</span>
                            </div>
                            <p className="tier-desc">{tier.desc}</p>
                            <ul className="tier-features">
                                {tier.features.map((feature) => (
                                    <li key={feature}><Check size={18} className="check" /> {feature}</li>
                                ))}
                            </ul>
                            <a href="/contact" className={`btn-${tier.popular ? 'primary' : 'secondary'} tier-btn`}>
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>What happens after 3 months?</h4>
                            <p>You own the engine. We can either train your team to run it, or move to a monthly maintenance retainer.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How soon will I see results?</h4>
                            <p>Foundational metrics (rankings, traffic) usually move in Month 2. Leads typically start scaling in late Month 3.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do your prices include ad spend?</h4>
                            <p>No, the prices cover our strategy and execution. Ad spend is paid directly to platforms like Google or LinkedIn.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
