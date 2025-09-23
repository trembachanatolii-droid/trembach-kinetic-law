import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC<{
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  structuredData?: any;
}> = ({ title, description, keywords, canonical, structuredData }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    {/* Structured Data */}
    {structuredData ? (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    ) : (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Uber & Lyft Accident Attorneys",
          "description": "California rideshare accident law firm specializing in Uber, Lyft, and rideshare injury cases",
          "url": "https://www.trembachlawfirm.com/practice-areas/uber-lyft-accidents",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        })}
      </script>
    )}
  </Helmet>
);

export default SEO;