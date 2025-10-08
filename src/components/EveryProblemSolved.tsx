import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Clock, Award, Users, TrendingUp } from 'lucide-react';

const EveryProblemSolved = () => {
  const problems = [
    {
      icon: Scale,
      title: "Unfair Settlement Offers",
      description: "Insurance companies offering pennies on the dollar",
      solution: "We know their tactics and fight for 3X more compensation",
      link: "/practice-areas/personal-injury"
    },
    {
      icon: Shield,
      title: "Intimidation Tactics",
      description: "Big insurance adjusters bullying injury victims",
      solution: "Former defense attorney who knows every insurance trick",
      link: "/about"
    },
    {
      icon: Clock,
      title: "Running Out of Time",
      description: "Statute of limitations deadlines looming",
      solution: "Fast-track filing to protect your rights under California law",
      link: "/contact"
    },
    {
      icon: Award,
      title: "Complex Legal Process",
      description: "Overwhelming paperwork and confusing legal jargon",
      solution: "We handle everything - you focus on healing",
      link: "/practice-areas"
    },
    {
      icon: Users,
      title: "No One Listening",
      description: "Feeling ignored by lawyers and insurance companies",
      solution: "Boutique firm where you're a priority, not a number",
      link: "/about"
    },
    {
      icon: TrendingUp,
      title: "Uncertain Results",
      description: "Worried about winning your case",
      solution: "95% settlement success rate with proven track record",
      link: "/results"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every Problem, Solved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've seen it all. Here's how we turn your challenges into victories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  <span className="font-semibold">Problem:</span> {item.description}
                </p>

                <p className="text-foreground font-medium text-sm leading-relaxed">
                  <span className="text-primary font-semibold">Solution:</span> {item.solution}
                </p>

                <div className="mt-6 flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/free-consultation"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;
