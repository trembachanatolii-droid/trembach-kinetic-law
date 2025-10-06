import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

/**
 * Lightweight CTA component for blog pages
 * Directs readers to the main Resources page
 * 
 * Usage:
 * <ResourcesCTA />
 */
const ResourcesCTA: React.FC = () => {
  return (
    <div className="bg-muted/30 rounded-lg p-8 my-12 border border-border">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <BookOpen className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Need More Information?
        </h3>
        <p className="text-muted-foreground mb-6 text-lg">
          Explore our complete resources library including settlement calculators, 
          legal guides, case results, and community programs designed to help you.
        </p>
        <Link 
          to="/resources" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
        >
          View All Resources 
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ResourcesCTA;
