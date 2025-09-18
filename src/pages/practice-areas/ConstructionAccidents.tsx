import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Shield, 
  AlertTriangle, 
  FileText, 
  Scale,
  Phone,
  MessageCircle,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  CheckCircle,
  DollarSign,
  Eye,
  Gavel,
  Heart,
  MapPin,
  User,
  Mail,
  Calculator,
  BookOpen,
  HardHat,
  Zap,
  Wrench,
  Building,
  Truck
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/construction-accidents-hero-new.jpg';
import oshaViolationsImage from '@/assets/practice-areas/construction-osha-violations.jpg';
import thirdPartyImage from '@/assets/practice-areas/construction-third-party.jpg';
import compensationImage from '@/assets/practice-areas/construction-compensation.jpg';
import legalProcessImage from '@/assets/practice-areas/construction-legal-process.jpg';
import hazardsImage from '@/assets/practice-areas/construction-hazards.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  phone: string;
  email: string;
  accidentType: string;
  description: string;
}

const ConstructionAccidents: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    accidentType: '',
    description: ''
  });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.content-card', 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.content-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Construction Accident Case Inquiry');
    const body = encodeURIComponent(`Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Type of Accident: ${formData.accidentType}
Description: ${formData.description}`);
    
    window.location.href = `mailto:info@trembachlawfirm.com?subject=${subject}&body=${body}`;
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqData = [
    {
      question: "What should I do immediately after a construction accident?",
      answer: "Get immediate medical attention even for 'minor' injuries—adrenaline masks serious damage. Report to supervisor immediately but avoid detailed statements. California law requires reporting within 30 days, but immediate reporting prevents disputes about accident circumstances. Document everything: photograph injuries, accident scene, equipment involved, and safety violations. Get witness names and contact information. Preserve evidence like damaged safety equipment and torn clothing. Refuse recorded statements without legal representation."
    },
    {
      question: "Can I sue for a construction accident beyond workers' compensation?",
      answer: "Yes. Construction accidents often involve multiple parties beyond your direct employer, opening doors to substantial compensation that workers' compensation doesn't provide. While workers' comp offers limited benefits regardless of fault, it doesn't cover pain and suffering, full wage loss, or punitive damages. California law allows pursuing third-party claims against negligent contractors, subcontractors, property owners, equipment manufacturers, and architects whose actions contributed to your injuries."
    },
    {
      question: "What are the most common construction site accidents in California?",
      answer: "The 'Fatal Four' cause most construction deaths: falls (38.4% of fatalities), struck-by objects, electrocutions, and caught-in/between accidents. Falls from heights remain the leading killer due to inadequate fall protection, missing guardrails, unsafe scaffolding, and improper ladder use. Scaffolding accidents involve improper assembly, overloading, and inadequate bracing. Electrocution hazards include contact with power lines, faulty wiring, and missing ground-fault circuit interrupters."
    },
    {
      question: "How do OSHA violations help my construction accident case?",
      answer: "OSHA and Cal/OSHA violations provide powerful evidence of negligence in third-party claims. These official findings carry significant weight in personal injury lawsuits, establishing that defendants breached their duty to maintain safe conditions. Common violations include failure to provide fall protection, inadequate hazard communication, improper scaffolding construction, and lack of respiratory protection. Each violation demonstrates negligence per se—automatic proof of negligence when safety laws are violated."
    },
    {
      question: "What compensation can I recover from a construction accident?",
      answer: "Third-party claims allow recovery for economic damages including all medical expenses (past and future), full wage loss without statutory caps, lost earning capacity, and vocational rehabilitation costs. Non-economic damages include pain and suffering, emotional distress, loss of life enjoyment, and relationship impacts. Punitive damages may apply for willful safety violations. Unlike workers' comp's partial wage replacement, personal injury claims seek 100% of lost income including overtime, bonuses, and benefits."
    },
    {
      question: "Who can be held liable for construction accidents?",
      answer: "Multiple parties may be liable: general contractors who failed to maintain safe conditions, subcontractors whose negligence created hazards, property owners who ignored dangerous conditions, equipment manufacturers for defective machinery, suppliers of faulty safety gear, architects for dangerous designs, and safety consultants who approved unsafe conditions. Each party's insurance represents additional compensation sources beyond workers' compensation."
    },
    {
      question: "What are the deadlines for filing construction accident claims?",
      answer: "California generally allows two years for personal injury claims from the accident date, but some circumstances shorten this deadline. Government entity claims require notice within six months. Product liability claims may have different limitations. Workers' compensation claims have separate one-year filing requirements. The discovery rule may extend deadlines for latent injuries that appear later. Time limits are strict—missing deadlines eliminates legal remedies permanently."
    },
    {
      question: "Can undocumented workers file construction accident claims?",
      answer: "Yes. Immigration status doesn't affect your right to workplace safety or compensation for injuries. All workers deserve protection under OSHA and Cal/OSHA regulations regardless of documentation. While immigration status may limit certain economic damages like future earnings in some cases, you still have rights to medical care, pain and suffering compensation, and third-party claims against negligent contractors and equipment manufacturers."
    },
    {
      question: "What if I was partially at fault for the construction accident?",
      answer: "California's pure comparative negligence law allows recovery even if partially at fault, though compensation reduces by your fault percentage. Insurance companies exploit this, attempting to shift blame onto injured workers. We counter these tactics, minimizing your assigned fault while maximizing the negligence attributed to responsible parties. Even being 80% at fault doesn't bar recovery—you can still collect 20% of damages from other parties."
    },
    {
      question: "How are defective construction equipment claims handled?",
      answer: "Product liability claims against equipment manufacturers don't require proving negligence. Strict liability applies when equipment has design defects making it inherently dangerous, manufacturing defects deviating from specifications, or inadequate warnings about risks. Common defective equipment includes scaffolding components, power tools, safety harnesses, ladders, cranes, and protective gear. We preserve defective equipment for expert examination and investigate similar incidents showing pattern defects."
    },
    {
      question: "What if I was injured as a bystander near a construction site?",
      answer: "Bystanders injured by construction accidents have strong claims as you weren't assuming workplace risks. Falling debris, equipment striking pedestrians, sidewalk collapses, and inadequate barriers create liability for contractors and property owners. You're not limited by workers' compensation restrictions, allowing full damage recovery immediately. Construction companies must protect the public through barriers, overhead protection, warning signs, and flaggers directing traffic."
    },
    {
      question: "How do wrongful death claims work for construction accidents?",
      answer: "California allows specified survivors to seek compensation when construction negligence causes death. Spouses, children, and dependents can recover funeral expenses, lost financial support, loss of companionship, and household services value. We calculate lifetime earnings including benefits and retirement contributions. Non-economic damages compensate for emotional loss. Multiple defendants increase recovery potential. The two-year statute requires prompt action during grieving."
    },
    {
      question: "What are the most dangerous construction jobs in California?",
      answer: "Roofers face the highest fatality rates from falls, heat exposure, and electrical hazards. Iron workers erecting structural steel risk falls and struck-by accidents. Electrical workers face electrocution from high-voltage lines and equipment. Excavation workers risk trench collapses and equipment strikes. Demolition crews face building collapses, asbestos exposure, and explosion risks. Tower crane operators work at extreme heights with massive loads."
    },
    {
      question: "Can I sue my employer directly for a construction accident?",
      answer: "Generally no—workers' compensation provides the exclusive remedy against employers. However, exceptions exist: employers without workers' comp insurance lose immunity, intentional harm by employers allows civil suits, and dual capacity doctrine applies when employers have non-employer relationships. If you're an independent contractor rather than employee, workers' comp doesn't apply and direct suits are possible. Many construction workers are misclassified as independent contractors."
    },
    {
      question: "What's the average settlement for a construction accident in California?",
      answer: "No meaningful average exists as settlements vary from thousands to millions based on injury severity. Minor injuries might settle for $50,000-$150,000. Serious injuries requiring surgery often exceed $500,000. Catastrophic injuries like paralysis, brain damage, or amputations warrant millions. Wrongful death cases typically exceed $1 million with multiple defendants. Factors include medical costs, lost earnings, pain and suffering, permanent disability, available insurance, and liability strength."
    },
    {
      question: "Do I need a lawyer for my construction accident case?",
      answer: "Construction accidents involve complex liability issues requiring legal expertise. Multiple parties, insurance coverage layers, and technical regulations make self-representation nearly impossible. Studies show represented clients recover 3-5 times more than unrepresented victims, even after attorney fees. Insurance companies exploit unrepresented claimants' lack of knowledge. Our contingency fee means no upfront costs—we only get paid from successful recovery."
    },
    {
      question: "What if injuries appear weeks after the construction accident?",
      answer: "Delayed injury symptoms are common with adrenaline masking initial pain. Soft tissue injuries, herniated discs, and internal damage may manifest days or weeks later. Some conditions like traumatic brain injuries show subtle symptoms initially. Document any delayed symptoms immediately and seek medical attention. California's discovery rule may extend filing deadlines for latent injuries. Connect new symptoms to the original accident through medical documentation."
    },
    {
      question: "How much does hiring a construction accident lawyer cost?",
      answer: "Nothing upfront. We work on contingency fees, typically 33-40% of recovery. You pay nothing if we don't win. We advance all costs including filing fees, expert witnesses, depositions, and investigations—often totaling tens of thousands. These costs are reimbursed from settlement proceeds, not your pocket. This structure allows anyone to afford quality representation regardless of financial situation."
    },
    {
      question: "Can I switch lawyers if I'm unhappy with my current attorney?",
      answer: "Yes, you can change attorneys anytime. Your case file belongs to you, not the lawyer. New and previous attorneys work out fee arrangements without additional cost to you. Common reasons for switching include poor communication, lack of progress, pressure to accept low settlements, or lost confidence. Don't stay with an attorney you don't trust—construction cases are too important."
    },
    {
      question: "What if the accident happened months ago?",
      answer: "Don't assume it's too late. California generally allows two years for personal injury claims, and some circumstances extend deadlines. Even months later, viable claims exist if within statutory limits. Evidence may still be available through OSHA reports, witness memories, and photographic evidence. Contact us immediately for deadline evaluation. We've successfully pursued cases others said were too old."
    },
    {
      question: "Will my construction accident case go to trial?",
      answer: "Most cases (95%) settle without trial, but trial readiness drives better settlements. Insurance companies offer more when they know you'll go to court if necessary. We prepare every case for trial from day one, taking depositions, hiring experts, and building compelling presentations. This preparation usually forces fair settlements. The decision to try or settle always remains yours after we explain options and likely outcomes."
    },
    {
      question: "What's negligence per se in construction accident cases?",
      answer: "Negligence per se means automatic proof of negligence when safety laws are violated. OSHA and Cal/OSHA violations establish negligence per se if the regulation was designed to prevent your type of injury and you're within the protected class (construction workers). This eliminates proving the defendant should have acted differently—the law already required specific conduct they violated."
    },
    {
      question: "How do Cal/OSHA regulations differ from federal OSHA?",
      answer: "California's Cal/OSHA often imposes stricter requirements than federal standards. California requires fall protection at different heights, has specific heat illness prevention standards, mandates additional repetitive motion injury protections, and requires injury and illness prevention programs. Cal/OSHA penalties are higher—up to $158,000 for willful violations versus federal maximums."
    },
    {
      question: "Can I recover if I wasn't wearing required safety equipment?",
      answer: "Yes, but your recovery may reduce based on comparative fault assigned. Employers must provide safety equipment and ensure its use—failure to enforce safety rules doesn't eliminate their liability. We argue employers created environments where safety violations were tolerated or encouraged for speed, inadequate equipment forced unsafe choices, and lack of training prevented proper equipment use."
    },
    {
      question: "What are scaffold tag requirements in California?",
      answer: "California requires scaffold tagging systems indicating inspection status. Green tags mean safe for use, yellow indicates caution with restrictions, and red prohibits use entirely. Tags must include inspection date, inspector's name, and any limitations. Missing or outdated tags violate safety regulations, establishing negligence. Accidents on improperly tagged scaffolds strengthen liability claims."
    },
    {
      question: "How do crane accidents differ from other construction accidents?",
      answer: "Crane accidents involve specialized regulations, certification requirements, and multiple potentially liable parties. Operators need specific licenses, cranes require regular inspections, and lift plans must be prepared for critical lifts. Liability may extend to crane rental companies, operators, riggers, signal persons, and manufacturers. The catastrophic nature of crane accidents—crushing injuries and multiple victims—warrants substantial compensation."
    },
    {
      question: "What about heat illness prevention on California construction sites?",
      answer: "California's heat illness prevention standard requires employers to provide water, shade, and training. High-heat procedures kick in at 95°F requiring additional precautions. Heat-related illnesses like heat stroke can be fatal, creating liability for employers who fail to implement proper protections. We investigate whether adequate water was provided, shade was accessible, and proper training was conducted."
    },
    {
      question: "How are excavation and trenching accidents handled?",
      answer: "Excavations deeper than five feet require protective systems like sloping, shoring, or trench boxes. Cave-ins kill workers regularly when these protections are absent. OSHA requires competent persons to inspect trenches daily and after weather events. Violations create clear negligence claims. We investigate soil conditions, protective system adequacy, and whether proper inspections occurred."
    },
    {
      question: "What if multiple companies were involved in my construction accident?",
      answer: "Multi-party construction accidents increase recovery potential as each party's insurance represents additional compensation sources. California's joint and several liability allows collecting full damages from any defendant capable of paying, regardless of their fault percentage. We identify all responsible parties including general contractors, subcontractors, property owners, and equipment suppliers to maximize recovery."
    },
    {
      question: "How do silica exposure cases work in construction?",
      answer: "Silica dust from cutting concrete, stone, and masonry causes silicosis and lung cancer. California requires respiratory protection, water suppression, and medical surveillance for silica-exposed workers. Violations create liability for employers and general contractors. Silica diseases may not appear for years, requiring specialized medical evidence linking exposure to illness."
    },
    {
      question: "What compensation is available for construction accident families?",
      answer: "Family members suffer significant losses when construction accidents cause serious injuries or death. Spouses may claim loss of consortium for relationship impacts, children lose financial support and guidance, and parents endure emotional trauma. California recognizes these derivative claims allowing family compensation beyond the injured worker's damages. Wrongful death cases compensate survivors for their losses including lost household services."
    },
    {
      question: "How do we prove construction site safety violations?",
      answer: "We obtain OSHA investigation files through Freedom of Information Act requests, revealing evidence companies try to hide. These documents include witness statements, photographs, inspection notes, and internal communications showing knowledge of hazards. We hire safety experts to analyze site conditions, review safety programs, and identify violations. Cal/OSHA's multi-employer worksite doctrine holds multiple parties liable for violations affecting any workers."
    },
    {
      question: "What if the construction company files for bankruptcy?",
      answer: "Bankruptcy doesn't eliminate personal injury claims—they're generally non-dischargeable debts. However, timing matters as automatic stays may delay proceedings. Insurance policies often survive bankruptcy, providing recovery sources. We file proofs of claim to preserve rights and pursue insurance companies directly. Multiple defendants increase recovery chances when one becomes insolvent."
    },
    {
      question: "Can apprentices and trainees recover for construction accidents?",
      answer: "Yes, apprentices and trainees deserve extra protection due to inexperience. Employers and contractors have heightened duties to provide proper training, supervision, and safety equipment for new workers. Inadequate training programs or rushing inexperienced workers into dangerous situations demonstrates negligence. We investigate whether proper mentorship was provided and safety procedures were adequately explained."
    },
    {
      question: "How do construction accident cases involving government projects work?",
      answer: "Government projects involve additional complexities including prevailing wage requirements, public contract laws, and governmental immunity issues. Claims against government entities require special notice provisions and shorter deadlines—often six months rather than two years. However, private contractors on public projects remain liable for negligence. We navigate these complexities to identify all viable claims and meet procedural requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Construction Accident Lawyer California | OSHA Violations Attorney | Third-Party Claims"
        description="Former defense attorney fighting for construction workers. Third-party claims beyond workers' comp. Scaffolding falls, OSHA violations, crane accidents. Free 24/7 consultation."
        canonical="https://trembachlawfirm.com/practice-areas/construction-accidents"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                ⭐ 2026 Rising Star Attorney
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                🛡️ Former Defense Insider
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                ⚡ 24/7 Emergency Response
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Construction Accident Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              California construction sites present extreme dangers daily. When negligence causes catastrophic injuries, you deserve maximum compensation beyond limited benefits.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              Construction accounts for 20% of all workplace fatalities nationally, with California leading the nation in construction injuries. Falls, electrocutions, struck-by objects, and caught-in/between accidents—the "Fatal Four"—devastate families every year. While others accept minimal settlements, we pursue every liable party: contractors, property owners, equipment manufacturers, and subcontractors who violated safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('case-evaluation')?.scrollIntoView({ behavior: 'smooth' })}>
                Free Case Review
              </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
          <Phone className="w-5 h-5 mr-2" />
          Call (818) 123-4567
        </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Go Back Button - Positioned below hero */}
      <div className="container mx-auto px-8 pt-8">
        <GoBack />
      </div>

      <div className="container mx-auto px-8 py-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div ref={contentRef} className="lg:col-span-2 space-y-12">
              
              {/* What to Do After Construction Accident */}
              <Card className="content-card p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-primary" />
                  What to Do After a Construction Accident
                </h2>
                <p className="text-lg text-muted-foreground mb-8">Critical steps that protect your rights and maximize compensation</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Ensure Safety & Report</h3>
                        <p className="text-muted-foreground">Get immediate medical attention even for "minor" injuries—adrenaline masks serious damage. Report to supervisor immediately but avoid detailed statements.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Document Everything</h3>
                        <p className="text-muted-foreground">Photograph injuries, accident scene, equipment involved, and safety violations. Get witness names and contact information.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Preserve Evidence</h3>
                        <p className="text-muted-foreground">Keep damaged safety equipment, torn clothing, and blood-stained items. Request copies of accident reports and OSHA citations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Identify All Parties</h3>
                        <p className="text-muted-foreground">Construction sites involve multiple contractors, subcontractors, property owners, and equipment suppliers. Each represents potential liability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Refuse Recorded Statements</h3>
                        <p className="text-muted-foreground">Insurance adjusters seek admissions to minimize payouts. Politely decline recorded statements without legal representation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">6</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Contact an Attorney</h3>
                        <p className="text-muted-foreground">Construction accidents involve complex liability issues requiring immediate investigation. Evidence disappears quickly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Third-Party Liability */}
              <Card className="content-card">
                <div className="md:flex items-start space-x-0 md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={thirdPartyImage} 
                      alt="Construction site third party liability" 
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <Shield className="w-8 h-8 mr-3 text-primary" />
                      Third-Party Liability Beyond Workers' Compensation
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Construction accidents often involve multiple parties beyond your direct employer, opening doors to substantial compensation that workers' compensation doesn't provide. While workers' comp offers limited benefits regardless of fault, it doesn't cover pain and suffering, full wage loss, or punitive damages.
                    </p>
                    
                    <Collapsible 
                      open={expandedSections['third-party']} 
                      onOpenChange={() => toggleSection('third-party')}
                    >
                      <CollapsibleTrigger className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <span className="text-lg font-medium">Learn more about third-party claims</span>
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${expandedSections['third-party'] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          California law allows pursuing third-party claims against negligent contractors, subcontractors, property owners, equipment manufacturers, and architects whose actions contributed to your injuries. These claims operate independently from workers' compensation, meaning you can receive benefits while pursuing additional compensation.
                        </p>
                        <p>
                          Common third parties include general contractors who failed to maintain safe conditions, subcontractors whose negligence created hazards, property owners who ignored dangerous conditions, manufacturers of defective equipment, and suppliers of faulty safety gear. Each party's insurance represents additional compensation sources.
                        </p>
                        <p>
                          Unlike workers' compensation's no-fault system, third-party claims require proving negligence. This involves demonstrating the party owed you a duty of care, breached that duty through action or inaction, directly caused your injuries, and resulted in compensable damages.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </Card>

              {/* Construction Site Hazards */}
              <Card className="content-card">
                <div className="md:flex items-start space-x-0 md:space-x-8">
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <AlertTriangle className="w-8 h-8 mr-3 text-primary" />
                      Common Construction Site Hazards and Violations
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      California construction sites present numerous hazards that cause catastrophic injuries and deaths annually. The "Fatal Four" - falls, struck-by objects, electrocutions, and caught-in/between accidents - account for nearly 60% of all construction worker deaths.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Falls from Heights</h4>
                        <p className="text-sm text-muted-foreground">38.4% of construction fatalities involve inadequate fall protection and unsafe scaffolding.</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Struck-by Objects</h4>
                        <p className="text-sm text-muted-foreground">Falling tools, equipment, and materials from heights cause serious injuries.</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Electrocution</h4>
                        <p className="text-sm text-muted-foreground">Contact with power lines and faulty wiring create deadly hazards.</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Caught-in/Between</h4>
                        <p className="text-sm text-muted-foreground">Trench collapses and machinery entanglement cause crushing injuries.</p>
                      </div>
                    </div>
                    
                    <Collapsible 
                      open={expandedSections['hazards']} 
                      onOpenChange={() => toggleSection('hazards')}
                    >
                      <CollapsibleTrigger className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <span className="text-lg font-medium">Learn more about construction hazards</span>
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${expandedSections['hazards'] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          Scaffolding accidents involve improper assembly, overloading, missing planking, and inadequate bracing. These temporary structures must support four times intended loads, yet cost-cutting measures compromise structural integrity. Wet conditions exponentially increase electrocution risks, yet work continues during rain without additional precautions.
                        </p>
                        <p>
                          Excavations deeper than five feet require protective systems, yet cave-ins kill workers regularly. Additional hazards include toxic exposures to silica dust, asbestos, lead, and chemicals; heat stress causing dehydration and heatstroke; repetitive motion injuries; and inadequate personal protective equipment.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={hazardsImage} 
                      alt="Construction site hazards" 
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>

              {/* OSHA Violations */}
              <Card className="content-card">
                <div className="md:flex items-start space-x-0 md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={oshaViolationsImage} 
                      alt="OSHA violations on construction site" 
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <FileText className="w-8 h-8 mr-3 text-primary" />
                      OSHA and Cal/OSHA Violations Strengthening Your Claim
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      OSHA and California's Cal/OSHA establish mandatory safety standards protecting construction workers. Violations of these regulations provide powerful evidence of negligence in third-party claims.
                    </p>
                    
                    <div className="bg-primary/5 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-lg mb-2">Maximum OSHA Penalty</h4>
                      <p className="text-2xl font-bold text-primary">$158,000+</p>
                      <p className="text-sm text-muted-foreground">Per willful violation in California</p>
                    </div>
                    
                    <Collapsible 
                      open={expandedSections['osha']} 
                      onOpenChange={() => toggleSection('osha')}
                    >
                      <CollapsibleTrigger className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <span className="text-lg font-medium">Learn more about OSHA violations</span>
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${expandedSections['osha'] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          Common OSHA violations include failure to provide fall protection (most cited violation annually), inadequate hazard communication about dangerous chemicals, improper scaffolding construction and use, lack of respiratory protection, missing eye and face protection, inadequate ladder safety, and absent excavation protections.
                        </p>
                        <p>
                          Citation categories indicate violation severity: willful violations show intentional disregard for safety; serious violations create substantial probability of death or serious injury; repeat violations demonstrate patterns of negligence. Multiple violations strengthen claims by showing systematic safety failures.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </Card>

              {/* Compensation Available */}
              <Card className="content-card">
                <div className="md:flex items-start space-x-0 md:space-x-8">
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <DollarSign className="w-8 h-8 mr-3 text-primary" />
                      Types of Compensation Available
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Construction accident victims deserve comprehensive compensation addressing all losses, not just the limited benefits workers' compensation provides.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg text-primary">Economic Damages</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> All medical expenses (past and future)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Full wage loss without statutory caps</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Lost earning capacity</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Vocational rehabilitation costs</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg text-primary">Non-Economic Damages</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Pain and suffering</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Emotional distress</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Loss of life enjoyment</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Relationship impacts</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Collapsible 
                      open={expandedSections['compensation']} 
                      onOpenChange={() => toggleSection('compensation')}
                    >
                      <CollapsibleTrigger className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <span className="text-lg font-medium">Learn more about compensation</span>
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${expandedSections['compensation'] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          Unlike workers' comp's partial wage replacement, personal injury claims seek 100% of lost income including overtime, bonuses, and benefits. Catastrophic injuries often require lifetime care costing millions in medical expenses, rehabilitation, medications, assistive technology, and home modifications.
                        </p>
                        <p>
                          Punitive damages may apply when defendants acted with willful disregard for safety, sending powerful messages that worker safety matters more than profits. These additional damages aren't available through workers' compensation but can significantly increase total recovery through third-party claims.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={compensationImage} 
                      alt="Construction compensation calculation" 
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>

              {/* Legal Process */}
              <Card className="content-card">
                <div className="md:flex items-start space-x-0 md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src={legalProcessImage} 
                      alt="Construction legal process" 
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <Scale className="w-8 h-8 mr-3 text-primary" />
                      The Legal Process for Construction Accidents
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Construction accident cases require immediate action and thorough investigation. Our systematic approach maximizes recovery while protecting your rights throughout the process.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Free Case Evaluation</h4>
                          <p className="text-sm text-muted-foreground">We assess liability, identify responsible parties, and evaluate potential compensation.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Immediate Investigation</h4>
                          <p className="text-sm text-muted-foreground">Preserve evidence, interview witnesses, and obtain OSHA reports before they disappear.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Expert Analysis</h4>
                          <p className="text-sm text-muted-foreground">Safety experts, engineers, and medical professionals build compelling evidence.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Negotiation & Trial</h4>
                          <p className="text-sm text-muted-foreground">Aggressive negotiation backed by trial readiness forces fair settlements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FAQs */}
              <Card className="content-card p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Frequently Asked Questions About Construction Accidents
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors text-left">
                        <span className="font-medium text-lg pr-4">{faq.question}</span>
                        <ChevronRight className="w-5 h-5 flex-shrink-0 transition-transform ui-open:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pt-4 pb-2">
                        <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </Card>

              {/* Time Limits Section */}
              <Card className="content-card p-8 bg-destructive/5 border-destructive/20">
                <div className="text-center">
                  <Clock className="w-16 h-16 mx-auto mb-6 text-destructive" />
                  <h2 className="text-3xl font-bold mb-4 text-destructive">
                    Don't Wait - Time Limits Apply for California Construction Accidents
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                    California law imposes strict deadlines for filing construction accident claims. Personal injury claims generally must be filed within two years of the accident date. Government entity claims require notice within six months. Missing these deadlines eliminates your right to compensation forever.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('case-evaluation')?.scrollIntoView({ behavior: 'smooth' })}>
                      Start Construction Accident Evaluation
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* 3 Ways to Start Your Case */}
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-center">3 Ways to Start Your Case</h3>
                  <div className="space-y-4">
                    <Button 
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-accent/50" 
                      variant="outline"
                      onClick={() => document.getElementById('case-evaluation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className="flex items-center w-full">
                        <MessageCircle className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                        <div className="flex-grow text-left">
                          <div className="font-semibold text-lg text-foreground">24/7 Live Chat</div>
                          <div className="text-sm text-muted-foreground">Start Construction Accident Evaluation</div>
                        </div>
                      </div>
                    </Button>
                    
                    <Button 
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-accent/50" 
                      variant="outline"
                      asChild
                    >
                      <a href="tel:8181234567">
                        <div className="flex items-center w-full">
                          <Phone className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                          <div className="flex-grow text-left">
                            <div className="font-semibold text-lg text-foreground">Call (818) 123-4567</div>
                            <div className="text-sm text-muted-foreground">Free Construction Consultation</div>
                          </div>
                        </div>
                      </a>
                    </Button>
                    
                    <Button 
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-accent/50" 
                      variant="outline"
                      onClick={() => document.getElementById('case-evaluation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className="flex items-center w-full">
                        <Calendar className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                        <div className="flex-grow text-left">
                          <div className="font-semibold text-lg text-foreground">Schedule Consultation</div>
                          <div className="text-sm text-muted-foreground">Meet with Construction Attorney</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/construction-case-evaluation">
                        <FileText className="w-4 h-4 mr-2" />
                        Start Case Evaluation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/construction-compensation-calculator">
                        <Calculator className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/construction-medical-guidance">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Medical Guidance
                      </Link>
                    </Button>
                  </div>
                </Card>

                {/* Contact Information */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">(818) 123-4567</div>
                        <div className="text-sm text-muted-foreground">24/7 Emergency Line</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">info@trembachlawfirm.com</div>
                        <div className="text-sm text-muted-foreground">Email Response: 1 Hour</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Statewide Representation</div>
                        <div className="text-sm text-muted-foreground">California Construction Accidents</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Case Evaluation Form */}
                <Card id="case-evaluation" className="p-6">
                  <h3 className="text-xl font-bold mb-4">Free Case Evaluation</h3>
                  <p className="text-sm text-muted-foreground mb-4">No Fees • No Risk • Available 24/7</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Accident *</label>
                      <select
                        name="accidentType"
                        value={formData.accidentType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="fall-from-height">Fall from Height</option>
                        <option value="scaffolding-collapse">Scaffolding Collapse</option>
                        <option value="crane-equipment">Crane/Equipment Accident</option>
                        <option value="electrocution">Electrocution</option>
                        <option value="struck-by-object">Struck by Object</option>
                        <option value="caught-in-between">Caught In/Between</option>
                        <option value="toxic-exposure">Toxic Exposure</option>
                        <option value="explosion-fire">Explosion/Fire</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Brief Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your construction accident..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Get Help Now →
                    </Button>
                  </form>
                </Card>

                {/* Why Choose Us */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our Construction Accident Team</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Former Defense Experience</div>
                        <div className="text-sm text-muted-foreground">We know insurance company tactics</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">OSHA Violation Expertise</div>
                        <div className="text-sm text-muted-foreground">Specialized knowledge of safety regulations</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">No Fees Unless We Win</div>
                        <div className="text-sm text-muted-foreground">Contingency fee representation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">24/7 Emergency Response</div>
                        <div className="text-sm text-muted-foreground">Immediate accident scene investigation</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Important Deadlines */}
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <h3 className="text-xl font-bold mb-4 text-destructive">Important Legal Deadlines</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">Personal Injury Claims</div>
                      <div className="text-sm text-muted-foreground">2 years from accident date</div>
                    </div>
                    <div>
                      <div className="font-medium">Government Entity Claims</div>
                      <div className="text-sm text-muted-foreground">6 months notice requirement</div>
                    </div>
                    <div>
                      <div className="font-medium">Workers' Compensation</div>
                      <div className="text-sm text-muted-foreground">Report within 30 days</div>
                    </div>
                    <div>
                      <div className="font-medium">Evidence Preservation</div>
                      <div className="text-sm text-muted-foreground">Act immediately before it's destroyed</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionAccidents;