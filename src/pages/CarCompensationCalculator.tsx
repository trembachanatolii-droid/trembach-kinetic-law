import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/practice-areas/car-accident-compensation.jpg';
import SEO from '@/components/SEO';

const CarCompensationCalculator = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalCost: '',
    lostWages: '',
    painLevel: '',
    accidentType: '',
    age: '',
    treatment: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Car Accident Compensation Calculator | California Car Accident Settlements"
        description="Estimate your California car accident compensation with our free calculator. Get personalized assessment of your potential settlement value."
        canonical="/car-compensation-calculator"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Car Accident Compensation Calculator
          </h1>
          <p className="text-xl mb-6">
            Get a personalized estimate of your potential California car accident settlement
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Calculator Form */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold">Calculate Your Potential Compensation</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="injuryType">Type of Injury</Label>
                  <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your injury type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whiplash">Whiplash</SelectItem>
                      <SelectItem value="broken-bones">Broken Bones</SelectItem>
                      <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                      <SelectItem value="spinal-injury">Spinal Injury</SelectItem>
                      <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                      <SelectItem value="soft-tissue">Soft Tissue Damage</SelectItem>
                      <SelectItem value="multiple">Multiple Injuries</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="medicalCost">Medical Expenses (to date)</Label>
                  <Input
                    id="medicalCost"
                    type="number"
                    placeholder="$0"
                    value={formData.medicalCost}
                    onChange={(e) => handleInputChange('medicalCost', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="lostWages">Lost Wages</Label>
                  <Input
                    id="lostWages"
                    type="number"
                    placeholder="$0"
                    value={formData.lostWages}
                    onChange={(e) => handleInputChange('lostWages', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="painLevel">Pain Level (1-10)</Label>
                  <Select onValueChange={(value) => handleInputChange('painLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rate your pain level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 (Mild)</SelectItem>
                      <SelectItem value="4-6">4-6 (Moderate)</SelectItem>
                      <SelectItem value="7-8">7-8 (Severe)</SelectItem>
                      <SelectItem value="9-10">9-10 (Extreme)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="accidentType">Type of Accident</Label>
                  <Select onValueChange={(value) => handleInputChange('accidentType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rear-end">Rear-End Collision</SelectItem>
                      <SelectItem value="head-on">Head-On Collision</SelectItem>
                      <SelectItem value="side-impact">Side Impact</SelectItem>
                      <SelectItem value="rollover">Rollover</SelectItem>
                      <SelectItem value="hit-run">Hit and Run</SelectItem>
                      <SelectItem value="multi-vehicle">Multi-Vehicle</SelectItem>
                      <SelectItem value="pedestrian">Pedestrian Accident</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="age">Your Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="treatment">Current Treatment</Label>
                  <Select onValueChange={(value) => handleInputChange('treatment', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency-only">Emergency Room Only</SelectItem>
                      <SelectItem value="ongoing-care">Ongoing Medical Care</SelectItem>
                      <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                      <SelectItem value="surgery">Surgery Required</SelectItem>
                      <SelectItem value="complete">Treatment Complete</SelectItem>
                      <SelectItem value="long-term">Long-term Care Needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Accident Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe how the accident happened and your injuries..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate My Compensation
                </Button>
              </form>
            </Card>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">What Affects Your Compensation?</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li>• <strong>Medical Expenses:</strong> Current and future treatment costs</li>
                  <li>• <strong>Lost Income:</strong> Wages lost due to injury and recovery</li>
                  <li>• <strong>Pain and Suffering:</strong> Physical and emotional impact</li>
                  <li>• <strong>Property Damage:</strong> Vehicle repair or replacement costs</li>
                  <li>• <strong>Injury Severity:</strong> Extent and permanency of injuries</li>
                  <li>• <strong>Age and Occupation:</strong> Impact on earning capacity</li>
                  <li>• <strong>Fault Percentage:</strong> California's comparative negligence rules</li>
                  <li>• <strong>Insurance Limits:</strong> Available coverage amounts</li>
                </ul>
              </Card>

              <Card className="p-6 bg-blue-50 border border-blue-200">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-blue-800">Important Notice</h3>
                </div>
                <p className="text-blue-700 text-sm mb-4">
                  This calculator provides general estimates only. Actual compensation depends on many specific factors 
                  unique to your case, including evidence quality, insurance coverage, and negotiation outcomes.
                </p>
                <p className="text-blue-700 text-sm">
                  For an accurate assessment of your case value, schedule a free consultation with our experienced 
                  car accident attorneys who can evaluate your specific circumstances.
                </p>
              </Card>

              <Card className="p-6 bg-red-50 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">Ready for Professional Help?</h3>
                <p className="text-red-700 text-sm mb-4">
                  Don't settle for less than you deserve. Our experienced car accident attorneys have recovered 
                  millions for California accident victims.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <Link to="/car-case-evaluation">Get Free Case Evaluation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <a href="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCompensationCalculator;