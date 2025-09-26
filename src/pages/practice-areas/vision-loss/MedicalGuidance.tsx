import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Star, Stethoscope, Eye, Heart, AlertTriangle } from 'lucide-react';

import SEO from '@/components/SEO';
import heroImage from '@/assets/vision-loss-medical-guidance-hero.jpg';

const VisionLossMedicalGuidance: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('vision-loss-page');
    return () => document.body.classList.remove('vision-loss-page');
  }, []);

  return (
    <div className="min-h-screen bg-background vision-loss-page">
      <SEO 
        title="Vision Loss Medical Guidance | Eye Injury Treatment Resources"
        description="Comprehensive medical guidance for vision loss and eye injury treatment. Find specialists, understand treatment options, and get expert medical advice for eye injuries."
        keywords="vision loss medical guidance, eye injury treatment, ophthalmologist, vision rehabilitation, eye injury recovery"
        canonical="/practice-areas/vision-loss/medical-guidance"
      />

      

      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              Vision Loss Medical Guidance
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Expert Medical Resources</span>
            </div>
            <p className="text-xl mb-6 text-white text-center">
              Comprehensive medical resources for vision loss treatment and recovery
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg mb-8">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <Stethoscope className="w-6 h-6 mr-2" />
                  Emergency Eye Care Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-800">Seek Immediate Medical Attention If:</h3>
                      <ul className="text-sm text-red-700 mt-2 space-y-1">
                        <li>• Sudden vision loss or dramatic vision changes</li>
                        <li>• Severe eye pain or headache</li>
                        <li>• Chemical in the eye</li>
                        <li>• Object penetrating the eye</li>
                        <li>• Flashing lights or sudden floaters</li>
                        <li>• Curtain or shadow across vision</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Immediate Steps:</h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-800">DO:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Call 911 for severe injuries</li>
                          <li>• Flush chemicals with clean water</li>
                          <li>• Cover both eyes to reduce movement</li>
                          <li>• Seek ophthalmologist immediately</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Avoid These Mistakes:</h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-800">DON'T:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Remove objects from the eye</li>
                          <li>• Rub or apply pressure</li>
                          <li>• Use medications without guidance</li>
                          <li>• Delay seeking professional care</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Treatment Options and Specialists
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">Retinal Specialists</h3>
                      <p className="text-sm text-blue-700">For retinal detachment, macular damage, and diabetic retinopathy</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-green-800 mb-2">Corneal Specialists</h3>
                      <p className="text-sm text-green-700">For corneal injuries, scarring, and transplants</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-purple-800 mb-2">Neuro-Ophthalmologists</h3>
                      <p className="text-sm text-purple-700">For optic nerve damage and brain-related vision loss</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-bold text-orange-800 mb-2">Oculoplastic Surgeons</h3>
                      <p className="text-sm text-orange-700">For eyelid and orbital fracture repairs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-red-600">Medical Emergency?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={() => window.location.href = 'tel:911'}>
                    <span className="text-white">Call 911 Emergency</span>
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.location.href = 'tel:8181234567'}>
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-white">Call Our Office</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionLossMedicalGuidance;