import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import ConsultationForm from '@/components/ConsultationForm';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Anatolii Trembach, Esq. - Former Insurance Defense Attorney | Your Unfair Advantage"
        description="Former insurance defense attorney Anatolii Trembach now fights for California injury victims. USC Law graduate with insider knowledge of insurance tactics. $50M+ recovered. Free consultation - No fees unless we win."
        keywords="Anatolii Trembach attorney, former insurance defense attorney California, personal injury lawyer insider advantage, USC Law graduate attorney, insurance defense tactics, trial attorney Los Angeles, catastrophic injury lawyer, wrongful death attorney California"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Anatolii Trembach",
          "honorificSuffix": "Esq.",
          "jobTitle": "Founding Attorney & Former Insurance Defense Attorney",
          "image": "https://www.trembachlawfirm.com/profile.jpg",
          "worksFor": {
            "@type": "LegalService",
            "name": "Trembach Law Firm",
            "url": "https://www.trembachlawfirm.com",
            "telephone": "+18181234567",
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "priceRange": "No fees unless we win",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "USC Gould School of Law"
          },
          "description": "Former insurance defense attorney now exclusively representing personal injury victims in California. Extensive experience defending major insurance companies and Fortune 500 corporations provides unique insider advantage for clients.",
          "knowsAbout": [
            "Personal Injury Law",
            "Insurance Defense Tactics",
            "Trial Advocacy",
            "Catastrophic Injury",
            "Wrongful Death",
            "Occupational Disease",
            "Silicosis Litigation",
            "Mesothelioma Cases",
            "Uber and Lyft Accidents"
          ],
          "award": "California State Bar Member in Good Standing",
          "memberOf": {
            "@type": "Organization",
            "name": "California State Bar",
            "identifier": "349304"
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Law Degree",
              "educationalLevel": "Graduate",
              "recognizedBy": {
                "@type": "EducationalOrganization",
                "name": "USC Gould School of Law"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Bar Admission",
              "recognizedBy": {
                "@type": "Organization",
                "name": "California State Bar"
              }
            }
          ],
          "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Legal Consultation",
              "description": "Comprehensive case evaluation with no obligation"
            },
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <Navigation />
      <About />
      <ConsultationForm />
    </>
  );
};

export default AboutPage;
