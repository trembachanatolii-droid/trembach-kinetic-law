import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ClipboardCheck, AlertTriangle, CheckCircle, Clock, Phone, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoBack from "@/components/GoBack";

gsap.registerPlugin(ScrollTrigger);

const AmusementParkCaseEvaluation = () => {
  const [formData, setFormData] = useState({
    injuryType: "",
    injurySeverity: "",
    medicalTreatment: "",
    parkName: "",
    rideName: "",
    dateOfIncident: "",
    witnesses: "",
    incidentReport: false,
    medicalRecords: false,
    photos: false,
    injuries: [] as string[],
    description: ""
  });

  const [caseStrength, setCaseStrength] = useState<string>("");

  useEffect(() => {
    // Hero animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Form animation
    gsap.fromTo(".evaluation-form", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.3,
        scrollTrigger: {
          trigger: ".evaluation-form",
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const injuryTypes = [
    { value: "head-brain", label: "Head/Brain Injury" },
    { value: "spinal", label: "Spinal Cord Injury" },
    { value: "broken-bones", label: "Broken Bones/Fractures" },
    { value: "cuts-bruises", label: "Cuts and Bruises" },
    { value: "burns", label: "Burns" },
    { value: "internal", label: "Internal Injuries" },
    { value: "emotional", label: "Emotional Trauma" },
    { value: "other", label: "Other" }
  ];

  const severityLevels = [
    { value: "minor", label: "Minor (First Aid Only)" },
    { value: "moderate", label: "Moderate (Medical Treatment)" },
    { value: "serious", label: "Serious (Hospitalization)" },
    { value: "severe", label: "Severe (Surgery Required)" },
    { value: "catastrophic", label: "Catastrophic (Permanent Disability)" }
  ];

  const treatmentTypes = [
    { value: "none", label: "No Treatment" },
    { value: "first-aid", label: "First Aid Only" },
    { value: "er-visit", label: "Emergency Room Visit" },
    { value: "hospitalization", label: "Hospitalization" },
    { value: "surgery", label: "Surgery Required" },
    { value: "ongoing", label: "Ongoing Treatment" }
  ];

  const handleInjuryChange = (injury: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        injuries: [...prev.injuries, injury]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        injuries: prev.injuries.filter(i => i !== injury)
      }));
    }
  };

  const evaluateCase = () => {
    let score = 0;
    let factors = [];

    // Injury severity scoring
    if (formData.injurySeverity === "catastrophic") {
      score += 30;
      factors.push("Catastrophic injuries typically result in higher compensation");
    } else if (formData.injurySeverity === "severe") {
      score += 25;
      factors.push("Severe injuries requiring surgery strengthen your case");
    } else if (formData.injurySeverity === "serious") {
      score += 20;
      factors.push("Serious injuries requiring hospitalization are significant");
    } else if (formData.injurySeverity === "moderate") {
      score += 10;
      factors.push("Moderate injuries with medical treatment have merit");
    }

    // Medical treatment scoring
    if (formData.medicalTreatment === "surgery" || formData.medicalTreatment === "ongoing") {
      score += 15;
      factors.push("Extensive medical treatment strengthens damages claims");
    } else if (formData.medicalTreatment === "hospitalization") {
      score += 10;
      factors.push("Hospitalization demonstrates injury severity");
    }

    // Documentation scoring
    if (formData.incidentReport) {
      score += 10;
      factors.push("Official incident report provides crucial documentation");
    }
    if (formData.medicalRecords) {
      score += 10;
      factors.push("Medical records establish injury causation");
    }
    if (formData.photos) {
      score += 8;
      factors.push("Photos provide important visual evidence");
    }

    // Witnesses scoring
    if (formData.witnesses === "yes") {
      score += 12;
      factors.push("Witness testimony can be valuable evidence");
    }

    // High-risk injury types
    const highRiskInjuries = ["head-brain", "spinal", "internal"];
    if (formData.injuries.some(injury => highRiskInjuries.includes(injury))) {
      score += 15;
      factors.push("High-risk injuries typically result in stronger cases");
    }

    // Determine case strength
    if (score >= 70) {
      setCaseStrength("Strong Case - High Success Probability");
    } else if (score >= 50) {
      setCaseStrength("Moderate Case - Good Potential");
    } else if (score >= 30) {
      setCaseStrength("Developing Case - Needs More Evidence");
    } else {
      setCaseStrength("Weak Case - Additional Documentation Required");
    }

    return { score, factors };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    evaluateCase();
  };

  const getCaseStrengthColor = (strength: string) => {
    if (strength.includes("Strong")) return "text-green-600";
    if (strength.includes("Moderate")) return "text-blue-600";
    if (strength.includes("Developing")) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <>
      <Helmet>
        <title>Free Amusement Park Injury Case Evaluation | Theme Park Accident Legal Assessment</title>
        <meta name="description" content="Get a free professional evaluation of your amusement park injury case. Our experienced attorneys assess your theme park accident claim and determine your legal options." />
        <meta name="keywords" content="amusement park injury case evaluation, theme park accident lawyer, free legal consultation, case assessment" />
        <link rel="canonical" href="/practice-areas/amusement-parks/case-evaluation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <GoBack />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <ClipboardCheck className="h-4 w-4" />
              <span className="text-sm font-medium">Free Case Evaluation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Amusement Park Injury Case Evaluation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a professional assessment of your amusement park injury case. Our experienced attorneys will evaluate your claim and help you understand your legal options.
            </p>
          </div>
        </section>

        {/* Evaluation Form */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="evaluation-form shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Case Evaluation Form</CardTitle>
                <CardDescription>
                  Please provide detailed information about your amusement park injury to receive an accurate assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Incident Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Incident Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parkName">Amusement Park Name *</Label>
                        <Input 
                          id="parkName"
                          value={formData.parkName}
                          onChange={(e) => setFormData(prev => ({ ...prev, parkName: e.target.value }))}
                          placeholder="e.g., Disney World, Six Flags"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="rideName">Ride/Attraction Name</Label>
                        <Input 
                          id="rideName"
                          value={formData.rideName}
                          onChange={(e) => setFormData(prev => ({ ...prev, rideName: e.target.value }))}
                          placeholder="Name of ride or attraction"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dateOfIncident">Date of Incident</Label>
                      <Input 
                        id="dateOfIncident"
                        type="date"
                        value={formData.dateOfIncident}
                        onChange={(e) => setFormData(prev => ({ ...prev, dateOfIncident: e.target.value }))}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Injury Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Injury Information
                    </h3>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Type of Injury *</Label>
                      <RadioGroup 
                        value={formData.injuryType} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}
                        className="grid md:grid-cols-2 gap-3"
                      >
                        {injuryTypes.map((type) => (
                          <div key={type.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={type.value} id={type.value} />
                            <Label htmlFor={type.value} className="text-sm">{type.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Injury Severity *</Label>
                      <RadioGroup 
                        value={formData.injurySeverity} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}
                        className="space-y-2"
                      >
                        {severityLevels.map((level) => (
                          <div key={level.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={level.value} id={level.value} />
                            <Label htmlFor={level.value} className="text-sm">{level.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Medical Treatment Received *</Label>
                      <RadioGroup 
                        value={formData.medicalTreatment} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, medicalTreatment: value }))}
                        className="space-y-2"
                      >
                        {treatmentTypes.map((treatment) => (
                          <div key={treatment.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={treatment.value} id={treatment.value} />
                            <Label htmlFor={treatment.value} className="text-sm">{treatment.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <Separator />

                  {/* Evidence and Documentation */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Available Evidence
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="incidentReport"
                          checked={formData.incidentReport}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, incidentReport: !!checked }))}
                        />
                        <Label htmlFor="incidentReport">I have an official incident report from the park</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="medicalRecords"
                          checked={formData.medicalRecords}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, medicalRecords: !!checked }))}
                        />
                        <Label htmlFor="medicalRecords">I have medical records documenting my injuries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="photos"
                          checked={formData.photos}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, photos: !!checked }))}
                        />
                        <Label htmlFor="photos">I have photos of the scene, injuries, or equipment</Label>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Were there witnesses to your incident?</Label>
                      <RadioGroup 
                        value={formData.witnesses} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, witnesses: value }))}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="witnesses-yes" />
                          <Label htmlFor="witnesses-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="witnesses-no" />
                          <Label htmlFor="witnesses-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="witnesses-unsure" />
                          <Label htmlFor="witnesses-unsure">Unsure</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Additional Details</h3>
                    <div>
                      <Label htmlFor="description">Describe what happened in detail</Label>
                      <Textarea 
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Please provide a detailed description of how the incident occurred, what went wrong, and any other relevant information..."
                        className="min-h-32"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      Evaluate My Case
                    </Button>
                  </div>
                </form>

                {/* Case Evaluation Results */}
                {caseStrength && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Case Evaluation Results
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className={`text-lg px-4 py-2 ${getCaseStrengthColor(caseStrength)}`}>
                          {caseStrength}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        Based on the information provided, this is our preliminary assessment. A detailed review by our legal team would provide more specific guidance.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Case?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This evaluation provides a preliminary assessment. Contact our experienced amusement park injury attorneys for a comprehensive review of your case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Available 24/7 • Free consultation • No fees unless we win
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkCaseEvaluation;