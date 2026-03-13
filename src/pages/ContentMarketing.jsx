import React from 'react';
import { BookOpen, PenTool, CheckCircle2, Megaphone, Users } from 'lucide-react';
import AuditForm from '../components/AuditForm';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import '../pages/Home.css';

const contentFaqs = [
    {
        question: "Do you only do content marketing, or SEO too?",
        answer: "Content marketing and SEO are inseparable in SaaS. Our content marketing strategy is completely built upon high-intent SEO keyword research. We write for humans, but optimize for search engines."
    },
    {
        question: "How is your content marketing different?",
        answer: "Unlike general content agencies that write superficial blog posts, we conduct SME (Subject Matter Expert) interviews with your internal team. This ensures every piece of content has native industry expertise, unique insights, and actionable advice that actual buyers care about."
    },
    {
        question: "Do you produce more than just blog posts?",
        answer: "Absolutely. Our B2B SaaS content marketing covers pillar posts, eBooks, whitepapers, comparison ('vs') pages, integration use cases, webinars scripts, and LinkedIn thought leadership for your founders."
    }
];

const ContentMarketing = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="B2B SaaS Content Marketing Agency | Revenue Driven Strategy"
                description="Expert-led B2B SaaS content marketing that converts. We build full-funnel content engines designed to educate buyers and drive product demo requests."
                url="/b2b-content-marketing"
                faqs={contentFaqs}
            />
            {/* ─── HERO ─── */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="container hero-grid">
                    <header className="hero-text">
                        <span className="section-label"><PenTool size={14} /> SaaS Content Marketing Strategy</span>
                        <h1 id="hero-heading">The <span className="accent-text">B2B SaaS Content Marketing Agency</span> That Drives Revenue</h1>
                        <p>We build full-funnel content engines that educate buyers, answer search intent, and ultimately convert readers into paying SaaS subscribers.</p>
                        <div className="hero-stats-row" role="group">
                            <div className="hero-stat"><strong>SME</strong><span>Expert-Driven Copy</span></div>
                            <div className="hero-stat"><strong>Full</strong><span>Funnel Content</span></div>
                            <div className="hero-stat"><strong>ROI</strong><span>Focused Measurement</span></div>
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
                        <h2 className="accent-text">Stop Writing Content For Content's Sake</h2>
                        <p>Writing 1,000-word articles about generic topics your SaaS industry touches doesn't generate pipeline. We focus your content marketing efforts on what truly moves the needle: high-intent product led growth (PLG) content strategies.</p>
                    </header>

                    <div className="problems-grid">
                        <div className="problem-card card">
                            <BookOpen className="problem-icon" />
                            <h3>Authoritative Pillar Content</h3>
                            <p>We write comprehensive, engaging long-form content that positions your software as the definitive authority in the space.</p>
                        </div>
                        <div className="problem-card card">
                            <Users className="problem-icon" />
                            <h3>ICP Aligned Messaging</h3>
                            <p>Every case study, blog, and whitepaper is mapped exactly to the pain points and friction areas of your ideal customer profile.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQ faqs={contentFaqs} title="Content Marketing FAQs" />

            {/* ─── CTA ─── */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Start Publishing Content That Converts</h2>
                        <p>Get a free content SEO audit of your SaaS website today.</p>
                        <a href="#audit-form" className="btn-primary cta-btn">Get Your Free Content Audit</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentMarketing;
