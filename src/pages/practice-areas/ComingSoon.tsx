import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Clock className="w-16 h-16 text-primary animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Detailed Information Coming Soon
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're working on providing you with comprehensive information about this practice area. 
              In the meantime, our experienced attorneys are ready to help you immediately.
            </p>
          </div>

          <Card className="p-6 sm:p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                Don't Wait - Get Help Now
              </h2>
              <p className="text-muted-foreground mb-8 text-base sm:text-lg">
                While we prepare detailed information about this practice area, our legal team 
                is available 24/7 to discuss your case and provide immediate assistance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Call Now</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Free Case Review</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                  Free Case Review
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 hover:scale-105 transition-all duration-200"
                >
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground">
              Have questions about your legal rights? Our experienced attorneys are here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;