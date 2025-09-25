import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle, Scale, FileText, Clock } from 'lucide-react';
import { z } from 'zod';
import heroBackground from '@/assets/defamation-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  defamationType: z.string().min(1, "Please select defamation type"),
  platform: z.string().trim().max(200, "Platform name must be less than 200 characters"),
  statement: z.string().trim().min(10, "Please describe the false statement").max(2000, "Description must be less than 2000 characters"),
  damages: z.string().min(1, "Please select damage type"),
  timeframe: z.string().min(1, "Please select timeframe"),
  witnesses: z.string().trim().max(500, "Witness information must be less than 500 characters"),
  priorAction: z.string().min(1, "Please select if prior action was taken"),
  consent: z.boolean().refine(val => val === true, "You must consent to be contacted")
});

type FormData = z.infer<typeof formSchema>;

const DefamationCaseEvaluation: React.FC = () => {
  useScrollRestoration();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGoBack, setShowGoBack] = useState(false);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoBack = () => {
    const savedPosition = sessionStorage.getItem(`scrollPosition_/practice-areas/defamation`);
    sessionStorage.setItem('navigatingBack', 'true');
    window.history.back();
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName?.trim()) stepErrors.firstName = "First name is required";
        if (!formData.lastName?.trim()) stepErrors.lastName = "Last name is required";
        if (!formData.email?.trim()) stepErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) stepErrors.email = "Invalid email format";
        if (!formData.phone?.trim()) stepErrors.phone = "Phone number is required";
        break;
      case 2:
        if (!formData.defamationType) stepErrors.defamationType = "Please select defamation type";
        if (!formData.statement?.trim()) stepErrors.statement = "Please describe the false statement";
        else if (formData.statement.length < 10) stepErrors.statement = "Please provide more details";
        break;
      case 3:
        if (!formData.damages) stepErrors.damages = "Please select damage type";
        if (!formData.timeframe) stepErrors.timeframe = "Please select timeframe";
        break;
      case 4:
        if (!formData.priorAction) stepErrors.priorAction = "Please indicate if prior action was taken";
        if (!formData.consent) stepErrors.consent = "You must consent to be contacted";
        break;
    }
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    
    try {
      setIsSubmitting(true);
      
      // Validate entire form
      const validatedData = formSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, send to backend here
      console.log('Form submitted:', validatedData);
      
      // Redirect to thank you page or show success message
      alert('Thank you! Your case evaluation has been submitted. We will contact you within 24 hours.');
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-muted-foreground">Let's start with your basic information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={errors.firstName ? 'border-red-500' : ''}
                  maxLength={50}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={errors.lastName ? 'border-red-500' : ''}
                  maxLength={50}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
                maxLength={255}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value.replace(/[^\d-+()]/g, ''))}
                className={errors.phone ? 'border-red-500' : ''}
                maxLength={15}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Defamation Details</h2>
              <p className="text-muted-foreground">Tell us about the false statements</p>
            </div>
            
            <div>
              <Label htmlFor="defamationType">Type of Defamation *</Label>
              <Select value={formData.defamationType || ''} onValueChange={(value) => handleInputChange('defamationType', value)}>
                <SelectTrigger className={errors.defamationType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select defamation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online-libel">Online Libel</SelectItem>
                  <SelectItem value="social-media">Social Media Defamation</SelectItem>
                  <SelectItem value="business">Business Defamation</SelectItem>
                  <SelectItem value="professional">Professional Libel</SelectItem>
                  <SelectItem value="review-sites">Fake Reviews</SelectItem>
                  <SelectItem value="slander">Spoken Slander</SelectItem>
                  <SelectItem value="workplace">Workplace Defamation</SelectItem>
                  <SelectItem value="other">Other Defamation</SelectItem>
                </SelectContent>
              </Select>
              {errors.defamationType && <p className="text-red-500 text-sm mt-1">{errors.defamationType}</p>}
            </div>
            
            <div>
              <Label htmlFor="platform">Platform/Location Where Statement Appeared</Label>
              <Input
                id="platform"
                value={formData.platform || ''}
                onChange={(e) => handleInputChange('platform', e.target.value)}
                placeholder="e.g., Facebook, Yelp, workplace meeting, etc."
                maxLength={200}
              />
            </div>
            
            <div>
              <Label htmlFor="statement">Description of False Statement *</Label>
              <Textarea
                id="statement"
                value={formData.statement || ''}
                onChange={(e) => handleInputChange('statement', e.target.value)}
                placeholder="Please describe the false statement and how it has harmed your reputation..."
                className={`min-h-32 ${errors.statement ? 'border-red-500' : ''}`}
                maxLength={2000}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {(formData.statement || '').length}/2000 characters
              </p>
              {errors.statement && <p className="text-red-500 text-sm mt-1">{errors.statement}</p>}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Damages and Impact</h2>
              <p className="text-muted-foreground">Help us understand the harm caused</p>
            </div>
            
            <div>
              <Label htmlFor="damages">Type of Damages Suffered *</Label>
              <Select value={formData.damages || ''} onValueChange={(value) => handleInputChange('damages', value)}>
                <SelectTrigger className={errors.damages ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select damage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial">Financial Losses</SelectItem>
                  <SelectItem value="reputation">Reputation Damage</SelectItem>
                  <SelectItem value="employment">Employment Issues</SelectItem>
                  <SelectItem value="business">Business Impact</SelectItem>
                  <SelectItem value="emotional">Emotional Distress</SelectItem>
                  <SelectItem value="multiple">Multiple Types</SelectItem>
                  <SelectItem value="potential">Potential Future Damages</SelectItem>
                </SelectContent>
              </Select>
              {errors.damages && <p className="text-red-500 text-sm mt-1">{errors.damages}</p>}
            </div>
            
            <div>
              <Label htmlFor="timeframe">When Did the Defamation Occur? *</Label>
              <Select value={formData.timeframe || ''} onValueChange={(value) => handleInputChange('timeframe', value)}>
                <SelectTrigger className={errors.timeframe ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="within-30-days">Within 30 Days</SelectItem>
                  <SelectItem value="1-3-months">1-3 Months Ago</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months Ago</SelectItem>
                  <SelectItem value="6-12-months">6-12 Months Ago</SelectItem>
                  <SelectItem value="over-1-year">Over 1 Year Ago</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
              {errors.timeframe && <p className="text-red-500 text-sm mt-1">{errors.timeframe}</p>}
            </div>
            
            <div>
              <Label htmlFor="witnesses">Witnesses or Evidence</Label>
              <Textarea
                id="witnesses"
                value={formData.witnesses || ''}
                onChange={(e) => handleInputChange('witnesses', e.target.value)}
                placeholder="Do you have any witnesses, screenshots, or other evidence? Please describe..."
                className="min-h-24"
                maxLength={500}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {(formData.witnesses || '').length}/500 characters
              </p>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Final Details</h2>
              <p className="text-muted-foreground">Last few questions to complete your evaluation</p>
            </div>
            
            <div>
              <Label htmlFor="priorAction">Have you taken any prior action regarding this defamation? *</Label>
              <Select value={formData.priorAction || ''} onValueChange={(value) => handleInputChange('priorAction', value)}>
                <SelectTrigger className={errors.priorAction ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-action">No Prior Action</SelectItem>
                  <SelectItem value="contacted-person">Contacted the Person Directly</SelectItem>
                  <SelectItem value="contacted-platform">Contacted the Platform</SelectItem>
                  <SelectItem value="cease-desist">Sent Cease and Desist</SelectItem>
                  <SelectItem value="other-attorney">Consulted Another Attorney</SelectItem>
                  <SelectItem value="filed-complaint">Filed Complaint/Report</SelectItem>
                </SelectContent>
              </Select>
              {errors.priorAction && <p className="text-red-500 text-sm mt-1">{errors.priorAction}</p>}
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Case Review Summary</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Defamation Type:</strong> {formData.defamationType}</p>
                <p><strong>Platform:</strong> {formData.platform || 'Not specified'}</p>
                <p><strong>Timeframe:</strong> {formData.timeframe}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent || false}
                onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                className={errors.consent ? 'border-red-500' : ''}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="consent" className="text-sm font-normal">
                  I consent to being contacted by Trembach Law Firm regarding my potential defamation case. I understand that submitting this form does not create an attorney-client relationship. *
                </Label>
                {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Free Defamation Case Evaluation | California Libel Attorney | Trembach Law Firm"
        description="Get a free evaluation of your California defamation case. Former defense attorney providing expert legal analysis for libel, slander, and online defamation claims."
        keywords="defamation case evaluation, California libel lawyer consultation, free defamation attorney review, online defamation case assessment"
      />
      
      <div className="min-h-screen bg-background">
        {/* Go Back Button */}
        <div 
          className={`fixed top-24 left-6 z-50 transition-all duration-500 ${
            showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-white">Go Back</span>
          </Button>
        </div>

        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Defamation Case Evaluation
            </h1>
            <p className="text-xl text-white">
              Get expert legal analysis of your California defamation case
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Card */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {currentStep === 1 && <FileText className="w-12 h-12 text-primary" />}
                {currentStep === 2 && <Scale className="w-12 h-12 text-primary" />}
                {currentStep === 3 && <Clock className="w-12 h-12 text-primary" />}
                {currentStep === 4 && <CheckCircle className="w-12 h-12 text-primary" />}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {renderStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Evaluation'}
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Legal Disclaimer */}
          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Legal Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              This evaluation does not create an attorney-client relationship. Information provided is confidential and will be used solely to assess your potential case. Trembach Law Firm is a newly established practice with no prior case results. Past results do not guarantee future outcomes. California has a one-year statute of limitations for defamation claims.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefamationCaseEvaluation;