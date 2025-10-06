import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import ResourcesSection from '@/components/ResourcesSection';
import { Calculator, Award, BookOpen, MapPin, Shield, Briefcase, Heart, GraduationCap, Users, Trophy } from 'lucide-react';

const Resources = () => {
  // Customize these arrays for your firm
  const resourceLinks = [
    { title: "Settlement Calculator", url: "/calculators", icon: <Calculator /> },
    { title: "Results and Reviews", url: "/results", icon: <Award /> },
    { title: "Legal Rights Guide", url: "/legal-guide", icon: <Shield /> },
    { title: "Blog: Legal Tips & News", url: "/blog", icon: <BookOpen /> },
    { title: "Areas Served", url: "/about", icon: <MapPin /> },
    { title: "Careers", url: "/contact", icon: <Briefcase /> },
  ];

  const communityLinks = [
    { title: "Community Outreach", url: "/community", icon: <Heart /> },
    { title: "Scholarships", url: "/scholarships", icon: <GraduationCap /> },
    { title: "Pro Bono Services", url: "/pro-bono", icon: <Users /> },
    { title: "Awards & Recognition", url: "/results", icon: <Trophy /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resources | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Explore valuable legal resources, tools, and information. From settlement calculators to community initiatives, everything you need is here." 
        />
      </Helmet>

      <Navigation />

      <ResourcesSection 
        resourceLinks={resourceLinks}
        communityLinks={communityLinks}
      />
    </div>
  );
};

export default Resources;
