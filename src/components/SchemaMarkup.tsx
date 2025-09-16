import React from 'react';

interface SchemaMarkupProps {
  type: 'legal-service' | 'local-business' | 'faq' | 'article';
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'legal-service':
        return {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm",
          "description": "California personal injury lawyers specializing in mesothelioma, car accidents, and serious injury cases",
          "url": "https://trembach-law.com",
          "logo": "https://trembach-law.com/logo.png",
          "telephone": "+1-855-985-1234",
          "priceRange": "Free Consultation",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Legal Plaza",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90210",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0522",
            "longitude": "-118.2437"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "200",
            "bestRating": "5",
            "worstRating": "1"
          },
          "areaServed": [
            "Los Angeles, CA",
            "San Francisco, CA", 
            "San Diego, CA",
            "Sacramento, CA",
            "Fresno, CA",
            "Long Beach, CA",
            "Oakland, CA"
          ],
          "serviceType": [
            "Personal Injury Law",
            "Mesothelioma Law",
            "Car Accident Law",
            "Medical Malpractice",
            "Wrongful Death"
          ]
        };

      case 'local-business':
        return {
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Trembach Law Firm",
          "image": "https://trembach-law.com/attorney-photo.jpg",
          "address": data.address,
          "telephone": "+1-855-985-1234",
          "url": data.url,
          "priceRange": "Free Consultation",
          "paymentAccepted": "Contingency Fee",
          "currenciesAccepted": "USD",
          "openingHours": ["Mo-Su 00:00-23:59"],
          "geo": data.geo,
          "areaServed": data.areaServed
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "Trembach Law Firm"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Trembach Law Firm",
            "logo": {
              "@type": "ImageObject",
              "url": "https://trembach-law.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema())
      }}
    />
  );
};

export default SchemaMarkup;