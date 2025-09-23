import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Heart, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Book, 
  GraduationCap,
  HandHeart,
  Stethoscope,
  Scale,
  FileText,
  ExternalLink
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import heroBackground from '@/assets/birth-injuries-hero-new.jpg';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesResources: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, y: 100, scale: 0.8 });
        gsap.to(heroContent, { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          ease: 'power3.out' 
        });
      }

      // Content sections animation
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nationalOrganizations = [
    {
      name: "United Cerebral Palsy",
      description: "National organization providing resources, support, and advocacy for individuals with cerebral palsy and their families.",
      website: "ucp.org",
      phone: "1-800-872-5827",
      services: ["Advocacy", "Resources", "Local Affiliates", "Educational Materials"],
      category: "Support Organization"
    },
    {
      name: "Birth Injury Lawyers Alliance",
      description: "Network of attorneys specializing in birth injury cases, providing legal resources and referrals.",
      website: "birthinjurylawyersalliance.com",
      phone: "Contact through website",
      services: ["Legal Referrals", "Case Resources", "Attorney Network"],
      category: "Legal Resource"
    },
    {
      name: "The Brachial Plexus Palsy Foundation",
      description: "Dedicated to supporting families affected by brachial plexus injuries and Erb's palsy.",
      website: "brachialplexuspalsyfoundation.org",
      phone: "Contact through website",
      services: ["Support Groups", "Educational Resources", "Research Funding"],
      category: "Support Organization"
    },
    {
      name: "HIE Help Center",
      description: "Resource center for families dealing with Hypoxic-Ischemic Encephalopathy (HIE).",
      website: "hiehelpcenter.org",
      phone: "Contact through website",
      services: ["Educational Resources", "Support Groups", "Medical Information"],
      category: "Educational Resource"
    }
  ];

  const californiaResources = [
    {
      name: "California Children's Services (CCS)",
      description: "State program providing medical care for children with certain physical limitations and chronic health conditions.",
      website: "dhcs.ca.gov/services/ccs",
      phone: "1-916-552-9105",
      services: ["Medical Care", "Equipment", "Therapy Services", "Case Management"],
      location: "Statewide",
      category: "Government Program"
    },
    {
      name: "Regional Centers of California",
      description: "Community-based agencies serving individuals with developmental disabilities throughout California.",
      website: "dds.ca.gov/regional-centers",
      phone: "Varies by region",
      services: ["Early Intervention", "Service Coordination", "Respite Care", "Family Support"],
      location: "Statewide",
      category: "Government Program"
    },
    {
      name: "Exceptional Parents Unlimited (EPU)",
      description: "California organization providing advocacy and support for families of children with disabilities.",
      website: "exceptionalparents.org",
      phone: "1-559-229-2000",
      services: ["Advocacy", "Training", "Support Groups", "Information & Referral"],
      location: "Central Valley",
      category: "Support Organization"
    },
    {
      name: "Disability Rights California",
      description: "Protection and advocacy agency for individuals with disabilities in California.",
      website: "disabilityrightsca.org",
      phone: "1-800-776-5746",
      services: ["Legal Advocacy", "Rights Protection", "Education Advocacy"],
      location: "Statewide",
      category: "Advocacy Organization"
    }
  ];

  const medicalResources = [
    {
      name: "Children's Hospital Los Angeles",
      description: "Leading pediatric hospital with specialized birth injury and neurology programs.",
      website: "chla.org",
      phone: "1-323-361-2345",
      specialties: ["Pediatric Neurology", "Rehabilitation Medicine", "Developmental Pediatrics"],
      location: "Los Angeles, CA",
      category: "Medical Center"
    },
    {
      name: "Lucile Packard Children's Hospital Stanford",
      description: "Comprehensive children's hospital with advanced neonatal and pediatric services.",
      website: "stanfordchildrens.org",
      phone: "1-650-497-8000",
      specialties: ["NICU", "Pediatric Neurosurgery", "Rehabilitation Services"],
      location: "Palo Alto, CA",
      category: "Medical Center"
    },
    {
      name: "UCSF Benioff Children's Hospital",
      description: "Academic medical center with specialized programs for children with complex medical needs.",
      website: "ucsfbenioffchildrens.org",
      phone: "1-415-476-1000",
      specialties: ["Fetal Medicine", "Neonatal Neurology", "Pediatric Rehabilitation"],
      location: "San Francisco & Oakland, CA",
      category: "Medical Center"
    },
    {
      name: "Children's Hospital of Orange County (CHOC)",
      description: "Dedicated children's hospital serving Southern California with comprehensive pediatric services.",
      website: "choc.org",
      phone: "1-714-997-3000",
      specialties: ["Neonatal ICU", "Pediatric Neurology", "Therapy Services"],
      location: "Orange County, CA",
      category: "Medical Center"
    }
  ];

  const educationalResources = [
    {
      name: "Early Start Program",
      description: "California's early intervention program for infants and toddlers with disabilities or developmental delays.",
      website: "dds.ca.gov/services/early-start",
      phone: "Contact local Regional Center",
      services: ["Early Intervention", "Family Training", "Therapy Services"],
      ageRange: "Birth to 3 years",
      category: "Educational Program"
    },
    {
      name: "Special Education Local Plan Area (SELPA)",
      description: "Regional organizations that coordinate special education services for school districts.",
      website: "cde.ca.gov/sp/se/lr/selpacontacts.asp",
      phone: "Varies by region",
      services: ["IEP Development", "Special Education Services", "Transition Planning"],
      ageRange: "3-22 years",
      category: "Educational Program"
    },
    {
      name: "California Department of Education - Special Education",
      description: "State agency overseeing special education programs and services in California.",
      website: "cde.ca.gov/sp/se",
      phone: "1-916-319-0800",
      services: ["Program Oversight", "Parent Resources", "Compliance Monitoring"],
      ageRange: "All ages",
      category: "Government Resource"
    }
  ];

  const financialResources = [
    {
      name: "Supplemental Security Income (SSI)",
      description: "Federal program providing financial assistance to children with disabilities.",
      website: "ssa.gov/benefits/ssi",
      phone: "1-800-772-1213",
      eligibility: "Children with qualifying disabilities and limited family income",
      benefits: "Monthly cash payments, Medicaid eligibility",
      category: "Government Benefit"
    },
    {
      name: "In-Home Supportive Services (IHSS)",
      description: "California program providing in-home care services for individuals with disabilities.",
      website: "cdss.ca.gov/inforesources/ihss",
      phone: "Contact county IHSS office",
      eligibility: "California residents with disabilities needing home care",
      benefits: "Personal care services, domestic services",
      category: "Government Program"
    },
    {
      name: "Medi-Cal",
      description: "California's Medicaid program providing health coverage for low-income individuals and families.",
      website: "dhcs.ca.gov/services/medi-cal",
      phone: "1-916-552-9105",
      eligibility: "Income-based eligibility, automatic for SSI recipients",
      benefits: "Comprehensive health coverage, therapy services",
      category: "Government Program"
    }
  ];

  return (
    <>
      <SEO
        title="Birth Injury Resources & Support | California Family Resources"
        description="Comprehensive resource directory for birth injury families in California. Find support organizations, medical centers, educational programs, and financial assistance."
      />

      <GoBack />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <div className="flex items-center justify-center mb-4">
              <Building className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Birth Injury Resources</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Comprehensive support and resources for families affected by birth injuries
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
          
          {/* National Organizations */}
          <section className="content-section mb-16">
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">National Support Organizations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nationalOrganizations.map((org, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{org.name}</CardTitle>
                      <Badge variant="outline">{org.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{org.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{org.website}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{org.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {org.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* California Resources */}
          <section className="content-section mb-16">
            <div className="flex items-center mb-8">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">California State Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {californiaResources.map((resource, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{resource.name}</CardTitle>
                      <Badge variant="outline">{resource.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{resource.website}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{resource.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{resource.location}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Medical Resources */}
          <section className="content-section mb-16">
            <div className="flex items-center mb-8">
              <Stethoscope className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Medical Centers & Specialists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medicalResources.map((center, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{center.name}</CardTitle>
                      <Badge variant="outline">{center.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{center.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{center.website}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{center.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{center.location}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {center.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Educational Resources */}
          <section className="content-section mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Educational Programs & Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationalResources.map((program, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <Badge variant="outline">{program.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{program.website}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{program.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Age Range: {program.ageRange}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Financial Resources */}
          <section className="content-section mb-16">
            <div className="flex items-center mb-8">
              <HandHeart className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Financial Assistance & Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {financialResources.map((benefit, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{benefit.name}</CardTitle>
                      <Badge variant="outline">{benefit.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{benefit.website}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{benefit.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-semibold text-sm">Eligibility:</h4>
                        <p className="text-sm text-muted-foreground">{benefit.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Benefits:</h4>
                        <p className="text-sm text-muted-foreground">{benefit.benefits}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Resources CTA */}
          <section className="content-section">
            <Card className="glass-card bg-primary/5 border-primary">
              <CardContent className="p-8 text-center">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If your child's birth injury was caused by medical negligence, you may be entitled to compensation 
                  to help cover the costs of medical care, therapy, and other expenses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BirthInjuriesResources;