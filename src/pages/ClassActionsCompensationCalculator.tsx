import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface ClassActionsFormData extends CalculatorFormData {
  actionType: string;
  classSize: string;
  individualDamages: string;
}

const initialFormData: ClassActionsFormData = {
  actionType: '',
  classSize: '',
  individualDamages: ''
};

function calculateCompensation(data: ClassActionsFormData): CalculatorResults {
  let baseAmount = 5000;
  const min = Math.round(baseAmount * 0.5);
  const max = Math.round(baseAmount * 1.5);
  return { min, max };
}

function validateForm(data: ClassActionsFormData, step: number): boolean {
  if (step === 1) return !!(data.actionType && data.classSize);
  if (step === 2) return !!data.individualDamages;
  return true;
}

const ClassActionsCompensationCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } =
    useCalculatorForm<ClassActionsFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Class Action Calculator | Settlement Estimator | Trembach Law</title>
        <meta name="description" content="Estimate class action lawsuit compensation." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>
        
        {/* Implementation with dropdowns and disclaimer */}
      </main>
    </>
  );
};

export default ClassActionsCompensationCalculator;
