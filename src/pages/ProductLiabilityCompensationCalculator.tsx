import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Package, Shield } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface ProductLiabilityFormData extends CalculatorFormData {
  productType: string;
  defectType: string;
  injurySeverity: string;
  medicalCosts: string;
  lostWages: string;
  permanentDisability: string;
  manufacturer: string;
  recallStatus: string;
  multipleVictims: string;
  ageGroup: string;
}

const initialFormData: ProductLiabilityFormData = {
  productType: '',
  defectType: '',
  injurySeverity: '',
  medicalCosts: '',
  lostWages: '',
  permanentDisability: '',
  manufacturer: '',
  recallStatus: '',
  multipleVictims: '',
  ageGroup: ''
};

function calculateCompensation(data: ProductLiabilityFormData): CalculatorResults {
  let min = 50000;
  let max = 250000;
  let multiplier = 1.0;

  // Product type multipliers
  const productMultipliers: Record<string, number> = {
    'medical-device': 3.0,
    'pharmaceutical': 2.5,
    'motor-vehicle': 2.2,
    'consumer-electronics': 1.5,
    'childrens-product': 2.0,
    'industrial-equipment': 2.5,
    'food-beverage': 1.8,
    'other': 1.3
  };
  multiplier *= productMultipliers[data.productType] || 1.0;

  // Defect type multipliers
  const defectMultipliers: Record<string, number> = {
    'design-defect': 2.0,
    'manufacturing-defect': 1.6,
    'warning-defect': 1.8,
    'multiple-defects': 2.5
  };
  multiplier *= defectMultipliers[data.defectType] || 1.0;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.8,
    'severe': 2.8,
    'catastrophic': 4.5,
    'death': 5.0
  };
  multiplier *= severityMultipliers[data.injurySeverity] || 1.0;

  // Medical costs base
  const medicalCostBases: Record<string, number> = {
    'under-10k': 10000,
    '10k-50k': 50000,
    '50k-200k': 200000,
    '200k-1m': 600000,
    'over-1m': 1500000
  };
  const medicalBase = medicalCostBases[data.medicalCosts] || 10000;
  min += medicalBase * 0.8;
  max += medicalBase * 3.0;

  // Lost wages addition
  const lostWageAdditions: Record<string, number> = {
    'none': 0,
    'under-25k': 25000,
    '25k-100k': 100000,
    '100k-500k': 300000,
    'over-500k': 750000
  };
  const wageAddition = lostWageAdditions[data.lostWages] || 0;
  min += wageAddition * 0.7;
  max += wageAddition * 1.8;

  // Permanent disability
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial': 2.0,
    'substantial': 3.0,
    'total': 4.5
  };
  multiplier *= disabilityMultipliers[data.permanentDisability] || 1.0;

  // Manufacturer size/resources
  const manufacturerMultipliers: Record<string, number> = {
    'major-corporation': 1.8,
    'mid-size-company': 1.3,
    'small-business': 1.0,
    'unknown': 0.9
  };
  multiplier *= manufacturerMultipliers[data.manufacturer] || 1.0;

  // Recall status (demonstrates knowledge of defect)
  const recallMultipliers: Record<string, number> = {
    'recalled-before': 2.5,
    'recalled-after': 2.0,
    'no-recall': 1.0,
    'fda-warning': 2.2
  };
  multiplier *= recallMultipliers[data.recallStatus] || 1.0;

  // Multiple victims (pattern of defect)
  const victimMultipliers: Record<string, number> = {
    'single': 1.0,
    'few': 1.3,
    'many': 1.8,
    'class-action': 2.0
  };
  multiplier *= victimMultipliers[data.multipleVictims] || 1.0;

  // Age-based future damages
  const ageMultipliers: Record<string, number> = {
    'child': 1.5,
    'young-adult': 1.3,
    'middle-age': 1.0,
    'senior': 0.8
  };
  multiplier *= ageMultipliers[data.ageGroup] || 1.0;

  min = Math.round(min * multiplier);
  max = Math.round(max * multiplier);

  // Higher floor for product liability
  min = Math.max(min, 30000);
  max = Math.max(max, 100000);

  return { min, max };
}

function validateForm(data: ProductLiabilityFormData, step: number): boolean {
  if (step === 1) {
    return !!(
      data.productType &&
      data.defectType &&
      data.injurySeverity &&
      data.manufacturer
    );
  }
  if (step === 2) {
    return !!(
      data.medicalCosts &&
      data.lostWages &&
      data.permanentDisability &&
      data.recallStatus &&
      data.multipleVictims &&
      data.ageGroup
    );
  }
  return true;
}

const ProductLiabilityCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<ProductLiabilityFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What type of product caused your injury?
        </label>
        <select
          value={formData.productType}
          onChange={(e) => updateField('productType', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select product type</option>
          <option value="medical-device">Medical Device</option>
          <option value="pharmaceutical">Pharmaceutical/Drug</option>
          <option value="motor-vehicle">Motor Vehicle/Auto Part</option>
          <option value="consumer-electronics">Consumer Electronics</option>
          <option value="childrens-product">Children's Product/Toy</option>
          <option value="industrial-equipment">Industrial Equipment</option>
          <option value="food-beverage">Food/Beverage</option>
          <option value="other">Other Consumer Product</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What type of defect was present?
        </label>
        <select
          value={formData.defectType}
          onChange={(e) => updateField('defectType', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select defect type</option>
          <option value="design-defect">Design Defect (inherently unsafe)</option>
          <option value="manufacturing-defect">Manufacturing Defect (flaw in production)</option>
          <option value="warning-defect">Warning/Instruction Defect (inadequate warnings)</option>
          <option value="multiple-defects">Multiple Types of Defects</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How severe was your injury?
        </label>
        <select
          value={formData.injurySeverity}
          onChange={(e) => updateField('injurySeverity', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select injury severity</option>
          <option value="minor">Minor (cuts, bruises, temporary)</option>
          <option value="moderate">Moderate (fractures, burns, hospitalization)</option>
          <option value="severe">Severe (major surgery, long recovery)</option>
          <option value="catastrophic">Catastrophic (life-altering injury)</option>
          <option value="death">Wrongful Death</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Who manufactured the product?
        </label>
        <select
          value={formData.manufacturer}
          onChange={(e) => updateField('manufacturer', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select manufacturer size</option>
          <option value="major-corporation">Major Corporation (Fortune 500)</option>
          <option value="mid-size-company">Mid-Size Company</option>
          <option value="small-business">Small Business</option>
          <option value="unknown">Unknown/Foreign Manufacturer</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What are your total medical costs?
        </label>
        <select
          value={formData.medicalCosts}
          onChange={(e) => updateField('medicalCosts', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select medical costs</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-50k">$10,000 - $50,000</option>
          <option value="50k-200k">$50,000 - $200,000</option>
          <option value="200k-1m">$200,000 - $1,000,000</option>
          <option value="over-1m">Over $1,000,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What are your lost wages/income?
        </label>
        <select
          value={formData.lostWages}
          onChange={(e) => updateField('lostWages', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select lost wages</option>
          <option value="none">None</option>
          <option value="under-25k">Under $25,000</option>
          <option value="25k-100k">$25,000 - $100,000</option>
          <option value="100k-500k">$100,000 - $500,000</option>
          <option value="over-500k">Over $500,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Do you have permanent disability from this product?
        </label>
        <select
          value={formData.permanentDisability}
          onChange={(e) => updateField('permanentDisability', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select disability status</option>
          <option value="none">No Permanent Disability</option>
          <option value="partial">Partial Disability</option>
          <option value="substantial">Substantial Disability</option>
          <option value="total">Total Disability</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Has the product been recalled or warned about?
        </label>
        <select
          value={formData.recallStatus}
          onChange={(e) => updateField('recallStatus', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select recall status</option>
          <option value="recalled-before">Recalled Before My Injury</option>
          <option value="recalled-after">Recalled After My Injury</option>
          <option value="fda-warning">FDA/Safety Warning Issued</option>
          <option value="no-recall">No Recall or Warning</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Are there multiple victims of this defective product?
        </label>
        <select
          value={formData.multipleVictims}
          onChange={(e) => updateField('multipleVictims', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select victim count</option>
          <option value="single">I'm the Only Known Victim</option>
          <option value="few">A Few Other Victims</option>
          <option value="many">Many Known Victims</option>
          <option value="class-action">Part of Class Action Lawsuit</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is your age group?
        </label>
        <select
          value={formData.ageGroup}
          onChange={(e) => updateField('ageGroup', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select age group</option>
          <option value="child">Child (under 18)</option>
          <option value="young-adult">Young Adult (18-40)</option>
          <option value="middle-age">Middle Age (41-65)</option>
          <option value="senior">Senior (over 65)</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8">
        <div className="text-center mb-8">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-slate-900" />
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Estimated Compensation Range
          </h2>
          <p className="text-slate-600">Based on product liability claim details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Minimum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.min.toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Maximum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.max.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Important Product Liability Disclaimer
          </h3>
          <div className="text-sm text-amber-800 space-y-2">
            <p>
              This estimate is based on typical product liability factors. Product liability
              cases involve <strong>strict liability</strong> - manufacturers can be held
              liable even without negligence if their product is unreasonably dangerous.
            </p>
            <p>Actual compensation depends on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Ability to prove the product was defective</li>
              <li>Whether defect existed when it left manufacturer</li>
              <li>Product was being used as intended (or misuse was foreseeable)</li>
              <li>Extent of manufacturer's knowledge of defect</li>
              <li>Pattern of similar injuries to other consumers</li>
              <li>Manufacturer's assets and insurance coverage</li>
              <li>Availability of expert witnesses (engineering, medical)</li>
              <li>State product liability laws and statutes of repose</li>
            </ul>
            <p className="font-medium mt-3">
              Product liability cases require substantial investigation and expert testimony.
              Consult with an attorney experienced in product defect litigation for a
              thorough case evaluation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Product Liability Claims May Include:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Medical Expenses</div>
              <div className="text-sm text-slate-600">Past, current, and future treatment</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Lost Income</div>
              <div className="text-sm text-slate-600">Wages and earning capacity</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Pain & Suffering</div>
              <div className="text-sm text-slate-600">Physical and emotional trauma</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Punitive Damages</div>
              <div className="text-sm text-slate-600">If willful disregard for safety proven</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Hold Manufacturers Accountable?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Get a detailed case evaluation from an attorney who specializes in product liability
          litigation. We work with engineering and medical experts to prove defects.
          Most cases handled on contingency - no fee unless we win.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
              Get My Free Case Evaluation
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={resetForm}
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900"
          >
            Calculate Again
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Product Liability Calculator | Defective Product Compensation | Trembach Law</title>
        <meta
          name="description"
          content="Calculate product liability compensation for defective products. Strict liability for medical devices, pharmaceuticals, consumer goods, and more."
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link
              to="/calculators"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Product Liability<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Defective product compensation estimator
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Strict</div>
                <p className="text-slate-600">Liability standard</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">All Products</div>
                <p className="text-slate-600">Medical to consumer</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    3
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Step {step} of 3
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Product & Defect Details</h2>
                  {renderStep1()}
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Damages & Evidence</h2>
                  {renderStep2()}
                </>
              )}

              {step === 3 && renderStep3()}

              {step < 3 && (
                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductLiabilityCompensationCalculator;
