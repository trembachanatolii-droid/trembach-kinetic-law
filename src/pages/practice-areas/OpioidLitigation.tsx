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
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/opioid-hero-bg.jpg';
import diagnosisImage from '@/assets/opioid-diagnosis-process.jpg';
import legalProcessImage from '@/assets/opioid-legal-process.jpg';
import exposureSitesImage from '@/assets/california-opioid-sites.jpg';
import medicalImage from '@/assets/opioid-medical-facility.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const OpioidLitigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    caseType: '',
    medication: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER ADDICTION', icon: Stethoscope },
    { id: 'diagnosis-process', label: 'DIAGNOSIS PROCESS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  // FAQ Data with 50+ questions from HTML
  const faqData = [
    {
      question: "What is opioid litigation and how does it help victims?",
      answer: "Opioid litigation holds pharmaceutical companies accountable for their role in creating the addiction crisis through deceptive marketing and failing to warn about addiction risks. These lawsuits seek compensation for medical expenses, rehabilitation costs, lost wages, and pain and suffering. While government settlements fund public programs, individual litigation provides personal compensation for those directly harmed by opioid addiction. The litigation process exposes internal company documents proving they knew opioids were addictive but concealed these risks from doctors and patients."
    },
    {
      question: "Can I file an opioid lawsuit if I became addicted to prescription medications?",
      answer: "Yes, if you became addicted to prescription opioids due to inadequate warnings about addiction risks, you may have valid legal claims. Pharmaceutical companies are liable when they fail to properly warn about known risks or make false claims about safety. Your addiction must be causally linked to prescription opioid use, but the fact that you had a legitimate prescription doesn't prevent a lawsuit. Many successful cases involve patients who followed doctors' orders but weren't warned about true addiction risks."
    },
    {
      question: "What if my loved one died from an opioid overdose - can we sue?",
      answer: "Wrongful death claims are available when opioid addiction leads to fatal overdoses. These cases seek compensation for funeral expenses, lost financial support, and loss of companionship. California law gives families two years from the date of death to file wrongful death claims. Even if the fatal overdose involved street drugs like heroin or illicit fentanyl, you may still have claims if the addiction began with prescription opioids that were inadequately warned about by pharmaceutical companies."
    },
    {
      question: "How long do I have to file an opioid lawsuit in California?",
      answer: "California's statute of limitations for opioid cases is generally two years from when you discovered or should have discovered the connection between your addiction and prescription opioids. For wrongful death cases, the limit is two years from the date of death. However, some circumstances may extend these deadlines, and discovery rules can be complex. Don't delay - consulting with an attorney immediately ensures you don't miss important deadlines while evidence is still available."
    },
    {
      question: "What pharmaceutical companies are being sued in opioid litigation?",
      answer: "Major defendants include Purdue Pharma (OxyContin), Johnson & Johnson, Teva Pharmaceuticals, Endo Pharmaceuticals, and Mallinckrodt. Distribution companies like McKesson, Cardinal Health, and AmerisourceBergen also face liability for failing to monitor suspicious orders. Pharmacy chains including CVS, Walgreens, and Walmart are sued for ignoring red flags when dispensing opioids. Consulting firms like McKinsey face claims for advising manufacturers on increasing sales despite knowing addiction risks."
    },
    {
      question: "Do I need to prove my doctor was negligent to win an opioid case?",
      answer: "No, opioid lawsuits typically focus on pharmaceutical company misconduct rather than doctor negligence. The theory is that drug companies deceived both doctors and patients about addiction risks through false marketing claims. Many doctors prescribed opioids believing they were safe based on pharmaceutical company representations. Your case focuses on whether companies failed to adequately warn about known addiction risks or made false safety claims, not whether your doctor made errors."
    },
    {
      question: "Can I sue if I'm currently struggling with active addiction?",
      answer: "Yes, active addiction doesn't prevent filing opioid lawsuits. Continuing addiction may actually strengthen your case by demonstrating the severity and ongoing nature of damages caused by pharmaceutical companies' deceptive practices. Many plaintiffs are in various stages of recovery when filing claims. The key is proving your addiction resulted from prescription opioids that were inadequately warned about, regardless of your current addiction status. Treatment records help establish damages and the addiction's impact on your life."
    },
    {
      question: "What damages can I recover in an opioid lawsuit?",
      answer: "Opioid lawsuit damages include medical expenses for addiction treatment, rehabilitation costs, lost wages and earning capacity, pain and suffering, and in wrongful death cases, funeral expenses and loss of companionship. Treatment costs often include detoxification, inpatient rehabilitation, outpatient counseling, medication-assisted treatment, and ongoing therapy. Lost wages cover both past lost income and reduced future earning capacity due to addiction's impact on career advancement and employment stability."
    },
    {
      question: "How do lawyers prove pharmaceutical companies knew opioids were addictive?",
      answer: "Internal company documents obtained through litigation discovery reveal that pharmaceutical companies knew about addiction risks for decades. These documents show companies received reports of addiction and abuse but continued claiming low addiction risk in marketing materials. Scientific studies known to companies proved addiction potential, but this information was concealed from doctors and patients. FDA communications, internal emails, and company presentations provide evidence of knowledge versus public representations about addiction risks."
    },
    {
      question: "Will filing an opioid lawsuit affect my medical care or treatment?",
      answer: "No, filing a lawsuit shouldn't affect your ongoing medical treatment. Healthcare providers have ethical obligations to provide care regardless of litigation status. However, you should inform your treatment team about any litigation, as they may need to provide records or testimony. Some treatment programs specifically help patients involved in litigation. Your lawsuit may actually help fund better treatment options by securing compensation for comprehensive addiction therapy and support services."
    },
    {
      question: "Can family members recover for their own emotional distress from my addiction?",
      answer: "California law allows certain family members to recover for loss of consortium and emotional distress caused by a spouse or child's opioid addiction. Spouses can claim loss of companionship, affection, and support. Parents may recover for emotional distress from a minor child's addiction. These claims recognize addiction's profound impact on entire families, not just the addicted individual. Compensation addresses the emotional and financial toll on family members who suffered alongside the addicted person."
    },
    {
      question: "What if I also have underlying mental health conditions - does that hurt my case?",
      answer: "Pre-existing mental health conditions don't automatically hurt opioid cases. Many people prescribed opioids had underlying depression, anxiety, or PTSD that made them more vulnerable to addiction. Pharmaceutical companies knew that people with mental health conditions faced higher addiction risks but failed to provide adequate warnings. Your pre-existing conditions may actually strengthen claims by showing you were part of a vulnerable population that deserved special warnings about addiction risks."
    },
    {
      question: "How much compensation should I expect from an opioid lawsuit?",
      answer: "Compensation varies significantly based on individual circumstances including addiction severity, treatment costs, lost income, and whether wrongful death occurred. Settlements range from thousands to millions of dollars. Factors include age, career impact, medical expenses, and strength of liability evidence. While we can't guarantee specific amounts, we fight for maximum compensation based on your unique damages. Free consultation provides realistic case evaluation."
    },
    {
      question: "What's the difference between government opioid settlements and individual lawsuits?",
      answer: "Government settlements compensate public costs like emergency response, law enforcement, and public treatment programs. Individual lawsuits seek compensation for personal damages including medical bills, lost wages, and pain and suffering. Government settlements don't include individual victim compensation. You maintain rights to pursue separate claims regardless of government settlements. Both types of litigation serve different purposes in addressing the opioid crisis's devastating impact."
    },
    {
      question: "Can family members file lawsuits for emotional distress from a loved one's addiction?",
      answer: "California law allows certain family members to recover for loss of consortium and emotional distress caused by a spouse or child's opioid addiction. Spouses can claim loss of companionship, affection, and support. Parents may recover for emotional distress from a minor child's addiction. These claims recognize addiction's profound impact on entire families, not just the addicted individual. Compensation addresses the emotional and financial toll on family members."
    },
    {
      question: "What if I signed an arbitration agreement with my pharmacy?",
      answer: "Arbitration agreements may not prevent opioid lawsuits depending on specific language and circumstances. Many agreements don't cover intentional misconduct or fraud claims common in opioid cases. California courts closely scrutinize arbitration agreements for unconscionability. Even if arbitration applies to pharmacy claims, manufacturers and distributors remain subject to court lawsuits. We review any agreements to determine their impact and identify ways to pursue maximum recovery."
    },
    {
      question: "How do I choose the right opioid litigation attorney?",
      answer: "Look for attorneys with specific opioid litigation experience, resources to battle major corporations, and genuine compassion for addiction victims. Our former defense attorney background provides unique advantages understanding corporate strategies. We offer contingency fees ensuring no upfront costs, have successfully handled complex pharmaceutical cases, and maintain a local California presence while accessing national litigation resources. Free consultation lets you evaluate our fit for your needs without obligation."
    },
    {
      question: "What happens if the defendant pharmaceutical company goes bankrupt during my case?",
      answer: "Bankruptcy doesn't necessarily eliminate your claim. Companies must establish trusts to compensate victims as part of bankruptcy proceedings. We file claims with bankruptcy trusts while pursuing other liable parties not in bankruptcy. Multiple defendants in opioid cases provide alternative recovery sources. Insurance policies may provide coverage despite bankruptcy. We navigate bankruptcy complexities to maximize recovery from all available sources including parent companies, subsidiaries, and insurers."
    },
    {
      question: "Can veterans file opioid lawsuits for VA-prescribed medications?",
      answer: "Veterans can pursue claims against pharmaceutical manufacturers but generally cannot sue the VA directly. The focus remains on drug companies that misrepresented opioid risks to the VA and veterans. Veterans face particularly high opioid prescription rates for service-related injuries and PTSD. Pharmaceutical companies specifically targeted veterans as a vulnerable population. Military service doesn't prevent pursuing rightful compensation from drug manufacturers who caused addiction through deceptive practices."
    },
    {
      question: "What scientific evidence links prescription opioids to addiction?",
      answer: "Extensive scientific research proves prescription opioids' addictive nature including brain imaging showing opioid-induced changes, studies demonstrating physical dependence development within days, evidence that 10-30% of chronic opioid patients develop addiction, research showing 80% of heroin users started with prescriptions, and data proving addiction occurs even with legitimate medical use. Pharmaceutical companies possessed this evidence but concealed it while claiming addiction rates below 1%. Scientific consensus now universally recognizes prescription opioids' high addiction potential."
    },
    {
      question: "How did consulting firms like McKinsey contribute to the opioid crisis?",
      answer: "McKinsey advised Purdue Pharma on 'turbocharging' OxyContin sales through strategies targeting high-prescribing doctors, countering pharmacy restrictions, and minimizing regulatory concerns. They suggested paying rebates for overdoses to maintain pharmacy relationships. Internal documents show McKinsey knew their advice would increase addiction and overdoses but prioritized profits. They helped create marketing messages downplaying addiction risks while maximizing prescriptions. Consulting firms face liability for knowingly facilitating the crisis."
    },
    {
      question: "What if I relapsed after treatment - does that hurt my case?",
      answer: "No, relapse is a recognized part of addiction recovery and doesn't weaken your claim. Medical experts understand addiction is a chronic disease often requiring multiple treatment attempts. Relapse actually demonstrates addiction's serious nature and ongoing impact, potentially increasing damages for continued treatment needs. Pharmaceutical companies can't escape liability by pointing to relapse when their products caused the addiction. We present relapse as evidence of addiction's severity, not personal failure."
    },
    {
      question: "Can I file a lawsuit if I became addicted to opioids prescribed after surgery?",
      answer: "Yes, post-surgical prescriptions are a common pathway to addiction. Pharmaceutical companies marketed opioids as safe for acute post-surgical pain knowing patients could become addicted within days. They failed to warn about addiction risks from short-term use or provide guidance on safe discontinuation. Many surgical patients received excessive quantities of opioids without proper monitoring. The fact that you had legitimate surgical pain doesn't diminish pharmaceutical companies' liability for concealing addiction risks."
    },
    {
      question: "What role did pill mills play in the opioid crisis?",
      answer: "Pill mills - clinics inappropriately prescribing massive quantities of opioids - operated with pharmaceutical companies' knowledge and sometimes support. Drug companies identified high-prescribing doctors and targeted them with marketing, speakers fees, and gifts. Distributors shipped suspicious quantities to pill mill pharmacies without required reporting. While pill mill operators face criminal charges, pharmaceutical companies that enabled them face civil liability for facilitating obvious drug diversion."
    },
    {
      question: "How do California's medical marijuana laws affect opioid lawsuits?",
      answer: "California's marijuana laws don't impact opioid lawsuit validity. Some people use cannabis as an alternative to opioids or to manage withdrawal symptoms. This harm reduction approach doesn't diminish claims against opioid manufacturers. In fact, needing alternative treatments demonstrates ongoing impacts from opioid addiction. Pharmaceutical companies can't avoid liability by pointing to marijuana use when their deceptive practices caused the original addiction requiring alternative treatment approaches."
    },
    {
      question: "Can I sue if I became addicted to tramadol or other 'weaker' opioids?",
      answer: "Yes, all opioids including tramadol, codeine, and hydrocodone can cause addiction deserving compensation. Pharmaceutical companies falsely marketed these as 'safer' alternatives while downplaying addiction risks. Many people started with supposedly weaker opioids before progressing to stronger medications or street drugs. The artificial distinction between opioid strengths was part of deceptive marketing. Any opioid addiction caused by inadequate warnings creates potential liability regardless of the specific medication's perceived strength."
    },
    {
      question: "What if my insurance company paid for my opioid prescriptions?",
      answer: "Insurance payment for prescriptions doesn't affect your right to sue pharmaceutical companies. Your insurer may have subrogation rights to recover their costs from your settlement, but this doesn't prevent your lawsuit. We negotiate with insurance companies to minimize reimbursement obligations and maximize your net recovery. Insurance coverage actually helps document your prescription history and medical costs. Don't let insurance involvement discourage you from pursuing rightful compensation."
    },
    {
      question: "How do I know if my case is strong enough to pursue?",
      answer: "The best way to evaluate case strength is through free consultation with experienced opioid litigation attorneys. Generally, strong cases involve documented opioid prescriptions, evidence of addiction or dependence, medical treatment for addiction, and damages like medical costs or lost wages. However, even cases with limited documentation may be viable. We evaluate factors including prescription history, addiction severity, treatment efforts, and available defendants. Don't self-evaluate - let experienced attorneys assess your case's potential at no cost."
    },
    {
      question: "Can nursing home residents or their families sue for inappropriate opioid prescribing?",
      answer: "Yes, elderly nursing home residents were particularly vulnerable to inappropriate opioid prescribing. Facilities often used opioids for behavior control rather than pain management. Pharmaceutical companies specifically marketed opioids for elderly patients despite higher risks of adverse effects, falls, and complications. Families can pursue claims for deceased residents who suffered from inappropriate opioid use. These cases may involve both pharmaceutical liability and nursing home negligence claims."
    },
    {
      question: "What if I was prescribed opioids for chronic pain that turned out to be from an undiagnosed condition?",
      answer: "Misdiagnosed or undiagnosed conditions leading to inappropriate opioid prescriptions strengthen liability claims. Pharmaceutical companies promoted opioids as first-line treatment for chronic pain without adequate diagnosis. They encouraged prescribing without identifying pain sources, leading to addiction without addressing underlying conditions. The fact that opioids masked symptoms while causing addiction increases damages. Both pharmaceutical companies and potentially negligent healthcare providers may face liability for prescribing addictive drugs without proper diagnosis."
    },
    {
      question: "How did pharmaceutical companies influence medical education about opioids?",
      answer: "Drug companies systematically corrupted medical education through funding biased continuing medical education (CME) programs, influencing pain management guidelines, placing marketing messages in medical textbooks, training doctors to dismiss addiction concerns as 'pseudoaddiction,' and promoting unproven concepts like 'breakthrough pain' requiring more opioids. They created an entire false narrative about pain as the 'fifth vital sign' requiring aggressive opioid treatment. This comprehensive manipulation of medical education affected an entire generation of doctors."
    },
    {
      question: "Can I file a lawsuit if I became addicted to opioids as a teenager?",
      answer: "Yes, teenage opioid addiction cases often involve enhanced liability due to minors' vulnerability. California extends statute of limitations for minors, potentially allowing claims years later. Pharmaceutical companies knew adolescent brains were particularly susceptible to addiction but failed to provide adequate warnings. Teen addiction often leads to lifelong struggles, interrupted education, and derailed career prospects, justifying substantial damages. Parents may also have claims for emotional distress and economic losses from their child's addiction."
    },
    {
      question: "What if the doctor who prescribed my opioids lost their license or faced criminal charges?",
      answer: "Doctor discipline or criminal charges strengthen claims against pharmaceutical companies who enabled and encouraged inappropriate prescribing. Drug companies identified high-prescribing doctors, including those later disciplined, and specifically targeted them with marketing and incentives. They knew or should have known about problematic prescribing but prioritized sales. Criminal prosecution of doctors doesn't absolve pharmaceutical companies who created the environment enabling pill mills and inappropriate prescribing through deceptive marketing."
    },
    {
      question: "How do I handle the emotional difficulty of pursuing an opioid lawsuit?",
      answer: "We understand opioid litigation involves painful memories and ongoing trauma. Our compassionate approach minimizes emotional burden while pursuing justice. We handle all legal complexities, allowing you to focus on recovery and healing. Many clients find pursuing accountability therapeutic, transforming victimization into empowerment. We work with clients in recovery, respecting boundaries and treatment needs. Support from family, therapists, and support groups helps manage litigation stress. Remember, seeking justice helps prevent others from suffering similar harm."
    },
    {
      question: "Can I still file a lawsuit if I signed a settlement with one opioid company?",
      answer: "Previous settlements with one defendant don't necessarily prevent claims against others. Many defendants exist in the opioid supply chain - manufacturers, distributors, pharmacies, and consultants. Settlement terms vary, and some explicitly preserve rights against other parties. We review any prior settlements to determine remaining options. Even with some defendants settled, substantial recovery may remain available from others. Multiple responsible parties mean one settlement rarely resolves all potential claims."
    },
    {
      question: "What protections exist for my privacy during an opioid lawsuit?",
      answer: "Courts recognize the sensitive nature of addiction-related litigation and provide privacy protections. Many cases proceed with pseudonyms or initials protecting identity. Protective orders limit disclosure of medical and personal information. Settlements often include confidentiality provisions. We take extensive measures protecting client privacy while pursuing claims. Addiction stigma shouldn't prevent seeking deserved compensation. Most cases resolve without public trial, and even trial proceedings can include privacy protections for sensitive information."
    },
    {
      question: "How does California's legalization of recreational marijuana affect opioid cases?",
      answer: "Marijuana legalization has no negative impact on opioid litigation. Some people use cannabis as an opioid alternative or for managing chronic pain without addiction risks. This harm reduction approach doesn't diminish opioid manufacturers' liability for causing addiction through deceptive practices. Courts recognize that seeking alternative pain management after opioid addiction demonstrates good faith efforts at recovery. Pharmaceutical companies cannot escape responsibility by pointing to legal marijuana use."
    },
    {
      question: "What should I do if I'm contacted by pharmaceutical company representatives?",
      answer: "Don't speak with pharmaceutical company representatives, investigators, or attorneys without your own lawyer present. They may seek statements undermining your claim or offer inadequate settlements. Refer all contacts to your attorney. Don't sign any documents or accept any payments without legal review. Insurance adjusters and corporate representatives protect company interests, not yours. Having experienced legal representation ensures your rights are protected and communications are handled appropriately. Contact us immediately if approached by anyone representing pharmaceutical defendants."
    }
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
    window.location.href = '/opioid-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Component */}
      <GoBack fallbackPath="/practice-areas" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Opioid Litigation Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting Big Pharma for Victims</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/opioid-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Opioid Crisis Legal Action</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>The opioid epidemic represents one of the most devastating public health crises in American history, with pharmaceutical companies deliberately misleading healthcare providers and patients about addiction risks while flooding communities with dangerous narcotics.</strong> Over 1 million Americans have died from opioid overdoses since the 1990s, with California experiencing particularly devastating impacts from this manufactured crisis.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our firm stands at the forefront of holding pharmaceutical giants accountable for their role in creating and perpetuating the opioid epidemic. As a former defense attorney who previously represented insurance companies and corporations, I bring unique insider knowledge about how these companies operate, their defense strategies, and most importantly, how to defeat them. This experience gives our clients a significant advantage in pursuing maximum compensation for the harm caused by opioid manufacturers, distributors, and retailers.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Opioid Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p>
                      California has secured over $4.25 billion in opioid settlements to date, with funds designated for treatment, prevention, and supporting affected families. However, individual victims and families who have suffered from opioid addiction, overdose deaths, or related harms maintain the right to pursue separate legal action against responsible parties. The pharmaceutical industry's decades-long campaign of deception, which included aggressive marketing, falsified safety claims, and deliberate concealment of addiction risks, created widespread addiction affecting millions of Californians.
                    </p>
                    
                    <p>
                      The scope of pharmaceutical misconduct extends far beyond simple negligence. Internal documents revealed through litigation show that companies like Purdue Pharma, Johnson & Johnson, and others knew their products were highly addictive yet deliberately marketed them as safe for long-term use. They funded fake patient advocacy groups, paid doctors to promote opioids, and created misleading educational materials that downplayed addiction risks while exaggerating benefits.
                    </p>
                    
                    <p>
                      Distribution companies including McKesson, Cardinal Health, and AmerisourceBergen failed in their legal duty to monitor and report suspicious orders, allowing billions of pills to flood communities. Pharmacy chains like CVS, Walgreens, and Walmart ignored obvious red flags while filling prescriptions that clearly indicated drug diversion and abuse. This systemic failure at every level of the supply chain demands accountability.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Addiction Understanding
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team works closely with leading addiction specialists throughout California to understand the full scope of opioid addiction, treatment needs, and recovery challenges.</p>
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
                        <p>We have extensive knowledge of California's opioid crisis impact, including distribution patterns, pill mills, and the specific pharmaceutical companies that targeted California communities.</p>
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
                          <h4 className="font-semibold">Urgent Action</h4>
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
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Case Type</label>
                      <Select value={formData.caseType} onValueChange={(value) => setFormData(prev => ({ ...prev, caseType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal-addiction">Personal Opioid Addiction</SelectItem>
                          <SelectItem value="wrongful-death">Wrongful Death - Overdose</SelectItem>
                          <SelectItem value="neonatal-abstinence">Neonatal Abstinence Syndrome</SelectItem>
                          <SelectItem value="family-member">Family Member Addiction</SelectItem>
                          <SelectItem value="other">Other Opioid Harm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Opioid Medication</label>
                      <Input
                        type="text"
                        value={formData.medication}
                        onChange={(e) => setFormData(prev => ({ ...prev, medication: e.target.value }))}
                        placeholder="e.g., OxyContin, Percocet"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Addiction */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Opioid Addiction Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Seek professional addiction treatment immediately</p>
                    <p>• Consider medication-assisted treatment (MAT)</p>
                    <p>• Join support groups and counseling programs</p>
                    <p>• Document all treatment and medical expenses</p>
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
                    <p>• Contact an experienced opioid litigation attorney immediately</p>
                    <p>• Gather prescription records and medical documentation</p>
                    <p>• Document all addiction-related expenses and losses</p>
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
                      Time is critical after recognizing opioid addiction. While the stigma and shame can be overwhelming, taking immediate action can significantly impact both your recovery success and legal rights.
                    </p>
                    
                    <h4>1. Secure Expert Addiction Care</h4>
                    <p>
                      Opioid addiction is a complex medical condition requiring specialized treatment. Seek treatment at certified addiction centers or with addiction medicine specialists such as:
                    </p>
                    <ul>
                      <li>UCLA Integrated Substance Abuse Programs</li>
                      <li>UCSF Addiction Medicine</li>
                      <li>Cedars-Sinai Addiction Medicine</li>
                      <li>California addiction treatment centers</li>
                    </ul>
                    
                    <h4>2. Understand Treatment Options</h4>
                    <p>
                      Modern addiction treatment includes multiple evidence-based approaches:
                    </p>
                    <ul>
                      <li><strong>Medication-Assisted Treatment (MAT):</strong> Methadone, buprenorphine, or naltrexone</li>
                      <li><strong>Behavioral Therapy:</strong> Cognitive-behavioral therapy and counseling</li>
                      <li><strong>Support Groups:</strong> Narcotics Anonymous, SMART Recovery</li>
                      <li><strong>Inpatient Treatment:</strong> Residential rehabilitation programs</li>
                    </ul>
                    
                    <h3>Legal Priority Actions</h3>
                    
                    <h4>1. Contact an Attorney Immediately</h4>
                    <p>
                      California has strict time limits for filing opioid claims. Evidence becomes harder to obtain as time passes, and pharmaceutical companies actively destroy documents. An experienced attorney can:
                    </p>
                    <ul>
                      <li>Investigate your prescription history</li>
                      <li>Identify all potentially liable companies</li>
                      <li>Preserve important evidence</li>
                      <li>File necessary legal paperwork</li>
                      <li>Begin the compensation process</li>
                    </ul>
                    
                    <h4>2. Gather Important Documents</h4>
                    <p>Start collecting documents that help establish your opioid exposure and addiction:</p>
                    <ul>
                      <li>All prescription records and pharmacy receipts</li>
                      <li>Medical records showing addiction diagnosis</li>
                      <li>Treatment records and rehabilitation programs</li>
                      <li>Employment records showing lost work</li>
                      <li>Insurance claims for addiction treatment</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Diagnosis Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Opioid Addiction Diagnosis</h2>
              
              <div className="mb-6">
                <img 
                  src={diagnosisImage} 
                  alt="Opioid addiction diagnosis process in California medical facilities" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Opioid addiction diagnosis often involves recognizing patterns of compulsive use, tolerance development, and withdrawal symptoms. Understanding the diagnostic criteria helps ensure proper treatment and establishes the medical foundation for legal claims.
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
                    <h3>Diagnostic Criteria for Opioid Use Disorder</h3>
                    <p>
                      Medical professionals use standardized criteria to diagnose opioid use disorder, including:
                    </p>
                    
                    <h4>Behavioral and Physical Signs:</h4>
                    <ul>
                      <li>Taking opioids in larger amounts or longer than intended</li>
                      <li>Unsuccessful efforts to cut down or control use</li>
                      <li>Spending significant time obtaining, using, or recovering from opioids</li>
                      <li>Craving or strong desire to use opioids</li>
                      <li>Continued use despite negative consequences</li>
                      <li>Tolerance (needing more to achieve same effect)</li>
                      <li>Withdrawal symptoms when stopping</li>
                    </ul>
                    
                    <h3>Medical Assessment Process</h3>
                    
                    <h4>1. Clinical Interview</h4>
                    <p>Healthcare providers conduct comprehensive interviews covering:</p>
                    <ul>
                      <li>Prescription history and progression of use</li>
                      <li>Patterns of use and escalation</li>
                      <li>Previous treatment attempts</li>
                      <li>Family history of addiction</li>
                      <li>Mental health conditions</li>
                    </ul>
                    
                    <h4>2. Physical Examination</h4>
                    <p>Medical examination may reveal signs of opioid use including:</p>
                    <ul>
                      <li>Track marks or injection sites</li>
                      <li>Constricted pupils</li>
                      <li>Respiratory depression</li>
                      <li>Signs of withdrawal</li>
                    </ul>
                    
                    <h4>3. Laboratory Testing</h4>
                    <p>Urine, blood, or saliva tests can detect:</p>
                    <ul>
                      <li>Presence of opioids and metabolites</li>
                      <li>Other substances of abuse</li>
                      <li>General health markers</li>
                    </ul>
                    
                    <h3>Severity Assessment</h3>
                    <p>Opioid use disorder is classified by severity:</p>
                    <ul>
                      <li><strong>Mild:</strong> 2-3 criteria present</li>
                      <li><strong>Moderate:</strong> 4-5 criteria present</li>
                      <li><strong>Severe:</strong> 6 or more criteria present</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Opioid Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for opioid litigation" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for opioid-related harm. California and federal courts provide multiple avenues for recovery against pharmaceutical companies, distributors, and retailers.
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
                    <h3>Types of Legal Claims</h3>
                    
                    <h4>1. Personal Injury Claims</h4>
                    <p>
                      Individuals who became addicted to prescription opioids can pursue compensation for medical expenses, rehabilitation costs, lost wages, and pain and suffering. These claims apply whether addiction began with legitimate prescriptions or progressed from prescription opioids to street drugs.
                    </p>
                    
                    <h4>2. Wrongful Death Claims</h4>
                    <p>
                      Families who lost loved ones to opioid overdoses have two years from the date of death to file wrongful death lawsuits. These claims seek compensation for funeral expenses, lost financial support, and loss of companionship.
                    </p>
                    
                    <h4>3. Consumer Protection Claims</h4>
                    <p>
                      Patients prescribed opioids based on false marketing claims can pursue consumer fraud lawsuits. These claims don't require proof of addiction, only that pharmaceutical companies engaged in deceptive business practices.
                    </p>
                    
                    <h3>Major Defendants</h3>
                    
                    <h4>Manufacturers</h4>
                    <ul>
                      <li>Purdue Pharma (OxyContin)</li>
                      <li>Johnson & Johnson</li>
                      <li>Teva Pharmaceuticals</li>
                      <li>Endo Pharmaceuticals</li>
                      <li>Mallinckrodt</li>
                    </ul>
                    
                    <h4>Distributors</h4>
                    <ul>
                      <li>McKesson Corporation</li>
                      <li>Cardinal Health</li>
                      <li>AmerisourceBergen</li>
                    </ul>
                    
                    <h4>Pharmacy Chains</h4>
                    <ul>
                      <li>CVS Health</li>
                      <li>Walgreens</li>
                      <li>Walmart</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-muted-foreground/20 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left bg-muted/50 hover:bg-muted transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium text-lg pr-4">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-background">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Resources & Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto p-4"
                      onClick={() => window.location.href = '/opioid-calculator'}
                    >
                      <div>
                        <div className="font-semibold">Compensation Calculator</div>
                        <div className="text-sm text-muted-foreground">Estimate your potential damages</div>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto p-4"
                      onClick={() => window.location.href = '/opioid-legal-guidance'}
                    >
                      <div>
                        <div className="font-semibold">Legal Guidance</div>
                        <div className="text-sm text-muted-foreground">Understand your legal rights</div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Treatment Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto p-4"
                      onClick={() => window.location.href = '/opioid-medical-guidance'}
                    >
                      <div>
                        <div className="font-semibold">Medical Guidance</div>
                        <div className="text-sm text-muted-foreground">Treatment and recovery resources</div>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto p-4"
                      onClick={() => window.location.href = '/opioid-education'}
                    >
                      <div>
                        <div className="font-semibold">Crisis Education</div>
                        <div className="text-sm text-muted-foreground">Learn about the opioid epidemic</div>
                      </div>
                    </Button>
                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground">Emergency: SAMHSA Helpline 1-800-662-4357</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section mb-12 bg-red-50 border-l-4 border-red-600">
              <div className="p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Don't Wait - Time Limits Apply for California</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            California law imposes strict time limits on opioid litigation claims. The statute of limitations can be as short as two years from discovery of the connection between prescription opioids and addiction. Evidence degrades over time, witnesses become unavailable, and pharmaceutical companies actively destroy documents after certain periods.
          </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = '/opioid-case-evaluation'}
                  >
                    START MY FREE CASE EVALUATION
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold px-8 py-4"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    CALL NOW (818) 123-4567
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${medicalImage})` }}>
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
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
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
                      onClick={() => window.location.href = '/opioid-case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Facts Card */}
              <Card className="mt-6 p-6">
                <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-primary mr-2" />
                    <span>Over 1 million opioid deaths since 1990s</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    <span>$50+ billion in national settlements</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    <span>Former defense attorney advantage</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-primary mr-2" />
                    <span>No fees unless we win</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits 
Apply for California Opioid Claims</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law provides limited time to file your opioid lawsuit claim. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/opioid-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpioidLitigation;