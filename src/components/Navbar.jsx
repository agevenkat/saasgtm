import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'The 90-Day Plan', path: '/plan' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
                <div className="container nav-content">
                    <Link to="/" className="logo" aria-label="SaaS GTM — Home">
                        <Rocket className="logo-icon" aria-hidden="true" />
                        <span>SaaS<span className="accent-text">GTM</span></span>
                    </Link>

                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                aria-current={location.pathname === link.path ? 'page' : undefined}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/#audit-form" className="nav-cta">Free Audit</Link>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className={`mobile-nav ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
                    <button className="mobile-toggle" onClick={() => setIsOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: 20, right: 24 }}>
                        <X />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/#audit-form" className="btn-primary" onClick={() => setIsOpen(false)}>
                        Free Audit
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
