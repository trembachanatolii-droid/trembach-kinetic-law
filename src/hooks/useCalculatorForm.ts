import { useState } from 'react';

export interface CalculatorFormData {
  [key: string]: string;
}

export interface CalculatorResults {
  min: number;
  max: number;
  [key: string]: number;
}

export function useCalculatorForm<T extends CalculatorFormData>(
  initialData: T,
  calculateFn: (data: T) => CalculatorResults,
  validationFn: (data: T, step: number) => boolean
) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<T>(initialData);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const updateField = (field: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateMultipleFields = (updates: Partial<T>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (!validationFn(formData, step)) {
      return;
    }

    if (step === 2) {
      const calculatedResults = calculateFn(formData);
      setResults(calculatedResults);
      setStep(3);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const resetForm = () => {
    setStep(1);
    setFormData(initialData);
    setResults(null);
  };

  const isStepValid = () => validationFn(formData, step);

  return {
    step,
    formData,
    results,
    updateField,
    updateMultipleFields,
    handleNext,
    handleBack,
    resetForm,
    isStepValid,
    setStep
  };
}
