import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MedicalHeroScene } from '@/components/three/MedicalHeroScene';
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
  ArrowLeft,
  Baby,
  Brain,
  Activity
} from 'lucide-react';
import heroBackground from '@/assets/birth-injuries-hero-bg.jpg';
import sidebarImage from '@/assets/birth-injuries-sidebar.jpg';
import diagnosisImage from '@/assets/birth-injuries-diagnosis-process.jpg';
import legalProcessImage from '@/assets/birth-injuries-legal-process.jpg';
import medicalImage from '@/assets/birth-injuries-medical-facility.jpg';
import compensationImage from '@/assets/birth-injuries-compensation-calculator.jpg';
import conditionsImage from '@/assets/birth-injuries-conditions.jpg';
import provingNegligenceImage from '@/assets/birth-injuries-proving-negligence.jpg';
import resourcesImage from '@/assets/birth-injuries-resources.jpg';
import { useScrollMemory } from '@/hooks/useScrollMemory';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BirthInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    diagnosisDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO AFTER INJURY', icon: Stethoscope },
    { id: 'injury-types', label: 'INJURY TYPES', icon: Heart },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: Award },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animation with 3D effects
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, y: 100, scale: 0.8, rotationX: 15 });
        gsap.to(heroContent, { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.5
        });

        // Animate hero elements individually
        const title = heroContent.querySelector('h1');
        const stars = heroContent.querySelector('.flex');
        const button = heroContent.querySelector('button');

        if (title) {
          gsap.fromTo(title, 
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out', delay: 0.7 }
          );
        }

        if (stars) {
          gsap.fromTo(stars, 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.9 }
          );
        }

        if (button) {
          gsap.fromTo(button, 
            { opacity: 0, y: 30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.1 }
          );
        }
      }

      // Enhanced content sections animation with stagger and 3D effects
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections,
          { 
            opacity: 0, 
            y: 60, 
            scale: 0.95,
            rotationX: 10,
            transformPerspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animate cards with hover effects
      const cards = document.querySelectorAll('.card, .medical-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.9,
            rotationY: 10
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );

        // Add magnetic hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            rotationY: 5,
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotationY: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Animate sidebar with floating effect
      const sidebar = document.querySelector('.sidebar-sticky');
      if (sidebar) {
        gsap.fromTo(sidebar,
          { opacity: 0, x: 50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sidebar,
              start: 'top 70%'
            }
          }
        );

        // Add subtle floating animation
        gsap.to(sidebar, {
          y: -5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
      }

      // Animate FAQ items
      const faqItems = document.querySelectorAll('[data-state="closed"], [data-state="open"]');
      faqItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 95%'
            },
            delay: index * 0.1
          }
        );
      });

      // Animate buttons with pulse effect
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.out'
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          });
        });
      });

      // Parallax effect for images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });

    // Go Back button scroll visibility
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
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
    window.location.href = '/birth-injuries/case-evaluation';
  };

  const handleGoBack = () => {
    const savedPosition = sessionStorage.getItem('birth-injuries-scroll-position');
    if (savedPosition) {
      sessionStorage.removeItem('birth-injuries-scroll-position');
    }
    window.history.back();
  };

  // Extended FAQ data from HTML file (25+ questions shown)
  const faqData = [
    {
      question: "What is a birth injury and how do I know if my child has one?",
      answer: "A birth injury is physical damage to a baby that occurs during pregnancy, labor, delivery, or shortly after birth. Signs include difficulty breathing, seizures, weak muscle tone, excessive crying, difficulty feeding, or developmental delays. If your child shows any unusual symptoms or was diagnosed with conditions like cerebral palsy, HIE, or Erb's palsy, you may have a birth injury case. Immediate medical evaluation is crucial, and consulting with a birth injury attorney can help determine if medical negligence was involved."
    },
    {
      question: "How much does it cost to hire a birth injury lawyer in California?",
      answer: "Nothing upfront. We work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. Our fee is typically 33-40% of the settlement or verdict amount. We advance all costs including medical expert fees, court filing fees, and investigation expenses. You never pay out of pocket, and if we don't win, you owe us nothing. This ensures every family can afford quality legal representation regardless of their financial situation."
    },
    {
      question: "What is the statute of limitations for birth injury cases in California?",
      answer: "In California, you generally have until your child's 8th birthday to file a birth injury lawsuit, though claims should be filed within 3 years of discovering the injury. For minors under 6, you have 3 years from the injury or before the child's 8th birthday, whichever is longer. However, it's critical to contact an attorney immediately as evidence can be lost and witnesses' memories fade. Some exceptions may apply, and government entity claims require notice within 6 months."
    },
    {
      question: "Can I sue for cerebral palsy caused during birth?",
      answer: "Yes, if cerebral palsy resulted from medical negligence during pregnancy, labor, or delivery. Common causes include delayed C-sections, failure to monitor fetal distress, improper use of delivery tools, or failure to treat infections. Not all cerebral palsy is from malpractice - about 85-90% occurs at birth, and many cases involve preventable medical errors. We work with medical experts to determine if proper care would have prevented your child's CP."
    },
    {
      question: "What compensation can I receive for my child's birth injury?",
      answer: "Compensation typically includes: past and future medical expenses, rehabilitation and therapy costs, special education needs, medical equipment and home modifications, lost wages for caregiving parents, pain and suffering, loss of enjoyment of life, and in severe cases, lifetime care costs. California has no caps on birth injury damages. Compensation often ranges from hundreds of thousands to multiple millions depending on injury severity and lifetime care needs."
    },
    {
      question: "How long does a birth injury lawsuit take?",
      answer: "Most birth injury cases settle within 1-3 years, though complex cases may take longer. Timeline depends on injury severity, liability clarity, and defendant cooperation. Cases requiring trial typically take 2-4 years. We work efficiently to resolve cases quickly while ensuring maximum compensation. Some cases with clear liability and severe injuries may settle faster. Throughout the process, we can help arrange medical care on lien so your child gets needed treatment immediately."
    },
    {
      question: "What is HIE and can it be prevented?",
      answer: "Hypoxic-Ischemic Encephalopathy (HIE) is brain damage from lack of oxygen and blood flow during birth. Many cases are preventable with proper fetal monitoring, timely C-sections, and appropriate response to complications. Warning signs include abnormal heart rate, meconium, and prolonged labor. Immediate cooling therapy within 6 hours can minimize damage. If medical staff failed to recognize or respond to these signs, you may have a malpractice case."
    },
    {
      question: "What is shoulder dystocia and why is it dangerous?",
      answer: "Shoulder dystocia occurs when a baby's shoulder gets stuck behind the mother's pelvic bone during delivery. It's a medical emergency requiring specific maneuvers to free the baby without injury. Excessive pulling can cause brachial plexus injuries (Erb's palsy), while delays can cause oxygen deprivation leading to brain damage or death. Risk factors include large babies, maternal diabetes, and prolonged labor. Proper technique is critical to prevent permanent injury."
    },
    {
      question: "Can vacuum or forceps delivery cause brain damage?",
      answer: "Yes, improper use of vacuum extractors or forceps can cause serious injuries including brain bleeds, skull fractures, nerve damage, and HIE from prolonged delivery. These tools require specific training and should only be used when necessary. Excessive force, incorrect placement, or too many attempts violate medical standards. Injuries include cephalohematoma, intracranial hemorrhage, and facial nerve palsy. If your baby was injured by delivery instruments, the doctor may have used excessive force or poor technique."
    },
    {
      question: "What is therapeutic hypothermia (cooling therapy) for HIE?",
      answer: "Cooling therapy involves lowering a baby's body temperature to 33-34°C for 72 hours after birth to minimize brain damage from HIE. It must start within 6 hours of birth to be effective. This treatment can significantly reduce death and disability rates. If your baby had HIE but didn't receive cooling therapy, or if it was delayed, this may constitute malpractice. Not all hospitals have cooling capabilities, and failure to transfer to equipped facilities quickly can be negligent."
    },
    {
      question: "Can I sue individual doctors or just the hospital?",
      answer: "You can potentially sue multiple parties including: the delivering physician, attending nurses, anesthesiologist, residents/medical students, the hospital itself, and medical groups. Hospitals are typically liable for employee negligence and systemic failures. Individual doctors carry malpractice insurance. We identify all responsible parties to maximize compensation sources. Often, multiple defendants mean multiple insurance policies, increasing available compensation for your child's needs."
    },
    {
      question: "What if the doctor says the injury was unavoidable?",
      answer: "Don't accept this without independent review. While some complications are truly unavoidable, many 'unavoidable' injuries actually result from medical errors. Doctors rarely admit mistakes due to liability concerns. Common excuses include 'the baby was too big,' 'labor progressed too quickly,' or 'we did everything right.' Our medical experts can determine whether proper monitoring, timely intervention, or different decisions could have prevented the injury. You deserve an honest, independent assessment."
    },
    {
      question: "How do I pay for my child's medical care while the case is pending?",
      answer: "Several options exist: health insurance should cover immediate needs, California Children's Services (CCS) provides care for eligible children, Regional Centers offer services for developmental disabilities, and many providers accept liens (payment from settlement). We can connect you with doctors who treat on lien basis. Don't delay necessary treatment due to cost concerns. Document all expenses as they strengthen your damage claim. Medi-Cal may also provide coverage with right to reimbursement from settlement."
    },
    {
      question: "What are the early signs of cerebral palsy in infants?",
      answer: "Early signs include: missing developmental milestones (rolling, sitting, crawling), abnormal muscle tone (too stiff or floppy), favoring one side of body, difficulty feeding or swallowing, excessive drooling, delayed speech, abnormal reflexes, and seizures. Symptoms may not appear immediately - some children aren't diagnosed until age 2-3. If you notice any delays or abnormalities, seek evaluation immediately. Early intervention improves outcomes, and documentation helps establish timeline for legal cases."
    },
    {
      question: "What is meconium aspiration syndrome?",
      answer: "Meconium aspiration occurs when a baby breathes in meconium (first stool) mixed with amniotic fluid during delivery. This can block airways and cause respiratory distress, pneumonia, or death. Presence of meconium requires immediate suctioning before the first breath. Failure to properly manage meconium, especially thick meconium with fetal distress, can be malpractice. Complications include persistent pulmonary hypertension and need for ECMO (heart-lung machine). Proper monitoring and quick response are essential."
    },
    {
      question: "Can Pitocin cause birth injuries?",
      answer: "Yes, Pitocin (synthetic oxytocin) used to induce or augment labor can cause complications if misused. Too much Pitocin causes excessive contractions (tachysystole) that reduce oxygen to baby, potentially causing HIE or death. It can also cause uterine rupture, placental abruption, and fetal distress. Proper monitoring is essential, and Pitocin should be reduced or stopped if problems arise. Failure to properly monitor or respond to Pitocin complications is medical negligence."
    },
    {
      question: "What is kernicterus and is it preventable?",
      answer: "Kernicterus is brain damage from untreated severe jaundice (high bilirubin). It's completely preventable with proper monitoring and treatment. All newborns should be checked for jaundice before discharge and at follow-up visits. Treatment with phototherapy (light therapy) or exchange transfusion prevents kernicterus. Failure to test bilirubin levels, recognize risk factors, or treat elevated levels is malpractice. Kernicterus causes cerebral palsy, hearing loss, vision problems, and intellectual disabilities - all preventable with proper care."
    },
    {
      question: "Can infections during pregnancy cause birth injuries?",
      answer: "Yes, untreated maternal infections can cause serious birth injuries. Group B Strep (GBS), chorioamnionitis, herpes, and other infections can cause brain damage, cerebral palsy, or death. Standard care requires screening for GBS at 35-37 weeks and giving antibiotics during labor if positive. Failure to screen, diagnose, or treat infections is malpractice. Signs of infection include maternal fever, foul-smelling amniotic fluid, and elevated white blood cells. Prompt treatment usually prevents injury."
    },
    {
      question: "What is placental abruption and how does it cause injury?",
      answer: "Placental abruption occurs when the placenta separates from the uterine wall before delivery, cutting off baby's oxygen supply. It's a medical emergency requiring immediate C-section. Warning signs include vaginal bleeding, abdominal pain, and contractions. Risk factors include high blood pressure, trauma, and cocaine use. Delay in diagnosis or delivery can cause HIE, cerebral palsy, or death. Proper monitoring and quick response are critical. Failure to recognize symptoms or perform emergency C-section may be malpractice."
    },
    {
      question: "What is umbilical cord prolapse?",
      answer: "Cord prolapse occurs when the umbilical cord drops through the cervix before the baby, getting compressed and cutting off oxygen. It's a true emergency requiring immediate C-section - every minute counts. Risk factors include breech position, polyhydramnios, and premature rupture of membranes. Medical staff must recognize prolapse immediately through vaginal exam or fetal monitoring showing severe bradycardia. Delays in diagnosis or delivery causing brain damage constitute malpractice. Proper positioning and immediate surgery can prevent injury."
    },
    {
      question: "Can a delayed C-section cause brain damage?",
      answer: "Yes, delays in performing necessary C-sections are a leading cause of preventable birth injuries. When fetal distress signs appear (abnormal heart rate, meconium, prolonged labor), quick delivery is essential. The '30-minute rule' suggests emergency C-sections should occur within 30 minutes of decision. Delays from inadequate staffing, unavailable anesthesiologist, or poor communication can cause HIE, cerebral palsy, or death. If your baby showed distress signs but C-section was delayed, you likely have a strong malpractice case."
    },
    {
      question: "Do I need to report the birth injury to anyone?",
      answer: "While not legally required, you should: document everything with your pediatrician, report to your insurance company (health insurance, not the hospital's), consider filing a complaint with the California Medical Board if you suspect negligence, and report to the hospital's risk management (but don't sign anything). Most importantly, consult a birth injury attorney immediately to protect your rights. We can help with proper reporting while preserving your legal claims. Don't discuss fault or accept blame."
    },
    {
      question: "Will filing a lawsuit affect my relationship with my doctors?",
      answer: "You can continue seeing doctors you trust while suing others involved in the injury. Most pediatricians and specialists understand parents seeking accountability for malpractice. If you're uncomfortable, you can change providers - California has many excellent doctors. The lawsuit targets those responsible for the injury, not your entire medical team. Your child's ongoing care is separate from the legal case. We can recommend supportive doctors who understand birth injury cases and won't judge your decision to seek justice."
    },
    {
      question: "Can I get a second medical opinion about the birth injury?",
      answer: "Absolutely, and you should. Independent doctors can provide honest assessments without hospital liability concerns. Seek specialists in pediatric neurology, developmental pediatrics, or rehabilitation medicine. Many parents discover through second opinions that injuries were preventable despite being told otherwise. We can recommend independent experts who can evaluate your child and review records. Second opinions are valuable for both medical treatment and legal cases. Your insurance typically covers second opinion consultations."
    },
    {
      question: "What if I can't afford a medical expert for my case?",
      answer: "You don't pay for experts - we do. As part of our contingency fee arrangement, we advance all costs including medical expert fees, which often total $50,000-$100,000+ in birth injury cases. We have relationships with top experts nationwide in obstetrics, neonatology, neurology, and other specialties. These costs are reimbursed from your settlement or verdict. If we don't win, you owe nothing for these expenses. This ensures every family can afford the best experts regardless of financial situation."
    },
    {
      question: "Will my case go to trial or settle out of court?",
      answer: "About 95% of birth injury cases settle without trial, but we prepare every case for trial. This preparation is what drives good settlements - insurance companies know we'll go to trial if needed. Settlement is usually faster and guarantees compensation, while trials risk losing but can yield higher awards. We'll advise you on the best path based on your case specifics. The decision to settle or go to trial is always yours, and we support whatever you choose."
    }
  ];

  return (
    <div className="min-h-screen bg-background medical-hero-container medical-parallax">
      {/* Go Back Button - Fixed position with fade-in */}
      <div 
        className={`fixed top-20 left-6 z-50 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="medical-button flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* 3D Medical Scene Background */}
        <div className="absolute inset-0 z-0">
          <MedicalHeroScene />
        </div>
        
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        <div className="relative z-30 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              California Birth Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 drop-shadow-lg" />
              ))}
              <span className="ml-2 text-lg drop-shadow-lg">Fighting for Your Baby's Future</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/30 backdrop-blur-sm border-t border-white/20">
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
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Birth Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  When medical negligence harms your baby during childbirth, we fight for justice and your child's future care. If you or your loved one has experienced a birth injury in California, you're facing one of the most challenging situations any family can endure. These devastating injuries are often preventable with proper medical care, and those responsible should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency and emotional impact of birth injury cases. With extensive experience in California medical malpractice and a deep understanding of obstetric standards of care, we're prepared to fight for maximum compensation while you focus on your child's immediate medical needs and family time.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary hover:text-primary border-primary hover:bg-primary hover:text-white">
                    Learn More About Our California Birth Injury Practice
                    {expandedSections.overview ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
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
                        <p>Our team works closely with leading neonatologists and birth injury specialists throughout California to understand the full scope of your child's condition, prognosis, and treatment needs.</p>
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
                        <p>We have extensive knowledge of California's major medical centers, including UCLA, Cedars-Sinai, UCSF, and other hospitals where birth injuries occur due to negligent care.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Birth Injury Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending medical facilities provides unique insights into hospital defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expedited Process</h4>
                          <p className="text-sm text-muted-foreground">We understand families need immediate support and work to secure compensation as quickly as possible.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey during this difficult time.</p>
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
                    <h3>Comprehensive California Birth Injury Representation</h3>
                    <p>
                      Birth injury cases in California involve complex medical, legal, and emotional factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of negligence to working with medical experts who can clearly explain how preventable errors caused your child's injury.
                    </p>
                    
                    <p>
                      California has world-renowned medical facilities, but even prestigious hospitals make preventable mistakes. We investigate cases at major facilities including:
                    </p>
                    
                    <ul>
                      <li>UCLA Medical Center and Ronald Reagan UCLA Medical Center</li>
                      <li>Cedars-Sinai Medical Center</li>
                      <li>UCSF Benioff Children's Hospitals</li>
                      <li>Stanford Children's Health hospitals</li>
                      <li>Kaiser Permanente facilities statewide</li>
                      <li>Community and regional medical centers</li>
                    </ul>
                    
                    <p>
                      We investigate every aspect of your delivery to ensure no liable party escapes responsibility. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue all available sources of recovery.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Free Birth Injury Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-lg">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">When did the injury occur?</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Birth Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
                          <SelectItem value="hie">HIE (Hypoxic-Ischemic Encephalopathy)</SelectItem>
                          <SelectItem value="erbs-palsy">Erb's Palsy</SelectItem>
                          <SelectItem value="shoulder-dystocia">Shoulder Dystocia</SelectItem>
                          <SelectItem value="birth-asphyxia">Birth Asphyxia</SelectItem>
                          <SelectItem value="kernicterus">Kernicterus</SelectItem>
                          <SelectItem value="other">Other Birth Injury</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Birth Injury */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">What to Do After a Birth Injury</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <Card className="medical-card glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 immediate-steps-theme medical-glow">
                   <CardHeader>
                     <CardTitle className="medical-3d-text flex items-center group-hover:text-primary transition-colors text-lg">
                       <Heart className="w-5 h-5 mr-2 text-green-600 medical-floating" />
                       Immediate Medical Steps
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-3 text-base">
                     <p>• Ensure your baby receives immediate medical attention</p>
                     <p>• Request copies of all medical records and pathology reports</p>
                     <p>• Get a second opinion from a pediatric specialist</p>
                     <p>• Document all diagnoses, treatments, and medical opinions</p>
                     <p>• Consider seeking treatment at specialized children's hospitals</p>
                     <p>• Don't delay necessary therapies or treatments</p>
                   </CardContent>
                 </Card>
                 
                 <Card className="medical-card glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 never-do-theme medical-pulse">
                   <CardHeader>
                     <CardTitle className="medical-3d-text flex items-center group-hover:text-primary transition-colors text-lg">
                       <Scale className="w-5 h-5 mr-2 text-red-600 medical-floating" />
                       Immediate Legal Steps
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-3 text-base">
                     <p>• Contact a birth injury attorney immediately</p>
                     <p>• Don't sign any hospital forms admitting fault</p>
                     <p>• Don't give recorded statements without legal counsel</p>
                     <p>• Preserve all documentation and medical bills</p>
                     <p>• Don't delay - California has strict time limits</p>
                     <p>• Document everything that happened during delivery</p>
                   </CardContent>
                 </Card>
              </div>

              <img src={diagnosisImage} alt="Medical diagnosis process" className="w-full h-64 object-cover rounded-lg mb-6" />
            </section>

            {/* Injury Types Section */}
            <section id="injury-types" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Birth Injury Conditions We Handle</h2>
              
              <img src={conditionsImage} alt="Birth injury medical conditions" className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Brain className="w-5 h-5 mr-2 text-primary" />
                      Cerebral Palsy (CP)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">A group of disorders affecting movement and muscle tone caused by brain damage before, during, or shortly after birth. Often results from oxygen deprivation during delivery.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Spastic CP (most common type)</li>
                      <li>• Dyskinetic CP</li>
                      <li>• Ataxic CP</li>
                      <li>• Mixed types of cerebral palsy</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Activity className="w-5 h-5 mr-2 text-primary" />
                      HIE (Hypoxic-Ischemic Encephalopathy)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Brain damage from lack of oxygen and blood flow during birth. Requires immediate cooling therapy. Can cause permanent neurological damage if not properly managed.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mild, moderate, or severe grades</li>
                      <li>• Seizures commonly occur</li>
                      <li>• Developmental delays</li>
                      <li>• Cognitive impairments possible</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Baby className="w-5 h-5 mr-2 text-primary" />
                      Erb's Palsy / Brachial Plexus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Nerve damage affecting arm movement, often from shoulder dystocia or excessive pulling during delivery. May cause permanent weakness or paralysis.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Upper arm paralysis</li>
                      <li>• Waiter's tip position</li>
                      <li>• Klumpke's palsy</li>
                      <li>• Total plexus injury</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      Shoulder Dystocia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Emergency when baby's shoulder gets stuck during delivery. Can cause nerve damage, brain injury from oxygen loss, or broken bones if improperly managed.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Brachial plexus injuries</li>
                      <li>• Fractured clavicle or other bones</li>
                      <li>• HIE from delivery delays</li>
                      <li>• Erb's or Klumpke's palsy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.conditions} onOpenChange={() => toggleSection('conditions')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary hover:text-primary border-primary hover:bg-primary hover:text-white">
                    Show More Birth Injury Conditions
                    {expandedSections.conditions ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Kernicterus</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Brain damage from untreated severe jaundice. Completely preventable with proper monitoring and phototherapy. Can cause cerebral palsy, hearing loss, and intellectual disabilities.</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Intracranial Hemorrhage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Bleeding in the baby's brain from trauma during delivery, often from improper use of forceps or vacuum extraction. Can cause seizures, developmental delays, or death.</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Meconium Aspiration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Baby breathes in meconium-stained amniotic fluid causing respiratory distress. Requires immediate suctioning and may need ventilator support.</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Birth Asphyxia</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Insufficient oxygen before, during, or after birth causing organ damage and brain injury. Often from umbilical cord problems or prolonged labor.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Proving Medical Negligence in Birth Injury Cases</h2>
              
              <img src={provingNegligenceImage} alt="Legal evidence and documentation" className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  To succeed in a birth injury case, we must prove that medical negligence caused your child's injuries. This requires demonstrating that healthcare providers failed to meet the accepted standard of care, and that this failure directly led to preventable harm.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Common Types of Medical Negligence During Birth</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-red-600">Monitoring Failures</h4>
                    <ul className="space-y-2">
                      <li>• Failure to properly monitor fetal heart rate</li>
                      <li>• Ignoring signs of fetal distress</li>
                      <li>• Inadequate response to monitoring alerts</li>
                      <li>• Poor interpretation of test results</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-red-600">Delivery Errors</h4>
                    <ul className="space-y-2">
                      <li>• Delayed C-section despite emergency</li>
                      <li>• Improper use of forceps or vacuum</li>
                      <li>• Failure to manage shoulder dystocia</li>
                      <li>• Excessive force during delivery</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-red-600">Medication Mistakes</h4>
                    <ul className="space-y-2">
                      <li>• Pitocin overdose causing distress</li>
                      <li>• Epidural errors and complications</li>
                      <li>• Wrong medications or dosages</li>
                      <li>• Failure to treat maternal infections</li>
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-red-600">Communication Failures</h4>
                    <ul className="space-y-2">
                      <li>• Poor handoffs between shifts</li>
                      <li>• Failure to communicate emergencies</li>
                      <li>• Inadequate documentation</li>
                      <li>• Missing or delayed lab results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Birth Injury Compensation in California</h2>
              
              <img src={compensationImage} alt="Compensation calculation" className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  California birth injury cases can result in substantial compensation due to the lifetime impact these injuries have on children and families. Unlike other medical malpractice cases, birth injuries have no damage caps, allowing full recovery for all losses.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-semibold mb-4">Types of Compensation Available</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">Economic Damages</h4>
                      <ul className="space-y-1">
                        <li>• Past and future medical expenses</li>
                        <li>• Rehabilitation and physical therapy</li>
                        <li>• Special education costs</li>
                        <li>• Medical equipment and mobility aids</li>
                        <li>• Home modifications for accessibility</li>
                        <li>• Lost earnings capacity of the child</li>
                        <li>• Parents' lost wages for caregiving</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">Non-Economic Damages</h4>
                      <ul className="space-y-1">
                        <li>• Pain and suffering of the child</li>
                        <li>• Loss of enjoyment of life</li>
                        <li>• Emotional distress</li>
                        <li>• Loss of consortium for parents</li>
                        <li>• Mental anguish and grief</li>
                        <li>• Impact on family relationships</li>
                        <li>• Reduced quality of life</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
                  <h4 className="font-semibold text-lg mb-2">No Damage Caps for Birth Injuries</h4>
                  <p>
                    Unlike other medical malpractice cases in California that are subject to MICRA's $250,000 cap on non-economic damages, 
                    birth injury cases have no such limitations. This allows us to pursue full compensation for your child's pain, suffering, 
                    and diminished quality of life, often resulting in significantly higher settlements and verdicts.
                  </p>
                </div>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Time Limits for Filing Birth Injury Claims in California</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">⏰ Critical Deadlines - Don't Wait</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">General Rule</h4>
                    <p className="text-lg">Until your child's <strong>8th birthday</strong> to file a lawsuit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Discovery Rule</h4>
                    <p className="text-lg"><strong>3 years</strong> from when injury was discovered</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Why You Should Act Immediately</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="glass-card text-center">
                    <CardHeader>
                      <CardTitle className="text-red-600">Evidence Preservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Medical records can be lost or destroyed. Hospital policies may limit record retention to just a few years.</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <CardTitle className="text-red-600">Witness Availability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Healthcare providers may change jobs or retire. Memories fade over time, making witness testimony less reliable.</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <CardTitle className="text-red-600">Investigation Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Complex birth injury cases require extensive investigation and expert review, which takes months to complete properly.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">⚠️ Special Circumstances</h4>
                  <ul className="space-y-2">
                    <li>• <strong>Government hospitals:</strong> Claim must be filed within 6 months</li>
                    <li>• <strong>Foreign objects left in body:</strong> 1 year from discovery</li>
                    <li>• <strong>Fraudulent concealment:</strong> May extend deadlines</li>
                    <li>• <strong>Mental incapacity:</strong> Special rules may apply</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section with 25+ Questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Frequently Asked Questions About Birth Injuries</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <Collapsible 
                      open={expandedFaq === index} 
                      onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardTitle className="flex justify-between items-center text-lg text-left">
                            {faq.question}
                            {expandedFaq === index ? <ChevronUp className="text-primary flex-shrink-0 ml-2" /> : <ChevronDown className="text-primary flex-shrink-0 ml-2" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Birth Injury Resources & Support</h2>
              
              <img src={resourcesImage} alt="Educational and support resources" className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation Form
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/compensation-calculator'}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/medical-guidance'}
                    >
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/educational-resources'}
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Educational Resources
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Medical & Support Organizations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold">United Cerebral Palsy</h4>
                      <p>Resources and advocacy for CP families</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">March of Dimes</h4>
                      <p>Support for families affected by birth complications</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">California Regional Centers</h4>
                      <p>Services for developmental disabilities</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Early Start Program</h4>
                      <p>Early intervention for infants and toddlers</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="medical-card glass-card medical-hero-container sidebar-sticky medical-floating">
                <CardHeader>
                  <CardTitle className="medical-hero-title text-center text-xl text-red-600">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <img src={sidebarImage} alt="Birth injury legal support" className="w-full h-40 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 text-base py-3"
                      onClick={() => window.location.href = 'tel:8181234567'}
                      aria-label="Call us now at 8-1-8-1-2-3-4-5-6-7"
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white text-base py-3"
                      onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                    >
                      <FileText className="w-4 h-4" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white text-base py-3"
                      onClick={() => window.location.href = 'mailto:contact@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Available 24/7</p>
                    <p className="font-semibold text-primary text-base">No Fees Unless We Win</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center text-lg">Birth Injury Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span>7 in 1,000 births involve injuries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span>85-90% of CP cases are birth-related</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Until 8th birthday to file claim</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>No damage caps in California</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Compensation often exceeds $1M</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - "Don't Wait - Time Limits Apply" */}
      <section 
        className="bg-red-600 text-white py-12"
        aria-labelledby="cta-heading"
        role="banner"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 id="cta-heading" className="text-4xl font-bold mb-4">Don't Wait - Time Limits Apply for California Birth Injuries</h2>
          <p className="text-xl mb-6">
            California law gives you until your child's 8th birthday to file a birth injury claim, but evidence can be lost and witnesses' memories fade. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
              aria-label="Get a free case evaluation for your birth injury claim"
            >
              Get Free Case Evaluation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
              aria-label="Call us now at 8-1-8-1-2-3-4-5-6-7 for immediate assistance"
            >
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthInjuries;