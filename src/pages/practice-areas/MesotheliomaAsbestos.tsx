import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  Map,
  ArrowLeft
} from 'lucide-react';
import heroBackground from '@/assets/mesothelioma-hero-bg.jpg';
import sidebarImage from '@/assets/mesothelioma-sidebar.jpg';
import diagnosisImage from '@/assets/mesothelioma-diagnosis-process.jpg';
import legalProcessImage from '@/assets/mesothelioma-legal-process.jpg';
import exposureSitesImage from '@/assets/california-exposure-sites.jpg';
import medicalImage from '@/assets/mesothelioma-medical-facility.jpg';
import compensationImage from '@/assets/mesothelioma-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MesotheliomaAsbestos: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    diagnosisDate: '',
    cancerType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER DIAGNOSIS', icon: Stethoscope },
    { id: 'diagnosis-process', label: 'DIAGNOSIS PROCESS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - redirect to case evaluation
    window.location.href = '/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Mesothelioma Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Mesothelioma Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been diagnosed with mesothelioma in California, you're facing one of the most aggressive cancers known to medicine. This devastating disease is caused exclusively by asbestos exposure, and those responsible for your exposure should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency of mesothelioma cases. With decades of experience in California asbestos litigation and a deep understanding of the medical complexities involved, we're prepared to fight for maximum compensation while you focus on treatment and time with family.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Mesothelioma Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Understanding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team works closely with leading mesothelioma specialists throughout California to understand the full scope of your diagnosis, prognosis, and treatment needs.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Map className="w-5 h-5 mr-2 text-primary" />
                      California Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have extensive knowledge of California's industrial history, including shipyards, power plants, refineries, and construction sites where asbestos exposure occurred.</p>
                  </CardContent>
                </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into corporate defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expedited Process</h4>
                          <p className="text-sm text-muted-foreground">We understand the urgency and work to secure compensation as quickly as possible.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Mesothelioma Representation</h3>
                    <p>
                      Mesothelioma cases in California involve complex medical, legal, and historical factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of asbestos exposure to working with medical experts who can clearly explain how asbestos caused your disease.
                    </p>
                    
                    <p>
                      California has a rich industrial history, particularly in shipbuilding, aerospace, oil refining, and construction. Many of our clients were exposed to asbestos at major facilities including:
                    </p>
                    
                    <ul>
                      <li>Mare Island Naval Shipyard and other military installations</li>
                      <li>Long Beach Naval Shipyard and commercial shipyards</li>
                      <li>Chevron, Shell, and other refinery operations</li>
                      <li>Aerospace companies like Lockheed and Boeing</li>
                      <li>Power plants throughout the state</li>
                      <li>Construction sites using asbestos-containing materials</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of exposure to ensure no liable party escapes responsibility for your illness. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including bankruptcy trusts, workers' compensation, and VA benefits for veterans.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div 
                className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${exposureSitesImage})` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 p-12 text-center">
                  <h2 className="text-4xl font-bold text-white mb-2">3 Ways to Start Your Case</h2>
                  <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4 max-w-md mx-auto">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = 'tel:+18553742906'}
                    >
                      CALL (855) 374-2906
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = 'mailto:info@trembachlaw.com'}
                    >
                      EMAIL US
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = '/case-evaluation'}
                    >
                      CALCULATE SETTLEMENT
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Do After Diagnosis */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Mesothelioma Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Get a second opinion from a mesothelioma specialist</p>
                    <p>• Request all medical records and pathology reports</p>
                    <p>• Explore treatment options at specialized cancer centers</p>
                    <p>• Consider clinical trials and experimental treatments</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Contact an experienced mesothelioma attorney immediately</p>
                    <p>• Gather employment records and work history documentation</p>
                    <p>• Document all medical expenses and treatments</p>
                    <p>• Avoid discussing your case with insurance companies</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.diagnosisSteps} onOpenChange={() => toggleSection('diagnosisSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More Detailed Steps
                    {expandedSections.diagnosisSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Medical Priority Actions</h3>
                    <p>
                      Time is critical after a mesothelioma diagnosis. While the shock of diagnosis can be overwhelming, taking immediate action can significantly impact both your medical treatment options and legal rights.
                    </p>
                    
                    <h4>1. Secure Expert Medical Care</h4>
                    <p>
                      Mesothelioma is a rare cancer requiring specialized treatment. General oncologists may not have extensive experience with this disease. Seek treatment at specialized cancer centers such as:
                    </p>
                    <ul>
                      <li>UCLA Jonsson Comprehensive Cancer Center</li>
                      <li>UCSF Helen Diller Family Comprehensive Cancer Center</li>
                      <li>City of Hope National Medical Center</li>
                      <li>Stanford Cancer Institute</li>
                      <li>USC Norris Comprehensive Cancer Center</li>
                    </ul>
                    
                    <h4>2. Understand Your Diagnosis</h4>
                    <p>
                      Ensure you understand the type and stage of your mesothelioma. The four main types are:
                    </p>
                    <ul>
                      <li><strong>Pleural Mesothelioma:</strong> Affects the lining of the lungs (most common)</li>
                      <li><strong>Peritoneal Mesothelioma:</strong> Affects the abdominal lining</li>
                      <li><strong>Pericardial Mesothelioma:</strong> Affects the heart lining (rare)</li>
                      <li><strong>Testicular Mesothelioma:</strong> Affects the testicular lining (very rare)</li>
                    </ul>
                    
                    <h3>Legal Priority Actions</h3>
                    
                    <h4>1. Contact an Attorney Immediately</h4>
                    <p>
                      California has strict time limits for filing mesothelioma claims. Don't delay - evidence becomes harder to obtain as time passes, and witnesses' memories fade. An experienced attorney can:
                    </p>
                    <ul>
                      <li>Investigate your asbestos exposure history</li>
                      <li>Identify all potentially liable companies</li>
                      <li>Preserve important evidence</li>
                      <li>File necessary legal paperwork</li>
                      <li>Begin the compensation process</li>
                    </ul>
                    
                    <h4>2. Gather Important Documents</h4>
                    <p>Start collecting any documents that might help establish your asbestos exposure:</p>
                    <ul>
                      <li>Employment records and job descriptions</li>
                      <li>Union membership records</li>
                      <li>Military service records (especially Navy)</li>
                      <li>Social Security earnings statements</li>
                      <li>Workers' compensation records</li>
                      <li>Photos of work sites or equipment</li>
                    </ul>
                    
                    <h4>3. Document Everything</h4>
                    <p>
                      Keep detailed records of your medical treatment, symptoms, and how mesothelioma affects your daily life. This documentation will be crucial for your legal case.
                    </p>
                    
                    <h3>Family Considerations</h3>
                    <p>
                      Inform family members about your diagnosis, as they may have been exposed to asbestos through your work clothes (secondary exposure). Family members who develop mesothelioma from take-home exposure may also have legal claims.
                    </p>
                    
                    <h3>Financial Planning</h3>
                    <p>
                      Mesothelioma treatment can be expensive. Consider:
                    </p>
                    <ul>
                      <li>Reviewing your health insurance coverage</li>
                      <li>Applying for Social Security disability benefits</li>
                      <li>Exploring financial assistance programs</li>
                      <li>Understanding your legal rights to compensation</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Diagnosis Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding the Mesothelioma Diagnosis Process</h2>
              
              <div className="mb-6">
                <img 
                  src={diagnosisImage} 
                  alt="Mesothelioma diagnosis process in California medical facilities" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Mesothelioma diagnosis is often delayed because early symptoms resemble common respiratory conditions. Understanding the diagnostic process helps you advocate for proper testing and ensures you receive accurate results quickly.
                </p>
              </div>

              <Collapsible open={expandedSections.diagnosisProcess} onOpenChange={() => toggleSection('diagnosisProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Diagnosis Process Information
                    {expandedSections.diagnosisProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Initial Symptoms and Warning Signs</h3>
                    <p>
                      Mesothelioma symptoms often develop 20-50 years after asbestos exposure. Early symptoms may include:
                    </p>
                    
                    <h4>Pleural Mesothelioma Symptoms:</h4>
                    <ul>
                      <li>Persistent chest pain</li>
                      <li>Shortness of breath (dyspnea)</li>
                      <li>Persistent dry cough</li>
                      <li>Unexplained weight loss</li>
                      <li>Fatigue and weakness</li>
                      <li>Pleural effusion (fluid around lungs)</li>
                    </ul>
                    
                    <h4>Peritoneal Mesothelioma Symptoms:</h4>
                    <ul>
                      <li>Abdominal pain and swelling</li>
                      <li>Nausea and vomiting</li>
                      <li>Changes in bowel habits</li>
                      <li>Unexplained weight loss</li>
                      <li>Ascites (fluid in abdomen)</li>
                    </ul>
                    
                    <h3>Diagnostic Testing Procedures</h3>
                    
                    <h4>1. Imaging Studies</h4>
                    <p><strong>Chest X-rays:</strong> Often the first test, but may miss early-stage disease. Shows pleural thickening or effusion.</p>
                    <p><strong>CT Scans:</strong> More detailed than X-rays, can detect smaller tumors and show disease extent.</p>
                    <p><strong>MRI:</strong> Provides detailed images of soft tissue, helpful for surgical planning.</p>
                    <p><strong>PET Scans:</strong> Shows metabolic activity of cancer cells, helpful for staging.</p>
                    
                    <h4>2. Biopsy Procedures</h4>
                    <p>
                      Definitive mesothelioma diagnosis requires tissue biopsy. Several biopsy methods exist:
                    </p>
                    
                    <p><strong>Thoracentesis:</strong> Fluid removal from chest cavity. Less invasive but may not provide enough tissue for definitive diagnosis.</p>
                    
                    <p><strong>Thoracotomy:</strong> Surgical opening of chest wall to obtain tissue samples. More invasive but provides larger tissue samples.</p>
                    
                    <p><strong>Video-Assisted Thoracoscopic Surgery (VATS):</strong> Minimally invasive procedure using small incisions and a camera.</p>
                    
                    <p><strong>Core Needle Biopsy:</strong> Needle inserted through chest wall to obtain tissue samples.</p>
                    
                    <h4>3. Pathological Analysis</h4>
                    <p>
                      Tissue samples undergo detailed pathological examination including:
                    </p>
                    <ul>
                      <li><strong>Histopathology:</strong> Microscopic examination of tissue structure</li>
                      <li><strong>Immunohistochemistry:</strong> Uses antibodies to identify specific proteins</li>
                      <li><strong>Electron Microscopy:</strong> Ultra-detailed examination of cell structure</li>
                      <li><strong>Genetic Testing:</strong> May identify specific mutations for targeted therapy</li>
                    </ul>
                    
                    <h3>Mesothelioma Staging</h3>
                    <p>
                      Once diagnosed, mesothelioma is staged to determine treatment options:
                    </p>
                    
                    <h4>TNM Staging System:</h4>
                    <ul>
                      <li><strong>T (Tumor):</strong> Size and extent of main tumor</li>
                      <li><strong>N (Nodes):</strong> Whether cancer has spread to lymph nodes</li>
                      <li><strong>M (Metastasis):</strong> Whether cancer has spread to other body parts</li>
                    </ul>
                    
                    <h4>Stage Classifications:</h4>
                    <ul>
                      <li><strong>Stage 1:</strong> Localized disease, best prognosis</li>
                      <li><strong>Stage 2:</strong> Locally advanced but potentially resectable</li>
                      <li><strong>Stage 3:</strong> Regionally advanced, limited surgical options</li>
                      <li><strong>Stage 4:</strong> Metastatic disease, palliative treatment focus</li>
                    </ul>
                    
                    <h3>Getting a Second Opinion</h3>
                    <p>
                      Given the rarity and complexity of mesothelioma, seeking a second opinion from a specialized mesothelioma center is crucial. Second opinions can:
                    </p>
                    <ul>
                      <li>Confirm the initial diagnosis</li>
                      <li>Provide additional treatment options</li>
                      <li>Access to clinical trials</li>
                      <li>Connect you with mesothelioma specialists</li>
                    </ul>
                    
                    <h3>Importance of Accurate Diagnosis</h3>
                    <p>
                      Mesothelioma can be misdiagnosed as other conditions such as lung adenocarcinoma or other chest cancers. Accurate diagnosis is essential because:
                    </p>
                    <ul>
                      <li>Treatment approaches differ significantly</li>
                      <li>Prognosis varies between cancer types</li>
                      <li>Legal claims require confirmed mesothelioma diagnosis</li>
                      <li>Clinical trial eligibility depends on accurate diagnosis</li>
                    </ul>
                    
                    <h3>What to Ask Your Doctor</h3>
                    <p>Important questions to ask your medical team:</p>
                    <ul>
                      <li>What type and stage of mesothelioma do I have?</li>
                      <li>What are my treatment options?</li>
                      <li>Should I get a second opinion?</li>
                      <li>Are there clinical trials available?</li>
                      <li>What is my prognosis?</li>
                      <li>How will treatment affect my quality of life?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Important Legal Consideration
                    </h3>
                    <p>
                      While focusing on your medical care is the priority, it's also important to contact a mesothelioma attorney quickly after diagnosis. The diagnostic process generates important medical records that will be crucial for your legal case, and time limits for filing claims begin from your diagnosis date.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Mesothelioma Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for mesothelioma cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for your mesothelioma diagnosis. California law provides several avenues for recovery, and our experienced team will pursue all applicable options.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Details
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Overview of Legal Options</h3>
                    <p>
                      Mesothelioma victims in California have multiple potential sources of compensation:
                    </p>
                    
                    <h4>1. Personal Injury Lawsuits</h4>
                    <p>
                      Filed against companies still in business that manufactured or used asbestos products. These lawsuits seek compensation for medical expenses, lost wages, pain and suffering, and other damages.
                    </p>
                    
                    <h4>2. Asbestos Bankruptcy Trust Claims</h4>
                    <p>
                      Over 100 companies have established bankruptcy trusts containing more than $30 billion for asbestos victims. These claims can often be resolved more quickly than lawsuits.
                    </p>
                    
                    <h4>3. Workers' Compensation Claims</h4>
                    <p>
                      If you were exposed to asbestos at work in California, you may be entitled to workers' compensation benefits regardless of when the exposure occurred.
                    </p>
                    
                    <h4>4. Veterans' Benefits</h4>
                    <p>
                      Veterans exposed to asbestos during military service may be entitled to VA disability compensation and healthcare benefits.
                    </p>
                    
                    <h4>5. Wrongful Death Claims</h4>
                    <p>
                      Family members can file wrongful death claims if a loved one dies from mesothelioma.
                    </p>
                    
                    <h3>The Investigation Process</h3>
                    
                    <h4>Exposure History Investigation</h4>
                    <p>
                      Our first step is conducting a comprehensive investigation of your asbestos exposure history. This involves:
                    </p>
                    <ul>
                      <li>Detailed interviews about your work history</li>
                      <li>Researching employers and job sites</li>
                      <li>Identifying asbestos products you encountered</li>
                      <li>Locating co-workers and witnesses</li>
                      <li>Obtaining employment and union records</li>
                      <li>Military service record analysis for veterans</li>
                    </ul>
                    
                    <h4>Defendant Identification</h4>
                    <p>
                      We identify all potentially liable companies including:
                    </p>
                    <ul>
                      <li>Asbestos product manufacturers</li>
                      <li>Equipment manufacturers</li>
                      <li>Premises owners where exposure occurred</li>
                      <li>Contractors and subcontractors</li>
                      <li>Suppliers and distributors</li>
                    </ul>
                    
                    <h3>Filing Your Claims</h3>
                    
                    <h4>Lawsuit Filing Process</h4>
                    <p>
                      In California, we typically file mesothelioma lawsuits in counties where major exposure occurred or where defendants conduct business. Key steps include:
                    </p>
                    <ol>
                      <li><strong>Complaint Preparation:</strong> Detailed document outlining your exposure history and damages</li>
                      <li><strong>Filing and Service:</strong> Formally filing with the court and serving defendants</li>
                      <li><strong>Case Management:</strong> Court scheduling and procedural requirements</li>
                      <li><strong>Discovery Process:</strong> Information exchange between parties</li>
                      <li><strong>Expert Witnesses:</strong> Medical and industrial experts support your case</li>
                      <li><strong>Settlement Negotiations:</strong> Most cases settle before trial</li>
                      <li><strong>Trial (if necessary):</strong> Presenting your case to a jury</li>
                    </ol>
                    
                    <h4>Trust Fund Claims</h4>
                    <p>
                      Bankruptcy trust claims follow a different process:
                    </p>
                    <ul>
                      <li>Identify relevant trusts based on exposure history</li>
                      <li>Prepare detailed claim forms for each trust</li>
                      <li>Submit medical and exposure documentation</li>
                      <li>Await trust review and payment determination</li>
                      <li>Appeal if necessary to maximize payments</li>
                    </ul>
                    
                    <h3>Discovery and Evidence Gathering</h3>
                    
                    <h4>Medical Evidence</h4>
                    <p>We collect comprehensive medical evidence including:</p>
                    <ul>
                      <li>Pathology reports confirming mesothelioma diagnosis</li>
                      <li>Imaging studies (X-rays, CT scans, MRIs)</li>
                      <li>Treatment records and medical bills</li>
                      <li>Expert medical opinions on causation</li>
                      <li>Prognosis and life expectancy assessments</li>
                    </ul>
                    
                    <h4>Exposure Evidence</h4>
                    <p>We build your exposure case through:</p>
                    <ul>
                      <li>Employment records and job descriptions</li>
                      <li>Witness testimony from co-workers</li>
                      <li>Product identification databases</li>
                      <li>Historical documents about asbestos use</li>
                      <li>Site inspection reports and photos</li>
                      <li>Corporate documents showing knowledge of dangers</li>
                    </ul>
                    
                    <h3>Expert Witnesses</h3>
                    
                    <h4>Medical Experts</h4>
                    <p>Our medical experts include:</p>
                    <ul>
                      <li><strong>Pathologists:</strong> Confirm mesothelioma diagnosis</li>
                      <li><strong>Pulmonologists:</strong> Explain respiratory effects</li>
                      <li><strong>Oncologists:</strong> Discuss treatment and prognosis</li>
                      <li><strong>Epidemiologists:</strong> Link asbestos exposure to disease</li>
                    </ul>
                    
                    <h4>Industrial Experts</h4>
                    <p>Industrial experts help establish exposure:</p>
                    <ul>
                      <li><strong>Industrial Hygienists:</strong> Analyze workplace conditions</li>
                      <li><strong>Engineers:</strong> Explain equipment and product use</li>
                      <li><strong>Safety Experts:</strong> Discuss industry standards</li>
                    </ul>
                    
                    <h3>Settlement vs. Trial</h3>
                    
                    <h4>Settlement Benefits</h4>
                    <ul>
                      <li>Faster resolution and compensation</li>
                      <li>Guaranteed recovery amount</li>
                      <li>Privacy (settlements are confidential)</li>
                      <li>Less stress on you and your family</li>
                      <li>No risk of appeal or reduced verdict</li>
                    </ul>
                    
                    <h4>Trial Considerations</h4>
                    <ul>
                      <li>Potential for higher compensation</li>
                      <li>Public accountability for defendants</li>
                      <li>Precedent setting for future cases</li>
                      <li>Uncertainty of outcome</li>
                      <li>Longer timeline</li>
                    </ul>
                    
                    <h3>California-Specific Considerations</h3>
                    
                    <h4>Statute of Limitations</h4>
                    <p>
                      California allows one year from diagnosis to file personal injury claims and one year from death for wrongful death claims. However, various factors can affect these deadlines.
                    </p>
                    
                    <h4>Venue Selection</h4>
                    <p>
                      California courts in different counties have varying procedures and histories with asbestos cases. We select venues that provide the best opportunity for favorable outcomes.
                    </p>
                    
                    <h4>Expedited Trial Rules</h4>
                    <p>
                      California courts often grant trial preference to mesothelioma cases, meaning your case can move through the system more quickly than typical civil litigation.
                    </p>
                    
                    <h3>Compensation Components</h3>
                    
                    <h4>Economic Damages</h4>
                    <ul>
                      <li>Medical expenses (past and future)</li>
                      <li>Lost wages and earning capacity</li>
                      <li>Travel costs for treatment</li>
                      <li>Home care and assistance costs</li>
                    </ul>
                    
                    <h4>Non-Economic Damages</h4>
                    <ul>
                      <li>Pain and suffering</li>
                      <li>Emotional distress</li>
                      <li>Loss of enjoyment of life</li>
                      <li>Loss of consortium (for spouses)</li>
                    </ul>
                    
                    <h4>Punitive Damages</h4>
                    <p>
                      In cases where defendants acted with malice or fraud, punitive damages may be available to punish wrongdoing and deter future misconduct.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-2" />
                      Our Commitment to You
                    </h3>
                    <p>
                      Throughout the legal process, we handle all aspects of your case while keeping you informed of important developments. Our goal is to secure maximum compensation with minimum stress on you and your family, allowing you to focus on treatment and quality time with loved ones.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* California Exposure Sites */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Asbestos Exposure Sites</h2>
              
              <div className="mb-6">
                <img 
                  src={exposureSitesImage} 
                  alt="California asbestos exposure sites and industrial facilities" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  California's industrial history includes extensive use of asbestos in shipyards, refineries, power plants, and construction projects. Understanding where exposure occurred is crucial for identifying liable parties and building your case.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipyards & Naval Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Mare Island Naval Shipyard</li>
                      <li>• Long Beach Naval Shipyard</li>
                      <li>• Hunters Point Naval Shipyard</li>
                      <li>• Todd Shipyards (Los Angeles)</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Refineries & Chemical Plants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Chevron Richmond Refinery</li>
                      <li>• ExxonMobil Torrance Refinery</li>
                      <li>• Shell Martinez Refinery</li>
                      <li>• Valero Benicia Refinery</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Aerospace & Manufacturing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Lockheed Martin (Sunnyvale)</li>
                      <li>• Boeing (Long Beach)</li>
                      <li>• Northrop Grumman</li>
                      <li>• General Dynamics</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Power Plants & Utilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Diablo Canyon Power Plant</li>
                      <li>• San Onofre Nuclear Plant</li>
                      <li>• Moss Landing Power Plant</li>
                      <li>• El Segundo Power Plant</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What Can a California Mesothelioma Lawyer Do for Me?",
                    answer: "A mesothelioma lawyer provides comprehensive legal representation to maximize your compensation from all available sources. This includes filing claims with asbestos bankruptcy trust funds (accessing over $30 billion set aside for victims), pursuing lawsuits against liable companies still in business, coordinating with VA benefits for veterans, and managing workers' compensation claims when applicable."
                  },
                  {
                    question: "How Much Does It Cost to Hire a Mesothelioma Attorney?",
                    answer: "At Trembach Law Firm, we work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. There are no upfront costs, no hourly fees, no consultation charges, and no out-of-pocket expenses. We advance all case costs including filing fees, expert witnesses, medical record retrieval, depositions, and travel expenses."
                  },
                  {
                    question: "How Long Do I Have to File a Mesothelioma Claim in California?",
                    answer: "California law provides one year from the date of diagnosis to file a personal injury claim. For wrongful death claims, family members have one year from the date of death. However, these deadlines can be complex - discovery rules may extend the deadline if the asbestos exposure source wasn't immediately known."
                  },
                  {
                    question: "How Much Is My Mesothelioma Case Worth?",
                    answer: "Mesothelioma settlements and verdicts vary significantly based on individual circumstances, but often range from hundreds of thousands to several million dollars. Factors affecting value include age at diagnosis, type and stage of mesothelioma, occupation and exposure history, number of liable defendants identified, and available coverage."
                  },
                  {
                    question: "What Types of Mesothelioma Are Recognized in California?",
                    answer: "California courts recognize four main types of mesothelioma: Pleural mesothelioma (affecting lung lining, most common at 75% of cases), Peritoneal mesothelioma (affecting abdominal lining, 20% of cases), Pericardial mesothelioma (affecting heart lining, rare), and Testicular mesothelioma (affecting testicle lining, extremely rare). Each type has different symptoms, prognosis, and treatment options affecting compensation calculations."
                  },
                  {
                    question: "Can Family Members File Claims for Secondhand Asbestos Exposure?",
                    answer: "Yes, California law allows family members exposed to asbestos through contaminated clothing and household items to file claims. This includes spouses who laundered work clothes, children who played in contaminated areas, and family members exposed during home renovations with asbestos products. These secondary exposure cases require detailed investigation of household exposure patterns."
                  },
                  {
                    question: "What Happens If the Company That Caused My Exposure Is Bankrupt?",
                    answer: "Many asbestos companies have established bankruptcy trust funds specifically to compensate victims. Over $30 billion is available through these trusts. We can file claims with multiple trusts based on your exposure history. Trust claims often process faster than traditional lawsuits and don't prevent you from pursuing claims against non-bankrupt companies."
                  },
                  {
                    question: "How Do You Prove Asbestos Exposure Happened Decades Ago?",
                    answer: "We use multiple investigative methods: employment records, military service documents, union records, product identification databases, witness testimony from coworkers, industrial hygiene reports, and our extensive database of asbestos-containing products used at specific worksites. Many companies kept detailed records of asbestos use that we can access through litigation."
                  },
                  {
                    question: "Can I File a Claim If I Was Exposed in Multiple States?",
                    answer: "Yes, multi-state exposure cases are common, especially for military personnel, construction workers, and maritime workers. California's statute of limitations and favorable laws often make it an advantageous filing location. We coordinate with attorneys in other states when necessary and determine the best jurisdiction for each claim based on exposure history and applicable laws."
                  },
                  {
                    question: "What If I'm Also Getting Workers' Compensation Benefits?",
                    answer: "Workers' compensation and personal injury claims can proceed simultaneously. Workers' comp provides immediate medical coverage and wage replacement but may have a lien on personal injury recoveries. We coordinate with workers' comp attorneys to maximize your overall recovery while protecting your ongoing benefits and resolving liens favorably."
                  },
                  {
                    question: "How Long Will My Mesothelioma Case Take to Resolve?",
                    answer: "Timeline varies based on case complexity, defendant cooperation, and your health status. Bankruptcy trust claims often resolve in 3-9 months. Traditional lawsuits may take 1-3 years, but we can pursue expedited trial schedules for seriously ill clients. Some cases settle during discovery, while others require trial. We work urgently while building the strongest possible case."
                  },
                  {
                    question: "What Evidence Do I Need to Provide for My Case?",
                    answer: "Key evidence includes: medical records and pathology reports confirming mesothelioma diagnosis, employment history with dates and job duties, military service records, Social Security earnings statements, photographs of work sites or products, witness contact information, and any documents mentioning asbestos exposure. We help gather additional evidence through investigation and discovery."
                  },
                  {
                    question: "Will I Have to Testify in Court?",
                    answer: "Most mesothelioma cases settle before trial, so court testimony isn't always necessary. If testimony is required, we thoroughly prepare you and can arrange for video depositions if travel is difficult due to your health. California courts accommodate seriously ill plaintiffs with flexible scheduling and alternative testimony methods when needed."
                  },
                  {
                    question: "What Damages Can I Recover in a California Mesothelioma Case?",
                    answer: "California allows recovery for: medical expenses (past and future treatment costs), lost wages and reduced earning capacity, pain and suffering, emotional distress, loss of enjoyment of life, spousal loss of consortium, and in cases of defendant misconduct, punitive damages. We work with medical and economic experts to fully document all losses."
                  },
                  {
                    question: "Can Veterans File Both VA Claims and Personal Injury Lawsuits?",
                    answer: "Yes, veterans can pursue VA disability benefits and personal injury claims simultaneously. VA benefits provide ongoing medical care and monthly compensation, while personal injury claims target the companies that supplied asbestos products to the military. These are separate compensation sources that don't offset each other."
                  },
                  {
                    question: "What Role Does Genetics Play in Mesothelioma Cases?",
                    answer: "While genetic factors may influence susceptibility to asbestos-related diseases, California law focuses on the causal relationship between asbestos exposure and mesothelioma development. Even with genetic predisposition, asbestos exposure remains the primary cause. We work with medical experts to explain how asbestos triggered the disease process regardless of genetic factors."
                  },
                  {
                    question: "How Do You Handle Cases Where Exposure Occurred at Multiple Job Sites?",
                    answer: "Multi-site exposure cases require comprehensive investigation of each workplace, the asbestos products used, and potentially liable parties at each location. We build detailed exposure timelines, identify all potentially responsible defendants, and pursue claims through multiple channels including bankruptcy trusts, direct lawsuits, and premises liability claims."
                  },
                  {
                    question: "What If the Asbestos Exposure Happened During Home Renovations?",
                    answer: "Home renovation exposure cases involve product liability claims against manufacturers of asbestos-containing materials like insulation, floor tiles, and joint compounds. We investigate what products were used, when they were manufactured, whether adequate warnings were provided, and if retailers or contractors should have known about asbestos dangers."
                  },
                  {
                    question: "Can Smoking Affect My Mesothelioma Case?",
                    answer: "Smoking doesn't cause mesothelioma - only asbestos exposure does. However, smoking may contribute to lung cancer development in asbestos-exposed individuals. California's comparative negligence laws allow recovery even with smoking history, though it might affect damage calculations in lung cancer cases. Mesothelioma cases aren't impacted by smoking history."
                  },
                  {
                    question: "What Happens If I Die During the Legal Process?",
                    answer: "If you pass away during litigation, your family can continue the case as a wrongful death claim. California law allows spouses, children, and dependent family members to recover for loss of financial support, loss of companionship, funeral expenses, and the decedent's pre-death pain and suffering. We work sensitively with families during these difficult times."
                  },
                  {
                    question: "How Do You Determine Which Companies Are Responsible?",
                    answer: "We conduct thorough investigations using proprietary databases, historical records, product identification guides, and expert testimony to trace asbestos exposure to specific manufacturers and suppliers. This includes researching corporate ownership changes, successor liability, and insurance coverage to identify all potentially responsible parties and maximize recovery sources."
                  },
                  {
                    question: "What Medical Experts Do You Work With?",
                    answer: "Our network includes board-certified pulmonologists, oncologists, pathologists, occupational medicine physicians, and industrial hygienists who specialize in asbestos-related diseases. These experts help establish causation, explain disease progression, project future medical needs, and provide compelling testimony about how asbestos exposure caused your mesothelioma."
                  },
                  {
                    question: "Can I Still File a Claim If I Don't Remember Where I Was Exposed?",
                    answer: "Memory gaps are common with exposures occurring decades ago. We use investigative techniques including employment record analysis, Social Security earnings statements, military records, union membership documents, and witness interviews to reconstruct exposure history. Our experience helps identify likely exposure sources even with limited initial information."
                  },
                  {
                    question: "What's the Difference Between Settlement and Trial?",
                    answer: "Settlements provide guaranteed compensation without trial uncertainty but may be lower than potential trial awards. Trials offer possibility of higher damages but involve uncertainty and longer timelines. We evaluate each case individually, considering your health status, case strength, and personal preferences to recommend the best strategy for your situation."
                  },
                  {
                    question: "How Do You Handle Cases Where the Exposure Was Minimal?",
                    answer: "California recognizes that any asbestos exposure can cause mesothelioma - there's no safe level. Even brief exposures can be legally sufficient if properly documented and linked to specific products or defendants. We've successfully handled cases involving short-term exposures by focusing on product identification and the 'any exposure' causation standard accepted in California courts."
                  },
                  {
                    question: "What Information Should I Gather Before Contacting an Attorney?",
                    answer: "Helpful information includes: complete employment history with dates and job duties, military service records, names of coworkers or supervisors, medical records and biopsy reports, photographs of work sites or equipment, any previous asbestos-related legal documents, and Social Security earnings statements. Don't worry if information is incomplete - we help gather additional documentation."
                  },
                  {
                    question: "Can Spouses File Their Own Claims for Emotional Distress?",
                    answer: "California allows spouses to file loss of consortium claims for the impact of mesothelioma on their relationship, including loss of companionship, affection, and intimacy. In some cases, spouses exposed to asbestos through contaminated clothing may also have their own exposure claims if they develop related health conditions or fear of developing cancer."
                  },
                  {
                    question: "What Role Do Trust Funds Play in Mesothelioma Compensation?",
                    answer: "Asbestos bankruptcy trusts hold over $30 billion for victim compensation. These trusts were established when major asbestos companies reorganized in bankruptcy. We file claims with all applicable trusts based on your exposure history. Trust payments are separate from lawsuit recoveries and often provide faster compensation while litigation proceeds."
                  },
                  {
                    question: "How Do You Handle Cases Involving Government Contractors?",
                    answer: "Government contractor cases involve complex federal preemption and immunity issues. We analyze whether the government contractor defense applies, examine specification requirements, and investigate whether contractors had superior knowledge of asbestos dangers. These cases require specialized knowledge of federal contracting law and military specifications for asbestos products."
                  },
                  {
                    question: "What Happens If New Companies Are Identified During Investigation?",
                    answer: "Our ongoing investigation often reveals additional liable parties not initially identified. We amend lawsuits to include new defendants when evidence supports claims against them. This comprehensive approach ensures no responsible party escapes liability and maximizes your potential recovery from all available sources."
                  },
                  {
                    question: "Can Children Who Lived in Asbestos-Contaminated Homes File Claims?",
                    answer: "Yes, children exposed to asbestos in their homes through contaminated work clothing, renovation projects, or living near asbestos sites can file claims if they develop mesothelioma. These cases require detailed investigation of household exposure patterns, family work histories, and home renovation activities involving asbestos-containing materials."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Mesothelioma Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Treatment Centers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• UCLA Jonsson Comprehensive Cancer Center</p>
                    <p>• UCSF Helen Diller Family Comprehensive Cancer Center</p>
                    <p>• City of Hope National Medical Center</p>
                    <p>• Stanford Cancer Institute</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Support Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Mesothelioma Applied Research Foundation</p>
                    <p>• American Cancer Society</p>
                    <p>• Lung Cancer Alliance</p>
                    <p>• CancerCare</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                  <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="text-center text-white">
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
                      onClick={() => window.location.href = 'tel:8559851234'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (855) 985-1234
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/schedule-consultation'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limit</h4>
                      <p className="text-sm text-muted-foreground">1 year from diagnosis in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost to discuss your case</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Images */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California mesothelioma treatment facilities" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with leading mesothelioma specialists throughout California.
                  </p>
                </CardContent>
              </Card>

              {/* Compensation Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compensation Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={compensationImage} 
                    alt="Mesothelioma compensation calculator" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Bankruptcy Trust Funds</p>
                    <p>• Personal Injury Lawsuits</p>
                    <p>• Workers' Compensation</p>
                    <p>• VA Benefits for Veterans</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Mesothelioma Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you only one year from diagnosis to file your claim. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8559851234'}
            >
              Call (855) 985-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MesotheliomaAsbestos;