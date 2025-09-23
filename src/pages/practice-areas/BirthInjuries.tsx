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
  ArrowLeft,
  Baby,
  Brain,
  Activity
} from 'lucide-react';
import heroBackground from '@/assets/birth-injuries-hero-new.jpg';
import sidebarImage from '@/assets/birth-injuries-sidebar-new.jpg';
import diagnosisImage from '@/assets/birth-injuries-diagnosis-new.jpg';
import legalProcessImage from '@/assets/birth-injuries-legal-process-new.jpg';
import medicalImage from '@/assets/birth-injuries-medical-facility-new.jpg';
import compensationImage from '@/assets/birth-injuries-compensation-calculator.jpg';
import legalStepsImage from '@/assets/birth-injuries-legal-steps.jpg';
import injuryTypesImage from '@/assets/birth-injuries-types.jpg';
import provingNegligenceImage from '@/assets/birth-injuries-proving-negligence.jpg';

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
      // Enhanced 3D Hero Animation with perspective
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { 
          opacity: 0, 
          y: 100, 
          scale: 0.8, 
          rotationX: 15,
          transformPerspective: 1000 
        });
        gsap.to(heroContent, { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          duration: 0.5, 
          ease: 'power3.out',
          delay: 0.1
        });

        // Animate hero elements with 3D effects
        const title = heroContent.querySelector('h1');
        const stars = heroContent.querySelector('.flex');
        const button = heroContent.querySelector('button');

        if (title) {
          gsap.fromTo(title, 
            { opacity: 0, y: 50, scale: 0.9, rotationY: 10 },
            { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 0.4, ease: 'power2.out', delay: 0.15 }
          );
        }

        if (stars) {
          gsap.fromTo(stars, 
            { opacity: 0, x: -30, rotationZ: -5 },
            { opacity: 1, x: 0, rotationZ: 0, duration: 0.35, ease: 'power2.out', delay: 0.2 }
          );
        }

        if (button) {
          gsap.fromTo(button, 
            { opacity: 0, y: 30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.7)', delay: 0.25 }
          );
        }
      }

      // Enhanced content sections with 3D perspective
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections,
          { 
            opacity: 0, 
            y: 60, 
            scale: 0.95,
            rotationX: 10,
            transformPerspective: 1200
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 95%',
              end: 'bottom 20%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Floating background layers for 3D depth
      const createFloatingLayers = () => {
        const layers = document.querySelectorAll('.floating-layer');
        layers.forEach((layer, index) => {
          const depth = -500 + (index * 200);
          gsap.set(layer, { z: depth, transformStyle: 'preserve-3d' });
          
          // Different floating animations for each layer
          if (index === 0) {
            gsap.to(layer, { y: 30, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' });
          } else if (index === 1) {
            gsap.to(layer, { x: 40, duration: 18, yoyo: true, repeat: -1, ease: 'sine.inOut' });
          } else {
            gsap.to(layer, { 
              y: 20, x: 25, rotation: 2, 
              duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut' 
            });
          }
        });
      };

      // Parallax scroll effects
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Enhanced card animations with magnetic hover effects
      const cards = document.querySelectorAll('.glass-card');
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
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 98%',
              toggleActions: 'play none none none'
            },
            delay: index * 0.03
          }
        );

        // Magnetic hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            rotationY: 5,
            rotationX: 2,
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
            rotationX: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Sidebar floating animation
      const sidebar = document.querySelector('.sidebar-sticky');
      if (sidebar) {
        gsap.fromTo(sidebar,
          { opacity: 0, x: 50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sidebar,
              start: 'top 90%'
            }
          }
        );

        // Subtle floating animation
        gsap.to(sidebar, {
          y: -5,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
      }

      createFloatingLayers();
    });

    // Go Back button scroll visibility with fade effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300); // Appears after scrolling past hero
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

  // Comprehensive FAQ data extracted from HTML (50+ questions)
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
      answer: "Meconium aspiration occurs when babies inhale meconium-stained amniotic fluid during delivery, causing breathing problems and lung damage. Meconium passage may indicate fetal distress requiring immediate delivery or C-section. Once meconium is present, medical teams should be prepared for potential aspiration with suctioning and NICU support. Failure to recognize meconium or respond appropriately can cause severe respiratory distress, pneumonia, or brain damage from oxygen deprivation. This is often a preventable complication with proper monitoring and response."
    },
    {
      question: "What causes Erb's palsy during childbirth?",
      answer: "Erb's palsy results from damage to the brachial plexus nerves during delivery, typically from excessive pulling or stretching of the baby's head and neck. Common causes include shoulder dystocia, breech delivery, or improper use of forceps/vacuum. While 80-90% of cases resolve with physical therapy, severe cases may require surgery and cause permanent disability. If excessive force was used during delivery, medical malpractice may be involved."
    },
    {
      question: "Should I sign hospital paperwork after a birth injury?",
      answer: "Never sign anything beyond necessary medical consent forms. Don't sign incident reports, statements about what happened, or any forms waiving rights. Hospitals may pressure you to sign documents that could harm your case. Politely decline and say you need to consult with an attorney first. You have the right to obtain all medical records without signing liability waivers. Contact a birth injury lawyer before signing anything related to the injury or incident."
    },
    {
      question: "What medical records do I need for a birth injury case?",
      answer: "Essential records include: prenatal care records, labor and delivery notes, fetal monitoring strips, nursing notes, APGAR scores, NICU records, radiology and imaging results, medication administration records, and all postnatal care documentation. We help obtain all records and work with medical experts to review them. Don't worry if you don't have everything - we can subpoena missing records as part of the legal process."
    },
    {
      question: "How do you prove medical malpractice in birth injury cases?",
      answer: "We must prove four elements: (1) The medical provider owed a duty of care, (2) They breached the standard of care, (3) This breach directly caused your child's injury, and (4) Your child suffered damages. We work with obstetric experts, neonatologists, and other specialists who review records and testify about proper standards. Evidence includes medical records, fetal monitoring strips, witness testimony, and hospital policies. Our former defense experience helps identify where providers went wrong."
    },
    {
      question: "What are APGAR scores and why do they matter?",
      answer: "APGAR scores assess newborn health at 1 and 5 minutes after birth, rating Appearance, Pulse, Grimace, Activity, and Respiration from 0-10. Scores below 7 indicate potential problems; below 4 suggest severe issues. Low scores can indicate oxygen deprivation or birth trauma. While important, APGAR scores alone don't prove malpractice - babies with normal scores can still have injuries, and low scores may result from unavoidable complications. They're one piece of evidence among many."
    },
    {
      question: "Can I sue if my baby died during or after birth?",
      answer: "Yes, you may file a wrongful death lawsuit if medical negligence caused your baby's death. This includes stillbirths after viability (usually 20+ weeks) and deaths shortly after birth. Compensation can include medical expenses, funeral costs, and parents' pain and suffering. California law recognizes the profound loss parents experience. These cases are emotionally difficult, and we handle them with utmost compassion while aggressively pursuing justice for your family."
    },
    {
      question: "What is the difference between birth injury and birth defect?",
      answer: "Birth injuries occur during labor, delivery, or shortly after birth due to physical trauma or medical negligence - they're typically preventable. Birth defects develop during pregnancy due to genetic factors, environmental causes, or unknown reasons - they're usually not preventable. Examples of injuries: cerebral palsy from oxygen loss, Erb's palsy from delivery trauma. Examples of defects: Down syndrome, cleft palate, heart defects. Some conditions like cerebral palsy can result from either, requiring investigation to determine the cause."
    },
    {
      question: "What is a life care plan and why is it important?",
      answer: "A life care plan is a comprehensive document outlining all future medical, therapeutic, educational, and support needs for your injured child. Created by medical and economic experts, it calculates lifetime costs including medical care, therapy, medications, equipment, home modifications, special education, and caregiving. This ensures compensation covers not just current expenses but your child's needs for decades to come. Plans often project costs into millions for severe injuries."
    },
    {
      question: "Should I trust the hospital's explanation of what happened?",
      answer: "Be cautious. While many healthcare providers are honest, hospitals and their insurance companies have strong motivations to avoid admitting fault. They may downplay errors, blame unavoidable complications, or provide incomplete explanations. Never accept 'these things happen' without investigation. Get a second opinion from an independent doctor and consult a birth injury attorney who can have experts review what really happened. You deserve the complete truth about your child's injury."
    },
    {
      question: "How much money can I get for a cerebral palsy lawsuit in California?",
      answer: "California cerebral palsy settlements often range from $5 million to $20+ million for severe cases requiring lifetime care. Factors affecting value include: severity (mild, moderate, severe), level of independence, cognitive impact, life expectancy, and care needs. Lifetime medical costs alone can exceed $1 million per CDC estimates. Add lost earnings, pain and suffering, and therapy costs, and totals climb quickly. Recent California verdicts include $17 million, $11.4 million, and $8.9 million awards. Each case is unique, but severe CP cases have among the highest values in medical malpractice due to lifetime impact."
    },
    {
      question: "What should I do if my baby was dropped after birth?",
      answer: "If your baby was dropped: ensure immediate medical evaluation including head CT/MRI, document everything (who dropped baby, witnesses, exact circumstances), photograph any visible injuries, request incident reports, don't sign anything accepting blame or waiving rights, report to hospital administration, and contact an attorney immediately. Drops can cause skull fractures, brain bleeds, and lasting damage even without visible injury. Hospitals are liable for staff negligence. Never accept 'babies are resilient' without thorough evaluation. Monitor for symptoms like vomiting, lethargy, or seizures. This is clear negligence requiring investigation."
    },
    {
      question: "Can I sue if my baby got stuck during delivery?",
      answer: "Yes, if improper management caused injury. 'Getting stuck' usually means shoulder dystocia, which requires specific maneuvers (McRoberts, suprapubic pressure, etc.) to resolve safely. Excessive pulling or twisting can cause Erb's palsy, fractures, or oxygen deprivation leading to brain damage. Proper technique rarely causes injury. Warning signs should prompt preparation or C-section consideration. If your baby suffered nerve damage, fractures, or brain injury after getting stuck, investigate whether proper techniques were used and if C-section should have been performed earlier."
    },
    {
      question: "What happens if my baby didn't breathe at birth?",
      answer: "Not breathing at birth (birth asphyxia) requires immediate resuscitation. The medical team should be prepared with equipment and trained personnel. Delays in resuscitation or improper technique can cause permanent brain damage. Key questions: How long before breathing established? Were APGAR scores low? Was resuscitation equipment ready? Was NICU team present for high-risk delivery? Even minutes without oxygen cause HIE. If your baby suffered brain damage after not breathing at birth, investigate whether proper preparation and response occurred. Many cases involve preventable delays or errors."
    },
    {
      question: "Is it malpractice if my baby's cord was wrapped around the neck?",
      answer: "Nuchal cord (cord around neck) occurs in 20-30% of births and isn't automatically malpractice. However, failure to properly manage it can be. Medical staff should monitor for signs of distress, be prepared to quickly unwrap or clamp and cut the cord, and consider C-section if cord is tight or wrapped multiple times with distress signs. Malpractice occurs if they failed to detect distress, delayed delivery despite problems, or used excessive force causing injury. Most nuchal cords resolve without issue, but improper management can cause HIE, cerebral palsy, or death."
    },
    {
      question: "What compensation is available if my child needs special education?",
      answer: "Compensation includes: private special education costs, tutoring, speech/occupational/physical therapy, assistive technology, specialized learning programs, and vocational training. While public schools must provide services under IDEA, private services often better meet children's needs. We calculate costs through adulthood including college support services or specialized vocational programs. Educational psychologists and special education experts help determine lifetime educational needs. Settlements often establish special needs trusts to fund ongoing education without affecting government benefit eligibility."
    },
    {
      question: "How do I choose the right birth injury lawyer?",
      answer: "Look for: specific birth injury experience (not just general malpractice), access to medical experts, financial resources to fund expensive cases, track record of substantial settlements/verdicts, and compassionate approach to families. Ask about their experience with your child's specific condition. Ensure they work on contingency with no upfront costs. Meet the actual attorney handling your case, not just intake staff. Trust your instincts about communication and comfort level. We offer free consultations to discuss your case without obligation."
    },
    {
      question: "What if my pregnancy was high-risk?",
      answer: "High-risk pregnancies require higher standards of care, not lower. Conditions like diabetes, preeclampsia, multiple births, or advanced maternal age demand closer monitoring and preparation for complications. Doctors must anticipate and prepare for potential problems. Failure to properly manage high-risk pregnancies, refer to specialists, or have NICU teams ready can be negligence. Just because pregnancy was high-risk doesn't mean injuries were inevitable. Often, proper management of high-risk conditions prevents injury. Your case may be even stronger if risks were known but ignored."
    },
    {
      question: "Can I sue for emotional trauma even if my baby recovered?",
      answer: "Potentially yes. If medical negligence caused traumatic delivery and temporary injury, you may have claims for the emotional distress, medical expenses, and trauma experienced, even if your baby ultimately recovered. Parents who witnessed their baby's suffering, spent time in NICU, or faced uncertain prognosis experienced real damages. The fear and anguish during that period is compensable if caused by malpractice. However, damages are typically lower than permanent injury cases. Each situation is unique and requires individual evaluation."
    },
    {
      question: "What is a structured settlement versus lump sum?",
      answer: "Lump sum provides all money immediately, giving you control but requiring careful management. Structured settlements provide guaranteed periodic payments over time, often with increases for inflation. Benefits of structures: tax-free payments, protected from creditors, guaranteed income for child's lifetime, can't be spent all at once. Downsides: less flexibility, can't access all funds if needs change. Many families combine both - lump sum for immediate needs and structure for long-term security. We help you evaluate options based on your situation."
    },
    {
      question: "Can grandparents or other family members help with the case?",
      answer: "Yes, family support is invaluable. Grandparents or relatives who witnessed events can provide testimony. They can help document the child's struggles and progress. If they provide caregiving or financial support, these contributions are part of damages. However, only parents/legal guardians can make legal decisions for minor's case. Family members can attend meetings and provide emotional support. Sometimes grandparents notice developmental issues first. Their observations and concerns are important evidence. We welcome family involvement while maintaining appropriate legal boundaries."
    },
    {
      question: "What if we already settled with the hospital?",
      answer: "Previous settlements may not bar all claims. If you settled without attorney representation, the settlement might be voidable, especially if you weren't fully informed of rights. Settlements with hospitals may not include individual doctors or other parties. If your child's condition worsened after settlement, additional claims might exist. Court approval is required for minor settlements - improper settlements can be challenged. Never assume your rights are gone without legal review. We can evaluate whether prior settlements prevent additional recovery. Time may still be running on statutes of limitations."
    },
    {
      question: "How do I know if my case is strong?",
      answer: "Strong cases typically involve: clear deviations from standard care (delayed C-section, ignored fetal distress), severe permanent injuries requiring lifetime care, good documentation of events and damages, and identifiable errors leading directly to injury. However, don't assume your case is weak without professional evaluation. Sometimes seemingly minor errors cause major injuries. Medical records often contain evidence families don't recognize. We provide free case evaluations where our team and medical experts assess your case strength honestly. Even 'difficult' cases can succeed with proper development."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 3D Background Container with floating layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
        <div className="floating-layer absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="floating-layer absolute inset-0 bg-gradient-to-tl from-transparent via-primary/3 to-transparent"></div>
        <div className="floating-layer absolute inset-0 bg-gradient-to-r from-accent/2 via-transparent to-primary/2"></div>
      </div>

      {/* Go Back Button - Appears after scrolling */}
      {visible && (
        <div className="fixed top-24 left-6 z-50">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      )}

      {/* Hero Section - 600px height to match Mesothelioma */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat parallax-element"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Birth Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Fighting for Your Child's Future</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Birth Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When medical negligence harms your baby during childbirth, you're facing one of the most devastating experiences any family can endure. Birth injuries affect approximately 7 out of every 1,000 births in the United States, with many cases being preventable through proper medical care. In California alone, thousands of families face the devastating reality of birth injuries each year.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the devastation of birth injuries. Our team combines medical knowledge with aggressive legal advocacy to secure maximum compensation for your child's lifetime needs. We fight for justice while you focus on your child's care and recovery.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary border-primary hover:bg-primary hover:text-white">
                    Show More About Our California Birth Injury Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Baby className="w-5 h-5 mr-2 text-primary" />
                          Medical Understanding
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team works closely with leading neonatologists, obstetricians, and pediatric specialists throughout California to understand the full scope of your child's condition and future needs.</p>
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
                        <p>We have extensive experience with California's medical malpractice laws, hospital systems, and standards of care for obstetric and neonatal care throughout the state.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending medical providers provides unique insights into hospital defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">We understand the urgency and work to preserve evidence while securing your child's future care.</p>
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
                      Birth injury cases in California involve complex medical, legal, and historical factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of medical negligence to working with medical experts who can clearly explain how preventable errors caused your child's injury.
                    </p>
                    
                    <p>
                      The financial impact can be overwhelming. According to the CDC, lifetime care costs for a child with cerebral palsy can exceed $1 million, not including lost wages, pain and suffering, or family caregiving costs. Many families don't realize that when medical negligence causes these injuries, they have the right to seek compensation.
                    </p>
                    
                    <p>
                      Our former defense attorney experience gives us unique insight into how hospitals and insurance companies defend these cases. We know their tactics, their experts, and their strategies - and we use this knowledge to fight for maximum compensation for your child.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Birth Injury Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your child's situation better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Child's Birth Date</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
                          <SelectItem value="hie">HIE (Hypoxic-Ischemic Encephalopathy)</SelectItem>
                          <SelectItem value="erbs-palsy">Erb's Palsy / Brachial Plexus Injury</SelectItem>
                          <SelectItem value="shoulder-dystocia">Shoulder Dystocia</SelectItem>
                          <SelectItem value="birth-asphyxia">Birth Asphyxia</SelectItem>
                          <SelectItem value="other">Other Birth Injury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Injury */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After a Birth Injury</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <div className="h-64 md:h-72 lg:h-80 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${diagnosisImage})` }} />
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Get immediate evaluation by a neonatologist or pediatric neurologist</p>
                    <p>• Request and preserve fetal monitoring strips and delivery records</p>
                    <p>• Ask about HIE cooling protocols and NICU transfer if indicated</p>
                    <p>• Document symptoms, seizures, and milestones with dates</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <div className="h-64 md:h-72 lg:h-80 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${legalStepsImage})` }} />
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Do not sign hospital statements beyond medical consents</p>
                    <p>• Contact a California birth injury attorney to preserve evidence</p>
                    <p>• List all providers present during labor and delivery</p>
                    <p>• Start a file for bills, therapy, and specialist referrals</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections['what-to-do']} onOpenChange={() => toggleSection('what-to-do')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="justify-between w-full text-primary border-primary hover:bg-primary hover:text-white">
                    Learn more
                    {expandedSections['what-to-do'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="prose prose-lg max-w-none mt-4">
                  <p>
                    Early action improves medical outcomes and strengthens your legal case. California hospitals must follow standards of care during high-risk deliveries, including timely C-sections for fetal distress, proper instrument use, and immediate neonatal support. Preserving original monitoring strips and obtaining a full set of records helps experts determine whether negligence occurred.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Injury Types */}
            <section id="injury-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Birth Injury Types</h2>
              
              {/* Hero Image for Injury Types */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <div className="h-64 md:h-72 lg:h-80 w-full bg-cover bg-center" style={{ backgroundImage: `url(${injuryTypesImage})` }} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[ 
                  { icon: Brain, title: "HIE (Oxygen Deprivation)", items: ["Cooling therapy within 6 hours", "NICU monitoring", "MRI/EEG evaluation"] },
                  { icon: Activity, title: "Cerebral Palsy", items: ["Motor and speech therapy", "Assistive devices", "Long-term care planning"] },
                  { icon: Baby, title: "Erb's Palsy / Brachial Plexus", items: ["Physical therapy", "Surgical consult if no recovery", "Avoid excessive traction in delivery"] },
                  { icon: AlertTriangle, title: "Shoulder Dystocia Injuries", items: ["Improper maneuvers cause nerve damage", "Risk factors must be managed", "Consider timely C-section"] }
                ].map((card, idx) => (
                  <Card key={idx} className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <card.icon className="w-5 h-5 mr-2 text-primary" />
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      {card.items.map((i, ii) => <p key={ii}>• {i}</p>)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Proving Negligence */}
            <section id="proving-negligence" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Proving Negligence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <div className="h-64 md:h-72 lg:h-80 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${provingNegligenceImage})` }} />
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Elements of Malpractice
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Duty of care owed by provider</p>
                    <p>• Breach of the standard of care</p>
                    <p>• Causation linking breach to injury</p>
                    <p>• Damages: medical, educational, and life-care costs</p>
                  </CardContent>
                </Card>
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
                      Critical Evidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Fetal monitoring strips and delivery notes</p>
                    <p>• APGAR scores, NICU notes, imaging studies</p>
                    <p>• Hospital policies and staffing records</p>
                    <p>• Expert opinions from OB/GYN and neonatology</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compensation */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <div className="h-64 md:h-72 lg:h-80 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${compensationImage})` }} />
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Award className="w-5 h-5 mr-2 text-red-600" />
                      What You Can Recover
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Medical treatment and therapy costs</p>
                    <p>• Special education and assistive technology</p>
                    <p>• Home modifications and mobility equipment</p>
                    <p>• Lost income for caregiving and future care plans</p>
                  </CardContent>
                </Card>
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-red-600" />
                      Plan Your Claim
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Estimate potential compensation and build a life care plan tailored to your child's needs.</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => window.location.href = '/compensation-calculator'}>
                      Open Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Time Limits */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits in California</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-lg leading-relaxed mb-3">In California, birth injury claims for minors generally must be filed by the child's 8th birthday, or within 3 years of the injury if discovered later. Claims against government hospitals require a government claim within 6 months.</p>
                <p className="text-muted-foreground">Don't wait. Evidence disappears and memories fade. Contact us to protect your child's rights.</p>
              </div>
            </section>

          </div>

          {/* Sticky Sidebar - matches Mesothelioma structure exactly */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6 sidebar-sticky">
              
              {/* 3 Ways to Start Your Case - Matches Mesothelioma */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
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
                      className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/schedule-consultation'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
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
                      <p className="text-sm text-muted-foreground">Until child's 8th birthday in California</p>
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
                  <CardTitle className="text-lg">Medical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California birth injury medical facilities" 
                    className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We work with leading pediatric specialists and birth injury experts throughout California.
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
                    alt="Birth injury compensation calculator" 
                    className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Medical Malpractice Claims</p>
                    <p>• Hospital Liability</p>
                    <p>• Provider Insurance Coverage</p>
                    <p>• Lifetime Care Costs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Will continue this with all 50+ questions */}
      <section id="faq" className="content-section mb-12 bg-muted py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqData.slice(0, 10).map((faq, index) => (
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
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="text-primary border-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/birth-injuries/faq'}
            >
              View All {faqData.length}+ Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Matches Mesothelioma exactly but for Birth Injuries */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits Apply for California Birth Injury Claims</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law gives you until your child's 8th birthday to file your claim. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/birth-injuries/case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthInjuries;