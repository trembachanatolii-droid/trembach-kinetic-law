import React from 'react';

interface OptionButtonProps {
  value: string;
  label: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
}

export function OptionButton({
  value,
  label,
  description,
  isSelected,
  onClick
}: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border-2 text-left transition-all ${
        isSelected
          ? 'border-black bg-black text-white'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="font-medium mb-1">{label}</div>
      {description && (
        <div
          className={`text-sm ${
            isSelected ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          {description}
        </div>
      )}
    </button>
  );
}
