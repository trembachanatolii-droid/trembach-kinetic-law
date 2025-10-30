import { ArrowLeft, BookOpen, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import guidanceHeroImage from "@/assets/camp-lejeune-guidance-hero.jpg";

export default function CampLejeuneGuidance() {
  const [showGoBack, setShowGoBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoBack = () => {
    const savedScrollPosition = sessionStorage.getItem('campLejeuneScrollPosition');
    window.history.back();
    
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('campLejeuneScrollPosition');
      }, 100);
    }
  };

  return (
    <>
      <Helmet>
        <title>Camp Lejeune Legal Guidance | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Complete legal guidance for Camp Lejeune water contamination claims. Understand your rights, legal options, and the claims process step-by-step." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Go Back Button */}
        {showGoBack && (
          <Button
            onClick={handleGoBack}
            variant="outline"
            size="sm"
            className={`fixed top-20 left-4 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground text-primary ${
              showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        )}

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${guidanceHeroImage})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Camp Lejeune Legal Guidance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Understanding your legal rights and options for Camp Lejeune water contamination claims
              </p>
            </div>
          </div>
        </section>

        {/* Legal Guidance Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Understanding Your Rights */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <Scale className="w-6 h-6 mr-3 text-primary" />
                    Understanding Your Legal Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Who Can File a Claim</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Veterans who served at Camp Lejeune (1953-1987)</li>
                      <li>• Family members who lived on base during contamination period</li>
                      <li>• Civilian workers employed at Camp Lejeune</li>
                      <li>• Children exposed in utero during contamination period</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Qualifying Health Conditions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Presumptive Conditions (VA Recognized)</h4>
                        <ul className="space-y-1 text-base">
                          <li>• Adult Leukemia</li>
                          <li>• Aplastic Anemia</li>
                          <li>• Bladder Cancer</li>
                          <li>• Kidney Cancer</li>
                          <li>• Liver Cancer</li>
                          <li>• Multiple Myeloma</li>
                          <li>• Non-Hodgkin's Lymphoma</li>
                          <li>• Parkinson's Disease</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Other Qualifying Conditions</h4>
                        <ul className="space-y-1 text-base">
                          <li>• Birth Defects</li>
                          <li>• Breast Cancer</li>
                          <li>• Cervical Cancer</li>
                          <li>• Colorectal Cancer</li>
                          <li>• Lung Cancer</li>
                          <li>• Prostate Cancer</li>
                          <li>• Infertility Issues</li>
                          <li>• And 60+ other conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* The Legal Process */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <BookOpen className="w-6 h-6 mr-3 text-primary" />
                    The Legal Process Explained
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Step-by-Step Claims Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/20 rounded-full p-2 mt-1">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-base">Initial Consultation & Case Review</h4>
                          <p className="text-muted-foreground">Free evaluation of your case, review of medical records and service history</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/20 rounded-full p-2 mt-1">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-base">Administrative Claim Filing</h4>
                          <p className="text-muted-foreground">Submit claim to Navy JAG office within statutory deadlines</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/20 rounded-full p-2 mt-1">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-base">Evidence Gathering & Documentation</h4>
                          <p className="text-muted-foreground">Collect medical records, service records, and expert medical opinions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/20 rounded-full p-2 mt-1">
                          <span className="text-sm font-bold text-primary">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-base">Federal Court Filing</h4>
                          <p className="text-muted-foreground">If administrative claim denied, file federal lawsuit in Eastern District of North Carolina</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/20 rounded-full p-2 mt-1">
                          <span className="text-sm font-bold text-primary">5</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-base">Settlement Negotiations or Trial</h4>
                          <p className="text-muted-foreground">Pursue maximum compensation through settlement or trial proceedings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Do and Avoid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-card border-green-500/20 bg-green-50/50 dark:bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700 dark:text-green-400 text-xl">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      What You Should Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Gather all military service records from Camp Lejeune</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Collect complete medical records and diagnoses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Document all symptoms and treatment history</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Contact an experienced Camp Lejeune attorney</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>File your claim before the deadline expires</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Keep detailed records of all medical expenses</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/20 bg-red-50/50 dark:bg-red-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700 dark:text-red-400 text-xl">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      What You Should Avoid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't wait until the filing deadline approaches</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't attempt to file without legal representation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't accept early settlement offers without review</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't provide recorded statements without attorney</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't sign any documents without legal review</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Don't assume you don't qualify if not on presumptive list</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Compensation Information */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <Scale className="w-6 h-6 mr-3 text-primary" />
                    Understanding Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Types of Damages Available</h3>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Medical Expenses:</strong> Past, current, and future treatment costs</li>
                      <li>• <strong>Pain and Suffering:</strong> Physical and emotional distress compensation</li>
                      <li>• <strong>Lost Wages:</strong> Income lost due to illness or disability</li>
                      <li>• <strong>Loss of Earning Capacity:</strong> Reduced ability to earn future income</li>
                      <li>• <strong>Wrongful Death:</strong> Compensation for surviving family members</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Settlement Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Elective Option (Fast Track)</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Faster resolution (60-180 days)</li>
                          <li>• Fixed settlement amounts</li>
                          <li>• No causation proof required</li>
                          <li>• Range: $75,000-$150,000</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Traditional Litigation</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Longer process (1-3 years)</li>
                          <li>• Unlimited compensation potential</li>
                          <li>• Requires proof of causation</li>
                          <li>• Range: $200,000-$1.5M+</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-primary">
                    Ready to Pursue Your Camp Lejeune Claim?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Don't let the filing deadline pass. Get experienced legal guidance for your Camp Lejeune claim today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/camp-lejeune-evaluation">
                      <Button size="lg" className="w-full sm:w-auto">
                        Free Case Evaluation
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:8181234567" className="text-primary hover:text-primary-foreground">
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}