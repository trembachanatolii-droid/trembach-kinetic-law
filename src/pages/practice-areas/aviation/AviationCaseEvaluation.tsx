import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Plane } from 'lucide-react';
import heroBackground from '@/assets/aviation-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const AviationCaseEvaluation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Aviation Accident Case Evaluation | California Airplane & Helicopter Crash Attorneys"
        description="Get a free professional evaluation of your aviation accident case. Experienced California attorneys specializing in airplane crashes, helicopter accidents, and aviation law."
        keywords="aviation accident lawyer, airplane crash attorney, helicopter accident case evaluation, California aviation law, free consultation"
        canonical="https://www.trembachlawfirm.com/aviation/case-evaluation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Aviation Accident Case Evaluation - Trembach Law Firm",
          "description": "Free case evaluation for aviation accidents including airplane crashes and helicopter accidents in California",
          "url": "https://www.trembachlawfirm.com/aviation/case-evaluation",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win"
        }}
      />
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Aviation Accident Case Evaluation
          </h1>
          <p className="text-xl text-white">Get expert legal assessment of your airplane or helicopter crash case</p>
        </div>
      </section>

      {/* 3 Ways to Start Your Case Section */}
      <div className="max-w-md mx-auto px-6 py-12">
        <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="text-center text-white force-white">
                <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                <h3 className="text-xl font-bold">Start Your Case</h3>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-6">
              You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
            </p>
            
            <div className="space-y-4">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a href="tel:8181234567" aria-label="Call Trembach Law Firm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full text-black border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link to="/aviation/compensation-calculator" aria-label="Open compensation calculator">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Compensation Calculator
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full text-black border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link to="/aviation/legal-guidance" aria-label="Open legal guidance">
                  <Mail className="w-4 h-4 mr-2" />
                  Legal Guidance
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AviationCaseEvaluation;