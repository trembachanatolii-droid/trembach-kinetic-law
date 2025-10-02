import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import ConsultationForm from '@/components/ConsultationForm';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us - Trembach Law Firm | California Injury Attorney"
        description="Learn about Anatolii Trembach, Esq., former insurance defense attorney now fighting for California injury victims. USC Law graduate with insider knowledge of insurance tactics."
        canonical="/about"
      />
      <Navigation />
      <About />
      <ConsultationForm />
    </>
  );
};

export default AboutPage;
