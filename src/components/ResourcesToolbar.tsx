import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  BookOpen, 
  MapPin, 
  Shield, 
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  Award
} from 'lucide-react';

interface ResourcesToolbarProps {
  className?: string;
  showPracticeAreas?: boolean;
}

const ResourcesToolbar: React.FC<ResourcesToolbarProps> = ({ 
  className = '',
  showPracticeAreas = true 
}) => {
  const resourceLinks = [
    { title: 'Settlement Calculator', href: '/calculators', icon: Calculator },
    { title: 'Case Results & Reviews', href: '/results', icon: Award },
    { title: 'California Benefits Guide', href: '/benefits-guide', icon: Shield },
    { title: 'Blog: Legal Tips & News', href: '/blog', icon: BookOpen },
    { title: 'Areas Served', href: '/areas-served', icon: MapPin },
    { title: 'Free Consultation', href: '/free-consultation', icon: FileText },
    { title: 'Careers', href: '/careers', icon: Briefcase },
  ];

  const communityLinks = [
    { title: 'Community Programs', href: '/community', icon: Users },
    { title: 'Scholarship Fund', href: '/scholarships', icon: GraduationCap },
    { title: 'Client Support', href: '/support', icon: Heart },
    { title: 'Legal Education', href: '/education', icon: BookOpen },
  ];

  const practiceAreas = [
    {
      title: 'Uber & Lyft Accidents',
      description: 'Rideshare accidents come with hidden challenges from terms of service that limit your rights to compensation.',
      href: '/practice-areas/uber-lyft-accidents',
      icon: '🚗'
    },
    {
      title: 'Pedestrian Accidents',
      description: 'Pedestrian accident cases are complex. Juror bias, disputed liability, and lack of insurance create challenges.',
      href: '/practice-areas/pedestrian-accidents',
      icon: '🚶'
    },
    {
      title: 'Dog Bite Injuries',
      description: 'Dog bite injuries go beyond the physical—survivors often face lasting trauma requiring comprehensive legal support.',
      href: '/practice-areas/dog-bite',
      icon: '🐕'
    },
  ];

  return (
    <div className={`bg-background ${className}`}>
      {/* Main Resources Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-6">Resources</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          We're here to help—whenever you need it. Explore valuable resources, tools, and information designed to guide and support you. From understanding your rights to learning more about our community initiatives, everything you need is just a click away.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Resources Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Resources</h3>
            </div>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors group"
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Community</h3>
            </div>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors group"
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      {showPracticeAreas && (
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <Link
                  key={index}
                  to={area.href}
                  className="group"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{area.icon}</div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesToolbar;
