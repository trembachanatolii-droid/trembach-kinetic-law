import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Users, 
  Heart, 
  Clock, 
  MapPin, 
  MessageSquare,
  Shield,
  Calendar,
  Building,
  Stethoscope,
  FileText
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

import heroImage from '@/assets/explosions-support-groups-hero-bright.jpg';

const SupportGroups: React.FC = () => {
  // Add explosions-page class for high contrast CSS targeting
  useEffect(() => {
    document.body.classList.add('explosions-page');
    return () => document.body.classList.remove('explosions-page');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Explosion Injury Support Groups | California Recovery Communities"
        description="Find support groups and recovery communities for explosion injury survivors in California. Peer support, family groups, and professional counseling resources."
        keywords="explosion injury support group, burn survivor community, trauma recovery group, explosion victim support, peer counseling, family support explosion injury"
        canonical="/practice-areas/explosions/support-groups"
      />

      <GoBack fallbackPath="/practice-areas/explosions" />

      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 text-white overflow-hidden hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center hero-content">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white text-center">
            Support Groups for
            <br />
            <span className="text-red-400">Explosion Survivors</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white text-center">
            Connect with other explosion injury survivors and find the emotional support you need for recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              CALL (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              asChild
            >
              <Link to="/practice-areas/explosions/case-evaluation">
                FREE CONSULTATION
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Why Support Groups Matter */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Why Support Groups Matter for Explosion Survivors</h2>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  The Power of Peer Support
                </h3>
                <p className="text-blue-700 mb-4">
                  Explosion injuries create unique physical and emotional challenges that only other survivors truly understand. Support groups provide a safe space to share experiences, learn coping strategies, and find hope during the recovery process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Emotional Benefits</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Reduced feelings of isolation</li>
                      <li>• Validation of experiences</li>
                      <li>• Hope and inspiration</li>
                      <li>• Improved mental health</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Practical Benefits</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Practical coping strategies</li>
                      <li>• Resource sharing</li>
                      <li>• Treatment recommendations</li>
                      <li>• Advocacy skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Support Groups */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Support Groups Available</h2>
              
              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Users className="w-5 h-5 mr-2" />
                      Burn Survivor Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-4">
                      Specialized groups for those recovering from burn injuries caused by explosions, focusing on the unique challenges of burn recovery and reconstruction.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Group Focus</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Wound care and healing</li>
                          <li>• Managing pain and discomfort</li>
                          <li>• Dealing with scarring</li>
                          <li>• Body image concerns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Meeting Format</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Weekly in-person meetings</li>
                          <li>• Online video conferences</li>
                          <li>• Hospital-based sessions</li>
                          <li>• Educational workshops</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Heart className="w-5 h-5 mr-2" />
                      Trauma Recovery Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 mb-4">
                      Groups focusing on the psychological aspects of trauma recovery, including PTSD, anxiety, and depression commonly experienced after explosive incidents.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Treatment Approaches</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Cognitive Behavioral Therapy (CBT)</li>
                          <li>• Eye Movement Desensitization (EMDR)</li>
                          <li>• Mindfulness and meditation</li>
                          <li>• Stress management techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Group Benefits</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Shared coping strategies</li>
                          <li>• Emotional processing</li>
                          <li>• Reduced stigma</li>
                          <li>• Professional guidance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Building className="w-5 h-5 mr-2" />
                      Family Support Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700 mb-4">
                      Support groups specifically for family members and caregivers of explosion injury survivors, addressing their unique needs and challenges.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Caregiver Support</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Managing caregiver stress</li>
                          <li>• Self-care strategies</li>
                          <li>• Communication skills</li>
                          <li>• Respite care resources</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Family Dynamics</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Adjusting to new roles</li>
                          <li>• Supporting children</li>
                          <li>• Financial planning</li>
                          <li>• Long-term care planning</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* California Support Group Locations */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Support Group Locations</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Northern California</span>
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">UC Davis Burn Support Group</h4>
                        <p className="text-sm text-muted-foreground mb-2">Sacramento, CA</p>
                        <p className="text-sm mb-2">Monthly meetings for burn survivors and families</p>
                        <div className="flex items-center text-sm text-blue-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Third Saturday of each month, 2:00 PM
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Bay Area Trauma Recovery Network</h4>
                        <p className="text-sm text-muted-foreground mb-2">San Francisco, CA</p>
                        <p className="text-sm mb-2">Weekly trauma recovery support groups</p>
                        <div className="flex items-center text-sm text-green-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Wednesdays, 6:30 PM
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Silicon Valley Burn Survivors</h4>
                        <p className="text-sm text-muted-foreground mb-2">San Jose, CA</p>
                        <p className="text-sm mb-2">Peer support and social activities</p>
                        <div className="flex items-center text-sm text-purple-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Bi-weekly Saturdays, 10:00 AM
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Southern California</span>
                      <MapPin className="w-5 h-5 text-red-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">LA County Burn Survivors Network</h4>
                        <p className="text-sm text-muted-foreground mb-2">Los Angeles, CA</p>
                        <p className="text-sm mb-2">Largest burn survivor community in Southern California</p>
                        <div className="flex items-center text-sm text-red-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Every other Thursday, 7:00 PM
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Orange County Trauma Support</h4>
                        <p className="text-sm text-muted-foreground mb-2">Irvine, CA</p>
                        <p className="text-sm mb-2">Professional-led trauma recovery groups</p>
                        <div className="flex items-center text-sm text-orange-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Tuesdays, 6:00 PM
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-semibold">San Diego Burn Recovery Circle</h4>
                        <p className="text-sm text-muted-foreground mb-2">San Diego, CA</p>
                        <p className="text-sm mb-2">Comprehensive support including family groups</p>
                        <div className="flex items-center text-sm text-teal-600">
                          <Clock className="w-4 h-4 mr-1" />
                          First and third Sundays, 3:00 PM
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Online Support Communities */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Online Support Communities</h2>
              
              <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Virtual Support Options
                </h3>
                <p className="text-indigo-700 mb-4">
                  Online support groups provide 24/7 access to peer support and professional guidance, especially valuable for those with mobility limitations or living in remote areas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">Video Support Groups</h4>
                    <ul className="text-sm text-indigo-700 space-y-2">
                      <li>• Weekly video conferences</li>
                      <li>• Professional facilitation</li>
                      <li>• Privacy protection</li>
                      <li>• Recording access</li>
                      <li>• Breakout rooms for specialized topics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">Online Forums</h4>
                    <ul className="text-sm text-indigo-700 space-y-2">
                      <li>• 24/7 peer support</li>
                      <li>• Anonymous participation</li>
                      <li>• Moderated discussions</li>
                      <li>• Resource libraries</li>
                      <li>• Expert Q&A sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">How to Get Started with Support Groups</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-green-600" />
                      Finding the Right Group
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Consider Your Needs</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Type of injury or trauma</li>
                          <li>• Stage of recovery</li>
                          <li>• Preferred meeting format</li>
                          <li>• Geographic location</li>
                          <li>• Schedule availability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">What to Expect</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Confidential, safe environment</li>
                          <li>• Voluntary participation</li>
                          <li>• Respect for all experiences</li>
                          <li>• Professional oversight</li>
                          <li>• No pressure to share</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-800">
                      <Shield className="w-5 h-5 mr-2" />
                      Legal Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700 mb-4">
                      Participating in support groups can be beneficial for your legal case by documenting the ongoing impact of your injuries and your efforts toward recovery.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Benefits for Your Case</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Documents ongoing treatment</li>
                          <li>• Shows mitigation of damages</li>
                          <li>• Demonstrates life impact</li>
                          <li>• Supports need for future care</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Privacy Protection</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Confidentiality agreements</li>
                          <li>• Protected health information</li>
                          <li>• Legal privilege considerations</li>
                          <li>• Coordinated legal strategy</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Connect with Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full text-white bg-primary hover:bg-primary/90" size="lg" asChild>
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground" size="lg" asChild>
                    <Link to="/practice-areas/explosions/case-evaluation">
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground" size="lg" asChild>
                    <Link to="/practice-areas/explosions/medical-guidance">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Crisis Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-red-800">Crisis Text Line</p>
                      <p className="text-red-600">Text HOME to 741741</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-blue-800">National Suicide Prevention</p>
                      <p className="text-blue-600">988 or 1-800-273-8255</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">SAMHSA Helpline</p>
                      <p className="text-green-600">1-800-662-4357</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Group Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Emotional healing and validation</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Peer connections and friendships</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Practical coping strategies</span>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Safe space to share experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Find Your Support Community</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">Connect with other explosion injury survivors and begin your journey toward healing and recovery.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" asChild>
              <Link to="/practice-areas/explosions/case-evaluation">
                START FREE CONSULTATION
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportGroups;