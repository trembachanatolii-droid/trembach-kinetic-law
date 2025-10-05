import React from 'react';

interface CalculatorProgressProps {
  currentStep: number;
  totalSteps?: number;
}

export function CalculatorProgress({ currentStep, totalSteps = 3 }: CalculatorProgressProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-3">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
            <div
              key={stepNum}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                stepNum === currentStep
                  ? 'bg-black'
                  : stepNum < currentStep
                  ? 'bg-slate-400'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-slate-500">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  );
}
