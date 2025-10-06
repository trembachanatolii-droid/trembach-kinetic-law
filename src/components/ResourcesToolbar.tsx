import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourcesToolbarProps {
  position?: 'top' | 'bottom';
  showCalculators?: boolean;
  showBlog?: boolean;
  showResults?: boolean;
  showContact?: boolean;
  phoneNumber?: string;
  className?: string;
}

/**
 * ResourcesToolbar - Quick access bar for resources
 * Can be placed at top or bottom of calculator pages
 */
const ResourcesToolbar: React.FC<ResourcesToolbarProps> = ({
  position = 'bottom',
  showCalculators = true,
  showBlog = true,
  showResults = true,
  showContact = true,
  phoneNumber = '(855) 374-1628',
  className = '',
}) => {
  return (
    <div className={`bg-slate-50 dark:bg-slate-900 border-y border-border py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Quick Links:
          </span>

          {showCalculators && (
            <Link to="/calculators">
              <Button variant="ghost" size="sm" className="gap-2">
                <Calculator className="w-4 h-4" />
                More Calculators
              </Button>
            </Link>
          )}

          {showBlog && (
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Legal Blog
              </Button>
            </Link>
          )}

          {showResults && (
            <Link to="/results">
              <Button variant="ghost" size="sm" className="gap-2">
                <Award className="w-4 h-4" />
                Case Results
              </Button>
            </Link>
          )}

          {showContact && (
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}>
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesToolbar;
