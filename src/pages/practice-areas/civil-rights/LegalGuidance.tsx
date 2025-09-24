import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Scale, Shield, BookOpen, FileText, Gavel } from 'lucide-react';
import SEO from '@/components/SEO';
import heroImage from '@/assets/civil-rights-legal-guidance-hero.jpg';

const LegalGuidance: React.FC = () => {
  const [showGoBack, setShowGoBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goBack = () => {
    const scrollPos = localStorage.getItem('scrollPosition');
    window.history.back();
    if (scrollPos) {
      setTimeout(() => window.scrollTo(0, parseInt(scrollPos)), 100);
    }
  };

  return (
    <>
      <SEO 
        title="Civil Rights Legal Guidance | Know Your Rights | Trembach Law Firm"
        description="Comprehensive legal guidance for civil rights cases in California. Learn your rights, legal options, and what to expect from the process."
        keywords="civil rights legal guidance, know your rights, California civil rights law, police brutality rights"
      />
      
      <div className="min-h-screen bg-background">
        <button 
          onClick={goBack}
          className={`fixed top-24 left-6 z-50 flex items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition-all duration-300 ${
            showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </button>

        {/* Hero Section */}
        <section 
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Civil Rights Legal Guidance
            </h1>
            <p className="text-xl mb-6 text-white">
              Understanding your rights and legal options under California law
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-red-600" />
                  Your Constitutional Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about your fundamental rights under the U.S. Constitution and California law, including protection from unlawful search and seizure, excessive force, and discrimination.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-red-600" />
                  Legal Process Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand what to expect from filing a civil rights claim, including investigation, discovery, negotiation, and potential trial proceedings.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-red-600" />
                  Evidence Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn what types of evidence strengthen your case, including documentation, witness statements, medical records, and physical evidence.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-red-600" />
                  Know Your Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore different legal avenues including federal civil rights claims, state law claims, administrative complaints, and criminal referrals.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Specific Legal Advice?</h2>
            <p className="text-gray-600 mb-6">Every civil rights case is unique. Get personalized guidance for your situation.</p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              onClick={() => window.location.href = '/practice-areas/civil-rights/case-evaluation'}
            >
              Get Free Legal Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalGuidance;