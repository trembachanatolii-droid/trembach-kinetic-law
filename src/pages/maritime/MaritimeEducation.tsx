import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Star, 
  BookOpen,
  Shield,
  FileText,
  Building
} from 'lucide-react';
import SEO from '@/components/SEO';

import heroBackground from '@/assets/maritime-education-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MaritimeEducation: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Maritime Safety Education | California Maritime Law Resources"
        description="Educational resources for California maritime safety, accident prevention, and legal rights. Expert guidance for maritime workers and passengers."
        keywords="maritime safety education, maritime law resources, California maritime training"
        canonical="/maritime/education"
      />
      
      
      
      <div className="min-h-screen bg-background">
        <section 
          ref={heroRef}
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Maritime Safety Education
                </h1>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Expert Maritime Resources</span>
              </div>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Comprehensive educational resources for maritime safety and legal rights in California
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2" ref={contentRef}>
              
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Safety Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Safety Training Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Comprehensive safety training for maritime workers including STCW certification, safety procedures, and emergency response protocols.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Legal Rights Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Understanding your rights under the Jones Act, LHWCA, and other maritime laws. Know your protections as a maritime worker.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Accident Prevention Guidelines</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Maritime accidents are often preventable through proper safety procedures, equipment maintenance, 
                    and worker training. Understanding common hazards and prevention strategies can save lives and prevent injuries.
                  </p>
                  
                  <h3>Common Maritime Hazards</h3>
                  <ul>
                    <li>Wet and slippery deck surfaces</li>
                    <li>Heavy machinery and equipment operation</li>
                    <li>Extreme weather conditions</li>
                    <li>Chemical and fuel exposure</li>
                    <li>Falls from height and confined spaces</li>
                  </ul>
                  
                  <h3>Safety Best Practices</h3>
                  <ul>
                    <li>Always wear appropriate personal protective equipment</li>
                    <li>Follow lockout/tagout procedures for machinery</li>
                    <li>Maintain three points of contact when climbing</li>
                    <li>Use proper lifting techniques for heavy objects</li>
                    <li>Report unsafe conditions immediately</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">Get Legal Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-red-700 text-sm">
                      If you've been injured in a maritime accident, get expert legal guidance to understand your rights and options.
                    </p>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-700 hover:bg-red-100"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      Free Case Evaluation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Maritime Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.location.href = '/maritime/legal-guidance'}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Legal Guidance
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.location.href = '/maritime/medical-guidance'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.location.href = '/maritime/compensation-calculator'}
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaritimeEducation;