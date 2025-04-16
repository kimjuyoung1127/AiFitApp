"use client"

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="h-2 bg-rose-100 rounded-full">
        <div 
          className="h-full bg-rose-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-center text-sm text-rose-600">
        {currentStep} / {totalSteps}
      </div>
    </div>
  );
} 