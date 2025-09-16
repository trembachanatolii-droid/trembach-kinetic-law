import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import motorcycleHero from '@/assets/practice-areas/motorcycle-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

const MotorcycleAccidents = () => {
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