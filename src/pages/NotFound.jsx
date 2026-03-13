import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import '../pages/Home.css';

const NotFound = () => {
    return (
        <div className="home-page fade-in-up" id="main-content">
            <SEO
                title="Page Not Found | SaaS GTM Agency"
                description="The page you are looking for does not exist. Back to home to get your free GTM audit."
                url="/404"
            />
            <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="hero-text" style={{ margin: '0 auto', maxWidth: '600px' }}>
                        <div style={{ marginBottom: '32px', display: 'inline-flex', padding: '24px', background: 'var(--color-accent-light)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                            <Ghost size={64} />
                        </div>
                        <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>404</h1>
                        <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Lost in Space?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                            The page you're looking for was either moved, deleted, or never existed in the first place.
                        </p>
                        <div className="hero-btns" style={{ justifyContent: 'center' }}>
                            <Link to="/" className="btn-primary">
                                <Home size={18} /> Back to Home
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Contact Support <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
