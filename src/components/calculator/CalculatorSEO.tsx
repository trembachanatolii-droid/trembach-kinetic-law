import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CalculatorSEOProps {
  title: string;
  description: string;
  canonical: string;
  injuryType: string;
  estimateRange?: {
    min: number;
    max: number;
  };
}

export function CalculatorSEO({
  title,
  description,
  canonical,
  injuryType,
  estimateRange
}: CalculatorSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": {
      "@type": "Question",
      "name": `How much is my ${injuryType} case worth?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": description
      }
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trembachlawfirm.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://trembachlawfirm.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://trembachlawfirm.com${canonical}`
      }
    ]
  };

  const calculatorData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": description
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://trembachlawfirm.com${canonical}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://trembachlawfirm.com${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Trembach Law Firm" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://trembachlawfirm.com${canonical}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Trembach Law Firm" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(calculatorData)}
      </script>

      {/* Geo Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="California" />
      <meta name="geo.position" content="34.0522;-118.2437" />
      <meta name="ICBM" content="34.0522, -118.2437" />
    </Helmet>
  );
}
