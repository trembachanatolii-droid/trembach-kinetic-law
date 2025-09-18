import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronDown, 
  ChevronUp,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Building,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  HardHat,
  Wrench,
  Camera,
  MapPin
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/construction-accidents-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/construction-osha-violations-new.jpg';
import accidentTypesImage from '@/assets/practice-areas/construction-third-party-new.jpg';
import provingNegligenceImage from '@/assets/practice-areas/construction-legal-process-new.jpg';
import compensationImage from '@/assets/practice-areas/construction-compensation-new.jpg';
import hazardsImage from '@/assets/practice-areas/construction-hazards-new.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ConstructionAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lawyers');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    injuryType: '',
    accidentLocation: '',
    description: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'lawyers', label: 'CONSTRUCTION ACCIDENT LAWYERS', icon: HardHat },
    { id: 'after-accident', label: 'AFTER AN ACCIDENT', icon: AlertTriangle },
    { id: 'faq', label: 'CONSTRUCTION ACCIDENT FAQ', icon: HelpCircle },
    { id: 'related-cases', label: 'RELATED CASES', icon: FileText }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/construction-case-evaluation';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "Can I sue for a construction accident if I'm receiving workers' compensation?",
      answer: "Yes, you can pursue third-party claims while receiving workers' compensation benefits. Workers' comp only prevents suing your direct employer, not other negligent parties. General contractors, subcontractors, property owners, equipment manufacturers, and architects may face liability for your injuries. These claims seek damages workers' comp doesn't cover: pain and suffering, full wage loss, and punitive damages."
    },
    {
      question: "What's the time limit for filing a construction accident lawsuit in California?",
      answer: "California generally allows two years from the accident date to file personal injury claims against third parties. However, claims against government entities require filing administrative claims within six months. Discovery rule exceptions apply when injuries aren't immediately apparent, starting the deadline when you reasonably should have discovered the injury and its cause."
    },
    {
      question: "Who can be held liable in a construction accident besides my employer?",
      answer: "Multiple parties may share liability: general contractors controlling site safety, subcontractors whose negligence created hazards, property owners who knew of dangerous conditions, equipment manufacturers if machinery was defective, architects/engineers for design flaws, material suppliers providing defective products, and maintenance companies failing to service equipment properly."
    },
    {
      question: "How much is my construction accident case worth?",
      answer: "Case values vary dramatically based on injury severity, liability strength, and available insurance. Catastrophic injuries like paralysis, brain damage, or amputations warrant significant compensation. Factors include: medical expenses (past and future), lost wages and earning capacity, pain and suffering, permanent disability impacts, scarring/disfigurement, and potential punitive damages."
    },
    {
      question: "What if I was partially at fault for my construction accident?",
      answer: "California follows comparative negligence laws—you can recover damages even if partially at fault, though your compensation reduces by your fault percentage. If you're 20% at fault for a $100,000 case, you'd receive $80,000. Don't assume fault based on initial impressions. Many factors contribute to accidents: inadequate training, safety violations, defective equipment, or poor site conditions."
    },
    {
      question: "Do I need a lawyer for my construction accident case?",
      answer: "Construction accident cases involve complex liability issues, multiple insurance policies, and aggressive defense tactics. Insurance companies use experienced lawyers to minimize payouts. You need equal representation to protect your rights. We handle all legal aspects while you focus on recovery. Our expertise maximizes compensation and prevents costly mistakes that could destroy your case."
    },
    {
      question: "What evidence should I preserve after a construction accident?",
      answer: "Document everything immediately: photograph the accident scene, equipment involved, and your injuries. Collect witness contact information. Report the incident to supervisors and request copies of all reports. Preserve work clothes and safety equipment. Don't give recorded statements to insurance companies without legal counsel. Evidence disappears quickly on active construction sites."
    },
    {
      question: "Can family members sue if a construction worker dies in an accident?",
      answer: "Yes, surviving family members can file wrongful death claims against third parties responsible for the accident. Spouses, children, and sometimes parents or siblings may recover compensation for lost financial support, companionship, and funeral expenses. These claims proceed separately from workers' compensation death benefits and often provide substantially more compensation."
    },
    {
      question: "What types of construction accidents are most common?",
      answer: "Falls from heights account for most construction fatalities, followed by being struck by objects, electrocutions, and caught-in/between accidents. Common scenarios include scaffold collapses, ladder falls, crane accidents, trench cave-ins, defective equipment injuries, and exposure to hazardous materials. Each accident type involves different liability theories and safety regulations."
    },
    {
      question: "How long do construction accident lawsuits take?",
      answer: "Timeline varies based on case complexity, injury severity, and defendant cooperation. Simple cases may resolve in 6-12 months, while complex cases involving catastrophic injuries or multiple defendants can take 2-3 years. We work efficiently to resolve cases quickly while ensuring maximum compensation. Some cases settle during litigation, others require trial."
    },
    {
      question: "What safety violations commonly cause construction accidents?",
      answer: "OSHA violations frequently contribute to accidents: inadequate fall protection, improper scaffolding, defective personal protective equipment, lack of safety training, unsafe excavation practices, improper equipment maintenance, inadequate hazard communication, and failure to implement safety programs. These violations often establish negligence in third-party claims."
    },
    {
      question: "Can I sue the general contractor if I work for a subcontractor?",
      answer: "Yes, general contractors have legal duties to maintain safe worksites for all workers, regardless of who employs them. They must coordinate safety programs, ensure OSHA compliance, and address known hazards. If their negligence contributed to your accident, you can pursue third-party claims while receiving workers' compensation from your direct employer."
    },
    {
      question: "What if my construction accident was caused by defective equipment?",
      answer: "Equipment manufacturers, distributors, and rental companies may face strict liability for defective products causing injuries. Design defects, manufacturing flaws, and inadequate warnings can establish liability. We investigate equipment maintenance records, design specifications, and similar incidents. These cases often involve substantial damages due to corporate defendants with significant insurance coverage."
    },
    {
      question: "Are there special rules for government construction projects?",
      answer: "Government projects involve additional complexity: prevailing wage requirements, special insurance provisions, and sovereign immunity issues. Claims against government entities require administrative claims within six months. Public entities may have caps on damages, but contractors and their insurers remain fully liable. We understand these unique requirements and procedures."
    },
    {
      question: "What compensation can I recover for a construction accident?",
      answer: "Third-party claims can recover: medical expenses (past and future), lost wages and earning capacity, pain and suffering, disability and disfigurement damages, loss of life enjoyment, and sometimes punitive damages. Unlike workers' compensation, there are no caps on pain and suffering or wage loss compensation. Multiple defendants increase potential recovery."
    },
    {
      question: "How do I prove negligence in a construction accident case?",
      answer: "Negligence requires proving: duty (obligation to provide safe conditions), breach (violation of safety standards), causation (breach caused the accident), and damages (actual injuries and losses). We use accident reconstruction experts, safety professionals, medical experts, and economists to build compelling cases. OSHA violations often establish breach of duty."
    },
    {
      question: "What if the construction company claims I was an independent contractor?",
      answer: "Worker classification affects available remedies but doesn't eliminate third-party claims. Independent contractors can still sue negligent general contractors, property owners, equipment manufacturers, and other parties. If misclassified as an independent contractor when you were actually an employee, additional claims may exist for wage and hour violations, benefits, and insurance coverage."
    },
    {
      question: "Can I refuse unsafe work without being fired?",
      answer: "California law protects workers who refuse dangerous work that could cause serious injury or death. You cannot be fired, demoted, or discriminated against for exercising safety rights. If retaliation occurs, additional claims exist beyond injury compensation. Document safety concerns and refusals in writing when possible."
    },
    {
      question: "What should I do if my employer pressures me not to report an accident?",
      answer: "Never let employers discourage accident reporting. You have legal rights to report injuries and file workers' compensation claims. Employer retaliation is illegal and creates additional liability. Report accidents to supervisors, workers' compensation carriers, and consider OSHA complaints for serious violations. Early reporting strengthens your case."
    },
    {
      question: "How do construction accident cases differ from other injury cases?",
      answer: "Construction cases involve unique challenges: multiple parties and insurance policies, complex safety regulations, specialized equipment and procedures, union considerations, and aggressive defense tactics by construction industry insurers. These cases require attorneys with specific construction industry knowledge and experience handling multi-party litigation."
    },
    {
      question: "What if I don't have legal immigration status?",
      answer: "Immigration status doesn't affect your right to compensation for construction accident injuries. All workers, regardless of status, are entitled to safe working conditions and compensation when injured by negligent parties. We protect client confidentiality and understand the unique concerns undocumented workers face in pursuing legal claims."
    },
    {
      question: "Can I be forced to accept a settlement offer?",
      answer: "No one can force settlement acceptance. You have the right to reject inadequate offers and proceed to trial. Insurance companies often make low initial offers hoping for quick resolution. We evaluate all settlement offers against potential trial outcomes and advise whether offers fairly compensate for your injuries and losses."
    },
    {
      question: "What if the accident happened on a residential construction project?",
      answer: "Residential projects involve the same liability principles as commercial construction. Homeowners, general contractors, subcontractors, and equipment suppliers can face liability for negligent acts causing injuries. Homeowner insurance policies often provide coverage, though contractors and their insurers typically bear primary responsibility for worksite safety."
    },
    {
      question: "How do weather conditions affect construction accident liability?",
      answer: "Weather doesn't automatically excuse negligence. Employers and contractors must adjust work practices for weather conditions, provide appropriate equipment and training, and suspend dangerous operations when necessary. Failing to account for weather-related hazards like wet surfaces, high winds, or extreme temperatures can establish negligence."
    },
    {
      question: "Can I sue if injured during construction training?",
      answer: "Training situations don't eliminate third-party liability. If training involved negligent supervision, defective equipment, or inadequate safety measures, claims may exist against trainers, equipment manufacturers, or property owners. Educational institutions and training companies owe duties to provide safe learning environments with proper instruction and equipment."
    },
    {
      question: "What if my construction accident was witnessed by coworkers?",
      answer: "Coworker testimony can strengthen your case significantly. They can describe the accident, unsafe conditions, and your injuries. However, coworkers may fear employer retaliation for testifying. We protect witness identities when possible and understand the dynamics affecting worker testimony in construction cases."
    },
    {
      question: "Are there differences between union and non-union construction accidents?",
      answer: "Both union and non-union workers have the same rights to safe working conditions and third-party compensation. Union contracts may provide additional benefits, grievance procedures, and safety protocols. Union safety representatives often document violations that help establish negligence. We work with union representatives when beneficial to your case."
    },
    {
      question: "What if I was injured by falling debris or tools?",
      answer: "Falling object accidents often involve multiple liable parties: contractors who failed to secure materials, property owners who allowed unsafe conditions, equipment manufacturers if restraint systems failed, and workers who negligently dropped objects. We investigate all potential sources of liability and insurance coverage for maximum compensation."
    },
    {
      question: "Can I recover compensation for emotional distress from a construction accident?",
      answer: "Emotional distress damages are available in third-party claims, especially for traumatic accidents causing lasting psychological effects. These damages compensate for anxiety, depression, PTSD, and other mental health impacts. Medical documentation from mental health professionals supports these claims, which can be substantial in severe cases."
    },
    {
      question: "What if my construction accident involved exposure to hazardous materials?",
      answer: "Hazardous material exposure cases involve complex liability and causation issues. Responsible parties include employers who failed to provide protection, manufacturers who didn't warn of dangers, and contractors who created exposure conditions. These cases often develop over time as health effects manifest, requiring specialized medical and legal expertise."
    },
    {
      question: "How do I know if my construction accident case is worth pursuing?",
      answer: "Most construction accidents warrant legal investigation due to potential third-party liability and significant damages. Factors favoring pursuit include: serious injuries requiring extensive treatment, clear safety violations, multiple potential defendants, and adequate insurance coverage. We provide free consultations to evaluate case potential and explain your options."
    },
    {
      question: "What if the construction site had no safety measures in place?",
      answer: "Absence of required safety measures establishes strong negligence evidence. OSHA requires specific safety protocols for construction sites, including fall protection, hazard communication, and personal protective equipment. Violations create presumptions of negligence that defendants struggle to overcome, strengthening your compensation claims."
    },
    {
      question: "Can I sue for a construction accident that happened years ago?",
      answer: "Time limits vary based on when you discovered the injury and its cause. While personal injury claims typically have two-year limits, discovery rules may extend deadlines for latent injuries like occupational diseases. Some conditions don't manifest for years after exposure. Contact us immediately to evaluate whether your claims remain viable."
    },
    {
      question: "What if I can't afford a lawyer for my construction accident case?",
      answer: "We handle construction accident cases on contingency fee basis—you pay nothing unless we recover compensation. We advance all case expenses and only collect fees from settlements or verdicts. This arrangement allows injured workers to obtain quality legal representation regardless of financial circumstances."
    },
    {
      question: "How do construction accident cases get resolved?",
      answer: "Most cases settle through negotiation, mediation, or arbitration without trial. We prepare every case for trial while pursuing settlement opportunities. Settlement timing varies—some resolve quickly, others require extensive litigation. We keep clients informed throughout the process and make settlement recommendations based on case-specific factors."
    },
    {
      question: "What if multiple workers were injured in the same construction accident?",
      answer: "Multiple victim cases often involve significant liability and insurance coverage, increasing compensation potential for all victims. Each victim has individual claims with unique damages, though common liability issues may be resolved collectively. We coordinate with other attorneys when beneficial while protecting each client's individual interests."
    },
    {
      question: "Can I sue if injured during construction site cleanup?",
      answer: "Cleanup activities remain part of construction operations subject to the same safety requirements and liability principles. Contractors, property owners, and equipment suppliers maintain duties to provide safe working conditions during all phases of construction, including cleanup and demolition activities."
    },
    {
      question: "What role do OSHA inspections play in construction accident cases?",
      answer: "OSHA inspections following accidents often reveal safety violations that support negligence claims. Inspection reports, citations, and penalties provide strong evidence of regulatory violations. We request OSHA files and coordinate with investigators when appropriate. OSHA findings significantly strengthen third-party liability cases."
    },
    {
      question: "What if I was injured by malfunctioning construction equipment?",
      answer: "Equipment malfunctions may involve manufacturer defects, inadequate maintenance, improper operation, or modification. Responsible parties include manufacturers, rental companies, maintenance contractors, and equipment operators. We investigate equipment history, maintenance records, and similar incidents to establish liability and maximize compensation."
    },
    {
      question: "Can I be fired for filing a construction accident lawsuit?",
      answer: "Employers cannot legally retaliate against workers for exercising legal rights, including filing injury lawsuits against third parties. If retaliation occurs, additional claims exist for wrongful termination, lost wages, and emotional distress. We protect clients' employment rights throughout the legal process."
    },
    {
      question: "What if my construction accident was caused by poor site supervision?",
      answer: "Inadequate supervision often contributes to construction accidents through failure to enforce safety rules, provide proper training, or address known hazards. Supervisors, contractors, and property owners may face liability for negligent supervision. We investigate supervisory practices and training adequacy to establish negligence claims."
    },
    {
      question: "How do construction accident lawyers get paid?",
      answer: "We work on contingency fee basis—you pay attorney fees only if we recover compensation through settlement or trial verdict. Fees are percentages of recovery amounts, typically 33-40% depending on case complexity and resolution stage. We advance all case expenses, including expert fees, court costs, and investigation expenses."
    },
    {
      question: "What if I was injured during construction equipment operation?",
      answer: "Equipment operation accidents may involve operator error, defective machinery, inadequate training, or unsafe working conditions. Liability can extend to equipment manufacturers, rental companies, training providers, and supervisors. We analyze equipment manuals, training records, and operational procedures to identify all responsible parties."
    },
    {
      question: "Can I recover compensation if the construction company goes out of business?",
      answer: "Construction companies typically carry liability insurance that remains available even after business closure. Additionally, general contractors, property owners, and equipment suppliers may share liability with insurance coverage. We identify all insurance policies and responsible parties to maximize compensation regardless of individual company status."
    },
    {
      question: "What if my construction accident involved a trench collapse?",
      answer: "Trench collapses involve specific OSHA regulations requiring protective systems, proper sloping, and atmospheric testing. Violations often establish clear negligence. Responsible parties include excavation contractors, utility companies, property owners, and equipment manufacturers. These cases often involve catastrophic injuries warranting substantial compensation."
    },
    {
      question: "How long do I have to file a construction accident claim?",
      answer: "Personal injury claims against third parties typically must be filed within two years of the accident date. Claims against government entities require administrative claims within six months. Workers' compensation claims have different deadlines. Don't delay—evidence preservation and witness availability become more difficult over time."
    },
    {
      question: "What if I was injured by a crane accident at a construction site?",
      answer: "Crane accidents often involve multiple liable parties: crane operators, signal persons, rigging crews, crane owners, maintenance companies, and general contractors. These complex machines require certified operators, regular inspections, and proper setup. Violations of crane safety regulations often establish negligence supporting substantial damage claims."
    },
    {
      question: "Can I sue for a construction accident if I wasn't wearing safety equipment?",
      answer: "Failure to wear required safety equipment doesn't automatically bar recovery, especially if employers failed to provide equipment, training, or enforcement. California's comparative negligence law allows recovery even with partial fault. Many factors contribute to equipment non-use, including inadequate training, defective equipment, or workplace pressure to skip safety measures."
    },
    {
      question: "What if my construction accident was caused by electrical hazards?",
      answer: "Electrical accidents in construction involve unique liability issues due to complex regulations governing electrical work, equipment, and site conditions. Responsible parties may include electrical contractors, utility companies, equipment manufacturers, and general contractors. These cases often result in severe burns, electrocutions, or death warranting substantial compensation."
    },
    {
      question: "What evidence will help my construction accident case?",
      answer: "Strong evidence includes: accident scene photographs, witness statements, medical records documenting injuries, OSHA inspection reports, equipment maintenance records, safety training documentation, company safety policies, and expert testimony. We conduct thorough investigations to gather all available evidence and reconstruct accident circumstances."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Accident Lawyer - California Personal Injury Attorney"
        description="Expert construction accident lawyers in California. Specialized legal representation for workplace injuries, OSHA violations, and third-party liability claims. Free consultation available."
        canonical="/practice-areas/construction-accidents"
      />
      <GoBack />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            CONSTRUCTION ACCIDENT<br />LAWYER
          </h1>
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-200 font-medium">
              Expert Legal Representation for Construction Site Injuries
            </p>
          </div>
          <Link 
            to="/construction-case-evaluation"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg uppercase"
          >
            FREE CASE EVALUATION
          </Link>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-red-600 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-4 text-sm md:text-base font-bold text-white hover:bg-red-700 transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-red-700' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            
            {/* Construction Accident Lawyers Section */}
            <section id="lawyers" className="content-section mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-red-600"></div>
                <h2 className="text-4xl font-bold text-foreground">Construction Accident Lawyers</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <img 
                    src={whatToDoImage} 
                    alt="Construction site safety and legal consultation" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Construction sites are among the most dangerous work environments, with workers facing daily risks from falls, equipment failures, structural collapses, and exposure to hazardous materials. When accidents occur, the resulting injuries can be catastrophic, affecting not only the injured worker but their entire family.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our experienced construction accident attorneys understand the complex web of liability that exists on construction sites. While workers' compensation may cover some costs, it often falls short of providing full compensation for the true extent of damages suffered.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Construction Accident Lawyers?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">Extensive experience with OSHA regulations and construction safety standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">Deep understanding of construction industry practices and liability issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Scale className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">Track record of identifying all responsible parties for maximum compensation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">No fees unless we win your case - contingency fee representation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Third-Party Liability in Construction Accidents</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  While workers' compensation prevents you from suing your direct employer, you may still have claims against other parties whose negligence contributed to your accident. These third-party claims can provide compensation for damages not covered by workers' compensation, including pain and suffering, full wage loss, and punitive damages.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Potentially Liable Parties:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• General contractors and project managers</li>
                      <li>• Subcontractors and their employees</li>
                      <li>• Property owners and developers</li>
                      <li>• Equipment manufacturers and suppliers</li>
                      <li>• Architects and design professionals</li>
                      <li>• Material suppliers and distributors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Common Causes of Liability:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Failure to maintain safe working conditions</li>
                      <li>• Inadequate safety training or supervision</li>
                      <li>• Defective equipment or tools</li>
                      <li>• Poor site planning and design</li>
                      <li>• OSHA safety violations</li>
                      <li>• Failure to warn of known hazards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* After an Accident Section */}
            <section id="after-accident" className="content-section mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-red-600"></div>
                <h2 className="text-4xl font-bold text-foreground">After an Accident</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <img 
                    src={accidentTypesImage} 
                    alt="Construction accident scene documentation" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Immediate Steps to Take</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Seek Medical Attention</h4>
                        <p className="text-muted-foreground">Get immediate medical care, even if injuries seem minor. Some construction injuries may not manifest symptoms immediately.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Report the Accident</h4>
                        <p className="text-muted-foreground">Notify your supervisor and ensure an official accident report is filed with all relevant details.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Document Everything</h4>
                        <p className="text-muted-foreground">Take photos of the accident scene, your injuries, and any equipment involved. Collect witness contact information.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground">Contact an Attorney</h4>
                        <p className="text-muted-foreground">Consult with a construction accident lawyer before giving any recorded statements to insurance companies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">Critical Warning</h3>
                    <p className="text-red-700 leading-relaxed">
                      Do not give recorded statements to insurance companies without legal representation. These statements are often used to minimize or deny your claim. Insurance adjusters are trained to ask questions that may hurt your case. Politely decline and refer them to your attorney.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Camera className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Document the Scene</h3>
                    <p className="text-muted-foreground">Photograph all aspects of the accident scene, including equipment, tools, and environmental conditions.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Identify Witnesses</h3>
                    <p className="text-muted-foreground">Collect contact information from anyone who saw the accident or unsafe conditions leading to it.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Act Quickly</h3>
                    <p className="text-muted-foreground">Evidence can disappear quickly on active construction sites. Time is critical for preserving your legal rights.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-red-600"></div>
                <h2 className="text-4xl font-bold text-foreground">Construction Accident FAQ</h2>
              </div>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    >
                      <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </button>
                    <Collapsible open={expandedFaq === index}>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Cases Section */}
            <section id="related-cases" className="content-section mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-red-600"></div>
                <h2 className="text-4xl font-bold text-foreground">Related Cases</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/practice-areas/premises-liability" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Building className="w-12 h-12 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">Premises Liability</h3>
                      <p className="text-muted-foreground">Property owner negligence and unsafe conditions causing injuries on construction sites.</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/practice-areas/product-liability" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Wrench className="w-12 h-12 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">Product Liability</h3>
                      <p className="text-muted-foreground">Defective construction equipment and tools causing workplace injuries.</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/practice-areas/wrongful-death" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Scale className="w-12 h-12 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">Wrongful Death</h3>
                      <p className="text-muted-foreground">Fatal construction accidents and compensation for surviving family members.</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar - 3 Ways to Start */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <Card className="mb-8">
                <CardHeader className="text-center bg-red-600 text-white">
                  <CardTitle className="text-2xl font-bold">3 WAYS<br/>TO START</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">24/7 Live Chat</h3>
                      <p className="text-muted-foreground text-sm mb-4">Start a conversation with our legal team anytime, day or night.</p>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Chat Now
                      </Button>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Free Case Evaluation</h3>
                      <p className="text-muted-foreground text-sm mb-4">Get a comprehensive analysis of your construction accident case.</p>
                      <Link to="/construction-case-evaluation">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          <FileText className="w-4 h-4 mr-2" />
                          Start Construction Accident Evaluation
                        </Button>
                      </Link>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Call Now</h3>
                      <p className="text-muted-foreground text-sm mb-4">Speak directly with our construction accident attorneys.</p>
                      <a href="tel:8181234567">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Call (818) 123-4567
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Case Evaluation Form */}
              <Card>
                <CardHeader className="bg-blue-600 text-white text-center">
                  <CardTitle className="text-xl font-bold">Free Case Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="date"
                      name="accidentDate"
                      placeholder="Accident Date"
                      value={formData.accidentDate}
                      onChange={handleInputChange}
                    />
                    <Select onValueChange={(value) => handleSelectChange('injuryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Type of Injury" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="falls">Falls from Heights</SelectItem>
                        <SelectItem value="struck-by">Struck by Objects</SelectItem>
                        <SelectItem value="electrocution">Electrocution</SelectItem>
                        <SelectItem value="caught-in">Caught-in/Between</SelectItem>
                        <SelectItem value="burns">Burns</SelectItem>
                        <SelectItem value="respiratory">Respiratory Issues</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      name="description"
                      placeholder="Brief description of the accident..."
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Free Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Wait - Time Limits Apply for California Construction Accidents
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            California law imposes strict deadlines for filing construction accident claims. You typically have two years from the accident date to file third-party claims, but government entity claims require administrative filings within six months. Don't risk losing your right to compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/construction-case-evaluation"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              START YOUR CONSTRUCTION ACCIDENT EVALUATION
            </Link>
            <a 
              href="tel:8181234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
            >
              CALL (818) 123-4567 NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionAccidents;