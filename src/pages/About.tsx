import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import EvaluationForm from '@/components/EvaluationForm';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Anatolii Trembach, Esq. - Former Insurance Defense Attorney | Trembach Law Firm"
        description="Former insurance defense attorney Anatolii Trembach now fights for California injury victims. USC Gould School of Law graduate with insider knowledge of insurance company tactics. Free consultation, no fees unless we win. Call 24/7: (213) 908-9708."
        keywords="Anatolii Trembach attorney, former insurance defense attorney, California personal injury lawyer, USC Law graduate, insurance defense tactics, trial attorney California, personal injury attorney Los Angeles, no fees unless we win, 24/7 attorney, catastrophic injury lawyer, wrongful death attorney"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Anatolii Trembach",
          "honorificSuffix": "Esq.",
          "jobTitle": "Founding Attorney",
          "image": "https://www.trembachlawfirm.com/profile.jpg",
          "telephone": "+1-213-908-9708",
          "email": "info@trembachlaw.com",
          "url": "https://www.trembachlawfirm.com/about",
          "worksFor": {
            "@type": "LegalService",
            "name": "Trembach Law Firm, APC",
            "url": "https://www.trembachlawfirm.com",
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "priceRange": "No fees unless we win",
            "openingHours": "Mo-Su 00:00-23:59",
            "availableLanguage": ["English", "Russian"]
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "USC Gould School of Law",
            "url": "https://gould.usc.edu"
          },
          "memberOf": {
            "@type": "Organization",
            "name": "California State Bar",
            "identifier": "349304"
          },
          "description": "Former insurance defense attorney with extensive experience defending Fortune 500 companies and major insurance corporations. Now exclusively represents personal injury victims in California, using insider knowledge of defense tactics to maximize client compensation.",
          "knowsAbout": [
            "Personal Injury Law",
            "Insurance Defense Tactics",
            "Trial Advocacy",
            "Catastrophic Injury",
            "Wrongful Death Claims",
            "Occupational Disease",
            "Silicosis",
            "Mesothelioma",
            "Asbestos Litigation",
            "Complex Litigation"
          ],
          "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Legal Consultation",
              "description": "No-cost initial consultation for personal injury cases"
            },
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <Navigation />
      <About />
      <EvaluationForm />
    </>
  );
};

export default AboutPage;
