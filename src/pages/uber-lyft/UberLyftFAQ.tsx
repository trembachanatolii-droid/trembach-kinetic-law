import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Search, 
  Phone, 
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-faq-hero.jpg';

const UberLyftFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'insurance', name: 'Insurance Coverage' },
    { id: 'legal', name: 'Legal Process' },
    { id: 'medical', name: 'Medical Treatment' },
    { id: 'compensation', name: 'Compensation' },
    { id: 'timeline', name: 'Timeline & Process' }
  ];

  const faqData = [
    {
      category: 'legal',
      question: "What should I do immediately after an Uber or Lyft accident?",
      answer: "First, ensure everyone's safety and call 911 if there are injuries. Document everything with photos, get driver information, and screenshot your ride details in the app before they disappear. Report the accident through the app's safety feature immediately. Seek medical attention even for minor injuries, as some symptoms appear later. Don't admit fault or discuss details with insurance companies before consulting an attorney."
    },
    {
      category: 'insurance',
      question: "Who pays for my medical bills after a rideshare accident?",
      answer: "Initially, your health insurance or medical payments coverage may cover treatment. The at-fault party's insurance ultimately bears responsibility. During active rides, Uber and Lyft's $1 million policies apply. We can arrange treatment on a lien basis, meaning doctors wait for payment from your settlement, ensuring you get necessary care without upfront costs."
    },
    {
      category: 'legal',
      question: "Can I sue Uber or Lyft directly for my injuries?",
      answer: "Yes, despite their independent contractor model, rideshare companies can be held liable for negligent hiring, inadequate background checks, failure to address safety complaints, or systemic safety failures. California courts increasingly recognize these companies' duty to ensure passenger safety. Our former defense experience helps us identify corporate liability theories that succeed."
    },
    {
      category: 'legal',
      question: "What if the rideshare driver was drunk or on drugs?",
      answer: "Intoxicated driving strengthens your case significantly. Beyond regular compensation, you may receive punitive damages. The rideshare company may be liable for inadequate screening or ignoring warning signs. Criminal charges against the driver don't prevent civil lawsuits. We coordinate with prosecutors while pursuing maximum civil compensation."
    },
    {
      category: 'compensation',
      question: "How much is my rideshare accident case worth?",
      answer: "Case values vary based on injury severity, medical expenses, lost wages, and impact on your life. Minor injuries may settle for thousands, while catastrophic injuries can exceed millions. Factors include available insurance, liability strength, and long-term effects. Our free consultation provides realistic case valuation based on similar successful cases."
    },
    {
      category: 'legal',
      question: "What if I was partially at fault for the accident?",
      answer: "California follows pure comparative negligence, meaning you can recover even if 99% at fault, though your compensation reduces by your fault percentage. As a passenger, you're rarely at fault unless you grabbed the wheel or distracted the driver. We minimize your fault percentage through strategic case presentation."
    },
    {
      category: 'legal',
      question: "Do I need a lawyer for a minor rideshare accident?",
      answer: "Even 'minor' accidents can cause serious injuries that manifest later. Insurance companies minimize claims, especially those without legal representation. Soft tissue injuries, concussions, and psychological trauma are often undervalued. Free consultation helps determine if legal representation benefits your case. We handle all cases on contingency - no fees unless we win."
    },
    {
      category: 'legal',
      question: "What if the driver sexually assaulted or harassed me?",
      answer: "Report to police immediately and preserve all evidence. Rideshare companies may be liable for inadequate background checks or ignoring prior complaints. You can pursue both criminal charges and civil compensation. We handle these sensitive cases with discretion and compassion, fighting for justice while protecting your privacy."
    },
    {
      category: 'timeline',
      question: "How long does a rideshare accident case take to settle?",
      answer: "Simple cases may settle in 3-6 months, while complex cases can take 1-2 years or more. Factors include injury severity, liability disputes, and insurance company cooperation. We move cases efficiently while ensuring maximum compensation. Quick settlements often undervalue claims - patience typically yields better results."
    },
    {
      category: 'legal',
      question: "Can I get compensation if I was a pedestrian hit by an Uber/Lyft?",
      answer: "Yes, pedestrians have strong claims against rideshare drivers who strike them. The $1 million insurance applies if the driver was logged into the app. Pedestrians often suffer severe injuries deserving maximum compensation. We investigate driver negligence, visibility conditions, and whether the driver was distracted by the app."
    },
    {
      category: 'insurance',
      question: "What's the difference between Uber and Lyft insurance coverage?",
      answer: "Both provide similar coverage: $1 million during rides, limited coverage when logged in without passengers. Minor differences exist in deductibles and claim procedures. Both companies use aggressive tactics to minimize payouts. We navigate both systems effectively, maximizing recovery regardless of which service was involved."
    },
    {
      category: 'legal',
      question: "Should I accept the insurance company's first settlement offer?",
      answer: "Never accept initial offers without legal review. First offers are typically 3-10 times less than cases are worth. Insurance companies prey on victims' financial desperation and lack of legal knowledge. Once you accept and sign a release, you cannot pursue additional compensation even if injuries worsen."
    },
    {
      category: 'legal',
      question: "What evidence do I need for my rideshare accident claim?",
      answer: "Critical evidence includes ride receipts, app screenshots, police reports, medical records, witness statements, photos of injuries/damage, and traffic camera footage. Time-sensitive evidence like driver logs and vehicle data may be destroyed. We immediately preserve evidence and conduct thorough investigations."
    },
    {
      category: 'medical',
      question: "Can I claim compensation for PTSD after a rideshare accident?",
      answer: "Absolutely. PTSD, anxiety, depression, and other psychological injuries deserve compensation. Mental health treatment costs, therapy, medications, and impact on daily life are recoverable damages. We work with mental health professionals to document psychological trauma often minimized by insurance companies."
    },
    {
      category: 'legal',
      question: "What if my Uber/Lyft driver fled the scene?",
      answer: "Hit-and-run by rideshare drivers is serious criminal conduct. The app tracks driver identity, making escape impossible. Criminal charges strengthen civil cases. Uninsured motorist coverage may apply. We coordinate with law enforcement while pursuing maximum civil compensation including punitive damages."
    },
    {
      category: 'legal',
      question: "How does Prop 22 affect my rideshare accident claim?",
      answer: "Proposition 22 maintains drivers as independent contractors while requiring some benefits. It doesn't eliminate rideshare company liability for passenger safety. Companies still must provide insurance and can be liable for systemic safety failures. We navigate California's complex legal framework to maximize recovery."
    },
    {
      category: 'timeline',
      question: "What if I didn't report the accident immediately?",
      answer: "While immediate reporting is best, delayed reporting doesn't eliminate your claim. Injuries often manifest days or weeks later. Document why you delayed (shock, didn't realize injury severity). Insurance companies use delays against you, making legal representation crucial to explain legitimate reasons for delay."
    },
    {
      category: 'legal',
      question: "Can I recover damages if I wasn't wearing a seatbelt?",
      answer: "California's 'seat belt defense' may reduce but not eliminate recovery. Maximum reduction is typically 5-25% of damages. Many rideshare passengers don't wear seatbelts in backseats. We minimize impact by focusing on driver negligence causing the accident regardless of seatbelt use."
    },
    {
      category: 'insurance',
      question: "What if the driver was using multiple rideshare apps?",
      answer: "Many drivers use Uber and Lyft simultaneously. Coverage depends on which app had active ride. Both companies may deny coverage claiming the other was active. We investigate app data, determine active platform, and prevent coverage denials from finger-pointing between companies."
    },
    {
      category: 'compensation',
      question: "What compensation is available for scarring and disfigurement?",
      answer: "Permanent scarring and disfigurement warrant significant compensation beyond medical costs. Factors include visibility, size, location, age, gender, and impact on employment/relationships. Plastic surgery costs, psychological counseling, and diminished quality of life are compensable. Young victims with facial scarring often receive higher awards."
    },
    {
      category: 'legal',
      question: "Can undocumented immigrants file rideshare accident claims?",
      answer: "Yes, immigration status doesn't affect personal injury rights in California. You can pursue full compensation regardless of documentation. Insurance companies cannot ask about immigration status. We protect clients' privacy and ensure immigration concerns don't impact injury claims."
    },
    {
      category: 'insurance',
      question: "What if I was injured in a rideshare during a work trip?",
      answer: "You may have both workers' compensation and personal injury claims. Workers' comp provides immediate benefits while personal injury claims offer fuller compensation including pain and suffering. Coordination between claims maximizes recovery. Employer-paid rides don't limit your rights against rideshare companies."
    },
    {
      category: 'medical',
      question: "How do pre-existing conditions affect my claim?",
      answer: "Pre-existing conditions don't bar recovery for aggravation or exacerbation. The 'eggshell plaintiff' rule means defendants take victims as they find them. Insurance companies scrutinize medical history seeking to blame pre-existing conditions. We use medical experts to distinguish new injuries from prior conditions."
    },
    {
      category: 'legal',
      question: "What if the accident happened at an airport or special zone?",
      answer: "Airports have designated rideshare areas with specific rules. Accidents in these zones may involve airport authority liability for dangerous conditions. LAX, SFO, and other California airports have unique pickup/dropoff procedures. Violations of airport regulations strengthen negligence claims."
    },
    {
      category: 'insurance',
      question: "Can I recover if injured in a rideshare pool/shared ride?",
      answer: "Yes, pool passengers have the same rights as private ride passengers. Multiple passengers may strengthen liability findings through consistent witness testimony. Shared rides don't reduce available insurance coverage. Companies can't use cost-sharing to limit passenger safety obligations or compensation."
    }
  ];

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Uber/Lyft Accident FAQ
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get answers to the most common questions about rideshare accident claims in California.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-muted-foreground">
              {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                  <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                    Show All Questions
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredFaqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <button
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary text-lg leading-tight mb-2">
                          {faq.question}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {categories.find(c => c.id === faq.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Still Have Questions?</CardTitle>
              <p className="text-muted-foreground">
                Get personalized answers from experienced rideshare accident attorneys.
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Available 24/7 • No fees unless we win • Se habla español
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Don't Wait Section */}
      <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Wait - Time Limits Apply for California Rideshare Cases</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            California's statute of limitations gives you only 2 years to file. Get answers and legal help now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Your Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftFAQ;