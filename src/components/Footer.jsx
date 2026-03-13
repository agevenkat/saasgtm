import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Mail, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="logo" aria-label="SaaS GTM — Home">
                        <Rocket className="logo-icon" aria-hidden="true" />
                        <span>SaaS<span className="accent-text">GTM</span></span>
                    </Link>
                    <p className="footer-desc">
                        The definitive 90-day go-to-market engine for high-growth SaaS businesses. We turn your product into a lead-generating machine.
                    </p>
                    <div className="social-links" aria-label="Social media links">
                        <a href="https://twitter.com" aria-label="Follow us on Twitter" rel="noopener noreferrer" target="_blank"><Twitter size={16} aria-hidden="true" /></a>
                        <a href="https://linkedin.com" aria-label="Follow us on LinkedIn" rel="noopener noreferrer" target="_blank"><Linkedin size={16} aria-hidden="true" /></a>
                        <a href="https://youtube.com" aria-label="Subscribe on YouTube" rel="noopener noreferrer" target="_blank"><Youtube size={16} aria-hidden="true" /></a>
                        <a href="mailto:growth@saasgtm.agency" aria-label="Send us an email"><Mail size={16} aria-hidden="true" /></a>
                    </div>
                </div>

                <nav className="footer-grid" aria-label="Footer navigation">
                    <div className="footer-col">
                        <h4>Services</h4>
                        <Link to="/plan">90-Day Plan</Link>
                        <Link to="/saas-seo-agency">SaaS SEO</Link>
                        <Link to="/b2b-content-marketing">Content Marketing</Link>
                        <Link to="/saas-lead-generation">Lead Generation</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/case-studies">Case Studies</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <Link to="/blog">Blog</Link>
                        <Link to="/playbook">GTM Playbook</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </nav>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} SaaS GTM Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
