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
  Building,
  Map,
  ArrowLeft,
  Eye,
  Globe,
  Gavel
} from 'lucide-react';
import heroBackground from '@/assets/defamation-hero-bg.jpg';
import sidebarImage from '@/assets/defamation-sidebar.jpg';
import diagnosisImage from '@/assets/defamation-diagnosis-process.jpg';
import legalProcessImage from '@/assets/defamation-legal-process.jpg';
import exposureSitesImage from '@/assets/california-defamation-sites.jpg';
import medicalImage from '@/assets/defamation-medical-facility.jpg';
import compensationImage from '@/assets/defamation-compensation-calculator.jpg';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Defamation: React.FC = () => {
  useScrollRestoration();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    defamationType: '',
    platform: ''
  });
  const [showGoBack, setShowGoBack] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatingLayersRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER DEFAMATION', icon: Shield },
    { id: 'diagnosis-process', label: 'DEFAMATION TYPES', icon: Globe },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Gavel },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  const faqs = [
    {
      question: "What is defamation under California law?",
      answer: "California law defines defamation as the publication of a false statement to a third party that causes harm to another party's reputation. Under California Civil Code sections 44, 45, and 46, defamation includes both libel (written statements) and slander (spoken statements). To establish a defamation claim in California, you must prove five essential elements: (1) an intentional publication of a statement of fact, (2) that is false, (3) that is unprivileged, (4) that has a natural tendency to injure or causes special damage, and (5) the defendant's fault in publishing the statement amounted to at least negligence."
    },
    {
      question: "What is the difference between libel and slander in California?",
      answer: "California distinguishes between written defamation (libel) and spoken defamation (slander), though modern courts often apply similar standards to both. Libel includes written statements, social media posts, emails, text messages, online reviews, blog posts, and any other permanent form of communication. Since written statements can be shared and preserved indefinitely, courts traditionally viewed libel as more harmful than slander. Slander involves spoken statements made to third parties, including verbal accusations, rumors spread in person, statements made at meetings or events, and oral communications in professional settings."
    },
    {
      question: "What is the statute of limitations for defamation cases in California?",
      answer: "California imposes a strict one-year statute of limitations for defamation claims under Code of Civil Procedure Section 340(c). This deadline begins when the defamatory statement is first published, not when the plaintiff discovers it or when damage occurs. The single publication rule means that subsequent sharing, retweeting, or reposting doesn't restart the limitations period."
    },
    {
      question: "What damages can I recover in a California defamation case?",
      answer: "California defamation victims can recover multiple types of damages depending on their case circumstances. General damages compensate for non-economic harm including loss of reputation, shame, mortification, hurt feelings, emotional distress, humiliation, and social ostracism. These damages are presumed in defamation per se cases without requiring specific proof of amount. Special damages cover actual economic losses such as lost business opportunities, decreased income, job termination, promotion denial, client loss, contract cancellations, and quantifiable financial harm."
    },
    {
      question: "What is California's Anti-SLAPP law and how does it affect my case?",
      answer: "California Code of Civil Procedure Section 425.16, known as the Anti-SLAPP (Strategic Lawsuit Against Public Participation) statute, provides important protections against frivolous defamation lawsuits designed to silence legitimate criticism. Defendants can file special motions to strike complaints early in litigation, potentially avoiding expensive discovery and trial costs. The Anti-SLAPP analysis involves a two-step process. First, defendants must show the lawsuit arises from protected activity such as statements on matters of public interest. Second, if defendants meet this burden, plaintiffs must demonstrate a probability of prevailing on their claims."
    },
    {
      question: "Can I sue for online defamation and social media posts?",
      answer: "Yes, digital defamation presents unique challenges and opportunities in California courts. Social media platforms, review sites, blog comments, and online forums can amplify false statements to massive audiences instantly. Facebook posts, Twitter tweets, Instagram stories, TikTok videos, LinkedIn posts, YouTube comments, Yelp reviews, Google reviews, and other digital content all constitute publications under California defamation law. The permanent nature of online content can make internet defamation more damaging than traditional spoken statements."
    },
    {
      question: "What is defamation 'per se' versus 'per quod'?",
      answer: "California recognizes two categories of defamation that determine whether you must prove actual damages. Defamation 'per se' involves statements so obviously harmful that damages are presumed without proof of actual injury. These include accusations of criminal activity, statements about unfitness for one's profession or trade, accusations of having a loathsome communicable disease, and statements imputing unchastity. Defamation 'per quod' requires proof of actual damages because the harmful nature isn't immediately apparent from the statement itself."
    },
    {
      question: "How does being a public figure versus private figure affect my defamation case?",
      answer: "California defamation law applies different standards depending on whether the plaintiff is a public or private figure. Private individuals need only prove the defendant acted negligently in publishing false statements. Public figures must meet the higher 'actual malice' standard, proving the defendant knew the statement was false or acted with reckless disregard for its truth. California courts recognize three categories of public figures: public officials, all-purpose public figures, and limited-purpose public figures."
    },
    {
      question: "Can I sue someone for sharing or retweeting defamatory content?",
      answer: "Yes, forwarding or sharing defamatory content can constitute republication and create liability for the person sharing it. Each republication is treated as a new publication under California law. However, neutral forwarding with appropriate disclaimers may receive different treatment than endorsement or adoption of the defamatory content. Screenshots preserve evidence, and viral sharing can spread false statements to unlimited audiences."
    },
    {
      question: "What defenses do defendants commonly use in defamation cases?",
      answer: "California recognizes several defenses to defamation claims. Truth is an absolute defense – if the allegedly defamatory statement is substantially true, there is no liability regardless of harm caused. Opinion enjoys First Amendment protection and cannot form the basis of defamation claims. Various privileges protect certain communications from defamation liability, including absolute privilege for judicial proceedings and qualified privilege for employment references made in good faith."
    },
    {
      question: "How can I identify anonymous defendants in online defamation?",
      answer: "Internet defamation often involves anonymous or pseudonymous defendants using fake accounts, handles, or false identities. California permits 'John Doe' lawsuits against unidentified defendants, followed by subpoenas to internet service providers, social media platforms, and website operators to unmask anonymous users. Courts balance First Amendment anonymous speech rights against defamation victims' rights to seek redress."
    },
    {
      question: "Are social media platforms liable for defamatory content?",
      answer: "Federal Communications Decency Act Section 230 generally protects internet platforms from liability for user-generated content, including defamatory posts by third parties. Social media companies, review sites, and online forums typically cannot be sued for hosting defamatory content created by users. However, platforms may be liable if they create or develop content beyond neutral hosting."
    },
    {
      question: "What should I do immediately after discovering defamatory statements?",
      answer: "Take immediate action to preserve evidence by taking screenshots of all defamatory statements, documenting the publication to third parties, saving metadata and timestamps, identifying witnesses who saw the statements, and avoiding public responses that might escalate the situation. Contact an experienced defamation attorney immediately due to California's one-year statute of limitations."
    },
    {
      question: "Can I get an injunction to stop ongoing defamation?",
      answer: "California courts can issue injunctions requiring defendants to cease defamatory statements, retract false claims, or publish corrections. Preliminary injunctions may be available for ongoing harm, while permanent injunctions follow successful trials. Injunctive relief is particularly valuable for preventing continued reputational damage and can be combined with monetary damages."
    },
    {
      question: "How do I prove damages in a business defamation case?",
      answer: "Business defamation often involves substantial special damages as false statements directly impact commercial relationships and revenue generation. Evidence includes financial records showing decreased income, documentation of lost business opportunities, client testimony about cancelled contracts, expert testimony on economic impact, and reputation evidence before and after the defamatory statements. Business defamation cases frequently qualify as defamation per se."
    },
    {
      question: "What is the single publication rule?",
      answer: "The single publication rule means the statute of limitations starts when defamatory statements are first published, not with subsequent sharing, retweeting, or reposting of identical content. However, substantially modified statements may create new publication dates. This rule prevents endless extension of limitation periods through viral sharing while recognizing that material changes can restart the clock."
    },
    {
      question: "Can workplace defamation be actionable?",
      answer: "Yes, workplace defamation can be actionable if false statements are published to third parties outside normal employment contexts. Professional defamation affects careers, licensing, and reputation in specific industries. However, communications within employer-employee relationships may be protected by qualified privilege unless made with actual malice."
    },
    {
      question: "How do courts determine if a statement is fact or opinion?",
      answer: "California courts examine the totality of circumstances to determine whether reasonable readers would interpret statements as factual claims or protected opinions. The fact/opinion distinction can be complex, particularly when opinions imply false underlying facts. Context, language used, and whether the statement can be proven true or false all factor into this analysis."
    },
    {
      question: "What role does insurance play in defamation cases?",
      answer: "Some defamation cases may be covered by homeowner's insurance, business liability policies, or specialized media liability coverage. However, intentional acts of defamation may be excluded from coverage. Before filing suit, experienced attorneys investigate defendants' ability to pay through asset searches and insurance coverage analysis to ensure collectability of judgments."
    },
    {
      question: "Can I sue for defamation if the statement was made as a joke?",
      answer: "Statements clearly intended as humor, satire, or parody may receive First Amendment protection, but context matters. If reasonable readers would interpret 'jokes' as factual claims, they may still be actionable. Courts examine the statement's context, audience, and whether it implies false facts about the plaintiff when determining if satirical content crosses the line into actionable defamation."
    },
    {
      question: "How does comparative negligence apply to defamation cases?",
      answer: "California follows pure comparative negligence in defamation cases, meaning you can still recover even if partially at fault for creating the situation. However, your recovery may be reduced by your percentage of fault. For example, if you contributed to a confrontation that led to defamatory statements, damages might be reduced accordingly, but you can still pursue claims for false statements."
    },
    {
      question: "What evidence should I bring to my first consultation?",
      answer: "Bring screenshots of all defamatory statements, documentation of any damages or harm, witness contact information, correspondence with the defamer, evidence of your reputation before the statements, and any attempts you've made to resolve the situation. The more information you provide, the better we can evaluate your case and develop an effective strategy."
    },
    {
      question: "How long do defamation cases typically take in California?",
      answer: "Timeline varies based on case complexity, defendant cooperation, Anti-SLAPP motions, and court schedules. Simple cases may resolve in months through settlement, while complex litigation can take 1-3 years. Anti-SLAPP motions can expedite dismissals or extend timelines. Most cases settle without trial, but preparation for trial often improves settlement outcomes."
    },
    {
      question: "Can defamation cases be settled out of court?",
      answer: "Yes, many defamation cases settle through negotiation, mediation, or arbitration. Settlement agreements typically include monetary compensation, retractions, public apologies, non-disparagement clauses, and confidentiality provisions. Alternative dispute resolution can preserve relationships while achieving appropriate compensation and reputation restoration."
    },
    {
      question: "What if the defamatory statements were made in another state?",
      answer: "California courts may have jurisdiction over out-of-state defendants if they have sufficient minimum contacts with California or if their statements target California residents or businesses. Internet defamation often creates jurisdiction issues that require careful analysis of where harm occurred and defendants' connections to California."
    },
    {
      question: "Should I respond to defamatory statements online?",
      answer: "Generally, avoid public responses that might escalate the situation or provide more attention to defamatory statements. Public arguments can make you look bad and may provide additional evidence for defendants to use. Instead, document the statements, preserve evidence, and consult with an experienced defamation attorney about the best strategic response."
    },
    {
      question: "What are punitive damages in California defamation cases?",
      answer: "Punitive damages punish defendants for particularly egregious conduct and deter similar behavior. California requires clear and convincing evidence that defendants acted with oppression, fraud, or malice. These damages go beyond compensating victims and can substantially increase total recovery in appropriate cases involving intentional and malicious defamation."
    },
    {
      question: "How does former defense attorney experience help my case?",
      answer: "Former defense experience reveals strategies used against defamation victims, including common defense tactics, settlement authority levels, and insurance company approaches. This insider knowledge allows us to anticipate defense moves, counter their arguments effectively, and position cases for maximum recovery. We know their playbook and can use that advantage to benefit our clients."
    },
    {
      question: "What if I win but the defendant can't pay?",
      answer: "Judgment collection can be challenging if defendants lack assets or insurance coverage. Before filing suit, experienced attorneys investigate defendants' ability to pay through asset searches and insurance coverage analysis. Proper pre-suit investigation helps ensure that successful cases result in collectible judgments rather than worthless paper victories."
    },
    {
      question: "Can I sue for fake online reviews?",
      answer: "Yes, fake negative reviews that contain false statements of fact can be actionable defamation. Review sites like Yelp, Google, and industry-specific platforms all constitute publications under California defamation law. However, opinions and subjective evaluations may be protected speech. The key is whether the review contains verifiably false factual claims that damage your reputation."
    },
    {
      question: "What is publication in defamation law?",
      answer: "Publication means communicating defamatory statements to at least one person other than the plaintiff. This includes verbal statements to third parties, written communications, social media posts, emails copied to others, or any method that conveys the statement to someone else. The third party must understand both the statement and its application to the plaintiff for publication to occur."
    },
    {
      question: "How do I prove special damages in defamation cases?",
      answer: "Special damages require specific proof of actual losses attributable to the defamatory statements. Evidence includes financial records showing decreased income, documentation of lost business opportunities, client testimony about cancelled contracts, employment records for job termination or promotion denial, and expert testimony on economic impact. The damages must be quantifiable and directly linked to the defamation."
    },
    {
      question: "Can employers be liable for employee defamation?",
      answer: "Employers may be liable for employee defamation under respondeat superior if the defamatory statements were made within the scope of employment. However, personal vendettas or statements made outside work context typically don't create employer liability. Employers may also face liability for ratifying employee defamation or failing to take corrective action when aware of ongoing workplace defamation."
    },
    {
      question: "What constitutes actual malice in defamation cases?",
      answer: "Actual malice means the defendant knew the statement was false or acted with reckless disregard for its truth. This higher standard applies to public figures and requires clear and convincing evidence. Reckless disregard means entertaining serious doubts about the statement's truth but publishing anyway, or failing to investigate obvious reasons for doubt."
    },
    {
      question: "How do California courts handle internet jurisdiction in defamation cases?",
      answer: "California courts analyze defendants' contacts with California, including targeting California residents or businesses, conducting business in California, or causing harm in California. Internet defamation cases often involve complex jurisdictional analysis considering where defendants are located, where harm occurred, and the nature of online activities directed at California."
    },
    {
      question: "Can I sue for group defamation?",
      answer: "Group defamation claims face special challenges under California law. Statements about large groups generally aren't actionable unless they can reasonably be understood as referring to specific individuals. Small groups may support individual claims if members can show the statements referred to them personally. The key is whether reasonable readers would understand the statements as applying to specific, identifiable individuals."
    },
    {
      question: "What is the discovery rule in defamation cases?",
      answer: "California's one-year statute of limitations generally begins when defamatory statements are first published, not when discovered. However, the discovery rule may extend deadlines in rare cases involving concealed defamation where defendants actively hide their defamatory conduct. Courts apply this exception narrowly, and most defamation cases must be filed within one year of initial publication."
    },
    {
      question: "How do courts evaluate emotional distress damages in defamation?",
      answer: "California courts recognize that defamation naturally causes emotional distress, shame, humiliation, and mental anguish. For defamation per se cases, emotional distress damages are presumed without requiring medical evidence or expert testimony. However, substantial emotional distress damages may require supporting evidence such as medical treatment, therapy records, or expert testimony on psychological impact."
    },
    {
      question: "Can I get attorney fees in a successful defamation case?",
      answer: "California generally follows the American rule requiring each party to pay their own attorney fees unless a statute or contract provides otherwise. However, successful Anti-SLAPP defendants can recover attorney fees. Some defamation cases may involve contracts with attorney fee provisions. Prevailing parties in cases involving frivolous litigation may also recover fees under certain circumstances."
    },
    {
      question: "What is trade libel and how does it differ from personal defamation?",
      answer: "Trade libel involves false statements about products, services, or business practices rather than personal character. Also called commercial disparagement, trade libel protects business interests and typically requires proof of special damages in the form of lost sales or business opportunities. The standards may differ from personal defamation, particularly regarding damages and the application of privileges."
    },
    {
      question: "How do California courts handle anonymous speech and unmasking defendants?",
      answer: "California courts balance First Amendment anonymous speech rights against defamation victims' rights to seek redress. The unmasking process typically requires showing a prima facie defamation case, attempting to identify defendants through other means, and demonstrating legitimate need for identity disclosure. Courts apply varying standards but generally require strong showings before ordering disclosure of anonymous speakers' identities."
    },
    {
      question: "Can I sue for defamation in small claims court?",
      answer: "California small claims courts have jurisdiction over defamation cases involving damages up to $10,000. However, defamation cases often involve complex legal issues, Anti-SLAPP motions, and damages exceeding small claims limits. Most defamation cases are better suited for superior court where full legal procedures, discovery, and higher damage awards are available."
    },
    {
      question: "What happens if defamatory statements are true but published maliciously?",
      answer: "Truth is an absolute defense to defamation claims in California. Even malicious publication of true statements generally doesn't create defamation liability. However, other claims like invasion of privacy, intentional infliction of emotional distress, or business torts might apply to malicious publication of private true information. The context and content determine what alternative legal theories might be available."
    },
    {
      question: "How do courts handle defamation involving public controversies?",
      answer: "Statements about public controversies may receive enhanced First Amendment protection and could trigger Anti-SLAPP analysis. Limited-purpose public figures who voluntarily inject themselves into public controversies face higher actual malice standards. However, private individuals commenting on public issues generally maintain the lower negligence standard unless they become public figures through their participation."
    },
    {
      question: "Can workplace performance reviews be defamatory?",
      answer: "Workplace performance reviews may be protected by qualified privilege if made in good faith for legitimate business purposes. However, false statements in performance reviews published to unnecessary third parties or made with actual malice can lose privilege protection. Context matters, including who receives the review, whether it contains factual inaccuracies, and the employer's motivation."
    },
    {
      question: "What is the litigation privilege in California defamation law?",
      answer: "California's litigation privilege provides absolute immunity for statements made in judicial proceedings, including pleadings, testimony, and other communications with some connection to litigation. This broad privilege protects even false and malicious statements made during legal proceedings. However, the privilege typically doesn't extend to statements made outside the litigation context, even if they relate to pending cases."
    },
    {
      question: "How do I preserve evidence for an online defamation case?",
      answer: "Immediately take screenshots of defamatory posts, save URLs and timestamps, document metadata when possible, identify witnesses who saw the statements, archive web pages using services like Archive.org, save any responses or comments, and avoid deleting or modifying the evidence. Digital evidence can disappear quickly, so immediate preservation is crucial for successful litigation."
    },
    {
      question: "Why choose Trembach Law Firm for my California defamation case?",
      answer: "Our former defense attorney brings insider knowledge of how defendants approach defamation cases, allowing us to anticipate their strategies and counter their tactics effectively. We work on contingency fees with no upfront costs, provide 24/7 availability, and focus exclusively on protecting your reputation and securing maximum compensation. Your reputation is worth defending, and we're here to fight for you."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D floating background layers with complex animations
      if (floatingLayersRef.current) {
        const layers = floatingLayersRef.current.children;
        
        // Back layer - slow vertical float
        gsap.to(layers[0], {
          y: "30px",
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        // Mid layer - horizontal drift
        gsap.to(layers[1], {
          x: "40px",
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        // Front layer - complex motion
        gsap.to(layers[2], {
          y: "20px",
          x: "25px",
          rotation: "2deg",
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        // Parallax scroll effects
        gsap.to(layers[0], {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: floatingLayersRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        });
        
        gsap.to(layers[1], {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: floatingLayersRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3
          }
        });
        
        gsap.to(layers[2], {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: floatingLayersRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2
          }
        });
      }

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
    window.location.href = '/practice-areas/defamation/case-evaluation';
  };

  const handleGoBack = () => {
    const savedPosition = sessionStorage.getItem(`scrollPosition_/`);
    sessionStorage.setItem('navigatingBack', 'true');
    window.history.back();
  };

  return (
    <>
      <SEO 
        title="California Defamation Attorneys | Libel & Slander Lawyers | Trembach Law Firm"
        description="Former defense attorney fighting defamation cases in California. Online libel, slander, social media defamation, business reputation defense. Free consultation. No fees unless we win."
        keywords="California defamation lawyer, libel attorney, slander lawyer, online defamation attorney, social media libel lawyer, business defamation attorney, anti-SLAPP motion lawyer, cyber libel attorney, internet defamation lawyer, reputation defense attorney"
        canonical="https://www.trembachlawfirm.com/practice-areas/defamation"
      />
      
      <div className="min-h-screen bg-background">
        {/* 3D Background Layers */}
        <div 
          ref={floatingLayersRef}
          className="fixed inset-0 pointer-events-none"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent rounded-3xl"
            style={{ transform: 'translateZ(-500px) scale(1.5)' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent rounded-2xl"
            style={{ transform: 'translateZ(-250px) scale(1.3)' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl"
            style={{ transform: 'translateZ(-100px) scale(1.1)' }}
          />
        </div>

        {/* Go Back Button with scroll-triggered fade-in */}
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
          ref={heroRef}
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Defend Your Reputation Against False Attacks
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg text-white">Former Defense Attorney</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/practice-areas/defamation/case-evaluation'}
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
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Defamation Attorneys</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-xl leading-relaxed mb-4">
                    Don't let lies destroy what you've built. Our former defense attorney knows how to fight defamation cases and protect your reputation throughout California. For many of us, our reputation is our most valuable asset. In today's digital age, false statements can spread instantly and cause devastating damage to your personal and professional life.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    Defamation cases in California can be particularly complex, involving intricate legal standards, strict timelines, and sophisticated defense strategies employed by defendants and their insurance companies. California law defines defamation as the publication of a false statement to a third party that causes harm to another party's reputation.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About California Defamation Law
                      {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                            <Globe className="w-5 h-5 mr-2 text-primary" />
                            Online Defamation Expertise
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We understand the complexities of digital defamation, including social media posts, online reviews, and viral content that can damage your reputation instantly and permanently.</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                            <Shield className="w-5 h-5 mr-2 text-primary" />
                            Anti-SLAPP Defense
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Our former defense experience helps us navigate California's Anti-SLAPP law and protect your legitimate defamation claims from frivolous defense tactics.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Understanding California Defamation Law</h3>
                      <div className="prose prose-lg max-w-none">
                        <p>
                          Under California Civil Code sections 44, 45, and 46, defamation includes both libel (written statements) and slander (spoken statements). To establish a defamation claim in California, you must prove five essential elements: (1) an intentional publication of a statement of fact, (2) that is false, (3) that is unprivileged, (4) that has a natural tendency to injure or causes special damage, and (5) the defendant's fault in publishing the statement amounted to at least negligence.
                        </p>
                        
                        <p>
                          California distinguishes between written defamation (libel) and spoken defamation (slander), though modern courts often apply similar standards to both. Libel includes written statements, social media posts, emails, text messages, online reviews, blog posts, and any other permanent form of communication. Since written statements can be shared and preserved indefinitely, courts traditionally viewed libel as more harmful than slander.
                        </p>
                        
                        <p>
                          California recognizes two categories of defamation that determine whether you must prove actual damages. Defamation "per se" involves statements so obviously harmful that damages are presumed without proof of actual injury. These include accusations of criminal activity, statements about unfitness for one's profession or trade, accusations of having a loathsome communicable disease, and statements imputing unchastity.
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Free Defamation Case Evaluation</h2>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                  <p className="mb-6 text-lg">Provide information about your defamation case to help us understand your situation better.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Defamation Type</label>
                        <Select value={formData.defamationType} onValueChange={(value) => setFormData(prev => ({ ...prev, defamationType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select defamation type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online-libel">Online Libel</SelectItem>
                            <SelectItem value="social-media">Social Media Defamation</SelectItem>
                            <SelectItem value="business">Business Defamation</SelectItem>
                            <SelectItem value="professional">Professional Libel</SelectItem>
                            <SelectItem value="review-sites">Fake Reviews</SelectItem>
                            <SelectItem value="slander">Spoken Slander</SelectItem>
                            <SelectItem value="other">Other Defamation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Platform/Location</label>
                        <Input
                          type="text"
                          placeholder="e.g., Facebook, Yelp, workplace"
                          value={formData.platform}
                          onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Start My Free Case Evaluation
                    </Button>
                  </form>
                </div>
              </section>

              {/* What to Do After Defamation */}
              <section id="diagnosis-steps" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Discovering Defamation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                        <Eye className="w-5 h-5 mr-2 text-green-600" />
                        Immediate Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Take screenshots of all defamatory statements</p>
                      <p>• Document publication to third parties</p>
                      <p>• Save metadata and timestamps</p>
                      <p>• Contact our defamation specialists immediately</p>
                      <p>• Avoid public responses that might escalate</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Never Do This
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Don't ignore the one-year statute of limitations</p>
                      <p>• Don't delete or modify evidence</p>
                      <p>• Don't engage in public arguments online</p>
                      <p>• Don't wait to preserve evidence</p>
                      <p>• Don't assume platforms will remove content</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Why Time is Critical</h3>
                  <p className="text-muted-foreground">
                    California imposes a strict one-year statute of limitations for defamation claims. This deadline begins when the defamatory statement is first published, not when you discover it. The single publication rule means that subsequent sharing doesn't restart the limitations period, making immediate action essential.
                  </p>
                </div>
              </section>

              {/* Defamation Types Section */}
              <section id="diagnosis-process" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Defamation in California</h2>
                
                <div className="space-y-6">
                  <Card className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={diagnosisImage} 
                          alt="Online defamation and social media libel" 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-semibold mb-3">Online and Social Media Defamation</h3>
                        <p className="text-muted-foreground mb-4">
                          Digital defamation presents unique challenges in California courts. Social media platforms, review sites, blog comments, and online forums can amplify false statements to massive audiences instantly. Facebook posts, Twitter tweets, Instagram stories, TikTok videos, LinkedIn posts, YouTube comments, Yelp reviews, Google reviews, and other digital content all constitute publications under California defamation law.
                        </p>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm">
                              Learn More <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <p className="text-muted-foreground">
                              The permanent nature of online content can make internet defamation more damaging than traditional spoken statements. Screenshots preserve evidence, search engines make defamatory content easily discoverable, and viral sharing can spread false statements to unlimited audiences. California courts have consistently held that digital communications constitute "publication" under defamation law.
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={exposureSitesImage} 
                          alt="Business and professional defamation" 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-semibold mb-3">Business and Professional Defamation</h3>
                        <p className="text-muted-foreground mb-4">
                          California businesses and professionals face unique defamation risks. False statements about business practices, professional competence, ethical violations, financial stability, product quality, or service delivery can devastate commercial enterprises. Professional defamation affects doctors, lawyers, dentists, accountants, real estate agents, consultants, and other licensed professionals.
                        </p>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm">
                              Learn More <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <p className="text-muted-foreground">
                              Business defamation often involves competitors making false statements to gain market advantage, former employees spreading lies about company practices, customers posting false reviews to coerce refunds, or suppliers making false claims about payment practices. These cases frequently qualify as defamation per se because they directly attack professional competence or business integrity.
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Legal Process Section */}
              <section id="legal-process" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Our Legal Process</h2>
                
                <Card className="overflow-hidden mb-6">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={legalProcessImage} 
                        alt="Defamation legal process and court proceedings" 
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Legal Strategy</h3>
                      <p className="text-muted-foreground mb-4">
                        Our experienced team handles every aspect of your defamation case, from evidence preservation to trial representation. We understand California's Anti-SLAPP law and how to navigate potential challenges while protecting your legitimate claims.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <FileText className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Case Evaluation</h4>
                            <p className="text-sm text-muted-foreground">Comprehensive review of your situation and legal options</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Evidence Gathering</h4>
                            <p className="text-sm text-muted-foreground">Professional documentation and preservation of defamatory statements</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Scale className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Legal Strategy</h4>
                            <p className="text-sm text-muted-foreground">Customized approach based on your specific circumstances</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Gavel className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Trial Representation</h4>
                            <p className="text-sm text-muted-foreground">Aggressive courtroom advocacy to protect your reputation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Learn More About Our Process
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 space-y-4">
                    <div className="prose prose-lg max-w-none">
                      <h3>Navigating California's Anti-SLAPP Law</h3>
                      <p>
                        California Code of Civil Procedure Section 425.16, known as the Anti-SLAPP statute, provides protections against frivolous defamation lawsuits. Defendants can file special motions to strike complaints early in litigation. The Anti-SLAPP analysis involves a two-step process where defendants must show the lawsuit arises from protected activity, and plaintiffs must demonstrate a probability of prevailing.
                      </p>
                      
                      <h3>Evidence Preservation and Authentication</h3>
                      <p>
                        Digital evidence requires special handling to ensure authenticity and admissibility. Metadata, timestamps, source identification, and chain of custody become crucial in online defamation cases. Social media evidence can disappear quickly, making immediate preservation essential for successful litigation.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <CardHeader 
                        className="cursor-pointer transition-colors group-hover:bg-primary/5"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                          <span className="text-lg">{faq.question}</span>
                          {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                        </CardTitle>
                      </CardHeader>
                      {expandedFaq === index && (
                        <CardContent className="animate-fade-in">
                          <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </section>

              {/* Resources Section */}
              <section id="resources" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Defamation Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={compensationImage} 
                        alt="Defamation compensation calculator" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Compensation Calculator</h3>
                      <p className="text-muted-foreground mb-4">
                        Get an estimate of potential damages for your defamation case based on California law and similar cases.
                      </p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/defamation/compensation-calculator'}
                      >
                        <span className="text-white">Calculate Damages</span>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={medicalImage} 
                        alt="Legal guidance for defamation cases" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Legal Guidance</h3>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to California defamation law, your rights, and the legal process.
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full text-primary hover:text-white hover:bg-primary"
                        onClick={() => window.location.href = '/practice-areas/defamation/legal-guidance'}
                      >
                        <span>Learn Your Rights</span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* 3 Ways to Start Your Case */}
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-center text-red-700">3 Ways to Start Your Case</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = '/practice-areas/defamation/case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Consultation
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Info Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img 
                        src={sidebarImage} 
                        alt="California defamation law firm" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Why Choose Our Firm?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-primary" />
                        Former Defense Attorney
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        24/7 Availability
                      </li>
                      <li className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        No Fees Unless We Win
                      </li>
                      <li className="flex items-center">
                        <Map className="w-4 h-4 mr-2 text-primary" />
                        All California
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Don't Wait Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Don't Wait - Time Limits Apply for California Defamation Claims</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl mb-12 leading-relaxed text-white">California law gives you only one year from publication to file your defamation claim. Contact us today for your free consultation.</p>
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <Button 
                size="lg" 
                aria-label="Call Trembach Law Firm" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" 
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <span className="text-white">CALL (818) 123-4567</span>
              </Button>
              
              <Button 
                size="lg" 
                aria-label="Start Free Defamation Case Evaluation" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" 
                onClick={() => window.location.href = '/practice-areas/defamation/case-evaluation'}
              >
                <span className="text-white">START MY FREE CASE EVALUATION</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Defamation;