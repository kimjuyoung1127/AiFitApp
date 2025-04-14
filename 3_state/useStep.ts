// 3_state/useStep.ts
import { useState } from 'react';

export function useStep(initialStep = 1) {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    console.log("nextStep called, current step:", step);
    setStep((prev) => prev + 1);
  };
  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return { step, nextStep, prevStep };
}