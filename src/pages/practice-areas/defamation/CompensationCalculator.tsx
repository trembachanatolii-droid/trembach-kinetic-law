import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, TrendingUp, AlertCircle, DollarSign, Scale, Users } from 'lucide-react';
import heroBackground from '@/assets/defamation-compensation-calculator.jpg';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';

interface CalculatorData {
  defamationType: string;
  publicFigure: string;
  reputationScope: string;
  financialImpact: string;
  timeframe: string;
  platform: string;
  evidenceStrength: number[];
  priorReputation: number[];
}

const DefamationCompensationCalculator: React.FC = () => {
  useScrollRestoration();
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    defamationType: '',
    publicFigure: '',
    reputationScope: '',
    financialImpact: '',
    timeframe: '',
    platform: '',
    evidenceStrength: [7],
    priorReputation: [8]
  });
  const [results, setResults] = useState<{
    estimatedRange: { min: number; max: number };
    factors: string[];
    confidence: string;
  } | null>(null);
  const [showGoBack, setShowGoBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoBack = () => {
    const savedPosition = sessionStorage.getItem(`scrollPosition_/practice-areas/defamation`);
    sessionStorage.setItem('navigatingBack', 'true');
    window.history.back();
  };

  const calculateCompensation = () => {
    let baseAmount = 10000;
    let multiplier = 1;
    const factors: string[] = [];

    // Defamation type impact
    switch (calculatorData.defamationType) {
      case 'business':
        baseAmount = 50000;
        multiplier *= 2.5;
        factors.push('Business defamation typically results in higher damages');
        break;
      case 'professional':
        baseAmount = 30000;
        multiplier *= 2;
        factors.push('Professional reputation damage affects earning capacity');
        break;
      case 'online-libel':
        baseAmount = 20000;
        multiplier *= 1.8;
        factors.push('Online defamation has lasting digital footprint');
        break;
      case 'social-media':
        baseAmount = 15000;
        multiplier *= 1.5;
        factors.push('Social media defamation can spread rapidly');
        break;
      case 'review-sites':
        baseAmount = 25000;
        multiplier *= 1.7;
        factors.push('Fake reviews directly impact business revenue');
        break;
      case 'slander':
        baseAmount = 12000;
        multiplier *= 1.3;
        factors.push('Spoken defamation may have limited audience');
        break;
    }

    // Public figure status
    if (calculatorData.publicFigure === 'private') {
      multiplier *= 1.5;
      factors.push('Private figures have lower burden of proof');
    } else if (calculatorData.publicFigure === 'limited-public') {
      multiplier *= 1.2;
      factors.push('Limited public figures have intermediate protections');
    } else if (calculatorData.publicFigure === 'public') {
      multiplier *= 0.7;
      factors.push('Public figures must prove actual malice');
    }

    // Reputation scope
    switch (calculatorData.reputationScope) {
      case 'local':
        multiplier *= 1;
        factors.push('Local reputation damage affects immediate community');
        break;
      case 'regional':
        multiplier *= 1.3;
        factors.push('Regional impact expands potential damages');
        break;
      case 'national':
        multiplier *= 2;
        factors.push('National exposure significantly increases damages');
        break;
      case 'international':
        multiplier *= 2.5;
        factors.push('International reach maximizes damage potential');
        break;
    }

    // Financial impact
    switch (calculatorData.financialImpact) {
      case 'none':
        multiplier *= 0.6;
        factors.push('No proven financial losses limit damage awards');
        break;
      case 'minor':
        multiplier *= 0.8;
        factors.push('Minor financial impact reduces compensation');
        break;
      case 'moderate':
        multiplier *= 1.2;
        factors.push('Moderate financial losses support damage claims');
        break;
      case 'significant':
        multiplier *= 1.8;
        factors.push('Significant financial losses increase compensation');
        break;
      case 'severe':
        multiplier *= 2.5;
        factors.push('Severe financial impact maximizes damage awards');
        break;
    }

    // Timeframe considerations
    switch (calculatorData.timeframe) {
      case 'within-30-days':
        multiplier *= 1.2;
        factors.push('Recent defamation within statute of limitations');
        break;
      case '1-3-months':
        multiplier *= 1.1;
        factors.push('Fresh evidence supports strong case');
        break;
      case '3-6-months':
        multiplier *= 1;
        factors.push('Moderate timeline affects evidence quality');
        break;
      case '6-12-months':
        multiplier *= 0.9;
        factors.push('Older defamation may have reduced impact');
        break;
      case 'over-1-year':
        multiplier *= 0.3;
        factors.push('May exceed statute of limitations');
        break;
    }

    // Platform impact
    switch (calculatorData.platform) {
      case 'major-social':
        multiplier *= 1.8;
        factors.push('Major social media platforms amplify damage');
        break;
      case 'review-sites':
        multiplier *= 1.6;
        factors.push('Review sites directly impact business reputation');
        break;
      case 'news-media':
        multiplier *= 2.2;
        factors.push('News media publication increases credibility and reach');
        break;
      case 'professional':
        multiplier *= 1.4;
        factors.push('Professional platforms affect career prospects');
        break;
      case 'personal':
        multiplier *= 1;
        factors.push('Personal communications have limited audience');
        break;
    }

    // Evidence strength factor
    const evidenceMultiplier = calculatorData.evidenceStrength[0] / 5;
    multiplier *= evidenceMultiplier;
    if (calculatorData.evidenceStrength[0] >= 8) {
      factors.push('Strong evidence significantly improves case value');
    } else if (calculatorData.evidenceStrength[0] >= 6) {
      factors.push('Good evidence supports damage claims');
    } else {
      factors.push('Weak evidence may limit compensation');
    }

    // Prior reputation factor
    const reputationMultiplier = calculatorData.priorReputation[0] / 5;
    multiplier *= reputationMultiplier;
    if (calculatorData.priorReputation[0] >= 8) {
      factors.push('Excellent prior reputation increases damages');
    } else if (calculatorData.priorReputation[0] >= 6) {
      factors.push('Good reputation supports damage claims');
    } else {
      factors.push('Poor prior reputation may limit damages');
    }

    const finalAmount = baseAmount * multiplier;
    const minAmount = Math.round(finalAmount * 0.6);
    const maxAmount = Math.round(finalAmount * 1.4);

    // Determine confidence level
    let confidence = 'Low';
    if (calculatorData.evidenceStrength[0] >= 7 && calculatorData.priorReputation[0] >= 7) {
      confidence = 'High';
    } else if (calculatorData.evidenceStrength[0] >= 5 && calculatorData.priorReputation[0] >= 5) {
      confidence = 'Medium';
    }

    setResults({
      estimatedRange: { min: minAmount, max: maxAmount },
      factors: factors.slice(0, 8), // Limit to top 8 factors
      confidence
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isFormComplete = () => {
    return calculatorData.defamationType && 
           calculatorData.publicFigure && 
           calculatorData.reputationScope && 
           calculatorData.financialImpact && 
           calculatorData.timeframe && 
           calculatorData.platform;
  };

  return (
    <>
      <SEO 
        title="Defamation Compensation Calculator | California Libel Damages | Trembach Law Firm"
        description="Calculate potential compensation for your California defamation case. Free calculator estimates damages for libel, slander, and online defamation claims based on case factors."
        keywords="defamation compensation calculator, California libel damages, online defamation compensation, business defamation damages calculator"
      />
      
      <div className="min-h-screen bg-background">
        {/* Go Back Button */}
        <div 
          className={`fixed top-24 left-6 z-50 transition-all duration-500 ${
            showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-white">Go Back</span>
          </Button>
        </div>

        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Defamation Compensation Calculator
            </h1>
            <p className="text-xl text-white">
              Estimate potential damages for your California defamation case
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Calculator Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  Case Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div>
                  <Label htmlFor="defamationType">Type of Defamation</Label>
                  <Select value={calculatorData.defamationType} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, defamationType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select defamation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business Defamation</SelectItem>
                      <SelectItem value="professional">Professional Libel</SelectItem>
                      <SelectItem value="online-libel">Online Libel</SelectItem>
                      <SelectItem value="social-media">Social Media Defamation</SelectItem>
                      <SelectItem value="review-sites">Fake Reviews</SelectItem>
                      <SelectItem value="slander">Spoken Slander</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="publicFigure">Public Figure Status</Label>
                  <Select value={calculatorData.publicFigure} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, publicFigure: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private Individual</SelectItem>
                      <SelectItem value="limited-public">Limited Public Figure</SelectItem>
                      <SelectItem value="public">Public Figure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reputationScope">Reputation Impact Scope</Label>
                  <Select value={calculatorData.reputationScope} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, reputationScope: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scope" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local Community</SelectItem>
                      <SelectItem value="regional">Regional/State</SelectItem>
                      <SelectItem value="national">National</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="financialImpact">Financial Impact</Label>
                  <Select value={calculatorData.financialImpact} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, financialImpact: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select financial impact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Proven Losses</SelectItem>
                      <SelectItem value="minor">Minor Losses (&lt;$10k)</SelectItem>
                      <SelectItem value="moderate">Moderate Losses ($10k-$50k)</SelectItem>
                      <SelectItem value="significant">Significant Losses ($50k-$200k)</SelectItem>
                      <SelectItem value="severe">Severe Losses (&gt;$200k)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeframe">When Did Defamation Occur?</Label>
                  <Select value={calculatorData.timeframe} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, timeframe: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="within-30-days">Within 30 Days</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months Ago</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months Ago</SelectItem>
                      <SelectItem value="6-12-months">6-12 Months Ago</SelectItem>
                      <SelectItem value="over-1-year">Over 1 Year Ago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="platform">Publication Platform</Label>
                  <Select value={calculatorData.platform} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, platform: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="major-social">Major Social Media</SelectItem>
                      <SelectItem value="review-sites">Review Sites</SelectItem>
                      <SelectItem value="news-media">News Media</SelectItem>
                      <SelectItem value="professional">Professional Networks</SelectItem>
                      <SelectItem value="personal">Personal Communication</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="evidenceStrength">Evidence Strength: {calculatorData.evidenceStrength[0]}/10</Label>
                  <Slider
                    value={calculatorData.evidenceStrength}
                    onValueChange={(value) => setCalculatorData(prev => ({ ...prev, evidenceStrength: value }))}
                    max={10}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Rate the strength of your evidence (screenshots, witnesses, etc.)
                  </p>
                </div>

                <div>
                  <Label htmlFor="priorReputation">Prior Reputation: {calculatorData.priorReputation[0]}/10</Label>
                  <Slider
                    value={calculatorData.priorReputation}
                    onValueChange={(value) => setCalculatorData(prev => ({ ...prev, priorReputation: value }))}
                    max={10}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Rate your reputation before the defamatory statements
                  </p>
                </div>

                <Button 
                  onClick={calculateCompensation}
                  disabled={!isFormComplete()}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Calculate Compensation
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        Estimated Compensation Range
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {formatCurrency(results.estimatedRange.min)} - {formatCurrency(results.estimatedRange.max)}
                        </div>
                        <Badge variant={results.confidence === 'High' ? 'default' : results.confidence === 'Medium' ? 'secondary' : 'outline'}>
                          {results.confidence} Confidence
                        </Badge>
                        
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                          <div>
                            <TrendingUp className="w-8 h-8 mx-auto text-primary mb-2" />
                            <p className="font-semibold">Minimum</p>
                            <p className="text-muted-foreground">{formatCurrency(results.estimatedRange.min)}</p>
                          </div>
                          <div>
                            <Scale className="w-8 h-8 mx-auto text-primary mb-2" />
                            <p className="font-semibold">Average</p>
                            <p className="text-muted-foreground">
                              {formatCurrency((results.estimatedRange.min + results.estimatedRange.max) / 2)}
                            </p>
                          </div>
                          <div>
                            <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                            <p className="font-semibold">Maximum</p>
                            <p className="text-muted-foreground">{formatCurrency(results.estimatedRange.max)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Factors Affecting Your Case</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {results.factors.map((factor, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 text-blue-800">Next Steps</h3>
                      <div className="space-y-3">
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700"
                          onClick={() => window.location.href = '/practice-areas/defamation/case-evaluation'}
                        >
                          Get Free Case Evaluation
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                          onClick={() => window.location.href = 'tel:8181234567'}
                        >
                          Call (818) 123-4567
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Calculator className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Complete the Form</h3>
                    <p className="text-muted-foreground">
                      Fill out all the information on the left to get your compensation estimate
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>
                      This calculator provides estimates based on general factors and should not be considered legal advice. 
                      Actual case values depend on numerous specific factors including jurisdiction, case complexity, defendant's ability to pay, 
                      and many other variables not captured in this calculator.
                    </p>
                    <p>
                      Trembach Law Firm is a newly established practice with no prior case results or testimonials. 
                      Past results do not guarantee future outcomes. Every defamation case is unique and depends on specific facts and circumstances.
                    </p>
                    <p>
                      California has a one-year statute of limitations for defamation claims. Consultation with an experienced attorney is recommended 
                      for accurate case evaluation. This calculator does not create an attorney-client relationship.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DefamationCompensationCalculator;