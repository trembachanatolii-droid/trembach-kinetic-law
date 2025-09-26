import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ThreeDVisualEffects as AdvancedThreeDVisualEffects } from '@/components/3DVisualEffects';
import motorcycleHero from '@/assets/practice-areas/motorcycle-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

const MotorcycleAccidents = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentType: '',
    motorcycleType: '',
    injuryType: '',
    medicalTreatment: '',
    insuranceClaim: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Motorcycle Accidents Form Data:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours to discuss your motorcycle accident case.');
  };

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
          style={{ backgroundImage: `url(${motorcycleHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">🏍️</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
              California Motorcycle Accident Lawyers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Defeating Bias, Maximizing Recovery for Riders
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
              Former Defense Attorney Now Fighting for Injured Motorcyclists Throughout All 58 California Counties
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
            
            {/* Overview Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Fighting Motorcycle Bias in California</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California's year-round riding weather and diverse scenic routes make it home to over 800,000 registered motorcycles, more than any other state. From daily commuters navigating Los Angeles traffic to weekend warriors exploring Pacific Coast Highway, from adventure riders tackling mountain passes to touring enthusiasts crossing deserts, California's motorcycle community embodies freedom, efficiency, and passion.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Yet when negligent drivers cause accidents, injured riders face not only devastating physical injuries but also systematic bias from insurance companies, law enforcement, and even potential jurors who wrongly assume motorcyclists are reckless thrill-seekers responsible for their own injuries. At Trembach Law Firm, we leverage former defense attorney experience to expose and defeat the discriminatory tactics insurance companies use against motorcycle accident victims.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand how insurers train adjusters to blame riders, minimize motorcycle accident injuries, and exploit stereotypes to reduce payouts. This insider knowledge, combined with our deep respect for motorcycle culture and comprehensive understanding of California's unique lane-splitting laws, enables us to secure maximum compensation for riders who have been wronged by careless drivers.
              </p>
            </Card>

            {/* Lane Splitting Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">California's Unique Lane Splitting Laws</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California stands alone in explicitly legalizing lane splitting, recognizing that when performed prudently, this practice reduces rear-end collision risks and traffic congestion. Yet insurance companies systematically misrepresent lane splitting to argue comparative fault, even when riders followed California Highway Patrol guidelines.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We educate adjusters, opposing counsel, and when necessary, juries about the safety benefits and legal protections for lane splitting, defeating attempts to blame riders for lawful conduct. The physics of motorcycle accidents create injury patterns far more severe than typical vehicle collisions. Without the protective cage of a car, airbags, or crumple zones, riders absorb impact forces directly through their bodies.
              </p>
              
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Lane Splitting Guidelines</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Travel no more than 10 mph faster than traffic</li>
                  <li>• Avoid lane splitting at speeds over 30 mph</li>
                  <li>• Consider road conditions and visibility</li>
                  <li>• Be extra cautious around larger vehicles</li>
                  <li>• Never lane split near exits or on-ramps</li>
                </ul>
              </div>
            </Card>

            {/* Types of Cases Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Types of Motorcycle Accidents We Handle</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Left-Turn Collisions at Intersections</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Left-turning vehicles cutting across motorcycles' paths cause the highest percentage of motorcycle fatalities, representing over 40% of all fatal motorcycle accidents. Drivers turning left across traffic consistently claim they "didn't see" approaching motorcycles or misjudged their speed and distance. These right-of-way violations demonstrate clear negligence under Vehicle Code Section 21801.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lane Splitting Accidents</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California's unique lane splitting legalization creates complex liability scenarios when accidents occur between lanes. Drivers who intentionally block lane splitting, suddenly change lanes without checking for motorcycles, or open doors into riders face clear liability. However, insurance companies aggressively investigate lane splitting accidents seeking evidence that riders exceeded CHP guidelines.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Rear-End Collisions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Motorcycles' superior braking capabilities mean rear-end collisions typically result from driver inattention rather than sudden stops by riders. These impacts often eject riders backward into following vehicles or forward over handlebars. The whiplash mechanism differs from car occupants due to helmet weight and lack of seat backs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Highway Merging and Lane Change Accidents</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    High-speed highway accidents create severe injuries when drivers merge or change lanes into motorcycles. Blind spot failures, inadequate mirror checks, and failure to signal create deadly scenarios where riders have no escape routes. The speed differential between highway traffic and merging vehicles compounds impact forces.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Dooring Accidents</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Urban riders face constant dooring threats as vehicle occupants exit without checking for approaching motorcycles. These accidents cause severe injuries as riders strike doors at city speeds, often being launched onto pavement or into oncoming traffic. California Vehicle Code Section 22517 prohibits opening doors into traffic, creating clear liability.
                  </p>
                </div>
              </div>
            </Card>

            {/* Overcoming Bias Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Overcoming Anti-Motorcycle Bias</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Motorcycle accident cases require addressing bias directly rather than hoping it disappears. Education about actual motorcycle safety statistics, rider demographics, and accident causation patterns challenges adjuster assumptions. Presenting riders as responsible community members with families, careers, and contributions humanizes victims beyond stereotypes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Common Stereotypes We Combat</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• "Motorcyclists are reckless speed demons"</li>
                    <li>• "They assume the risk by riding"</li>
                    <li>• "Motorcycles are inherently dangerous"</li>
                    <li>• "Riders don't follow traffic laws"</li>
                    <li>• "They're asking for trouble"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Counter-Strategies</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Present safety statistics and research</li>
                    <li>• Highlight rider education and training</li>
                    <li>• Demonstrate professional backgrounds</li>
                    <li>• Show responsible riding practices</li>
                    <li>• Educate about California's pro-rider laws</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Unique Injuries Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Unique Motorcycle Injury Patterns</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Motorcycle-specific injuries require specialized documentation often missed by general providers. Road rash depth and coverage percentage affects scarring and treatment needs. "Biker's arm" symptoms may develop gradually requiring serial examinations. Lower extremity injuries need functional assessments for riding ability. Psychological trauma from near-death experiences deserves equal documentation with physical injuries.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Road Rash</h3>
                  <p className="text-muted-foreground text-sm">
                    Abrasion injuries from pavement contact requiring debridement, skin grafts, and long-term scar management.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Biker's Arm</h3>
                  <p className="text-muted-foreground text-sm">
                    Brachial plexus nerve damage causing arm weakness, numbness, and loss of function.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lower Extremity</h3>
                  <p className="text-muted-foreground text-sm">
                    Complex leg fractures, ankle injuries, and foot trauma from impact and crushing forces.
                  </p>
                </div>
              </div>
            </Card>

            {/* Free Case Evaluation Form */}
            <section id="case-evaluation" className="content-section mb-16">
              <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <AdvancedThreeDVisualEffects>
                      <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2 font-bold">Get Your Free Motorcycle Accident Case Evaluation</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                          <p className="text-foreground text-lg leading-relaxed">Specialized evaluation for motorcycle accident cases throughout California</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Motorcycle Accident Case Evaluation Form">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-foreground text-base font-medium">First Name *</label>
                              <Input
                                name="firstName"
                                value={formData.name.split(' ')[0] || ''}
                                onChange={(e) => {
                                  const lastName = formData.name.split(' ').slice(1).join(' ');
                                  handleInputChange('name', `${e.target.value} ${lastName}`.trim());
                                }}
                                required
                                aria-required="true"
                                className="h-12 text-base"
                                placeholder="Enter your first name"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-foreground text-base font-medium">Last Name *</label>
                              <Input
                                name="lastName"
                                value={formData.name.split(' ').slice(1).join(' ') || ''}
                                onChange={(e) => {
                                  const firstName = formData.name.split(' ')[0] || '';
                                  handleInputChange('name', `${firstName} ${e.target.value}`.trim());
                                }}
                                required
                                aria-required="true"
                                className="h-12 text-base"
                                placeholder="Enter your last name"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-foreground text-base font-medium">Email *</label>
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                                aria-required="true"
                                className="h-12 text-base"
                                placeholder="your.email@example.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-foreground text-base font-medium">Phone *</label>
                              <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                required
                                aria-required="true"
                                className="h-12 text-base"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-foreground text-base font-medium">Date of Accident *</label>
                              <Input
                                type="date"
                                name="accidentDate"
                                value={formData.accidentDate}
                                onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                                required
                                aria-required="true"
                                className="h-12 text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-white text-base font-medium">Type of Motorcycle *</label>
                              <Select value={formData.motorcycleType || ''} onValueChange={(value) => handleInputChange('motorcycleType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select motorcycle type" className="text-blue-200/70" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="sport-bike">Sport Bike</SelectItem>
                                  <SelectItem value="cruiser">Cruiser</SelectItem>
                                  <SelectItem value="touring">Touring</SelectItem>
                                  <SelectItem value="standard">Standard</SelectItem>
                                  <SelectItem value="adventure">Adventure/Dual Sport</SelectItem>
                                  <SelectItem value="scooter">Scooter</SelectItem>
                                  <SelectItem value="dirt-bike">Dirt Bike</SelectItem>
                                  <SelectItem value="electric">Electric</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-white text-base font-medium">Type of Accident *</label>
                              <Select value={formData.accidentType || ''} onValueChange={(value) => handleInputChange('accidentType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select accident type" className="text-blue-200/70" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="left-turn-collision">Left-Turn Collision</SelectItem>
                                  <SelectItem value="lane-splitting">Lane Splitting Accident</SelectItem>
                                  <SelectItem value="rear-end">Rear-End Collision</SelectItem>
                                  <SelectItem value="merging-lane-change">Highway Merging/Lane Change</SelectItem>
                                  <SelectItem value="dooring">Dooring Accident</SelectItem>
                                  <SelectItem value="intersection">Intersection Accident</SelectItem>
                                  <SelectItem value="head-on">Head-On Collision</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-white text-base font-medium">Primary Injury Type *</label>
                              <Select value={formData.injuryType || ''} onValueChange={(value) => handleInputChange('injuryType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select injury type" className="text-blue-200/70" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="road-rash">Road Rash</SelectItem>
                                  <SelectItem value="bikers-arm">Biker's Arm (Nerve Damage)</SelectItem>
                                  <SelectItem value="lower-extremity">Lower Extremity Injuries</SelectItem>
                                  <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                                  <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                                  <SelectItem value="broken-bones">Broken Bones</SelectItem>
                                  <SelectItem value="internal-organs">Internal Organ Damage</SelectItem>
                                  <SelectItem value="burns">Burns</SelectItem>
                                  <SelectItem value="multiple">Multiple Injuries</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-white text-base font-medium">Medical Treatment *</label>
                              <Select value={formData.medicalTreatment || ''} onValueChange={(value) => handleInputChange('medicalTreatment', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select treatment level" className="text-blue-200/70" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="emergency-room">Emergency Room Only</SelectItem>
                                  <SelectItem value="hospitalized">Hospitalized</SelectItem>
                                  <SelectItem value="surgery">Surgery Required</SelectItem>
                                  <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                                  <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                                  <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                                  <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-white text-base font-medium">Insurance Status *</label>
                              <Select value={formData.insuranceClaim || ''} onValueChange={(value) => handleInputChange('insuranceClaim', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select claim status" className="text-blue-200/70" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="not-filed">Not Filed Yet</SelectItem>
                                  <SelectItem value="filed-pending">Filed - Pending</SelectItem>
                                  <SelectItem value="under-investigation">Under Investigation</SelectItem>
                                  <SelectItem value="offer-received">Settlement Offer Received</SelectItem>
                                  <SelectItem value="denied">Claim Denied</SelectItem>
                                  <SelectItem value="disputed-fault">Fault Being Disputed</SelectItem>
                                  <SelectItem value="low-offer">Unreasonably Low Offer</SelectItem>
                                  <SelectItem value="no-insurance">Other Party Uninsured</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <label className="text-foreground text-base font-medium">
                              Please describe your motorcycle accident *
                            </label>
                            <Textarea
                              name="description"
                              value={formData.description}
                              onChange={(e) => handleInputChange('description', e.target.value)}
                              placeholder="Please provide details about how the motorcycle accident occurred..."
                              rows={5}
                              className=""
                              required
                              aria-required="true"
                            />
                          </div>

                          <div className="flex items-start space-x-2">
                            <input
                              type="checkbox"
                              name="consent"
                              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
                              required
                              aria-required="true"
                            />
                            <label className="text-foreground text-sm leading-relaxed">
                              I consent to being contacted by Trembach Law Firm regarding my motorcycle accident case. I understand this consultation is free and there is no obligation. *
                            </label>
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full btn-enhanced py-4 text-lg"
                          >
                            Get My Free Case Evaluation
                          </Button>
                        </form>
                      </div>
                    </AdvancedThreeDVisualEffects>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                      <Card className="glass-card border-primary/20">
                        <div className="p-6">
                          <h4 className="text-primary font-semibold mb-4">Need Immediate Help?</h4>
                          <div className="space-y-4">
                            <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                              Call (818) 123-4567
                            </Button>
                            <p className="text-sm text-muted-foreground text-center">
                              Available 24/7 for motorcycle accident cases
                            </p>
                          </div>
                        </div>
                      </Card>

                      <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                        <div className="p-6">
                          <h4 className="flex items-center text-yellow-700 font-semibold mb-2">
                            ⚠️ Time Sensitive
                          </h4>
                          <p className="text-sm text-yellow-700">
                            California motorcycle accident cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <Card className="content-card p-8 text-center bg-primary/5 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Protecting the Rights of Injured Motorcyclists</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our statewide practice ensures expert representation whether your accident occurred on the Angeles Crest Highway, Interstate 5, San Francisco's Market Street, or rural roads in the Sierra Nevada. Every rider deserves respect, fair treatment, and full compensation when negligent drivers violate their rights to safe road use.
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

export default MotorcycleAccidents;