import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string; // absolute or path starting with '/'
  noIndex?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const toAbsoluteCanonical = (canonical?: string) => {
  if (!canonical) return undefined;
  if (typeof window === 'undefined') return canonical;
  if (canonical.startsWith('http')) return canonical;
  const base = window.location.origin;
  return canonical.startsWith('/') ? `${base}${canonical}` : `${base}/${canonical}`;
};

const SEO: React.FC<SEOProps> = ({ title, description, canonical, noIndex, structuredData }) => {
  const canonicalUrl = toAbsoluteCanonical(canonical);
  const jsonLd = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
