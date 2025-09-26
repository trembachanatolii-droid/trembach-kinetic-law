import React from 'react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  ExternalLink, 
  BookOpen, 
  Users, 
  MapPin,
  Phone,
  Mail,
  Download,
  AlertCircle
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/pfas-water-treatment.jpg';

const PFASResources: React.FC = () => {
  // Add scroll restoration
  useScrollRestoration();
  const resources = [
    {
      category: "Government Resources",
      items: [
        {
          title: "EPA PFAS Information",
          description: "Official EPA information about PFAS chemicals and health effects",
          url: "https://www.epa.gov/pfas",
          type: "external"
        },
        {
          title: "CDC PFAS Health Information", 
          description: "Health effects and exposure information from the CDC",
          url: "https://www.cdc.gov/biomonitoring/PFAS_FactSheet.html",
          type: "external"
        },
        {
          title: "California Water Resources Control Board",
          description: "State information about PFAS in California drinking water",
          url: "https://www.waterboards.ca.gov/pfas/",
          type: "external"
        }
      ]
    },
    {
      category: "Medical Resources",
      items: [
        {
          title: "PFAS Health Effects Research",
          description: "Latest medical research on PFAS health impacts",
          url: "https://www.niehs.nih.gov/health/topics/agents/pfc/",
          type: "external",
          action: "View Studies"
        },
        {
          title: "Symptoms Checklist",
          description: "Common health conditions linked to PFAS exposure",
          url: "https://www.cdc.gov/biomonitoring/PFAS_FactSheet.html",
          type: "external"
        },
        {
          title: "Medical Testing Guidelines", 
          description: "What tests to request from your doctor",
          url: "https://www.atsdr.cdc.gov/pfas/health-effects/overview.html",
          type: "external"
        }
      ]
    },
    {
      category: "Legal Resources",
      items: [
        {
          title: "Know Your Rights",
          description: "Understanding your legal rights in PFAS exposure cases",
          url: "https://www.epa.gov/pfas/basic-information-pfas",
          type: "external"
        },
        {
          title: "Evidence Collection Guide",
          description: "How to document your PFAS exposure and health effects",
          url: "https://www.atsdr.cdc.gov/pfas/health-effects/overview.html",
          type: "external"
        },
        {
          title: "Statute of Limitations Info",
          description: "Important time limits for filing PFAS lawsuits in California",
          url: "https://www.courts.ca.gov/selfhelp-start.htm",
          type: "external"
        }
      ]
    }
  ];

  const supportGroups = [
    {
      name: "PFAS Exposure Support Network",
      description: "Online community for those affected by PFAS contamination",
      contact: "info@pfasupport.org",
      type: "Online"
    },
    {
      name: "California Environmental Health Coalition",
      description: "Advocacy group for environmental health issues including PFAS",
      location: "Los Angeles, CA",
      type: "Local"
    },
    {
      name: "Military PFAS Exposure Veterans Group",
      description: "Support specifically for veterans exposed to PFAS at military bases",
      contact: "veterans@pfashelp.org", 
      type: "Veterans"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PFAS Resources & Support</h1>
          <p className="text-xl">Comprehensive resources for PFAS exposure victims and their families</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Educational Resources</h2>
          
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        {item.type === 'external' && <ExternalLink className="w-5 h-5 mr-2 text-primary" />}
                        {item.type === 'internal' && <FileText className="w-5 h-5 mr-2 text-primary" />}
                        {item.type === 'download' && <Download className="w-5 h-5 mr-2 text-primary" />}
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      {item.url ? (
                        <Button 
                          asChild
                          variant="outline" 
                          className="w-full"
                        >
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.type === 'external' && 'Visit Resource'}
                            {item.type === 'internal' && 'View Information'}
                            {item.type === 'download' && 'Download Guide'}
                            {item.action && item.action}
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          disabled
                        >
                          Coming soon
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Groups Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Support Groups & Organizations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    {group.name}
                  </CardTitle>
                  <Badge variant="secondary">{group.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{group.description}</p>
                  
                  {group.contact && (
                    <div className="flex items-center mb-2">
                      <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{group.contact}</span>
                    </div>
                  )}
                  
                  {group.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{group.location}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Resources */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <AlertCircle className="w-5 h-5 mr-2" />
              Immediate Help & Emergency Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Medical Emergency</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If you're experiencing severe health symptoms, seek immediate medical attention.
                </p>
                <Button variant="destructive" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 911
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Legal Consultation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For urgent legal questions about your PFAS exposure case.
                </p>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-800">
                <strong>Important:</strong> Document all PFAS-related health issues and keep detailed medical records. 
                These will be crucial for both your health care and any potential legal action.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our legal team is here to help you navigate 
            PFAS exposure resources and answer your questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/pfas-case-evaluation'}
            >
              Get Free Case Evaluation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFASResources;