import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

// Interactive statistics component with animations
export const InteractiveStats: React.FC = () => {
  const [counters, setCounters] = useState({
    cases: 0,
    compensation: 0,
    families: 0,
    experience: 0
  });

  const targets = {
    cases: 850,
    compensation: 125,
    families: 2400,
    experience: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        cases: Math.min(prev.cases + Math.ceil(targets.cases / steps), targets.cases),
        compensation: Math.min(prev.compensation + Math.ceil(targets.compensation / steps), targets.compensation),
        families: Math.min(prev.families + Math.ceil(targets.families / steps), targets.families),
        experience: Math.min(prev.experience + Math.ceil(targets.experience / steps), targets.experience)
      }));
    }, interval);

    const cleanup = setTimeout(() => {
      clearInterval(timer);
    }, duration + 100);

    return () => {
      clearInterval(timer);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-0">
          <div className="text-2xl font-bold text-primary mb-1">{counters.cases}+</div>
          <div className="text-sm text-muted-foreground">Cases Won</div>
        </CardContent>
      </Card>
      
      <Card className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-0">
          <div className="text-2xl font-bold text-green-600 mb-1">${counters.compensation}M+</div>
          <div className="text-sm text-muted-foreground">Recovered</div>
        </CardContent>
      </Card>
      
      <Card className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-0">
          <div className="text-2xl font-bold text-blue-600 mb-1">{counters.families}+</div>
          <div className="text-sm text-muted-foreground">Families Helped</div>
        </CardContent>
      </Card>
      
      <Card className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-0">
          <div className="text-2xl font-bold text-purple-600 mb-1">{counters.experience}+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </CardContent>
      </Card>
    </div>
  );
};

// Interactive call-to-action component
export const InteractiveCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-gradient-to-r from-primary to-primary-foreground p-8 text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 text-center">
        <h3 className="text-3xl font-bold mb-4">Don't Wait - Time Limits Apply</h3>
        <p className="text-xl mb-6 opacity-90">
          California law imposes strict deadlines on environmental toxic exposure claims. 
          Act now to protect your family's rights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            className={`font-bold px-8 py-4 text-lg transition-all duration-300 ${
              isHovered ? 'scale-110 shadow-lg' : ''
            }`}
          >
            <Award className="w-5 h-5 mr-2" />
            Free Case Review
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5" />
            <span>Available 24/7</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Badge variant="secondary" className="text-base px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            No Fees Unless We Win
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};