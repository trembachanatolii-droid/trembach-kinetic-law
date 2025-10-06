import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Calculator, Award, BookOpen, MapPin, Shield, Briefcase, Heart, Dog, GraduationCap, Trophy } from 'lucide-react';

interface ResourceLink {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface ResourcesSectionProps {
  // Customizable content
  heading?: string;
  description?: string;
  resourceLinks?: ResourceLink[];
  communityLinks?: ResourceLink[];
  className?: string;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  heading = "Resources",
  description = "We're here to help—whenever you need it. Explore valuable resources, tools, and information designed to guide and support you. From understanding your rights to learning more about our community initiatives, everything you need is just a click away.",
  resourceLinks = [
    { title: "Settlement Calculator", url: "/calculators", icon: <Calculator className="w-8 h-8" /> },
    { title: "Results and Reviews", url: "/results", icon: <Award className="w-8 h-8" /> },
    { title: "Legal Rights Guide", url: "/legal-guide", icon: <Shield className="w-8 h-8" /> },
    { title: "Blog: Legal Tips & News", url: "/blog", icon: <BookOpen className="w-8 h-8" /> },
    { title: "Areas Served", url: "/areas-served", icon: <MapPin className="w-8 h-8" /> },
    { title: "Careers", url: "/careers", icon: <Briefcase className="w-8 h-8" /> },
  ],
  communityLinks = [
    { title: "Community Projects", url: "/community", icon: <Heart className="w-8 h-8" /> },
    { title: "Scholarships", url: "/scholarships", icon: <GraduationCap className="w-8 h-8" /> },
    { title: "Pro Bono Services", url: "/pro-bono", icon: <Users className="w-8 h-8" /> },
    { title: "Awards & Recognition", url: "/awards", icon: <Trophy className="w-8 h-8" /> },
  ],
  className = "",
}) => {
  return (
    <section className={`py-16 px-4 bg-background ${className}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{heading}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Resources Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Resources</h2>
            </div>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-lg hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Community</h2>
            </div>
            <ul className="space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-lg hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
