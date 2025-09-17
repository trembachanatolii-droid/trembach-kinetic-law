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
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/talc-cancer-hero.jpg';
import contaminationImage from '@/assets/practice-areas/talc-contamination-analysis.jpg';
import diagnosisImage from '@/assets/practice-areas/talc-ovarian-diagnosis.jpg';
import corporateImage from '@/assets/practice-areas/talc-corporate-documents.jpg';
import legalImage from '@/assets/practice-areas/talc-legal-consultation.jpg';

gsap.registerPlugin(ScrollTrigger);

const TalcBabyPowder = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".content-card", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".content-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={contentRef}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">🍼</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
              California Talc Cancer Lawyers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Fighting for Victims of Contaminated Baby Powder
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
              Pursuing Justice for Ovarian Cancer and Mesothelioma Victims Throughout All 58 California Counties
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/case-evaluation">Free Case Review</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="tel:5551234567">Call (555) 123-4567</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Comprehensive Overview Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">The Talc Cancer Crisis</h2>
              <div className="mb-6">
                <img 
                  src={contaminationImage} 
                  alt="Laboratory testing of talc powder for asbestos contamination"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For generations, talcum powder was marketed as the epitome of purity and safety, a product gentle enough for babies and recommended for women's most intimate hygiene needs. Today, thousands of California women face ovarian cancer diagnoses, and both men and women confront mesothelioma, after decades of using products contaminated with asbestos and linked to cancer development.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The betrayal runs deeper than simple product defects. Internal documents reveal manufacturers tested their talc, found asbestos contamination, and chose to hide these results while specifically marketing powder for feminine hygiene use. This targeted marketing to women for genital use, despite known cancer risks, represents one of the most egregious examples of corporate profits over consumer safety in modern history.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California's demographic diversity means talc exposure patterns vary across communities. Multi-generational powder use in Latino families, where mothers taught daughters to use talc for freshness, created decades of exposure. Asian communities often used talc products for various traditional purposes. African American women, who historically used more talc products due to targeted marketing, face disproportionate cancer risks.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The geography of California influences talc exposure and litigation strategies. Urban areas like Los Angeles and San Francisco had greater product availability and advertising exposure, leading to higher usage rates. Rural agricultural communities used talc products to combat heat and dust. Coastal communities with humid climates saw increased powder use for moisture control.
              </p>
            </Card>

            {/* Important to Know Section */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Critical Information for Talc Cancer Victims</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Irreversible Nature of Talc-Related Cancers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The irreversible nature of talc-related cancers shapes every aspect of legal strategy and life planning. Once diagnosed, ovarian cancer and mesothelioma follow predictable but devastating progressions. Ovarian cancer often goes undetected until advanced stages due to vague early symptoms. By diagnosis, the cancer has frequently spread beyond the ovaries, requiring aggressive treatment with uncertain outcomes. Mesothelioma, affecting the lining of lungs or abdomen, remains incurable with median survival of 12-21 months from diagnosis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Product Identification Challenges</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Product identification represents a crucial challenge in talc litigation, as most women used multiple brands over decades. Common brands included products from major manufacturers, store brands, and specialty items. Many women cannot recall specific brands but remember consistent powder use for feminine hygiene. Circumstantial evidence including purchase patterns, brand availability during relevant periods, and market share data helps establish exposure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Understanding Talc and Cornstarch-Based Powders</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The distinction between talc and cornstarch-based powders affects case viability. Pure cornstarch powders don't cause cancer, though some products labeled as "baby powder" contained talc despite consumer assumptions they were cornstarch. Product formulations changed over time, with some manufacturers switching from talc to cornstarch in response to health concerns. Understanding product evolution and formulation helps identify exposure periods and liable parties.
                  </p>
                </div>
              </div>
            </Card>

            {/* Types of Cases Section */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Types of Talc Cancer Cases We Handle</h2>
              <div className="mb-6">
                <img 
                  src={diagnosisImage} 
                  alt="Medical documentation and ovarian cancer diagnosis materials"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ovarian Cancer from Genital Talc Use</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ovarian cancer cases form the largest category of talc litigation, affecting women who used powder for feminine hygiene over years or decades. Regular application to underwear, sanitary pads, or directly to the genital area created chronic exposure allowing talc particles to travel through the reproductive tract. Medical evidence in ovarian cancer cases includes pathology showing talc particles in ovarian tissue, surgical records documenting cancer stage and spread, and chemotherapy records showing treatment intensity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mesothelioma from Contaminated Talc</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mesothelioma cases involve cancer of the mesothelium, the protective lining surrounding lungs, heart, or abdomen, caused by asbestos fibers in contaminated talc. The unique aspects of talc-related mesothelioma distinguish these cases from traditional occupational asbestos exposure. Victims never worked in industrial settings typically associated with asbestos exposure. The household exposure from consumer products requires different proof strategies than workplace cases.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Fallopian Tube and Primary Peritoneal Cancer</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These related cancers affecting reproductive system tissues share similar causation mechanisms with ovarian cancer from talc exposure. Fallopian tube cancer, though rarer than ovarian cancer, follows similar development patterns from talc particle migration and inflammation. Primary peritoneal cancer affects the abdominal lining, developing through similar inflammatory processes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cervical and Uterine Cancer Cases</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Emerging research suggests links between talc use and other reproductive cancers including cervical and uterine cancer. While scientific evidence remains less developed than for ovarian cancer, cases proceed under similar theories of particle migration and inflammation. These cases require careful medical expert selection and thorough causation evidence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Family Member Secondary Exposure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Secondary exposure cases involve family members who developed mesothelioma or other cancers from household talc use. Children exposed to powder during diaper changes, spouses sharing bathrooms with heavy talc users, and family members washing talc-dusted clothing faced secondary exposure. These cases extend liability beyond direct users to encompass household exposure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Multi-Generational Exposure Cases</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Families where mothers taught daughters to use talc products, perpetuating exposure across generations, present unique litigation opportunities. Multiple family members with cancer strengthen pattern evidence of causation. These cases demonstrate the generational impact of corporate concealment, justifying substantial punitive damages.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wrongful Death Claims</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fatal cancer cases allow surviving family members to pursue wrongful death claims for economic and non-economic losses. Economic damages include lost financial support, household services value, and funeral expenses. Non-economic damages compensate for loss of love, companionship, guidance, and consortium.
                  </p>
                </div>
              </div>
            </Card>

            {/* Corporate Concealment Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Corporate Concealment and Evidence</h2>
              <div className="mb-6">
                <img 
                  src={corporateImage} 
                  alt="Corporate boardroom with documents showing talc contamination cover-up evidence"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Product manufacturers employed sophisticated marketing strategies specifically targeting women for genital talc use despite knowing the cancer risks. Advertisements emphasized freshness, cleanliness, and feminine confidence, creating social pressure to use these products. Marketing materials from the 1950s through 1990s show deliberate targeting of women with messages about intimate hygiene.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The evolution of scientific understanding about talc and cancer parallels the tobacco industry's pattern of denial and concealment. Early studies in the 1960s and 1970s raised concerns about talc and ovarian cancer. By the 1980s, multiple epidemiological studies confirmed increased cancer risk. Throughout this period, manufacturers funded contrary research, attacked independent scientists, and continued marketing without warnings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Evidence Sources</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Internal company testing showing asbestos contamination</li>
                    <li>• Marketing materials targeting intimate use</li>
                    <li>• Scientific studies linking talc to cancer</li>
                    <li>• Pathology reports showing talc particles in tissue</li>
                    <li>• Expert testimony on causation mechanisms</li>
                    <li>• Corporate emails discussing contamination</li>
                    <li>• Regulatory correspondence and submissions</li>
                    <li>• Insurance coverage documents</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Corporate Misconduct Patterns</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Deliberate hiding of contamination results</li>
                    <li>• Failure to warn consumers of cancer risks</li>
                    <li>• Manipulation of safety testing protocols</li>
                    <li>• Targeted marketing despite known dangers</li>
                    <li>• Decades of regulatory deception</li>
                    <li>• Attack on independent researchers</li>
                    <li>• Funding of favorable studies</li>
                    <li>• Lobbying against safety regulations</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Legal Process Section */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Comprehensive Legal Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Case Evaluation and Medical Review</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Initial case evaluation begins with comprehensive review of medical records documenting cancer diagnosis, treatment, and prognosis. Pathology reports receive particular scrutiny for evidence of talc particles in tissue samples. We compile detailed exposure histories through client interviews, focusing on powder use patterns, brands, frequency, and application methods. Family members provide crucial testimony about household product use and purchasing patterns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Medical Consultation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Medical expert consultation forms the foundation of causation evidence. Oncologists explain cancer development mechanisms and link talc exposure to specific cancer types. Epidemiologists analyze statistical associations between talc use and cancer risk. Pathologists identify talc particles in tissue samples when available. Industrial hygienists reconstruct exposure levels from product use patterns. This multi-disciplinary expert team builds overwhelming causation evidence countering defense arguments about alternative causes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Investigation and Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lawsuit filing triggers formal discovery processes revealing crucial evidence. Document requests target internal testing data, marketing strategies, safety discussions, and insurance information. Depositions of corporate representatives expose knowledge of contamination and cancer risks. Former employee whistleblowers provide insider testimony about concealment. Electronic discovery of emails and databases reveals smoking-gun evidence of corporate misconduct.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Insurance Coverage Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Insurance coverage for talc claims involves complex battles as carriers attempt to avoid massive liabilities. Historical general liability policies from decades past when exposure occurred may provide coverage under different terms than modern policies. Pollution exclusions, intended for environmental contamination, get improperly invoked for talc exposure. Understanding insurance coverage law and policy interpretation maximizes recovery from multiple insurance layers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Settlement Negotiations and Trial Preparation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Settlement timing presents difficult decisions balancing immediate needs against maximum recovery. Early settlements provide needed funds for treatment and family support but may undervalue claims before full damages are known. Our approach focuses on maximizing recovery through strategic negotiation while respecting client preferences about settlement versus trial. We prepare every case for trial while remaining open to fair settlement offers that meet our clients' needs.
                  </p>
                </div>
              </div>
            </Card>

            {/* Compensation Analysis */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Compensation Analysis</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Talc cancer victims deserve comprehensive compensation addressing all losses from preventable disease caused by corporate greed. Medical expenses form the foundation of economic damages, beginning with diagnostic procedures and extending through end-of-life care. Cancer treatment costs routinely exceed $200,000 annually, with some treatments reaching $30,000 per month.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The psychological impact of learning that trusted products caused cancer creates additional suffering deserving compensation. Women feel betrayed learning that intimate hygiene products they trusted caused their cancer. Guilt about potentially exposing daughters to risk compounds emotional trauma. Anger at corporate concealment and regulatory failure affects mental health.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Economic Damages</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• All medical treatment and surgery costs</li>
                    <li>• Chemotherapy and radiation therapy</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Future medical care needs</li>
                    <li>• Prescription medications and equipment</li>
                    <li>• Home healthcare and assistance</li>
                    <li>• Transportation to medical appointments</li>
                    <li>• Household service replacement costs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Non-Economic Damages</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Pain and suffering from cancer</li>
                    <li>• Emotional trauma and psychological impact</li>
                    <li>• Loss of life enjoyment and activities</li>
                    <li>• Punitive damages for corporate misconduct</li>
                    <li>• Family impact and relationship losses</li>
                    <li>• Loss of reproductive capacity</li>
                    <li>• Disfigurement from surgery</li>
                    <li>• Mental anguish and depression</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Multiple Recovery Sources</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Multiple defendants often bear responsibility for talc exposure, expanding recovery potential. Primary manufacturers produced and marketed talc products directly to consumers. Supplier companies mined and processed raw talc, sometimes introducing asbestos contamination. Retailers sold private-label products sharing liability. Each defendant's insurance coverage and assets provide separate recovery sources.
                </p>
              </div>
            </Card>

            {/* Government Benefits Coordination */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Government Benefits Coordination</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Social Security Disability Benefits</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Social Security Disability offers monthly income and Medicare coverage for disabled cancer patients. The application process requires detailed medical documentation proving inability to work. Cancer diagnoses often qualify for expedited processing under compassionate allowance programs. We coordinate with Social Security to ensure proper documentation and prevent improper offsets against lawsuit recoveries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">California State Benefits</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California State Disability Insurance provides temporary wage replacement for workers unable to work due to illness. Medi-Cal covers treatment for low-income patients, expanding access to cancer treatment regardless of financial status. Each program has specific requirements and potential interactions with lawsuit recoveries requiring careful planning.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Immigration Status Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Immigration status doesn't affect the right to compensation for talc-related cancers, though undocumented victims face unique challenges. California law protects all consumers regardless of immigration status. Defendants cannot use immigration status to avoid liability or reduce damages. We protect client privacy and ensure immigration concerns don't prevent justice.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="content-card p-8 text-center bg-primary/5 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Seek Justice for Talc-Related Cancer</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Scientific evidence links talc use to serious cancers. Manufacturers knew of these risks but failed to warn consumers. We pursue compensation for medical expenses, lost income, and the devastating impact of preventable cancers through comprehensive liability theory and damages modeling. Don't let corporate greed escape accountability - contact us today for your free case evaluation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/case-evaluation">Get Free Case Evaluation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/schedule-consultation">Schedule Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalcBabyPowder;