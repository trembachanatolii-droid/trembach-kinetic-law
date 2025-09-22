import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  Mail,
  ExternalLink,
  MapPin,
  Clock,
  Users,
  Shield,
  Heart,
  FileText,
  AlertTriangle,
  Building,
  Stethoscope,
  Scale,
  Home,
  Info
} from 'lucide-react';
import elderAbuseResourcesHero from '@/assets/elder-abuse-resources-hero.jpg';

interface GoBackProps {
  onGoBack?: () => void;
  fromSection?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, fromSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (onGoBack) {
      onGoBack();
    } else if (fromSection) {
      const targetElement = document.getElementById(fromSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.back();
    } else {
      window.history.back();
    }
  };
  
  return (
    <div className={`fixed top-20 left-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="ghost" 
        onClick={handleClick}
        className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

const ElderAbuseResources: React.FC = () => {
  const emergencyContacts = [
    {
      name: "911 Emergency Services",
      description: "Immediate emergency assistance for life-threatening situations",
      phone: "911",
      availability: "24/7",
      icon: AlertTriangle,
      type: "emergency"
    },
    {
      name: "Adult Protective Services Hotline",
      description: "Report elder abuse, neglect, or exploitation", 
      phone: "833-401-0832",
      availability: "24/7",
      icon: Shield,
      type: "reporting"
    },
    {
      name: "Elder Abuse Hotline",
      description: "National elder abuse prevention hotline",
      phone: "1-800-677-1116", 
      availability: "Business hours",
      icon: Phone,
      type: "support"
    },
    {
      name: "National Suicide Prevention Lifeline",
      description: "Crisis support and suicide prevention",
      phone: "988",
      availability: "24/7",
      icon: Heart,
      type: "crisis"
    }
  ];

  const governmentAgencies = [
    {
      name: "California Department of Aging",
      description: "State agency overseeing elder services and programs",
      website: "aging.ca.gov",
      phone: "(916) 419-7500",
      services: ["Policy development", "Program oversight", "Advocacy", "Information resources"]
    },
    {
      name: "Long-Term Care Ombudsman Program",
      description: "Advocates for residents of nursing homes and assisted living facilities",
      website: "aging.ca.gov/ombudsman",
      phone: "1-800-231-4024",
      services: ["Complaint investigation", "Resident rights advocacy", "Facility monitoring", "Family support"]
    },
    {
      name: "California Department of Social Services",
      description: "Licenses and regulates elder care facilities",
      website: "cdss.ca.gov",
      phone: "(916) 651-8848",
      services: ["Facility licensing", "Complaint investigations", "Regulatory enforcement", "Care standards"]
    },
    {
      name: "Area Agencies on Aging (AAA)",
      description: "Local agencies providing elder services and support",
      website: "aging.ca.gov/aaa",
      phone: "Varies by county",
      services: ["Case management", "Service coordination", "Information and referral", "Advocacy"]
    }
  ];

  const supportOrganizations = [
    {
      name: "National Center on Elder Abuse (NCEA)",
      description: "Leading resource for elder abuse prevention information and training",
      website: "ncea.acl.gov",
      services: ["Education materials", "Training programs", "Research publications", "Policy resources"]
    },
    {
      name: "Eldercare Locator",
      description: "Public service connecting families with local elder services",
      website: "eldercare.acl.gov", 
      phone: "1-800-677-1116",
      services: ["Service referrals", "Resource directory", "Care planning assistance", "Information support"]
    },
    {
      name: "AARP Foundation",
      description: "Programs and resources for vulnerable older adults",
      website: "aarp.org/foundation",
      services: ["Legal assistance", "Financial security", "Social connections", "Fraud prevention"]
    },
    {
      name: "National Adult Protective Services Association",
      description: "Professional organization supporting APS workers and systems",
      website: "napsa-now.org",
      services: ["Professional training", "Best practices", "Policy advocacy", "Research support"]
    }
  ];

  const legalResources = [
    {
      name: "California Legal Aid Societies",
      description: "Free legal assistance for low-income elders",
      website: "lawhelpca.org",
      services: ["Legal representation", "Self-help resources", "Legal advice", "Court assistance"]
    },
    {
      name: "State Bar of California Senior Legal Services",
      description: "Pro bono legal programs for seniors",
      website: "calbar.ca.gov",
      services: ["Attorney referrals", "Pro bono programs", "Legal clinics", "Educational resources"]
    },
    {
      name: "Disability Rights California",
      description: "Legal advocacy for disabled adults including elderly",
      website: "disabilityrightsca.org",
      phone: "(800) 776-5746",
      services: ["Legal advocacy", "Rights protection", "Abuse investigation", "System reform"]
    },
    {
      name: "Elder Law & Advocacy",
      description: "Specialized elder law legal services",
      website: "elderlawadvocacy.org",
      services: ["Elder law practice", "Medicaid planning", "Guardianship", "Abuse cases"]
    }
  ];

  const medicalResources = [
    {
      name: "Geriatric Medicine Specialists",
      description: "Doctors specializing in elderly healthcare",
      findProvider: "Use insurance directory or physician referral services",
      services: ["Comprehensive care", "Medication management", "Cognitive assessment", "Care coordination"]
    },
    {
      name: "Elder Abuse Forensic Centers",
      description: "Specialized medical evaluation for abuse cases",
      website: "Various locations throughout California",
      services: ["Forensic examinations", "Expert testimony", "Medical documentation", "Trauma-informed care"]
    },
    {
      name: "Mental Health Services for Seniors",
      description: "Specialized counseling and therapy for elderly trauma",
      findProvider: "Contact local mental health departments",
      services: ["Trauma therapy", "Grief counseling", "Support groups", "Crisis intervention"]
    },
    {
      name: "Mobile Medical Services",
      description: "In-home medical care for mobility-limited seniors",
      findProvider: "Contact local healthcare providers",
      services: ["Home visits", "Medication management", "Wound care", "Health monitoring"]
    }
  ];

  const educationalResources = [
    {
      title: "Recognizing Elder Abuse Warning Signs",
      description: "Learn to identify physical, emotional, and financial abuse indicators",
      provider: "National Center on Elder Abuse",
      format: "Online guide, printable materials"
    },
    {
      title: "Understanding California Elder Abuse Law",
      description: "Comprehensive guide to EADACPA and legal remedies",
      provider: "State Bar of California",
      format: "Legal publication, online resource"
    },
    {
      title: "Preventing Financial Exploitation",
      description: "Tools and strategies to protect elderly finances",
      provider: "AARP Foundation", 
      format: "Workshop materials, online courses"
    },
    {
      title: "Nursing Home Rights and Advocacy",
      description: "Understanding resident rights and how to advocate",
      provider: "Long-Term Care Ombudsman",
      format: "Handbook, training sessions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Elder Abuse Resources | California Support Services | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Comprehensive elder abuse resources for California families. Emergency contacts, government agencies, support organizations, and legal assistance for elder abuse cases."
        />
        <meta name="keywords" content="elder abuse resources, California support services, elder abuse help, senior protection resources" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Go Back Component */}
        <GoBack />

        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${elderAbuseResourcesHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Elder Abuse Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Comprehensive support services and resources for California elder abuse survivors and families
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Emergency Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Legal Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Healing Support</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Emergency Contacts */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-destructive">Emergency Contacts</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If you or a loved one is in immediate danger, contact these emergency services immediately
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className={`glass-card hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 ${
                  contact.type === 'emergency' ? 'border-l-red-500' : 
                  contact.type === 'reporting' ? 'border-l-orange-500' : 
                  contact.type === 'crisis' ? 'border-l-purple-500' : 'border-l-blue-500'
                }`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        contact.type === 'emergency' ? 'bg-red-100 dark:bg-red-900' : 
                        contact.type === 'reporting' ? 'bg-orange-100 dark:bg-orange-900' : 
                        contact.type === 'crisis' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-blue-100 dark:bg-blue-900'
                      }`}>
                        <contact.icon className={`w-5 h-5 ${
                          contact.type === 'emergency' ? 'text-red-600' : 
                          contact.type === 'reporting' ? 'text-orange-600' : 
                          contact.type === 'crisis' ? 'text-purple-600' : 'text-blue-600'
                        }`} />
                      </div>
                      {contact.name}
                    </CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <a 
                          href={`tel:${contact.phone.replace(/\D/g, '')}`} 
                          className="text-primary hover:underline font-bold text-lg"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{contact.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Government Agencies */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Government Agencies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Official agencies responsible for elder protection and facility oversight
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {governmentAgencies.map((agency, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      {agency.name}
                    </CardTitle>
                    <CardDescription>{agency.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {agency.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <a 
                            href={`https://${agency.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {agency.website}
                          </a>
                        </div>
                      )}
                      {agency.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{agency.phone}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium mb-2">Services:</h4>
                        <ul className="text-sm space-y-1">
                          {agency.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Organizations */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Organizations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organizations dedicated to supporting elder abuse survivors and families
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {supportOrganizations.map((org, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      {org.website ? (
                        <a 
                          href={`https://${org.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline cursor-pointer"
                        >
                          {org.name}
                        </a>
                      ) : (
                        org.name
                      )}
                    </CardTitle>
                    <CardDescription>{org.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {org.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <a 
                            href={`https://${org.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {org.website}
                          </a>
                        </div>
                      )}
                      {org.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{org.phone}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium mb-2">Services:</h4>
                        <ul className="text-sm space-y-1">
                          {org.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Resources</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Legal assistance and advocacy organizations for elder abuse cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {legalResources.map((resource, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="w-6 h-6 text-primary" />
                      {resource.name}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {resource.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <a 
                            href={`https://${resource.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {resource.website}
                          </a>
                        </div>
                      )}
                      {resource.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{resource.phone}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium mb-2">Services:</h4>
                        <ul className="text-sm space-y-1">
                          {resource.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medical Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical & Mental Health Resources</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized medical care and mental health support for elder abuse survivors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {medicalResources.map((resource, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Stethoscope className="w-6 h-6 text-primary" />
                      {resource.name}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {resource.website && (
                        <div className="flex items-center gap-2">
                          <Info className="w-4 h-4 text-primary" />
                          <span className="text-sm">{resource.website}</span>
                        </div>
                      )}
                      {resource.findProvider && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-0.5" />
                          <span className="text-sm">{resource.findProvider}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium mb-2">Services:</h4>
                        <ul className="text-sm space-y-1">
                          {resource.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Educational Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Resources</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Information and training materials about elder abuse prevention and response
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educationalResources.map((resource, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      {resource.title}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{resource.provider}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Format:</strong> {resource.format}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Get Legal Help Now */}
          <div className="content-card">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="text-center p-12">
                <h2 className="text-3xl font-bold mb-4">Need Legal Help for Elder Abuse?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Don't wait to protect your loved one. Contact our experienced elder abuse attorneys for immediate assistance.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full md:w-auto text-black transition-colors hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567 - Available 24/7
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full md:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
                  >
                    Get Free Case Evaluation
                  </Button>
                </div>
                <div className="mt-6 text-sm opacity-75">
                  <p>✓ Free Consultation ✓ No Fees Unless We Win ✓ Experienced Elder Abuse Attorneys</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElderAbuseResources;