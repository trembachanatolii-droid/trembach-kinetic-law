import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Scale, 
  Shield, 
  AlertTriangle,
  Clock,
  FileText,
  Globe,
  Gavel,
  Eye,
  Users
} from 'lucide-react';
import heroBackground from '@/assets/defamation-legal-guidance-hero.jpg';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';

const DefamationLegalGuidance: React.FC = () => {
  useScrollRestoration();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showGoBack, setShowGoBack] = useState(false);

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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const guideSections = [
    {
      id: 'what-is-defamation',
      title: 'What is Defamation in California?',
      icon: BookOpen,
      summary: 'Learn the legal definition of defamation under California law and the elements required to prove a case.',
      content: `California law defines defamation as the publication of a false statement to a third party that causes harm to another party's reputation. Under California Civil Code sections 44, 45, and 46, defamation includes both libel (written statements) and slander (spoken statements).

To establish a defamation claim in California, you must prove five essential elements:

1. **An intentional publication of a statement of fact** - The defendant must have communicated the statement to at least one person other than you.

2. **That is false** - The statement must be factually incorrect. Truth is an absolute defense to defamation.

3. **That is unprivileged** - The statement must not be protected by legal privilege (such as statements in court proceedings).

4. **That has a natural tendency to injure or causes special damage** - The statement must harm your reputation or cause actual damages.

5. **The defendant's fault in publishing the statement amounted to at least negligence** - For private figures, negligence is sufficient. Public figures must prove actual malice.

California courts apply these elements strictly, requiring clear evidence for each component. The burden of proof lies with the plaintiff to demonstrate all five elements by a preponderance of the evidence.`
    },
    {
      id: 'libel-vs-slander',
      title: 'Libel vs. Slander in California',
      icon: FileText,
      summary: 'Understand the differences between written and spoken defamation and how each is treated under California law.',
      content: `California distinguishes between written defamation (libel) and spoken defamation (slander), though modern courts often apply similar standards to both.

**Libel (Written Defamation):**
- Written statements, including social media posts, emails, text messages, online reviews, blog posts, and any other permanent form of communication
- Since written statements can be shared and preserved indefinitely, courts traditionally viewed libel as more harmful than slander
- Generally qualifies for presumed damages without requiring proof of actual harm
- Includes digital communications like tweets, Facebook posts, Instagram captions, and online comments

**Slander (Spoken Defamation):**
- Spoken statements made to third parties, including verbal accusations, rumors spread in person, statements made at meetings or events, and oral communications in professional settings
- Traditionally required proof of special damages (actual financial losses)
- May qualify for presumed damages if it falls into "slander per se" categories
- Includes statements made in broadcasts, podcasts, videos, and other audio formats

**Slander Per Se Categories:**
California recognizes certain spoken statements as so harmful that damages are presumed:
- Accusations of criminal activity
- Statements about unfitness for one's profession or trade
- Accusations of having a loathsome communicable disease
- Statements imputing unchastity (historically, though less relevant today)

The digital age has blurred these distinctions, with many communications existing in hybrid forms. California courts now focus more on the permanence and reach of the communication rather than strictly categorizing it as libel or slander.`
    },
    {
      id: 'per-se-vs-per-quod',
      title: 'Defamation Per Se vs. Per Quod',
      icon: Scale,
      summary: 'Learn when damages are presumed versus when you must prove actual harm in California defamation cases.',
      content: `California recognizes two categories of defamation that determine whether you must prove actual damages:

**Defamation Per Se:**
Statements so obviously harmful that damages are presumed without proof of actual injury. These include:

1. **Accusations of criminal activity** - False claims that someone committed a crime or engages in criminal behavior
2. **Statements about unfitness for profession or trade** - False allegations affecting professional competence or business integrity
3. **Accusations of having a loathsome communicable disease** - False claims about contagious diseases (though this category has evolved with medical understanding)
4. **Statements imputing unchastity** - Historically important but less relevant in modern contexts

Most business defamation, professional misconduct allegations, and criminal accusations fall into this category. With defamation per se, you can recover general damages for harm to reputation without proving specific monetary losses.

**Defamation Per Quod:**
Requires proof of actual damages because the harmful nature isn't immediately apparent from the statement itself. These cases require:

- **Extrinsic evidence** to show how the statement caused specific harm
- **Measurable losses** such as lost business opportunities, decreased income, or quantifiable damage to professional standing
- **Special damages** that can be calculated and proven with documentation

Examples include statements that seem innocent on their face but cause harm when combined with additional context known to the audience.

**Proving Damages:**
For per se cases, general damages (compensation for harm to reputation, emotional distress, humiliation) are presumed. For per quod cases, you must prove special damages with evidence such as:
- Financial records showing decreased income
- Documentation of lost business opportunities
- Witness testimony about reputation before and after
- Expert testimony on economic impact`
    },
    {
      id: 'online-defamation',
      title: 'Online and Social Media Defamation',
      icon: Globe,
      summary: 'Navigate the complexities of digital defamation, including social media posts, online reviews, and viral content.',
      content: `Digital defamation presents unique challenges and opportunities in California courts. The internet has transformed how defamatory statements spread and persist, creating new legal considerations.

**Digital Platforms Covered:**
California defamation law applies to all digital communications:
- **Social Media:** Facebook posts, Twitter tweets, Instagram stories, TikTok videos, LinkedIn posts, Snapchat messages
- **Review Sites:** Yelp reviews, Google reviews, Glassdoor posts, industry-specific review platforms
- **Online Forums:** Reddit posts, blog comments, discussion boards, community forums
- **Professional Platforms:** LinkedIn recommendations, professional networking sites
- **Email and Messaging:** Group emails, text message threads, messaging apps

**Unique Aspects of Online Defamation:**
1. **Permanence:** Screenshots preserve evidence; content can be archived and remain accessible indefinitely
2. **Search Engine Visibility:** Defamatory content appears in search results, amplifying harm
3. **Viral Potential:** False statements can spread to unlimited audiences instantly
4. **Global Reach:** Statements published online can reach international audiences
5. **Multimedia Elements:** Photos, videos, and audio can accompany defamatory text

**Legal Considerations:**
- **Publication:** Each view, share, like, or comment can constitute a separate publication
- **Jurisdiction:** California courts may have jurisdiction over out-of-state defendants if they target California residents
- **Evidence Preservation:** Screenshots, metadata, and timestamps become crucial evidence
- **Platform Liability:** Section 230 generally protects platforms from liability for user-generated content

**Common Online Defamation Scenarios:**
- False reviews designed to harm businesses
- Social media harassment campaigns
- Professional defamation on LinkedIn or industry forums
- Fake news articles or blog posts
- Doctored images or videos (deepfakes)
- Group harassment or "cancel culture" campaigns

**Response Strategies:**
California law provides various remedies for online defamation, including injunctive relief to stop ongoing publication, monetary damages for harm caused, and in some cases, orders requiring platforms to remove content.`
    },
    {
      id: 'anti-slapp',
      title: 'California\'s Anti-SLAPP Law',
      icon: Shield,
      summary: 'Understand how California\'s Anti-SLAPP statute affects defamation cases and protects legitimate speech.',
      content: `California Code of Civil Procedure Section 425.16, known as the Anti-SLAPP (Strategic Lawsuit Against Public Participation) statute, provides important protections against frivolous defamation lawsuits designed to silence legitimate criticism.

**Purpose of Anti-SLAPP:**
- Protect First Amendment rights to free speech and petition
- Prevent wealthy individuals or corporations from silencing critics through expensive litigation
- Allow early dismissal of meritless cases that chill protected speech
- Award attorney fees to defendants who successfully invoke the statute

**Two-Step Analysis:**
The Anti-SLAPP process involves two distinct steps:

**Step 1 - Defendant's Burden:**
Defendants must show the lawsuit arises from protected activity:
- Statements on matters of public interest or concern
- Communications in official proceedings (court filings, government meetings)
- Conduct in furtherance of constitutional rights of petition or free speech
- Communications in connection with issues under consideration by legislative, executive, or judicial bodies

**Step 2 - Plaintiff's Burden:**
If defendants meet Step 1, plaintiffs must demonstrate:
- A probability of prevailing on their claims
- Sufficient evidence to support a favorable judgment
- That their claims have minimal merit, not just technical legal sufficiency

**Protected Activities Include:**
- Consumer reviews and criticism of businesses
- Comments on matters of public interest
- Political speech and commentary
- Reporting on public figures or issues
- Participation in government proceedings
- Advocacy on social issues

**What's NOT Protected:**
- Purely private disputes between individuals
- Commercial speech unrelated to public issues
- Statements made in furtherance of illegal activity
- Communications in private business relationships (with exceptions)

**Consequences of Successful Anti-SLAPP Motions:**
- Case dismissal without reaching the merits
- Mandatory attorney fee awards to defendants
- Limited discovery during the motion proceedings
- Appeal rights that can delay resolution

**Strategic Considerations:**
Anti-SLAPP motions are filed early in litigation and can be expensive to defend against. However, the statute doesn't protect all speech, and experienced attorneys know how to navigate these challenges while protecting legitimate defamation claims. Success depends on careful case evaluation, strategic pleading, and thorough preparation for the two-step analysis.`
    },
    {
      id: 'public-vs-private',
      title: 'Public Figure vs. Private Figure Standards',
      icon: Users,
      summary: 'Learn how your status as a public or private figure affects the legal standards in your defamation case.',
      content: `California defamation law applies different standards depending on whether the plaintiff is a public or private figure, following the framework established in New York Times Co. v. Sullivan.

**Private Figures (Majority of People):**
Most individuals qualify as private figures and enjoy greater protection:
- **Standard:** Need only prove defendant acted negligently in publishing false statements
- **Negligence:** Means a reasonable person would not have published the statement without better verification
- **Lower Burden:** Easier to prove than actual malice
- **Examples:** Regular citizens, private business owners, employees, students, non-public professionals

**Public Officials:**
Government employees in positions of responsibility:
- **Standard:** Must prove "actual malice" - defendant knew the statement was false or acted with reckless disregard for truth
- **Examples:** Elected officials, appointed officials, government executives, police officers in some contexts
- **Rationale:** Need for uninhibited debate on government performance

**All-Purpose Public Figures:**
Individuals with widespread fame or notoriety:
- **Standard:** Must prove actual malice
- **Characteristics:** General fame, widespread public attention, pervasive involvement in public affairs
- **Examples:** Celebrities, prominent business leaders, widely known activists
- **Requirement:** Must have achieved pervasive fame or notoriety

**Limited-Purpose Public Figures:**
Individuals who voluntarily inject themselves into specific public controversies:
- **Standard:** Must prove actual malice, but only for statements related to the public controversy
- **Requirements:** 
  - Voluntary participation in public controversy
  - Prominent role in the controversy
  - Statements must relate to the controversy
- **Examples:** Business leaders commenting on industry issues, activists leading specific campaigns, professionals in public debates

**Actual Malice Standard:**
Requires clear and convincing evidence that defendant:
- **Knew the statement was false** when published, OR
- **Acted with reckless disregard** for truth or falsity

**Reckless Disregard** means:
- Entertaining serious doubts about statement's truth
- Failing to investigate obvious reasons for doubt
- Relying on obviously unreliable sources
- Ignoring contradictory evidence

**Determining Public Figure Status:**
Courts consider:
- Extent of public attention
- Voluntary or involuntary public role
- Access to media for self-defense
- Assumption of risk of increased scrutiny
- Nature of the public controversy

**Strategic Implications:**
Public figure status significantly affects case value and likelihood of success. Private figures have substantial advantages in defamation litigation, while public figures face much higher burdens that make successful cases more difficult but potentially more valuable if proven.`
    },
    {
      id: 'damages',
      title: 'Types of Damages in California Defamation Cases',
      icon: Scale,
      summary: 'Understand the different types of compensation available in California defamation cases.',
      content: `California defamation victims can recover multiple types of damages depending on their case circumstances:

**General Damages (Non-Economic):**
Compensate for intangible harm that doesn't have a specific dollar amount:
- **Loss of reputation** and standing in the community
- **Shame, mortification, and humiliation** from the false statements
- **Emotional distress** and mental anguish caused by the defamation
- **Social ostracism** and damage to personal relationships
- **Injury to feelings** and psychological harm

For defamation per se cases, general damages are **presumed without specific proof** of amount. Juries determine appropriate compensation based on the severity and scope of harm.

**Special Damages (Economic Losses):**
Cover actual financial losses that can be calculated and proven:
- **Lost business opportunities** and cancelled contracts
- **Decreased income** from damaged professional reputation
- **Job termination** or failure to obtain employment
- **Promotion denial** or career advancement setbacks
- **Client loss** and reduced customer base
- **Contract cancellations** and business relationship damage
- **Costs of reputation repair** and public relations efforts

Special damages require **specific proof** with documentation such as financial records, employment documents, and expert testimony.

**Punitive Damages:**
Awarded to punish defendants and deter similar conduct:
- **Requirements:** Clear and convincing evidence of oppression, fraud, or malice
- **Purpose:** Punishment beyond compensation, deterrence of similar behavior
- **Factors:** Defendant's wealth, egregiousness of conduct, need for deterrence
- **Limitations:** Must be proportional to actual harm caused

**Injunctive Relief:**
Court orders requiring specific actions:
- **Cease and desist** from making defamatory statements
- **Retraction** or correction of false statements
- **Publication of apology** or clarification
- **Removal** of defamatory content from websites
- **Prohibition** on future defamatory statements

**Factors Affecting Damage Awards:**
1. **Scope of Publication:** Local vs. national vs. international reach
2. **Permanence:** Temporary vs. permanent accessibility of statements
3. **Plaintiff's Status:** Public vs. private figure
4. **Prior Reputation:** Strength of reputation before defamation
5. **Defendant's Intent:** Malicious vs. negligent publication
6. **Economic Impact:** Quantifiable financial losses
7. **Mitigation Efforts:** Attempts to minimize damage

**Proving Damages:**
- **Reputation Evidence:** Testimony from community members, professional colleagues, family, and friends about reputation before and after
- **Expert Testimony:** Economists, marketing professionals, or industry experts on economic impact
- **Financial Records:** Tax returns, profit/loss statements, employment records, contracts
- **Witness Testimony:** Customers, clients, employers, colleagues who withdrew from relationships
- **Medical Evidence:** Treatment for emotional distress, anxiety, depression

**Damage Limitations:**
- **Mitigation:** Plaintiffs must take reasonable steps to minimize damages
- **Comparative Fault:** Damages may be reduced if plaintiff contributed to the situation
- **Truth:** No damages for substantially true statements
- **Privilege:** No liability for privileged communications

**Settlement Considerations:**
Many defamation cases settle for amounts that reflect:
- Strength of evidence
- Defendant's ability to pay
- Costs of continued litigation
- Desire for public vindication vs. confidential resolution
- Risk of counter-suits or appeals`
    },
    {
      id: 'statute-limitations',
      title: 'California\'s Statute of Limitations for Defamation',
      icon: Clock,
      summary: 'Critical timing requirements for filing defamation claims in California.',
      content: `California imposes a strict one-year statute of limitations for defamation claims under Code of Civil Procedure Section 340(c). Understanding these timing requirements is crucial for protecting your rights.

**Basic Rule:**
You must file your defamation lawsuit within **one year** from the date the defamatory statement was first published.

**Publication Date Defined:**
- **First Communication:** When the statement was first communicated to a third party
- **Not Discovery:** The clock starts ticking when published, not when you discover it
- **Original Publication:** Initial posting, broadcasting, or distribution
- **Public Accessibility:** When the statement becomes available to others

**Single Publication Rule:**
California follows the single publication rule, which means:
- **One Limitation Period:** Subsequent sharing, retweeting, or reposting of identical content doesn't restart the clock
- **Original Publication Controls:** Time runs from initial publication, not later distributions
- **Same Content:** Must be substantially identical content, not modified versions
- **Exception for Modifications:** Substantially changed content may create new publication dates

**What Constitutes New Publication:**
New limitation periods may begin for:
- **Material Modifications:** Significant changes to the defamatory content
- **New Audiences:** Publication to substantially different audiences
- **New Platforms:** In some cases, publication on entirely different platforms
- **Continuing Publication:** Ongoing campaigns with new content

**Discovery Rule Exceptions:**
California's discovery rule may extend deadlines in rare cases:
- **Concealed Defamation:** Defendant actively hides their defamatory conduct
- **Fraudulent Concealment:** Defendant deliberately prevents discovery
- **Narrow Application:** Courts apply this exception very restrictively
- **Clear Evidence Required:** Must prove deliberate concealment, not mere failure to discover

**Practical Considerations:**
1. **Document Everything:** Screenshot and preserve evidence immediately upon discovery
2. **Don't Delay:** Even if you think you might have more time, consult an attorney immediately
3. **Multiple Statements:** Each separate defamatory statement may have its own limitation period
4. **Cross-Jurisdictional Issues:** Other states may have different limitation periods
5. **Federal Claims:** Different limitation periods may apply to federal causes of action

**Common Timing Mistakes:**
- **Waiting for More Evidence:** The clock doesn't stop while you gather evidence
- **Hoping for Self-Resolution:** Time limits don't pause for attempts at informal resolution
- **Misunderstanding Republication:** Shares and retweets usually don't restart the clock
- **Overlooking Modifications:** Changed content might restart limitations but requires careful analysis

**Strategic Timing Considerations:**
- **Evidence Gathering:** Balance thorough preparation against limitation deadlines
- **Settlement Negotiations:** Pre-suit negotiations don't toll the statute of limitations
- **Demand Letters:** May preserve claims but don't extend filing deadlines
- **Multi-Defendant Cases:** Different defendants may have different publication dates

**Exceptions and Extensions:**
Limited circumstances may pause or extend the limitation period:
- **Defendant's Absence:** If defendant leaves California to avoid service
- **Minor Plaintiffs:** Special rules may apply to underage victims
- **Disability:** Mental incapacity may toll limitations in extreme cases
- **Continuing Violations:** Ongoing defamatory conduct may create new causes of action

**Consequences of Missing the Deadline:**
- **Complete Bar:** Case will be dismissed regardless of merit
- **No Exceptions:** Courts strictly enforce limitation periods
- **Lost Rights:** No recovery possible after the deadline passes
- **Attorney Malpractice:** Lawyers can be liable for missing limitation deadlines

**Best Practices:**
Given California's short limitation period, immediate action is essential. Contact an experienced defamation attorney as soon as you discover defamatory statements to ensure your rights are protected and all deadlines are met.`
    },
    {
      id: 'evidence',
      title: 'Gathering and Preserving Evidence',
      icon: Eye,
      summary: 'Essential steps for documenting and preserving evidence in defamation cases.',
      content: `Successful defamation cases require comprehensive evidence gathering and preservation. Digital evidence can disappear quickly, making immediate action crucial.

**Essential Evidence Types:**
1. **Screenshots of Defamatory Statements**
2. **Archived Web Pages and URLs**
3. **Witness Testimony and Contact Information**
4. **Financial Records Showing Damages**
5. **Reputation Evidence Before and After**
6. **Communications with the Defamer**

**Digital Evidence Preservation:**
**Screenshots:**
- Capture full browser windows showing URL, date, and time
- Include surrounding context and comments
- Use built-in screenshot tools or professional screen capture software
- Take multiple screenshots from different angles and devices
- Document the source and timing of each screenshot

**Metadata and Technical Evidence:**
- Preserve timestamp information and source data
- Document IP addresses and server information when possible
- Save original files without editing or modification
- Use professional archival services for important content
- Obtain certificates of authenticity for critical evidence

**Web Archiving:**
- Use services like Archive.org (Wayback Machine) to preserve pages
- Create multiple archive snapshots over time
- Document changes to content over time
- Preserve entire websites, not just individual pages

**Social Media Evidence:**
- Screenshot entire conversations and comment threads
- Document privacy settings and audience reach
- Preserve user profiles and account information
- Capture sharing statistics and viral spread data
- Document platform policies and community standards

**Witness Evidence:**
**Identifying Witnesses:**
- People who saw the original statements
- Individuals who can testify about your reputation before and after
- Professional colleagues, customers, or clients who withdrew business
- Family members and friends who observed the impact
- Experts who can testify about damages or industry standards

**Witness Preservation:**
- Obtain written statements as soon as possible
- Document contact information and availability
- Preserve contemporaneous communications about the incident
- Identify witnesses who can testify about financial impact
- Gather character witnesses for reputation evidence

**Financial and Economic Evidence:**
**Direct Financial Losses:**
- Bank statements and financial records
- Tax returns and profit/loss statements
- Employment records and pay stubs
- Contracts and business agreements
- Customer lists and revenue data

**Opportunity Costs:**
- Documentation of lost business opportunities
- Evidence of cancelled contracts or deals
- Proof of denied employment or promotions
- Records of client or customer departures
- Market analysis and competitive impact studies

**Reputation Evidence:**
**Before the Defamation:**
- Awards, recognition, and positive reviews
- Professional achievements and credentials
- Media coverage and public statements
- Community involvement and leadership roles
- Business success and growth patterns

**After the Defamation:**
- Negative reviews and comments
- Lost business relationships
- Declined opportunities
- Media coverage of the defamatory statements
- Changes in public perception and treatment

**Communications Evidence:**
**With the Defamer:**
- Email exchanges and text messages
- Social media direct messages
- Recorded phone conversations (where legal)
- Letters, cease and desist notices
- Settlement discussions and responses

**About the Defamation:**
- Third-party discussions about the statements
- Media inquiries and responses
- Professional or personal relationships affected
- Attempts to mitigate or correct the record

**Expert Evidence:**
**Digital Forensics Experts:**
- Authentication of digital evidence
- Analysis of metadata and technical details
- Reconstruction of deleted or modified content
- Expert testimony about digital publication

**Economic Experts:**
- Calculation of financial damages and losses
- Market analysis and competitive impact
- Professional valuation of reputation damage
- Future earning capacity analysis

**Industry Experts:**
- Standards and practices in relevant industries
- Impact of defamation on professional standing
- Market conditions and competitive factors
- Reputation management and recovery costs

**Evidence Preservation Best Practices:**
1. **Act Immediately:** Digital evidence can be deleted or modified quickly
2. **Multiple Copies:** Create backup copies stored in different locations
3. **Chain of Custody:** Document who handled evidence and when
4. **Professional Help:** Consider hiring digital forensics experts for critical evidence
5. **Legal Compliance:** Ensure evidence gathering complies with privacy laws and platform terms
6. **Organization:** Maintain detailed logs and organization systems for all evidence
7. **Authentication:** Prepare for challenges to evidence authenticity in court

**Common Evidence Mistakes:**
- Waiting too long to preserve digital evidence
- Taking incomplete screenshots without context
- Failing to document the source and timing of evidence
- Modifying or editing evidence after collection
- Overlooking witness evidence and testimony
- Inadequate financial documentation for damages
- Poor organization and cataloging of evidence

Remember: The strength of your evidence often determines the success of your defamation case. Immediate, comprehensive, and professional evidence preservation is essential for protecting your rights and maximizing your chances of recovery.`
    }
  ];

  return (
    <>
      <SEO 
        title="California Defamation Law Guide | Legal Rights & Process | Trembach Law Firm"
        description="Comprehensive guide to California defamation law. Learn your rights, legal process, damages, and how to protect yourself from libel and slander. Expert legal guidance."
        keywords="California defamation law, libel and slander rights, defamation legal process, online defamation law, business defamation guide, Anti-SLAPP law California"
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
              California Defamation Legal Guide
            </h1>
            <p className="text-xl text-white">
              Your comprehensive guide to understanding defamation law and protecting your rights
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* Introduction */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Understanding Your Rights</h2>
                  <p className="text-blue-700 mb-4">
                    This comprehensive guide explains California defamation law, your legal rights, and the process for 
                    protecting your reputation. Whether you're dealing with online libel, business defamation, or 
                    professional slander, understanding these concepts is crucial for making informed decisions about your case.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">1-Year Statute of Limitations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Anti-SLAPP Protections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Multiple Damage Types</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guide Sections */}
          <div className="space-y-6">
            {guideSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="shadow-lg">
                  <Collapsible 
                    open={expandedSections[section.id]} 
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-xl">{section.title}</CardTitle>
                              <p className="text-muted-foreground mt-1">{section.summary}</p>
                            </div>
                          </div>
                          {expandedSections[section.id] ? (
                            <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="prose prose-lg max-w-none">
                          {section.content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return (
                                <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-primary">
                                  {paragraph.replace(/\*\*/g, '')}
                                </h3>
                              );
                            } else if (paragraph.includes('**')) {
                              return (
                                <p key={index} className="mb-4" dangerouslySetInnerHTML={{
                                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                }} />
                              );
                            } else if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
                              const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                              return (
                                <ul key={index} className="list-disc list-inside mb-4 space-y-1">
                                  {listItems.map((item, listIndex) => (
                                    <li key={listIndex} className="ml-4">
                                      {item.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                                    </li>
                                  ))}
                                </ul>
                              );
                            } else if (paragraph.match(/^\d+\./)) {
                              const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                              return (
                                <ol key={index} className="list-decimal list-inside mb-4 space-y-1">
                                  {listItems.map((item, listIndex) => (
                                    <li key={listIndex} className="ml-4" dangerouslySetInnerHTML={{
                                      __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }} />
                                  ))}
                                </ol>
                              );
                            } else {
                              return (
                                <p key={index} className="mb-4" dangerouslySetInnerHTML={{
                                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                }} />
                              );
                            }
                          })}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-red-50 border-red-200">
            <CardContent className="p-8 text-center">
              <Gavel className="w-16 h-16 mx-auto text-red-600 mb-4" />
              <h2 className="text-3xl font-bold text-red-600 mb-4">Ready to Protect Your Reputation?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let defamation damage your reputation and livelihood. California's strict one-year statute of 
                limitations means time is critical. Get expert legal guidance to protect your rights and secure the 
                compensation you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 flex-1"
                  onClick={() => window.location.href = '/practice-areas/defamation/case-evaluation'}
                >
                  Get Free Case Evaluation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 flex-1"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <span className="text-red-600">Call (818) 123-4567</span>
                </Button>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <Badge variant="outline" className="mr-2">Former Defense Attorney</Badge>
                <Badge variant="outline" className="mr-2">No Fees Unless We Win</Badge>
                <Badge variant="outline">24/7 Availability</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Legal Disclaimer */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Legal Disclaimer</h3>
                  <p className="text-sm text-yellow-700">
                    This guide provides general information about California defamation law and should not be considered 
                    legal advice. Each case is unique and depends on specific facts and circumstances. Trembach Law Firm 
                    is a newly established practice with no prior case results. Past results do not guarantee future outcomes. 
                    California has a one-year statute of limitations for defamation claims. Consultation with an experienced 
                    attorney is recommended for case-specific advice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DefamationLegalGuidance;