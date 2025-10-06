import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import ResourcesToolbar from '@/components/ResourcesToolbar';
import useScrollRestoration from '@/hooks/useScrollRestoration';

const Resources = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resources & Legal Tools | California Injury Law Firm</title>
        <meta 
          name="description" 
          content="Access free settlement calculators, legal guides, case results, and community resources. Get the tools and information you need for your California injury case." 
        />
        <meta name="keywords" content="legal resources, settlement calculator, injury guides, California law, case results" />
        <link rel="canonical" href="https://yourfirm.com/resources" />
      </Helmet>

      <Navigation />
      
      <ResourcesToolbar />
    </div>
  );
};

export default Resources;
