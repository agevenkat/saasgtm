import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteMetadata = {
    title: 'SaaS GTM Agency — 90-Day Go-to-Market Plan for Inbound Growth',
    titleTemplate: '%s | SaaS GTM',
    description: 'The definitive 90-day go-to-market engine for high-growth SaaS businesses. We turn your product into a lead-generating machine.',
    siteUrl: 'https://saasgtm.agency', // Demo URL for structured data
};

const SEO = ({ title, description, url, type = 'website', schema }) => {
    const seoTitle = title ? title : siteMetadata.title;
    const seoDescription = description || siteMetadata.description;
    const canonical = url ? `${siteMetadata.siteUrl}${url}` : siteMetadata.siteUrl;

    const defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SaaS GTM Agency',
        url: siteMetadata.siteUrl,
        logo: `${siteMetadata.siteUrl}/logo.png`,
        description: siteMetadata.description,
    };

    const finalSchema = schema || defaultSchema;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seoTitle}</title>
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />

            {/* JSON-LD Structured Data Schema */}
            <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
        </Helmet>
    );
};

export default SEO;
