import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, FileText, Camera, Users } from "lucide-react";

const CriticalStepsSection = () => {
  const immediateSteps = [
    {
      icon: Users,
      title: "Seek medical attention immediately",
      description: "Your health is #1 priority"
    },
    {
      icon: Phone,
      title: "Call 911",
      description: "Get a police report"
    },
    {
      icon: Camera,
      title: "Document everything",
      description: "Photos, witnesses, scene details"
    },
    {
      icon: FileText,
      title: "Contact us before insurance",
      description: "Protect your rights"
    }
  ];

  const neverDo = [
    {
      title: "Don't admit fault",
      description: "Even if you think you're partially responsible"
    },
    {
      title: "Don't give recorded statements",
      description: "To insurance companies without representation"
    },
    {
      title: "Don't accept quick settlements",
      description: "They're usually far below fair value"
    },
    {
      title: "Don't delay treatment",
      description: "Gaps in care can hurt your case"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What to Do After a California Accident
          </h2>
          <p className="text-xl text-gray-300 mb-2">Critical Steps</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Immediate Steps */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold text-white">Immediate Steps</h3>
              </div>
              <p className="text-gray-400">Take these actions right away to protect yourself and your case</p>
            </div>

            <div className="space-y-4">
              {immediateSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-green-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Never Do This */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Never Do This</h3>
              </div>
              <p className="text-gray-400">Avoid these common mistakes that can hurt your case</p>
            </div>

            <div className="space-y-4">
              {neverDo.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                          <XCircle className="h-6 w-6 text-red-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalStepsSection;