import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import EvaluationForm from '@/components/EvaluationForm';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Anatolii Trembach, Esq. - Former Defense Attorney | Trembach Law Firm"
        description="Meet Anatolii Trembach, Esq., former insurance defense attorney for major corporations, now representing California injury victims. USC Gould School of Law graduate with insider knowledge of insurance defense tactics and strategies."
        keywords="Anatolii Trembach attorney, former insurance defense attorney, California personal injury lawyer, USC Law graduate, insurance defense experience, trial attorney California"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Anatolii Trembach",
          "honorificSuffix": "Esq.",
          "jobTitle": "Founding Attorney",
          "worksFor": {
            "@type": "LegalService",
            "name": "Trembach Law Firm",
            "url": "https://www.trembachlawfirm.com",
            "areaServed": "California",
            "priceRange": "No fees unless we win"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "USC Gould School of Law"
          },
          "description": "Former insurance defense attorney now representing personal injury victims in California. Extensive experience defending major insurance companies and Fortune 500 corporations.",
          "knowsAbout": [
            "Personal Injury Law",
            "Insurance Defense",
            "Trial Advocacy",
            "Catastrophic Injury",
            "Wrongful Death",
            "Occupational Disease"
          ]
        }}
      />
      <Navigation />
      <About />
      <EvaluationForm />
    </>
  );
};

export default AboutPage;
