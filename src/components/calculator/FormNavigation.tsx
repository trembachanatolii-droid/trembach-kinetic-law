import React from 'react';
import { Button } from '@/components/ui/button';

interface FormNavigationProps {
  currentStep: number;
  totalSteps?: number;
  isValid: boolean;
  onBack: () => void;
  onNext: () => void;
  nextButtonText?: string;
}

export function FormNavigation({
  currentStep,
  totalSteps = 3,
  isValid,
  onBack,
  onNext,
  nextButtonText
}: FormNavigationProps) {
  if (currentStep >= totalSteps) {
    return null;
  }

  const getButtonText = () => {
    if (nextButtonText) return nextButtonText;
    return currentStep === totalSteps - 1 ? 'Calculate' : 'Continue';
  };

  return (
    <div className="flex gap-4 pt-8">
      {currentStep > 1 && (
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          className="flex-1 h-14"
        >
          Back
        </Button>
      )}
      <Button
        size="lg"
        onClick={onNext}
        disabled={!isValid}
        className="flex-1 h-14"
      >
        {getButtonText()}
      </Button>
    </div>
  );
}
