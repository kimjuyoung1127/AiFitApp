'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NameStep from './01_NameStep';
import AgeWeightStep from './02_AgeWeightStep';
import BreedStep from './03_BreedStep';
import SexStep from './04_SexStep';
import HealthStep from './05_HealthStep';
import PerformanceStep from './06_PerformanceStep';
import PreferenceStep from './07_PreferenceStep';
import EnvironmentAndTrainingStep from './08_EnvironmentAndTrainingStep';
import ConfirmationStep from './09_ConfirmStep';
import ProgressBar from './ProgressBar';
import ConfirmStep from './09_ConfirmStep';

export default function FormScreen() {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  console.log("Current step:", step);

  useEffect(() => {
    const handleNextStep = () => {
      console.log("nextStep 이벤트 감지됨");
      setCompletedSteps((prev) => Array.from(new Set([...prev, step])));
      setStep((prevStep) => (prevStep < 9 ? prevStep + 1 : 1));
    };

    const handlePrevStep = () => {
      console.log("prevStep 이벤트 감지됨");
      setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
    };

    window.addEventListener('nextStep', handleNextStep);
    window.addEventListener('prevStep', handlePrevStep);
    
    return () => {
      window.removeEventListener('nextStep', handleNextStep);
      window.removeEventListener('prevStep', handlePrevStep);
    };
  }, [step]);

  const cardVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    exit: { y: 50, opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#FFF6EE] py-10">
      <ProgressBar currentStep={step} totalSteps={9} />
      <div className="relative w-full max-w-md">
        {completedSteps.map((completedStep, index) => (
          <motion.div
            key={`completed-${completedStep}`}
            className="absolute top-0 left-0 right-0 mx-auto w-full max-w-md p-8 bg-white rounded-xl shadow-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: -10 * (completedSteps.length - index),
              opacity: 0.7 - (0.1 * (completedSteps.length - index)),
              scale: 0.97 - (0.01 * (completedSteps.length - index))
            }}
            style={{ 
              zIndex: index,
              filter: `blur(${(completedSteps.length - index) * 1}px)`
            }}
          >
            {completedStep === 1 && <div className="opacity-50">이전 단계: 이름 입력</div>}
            {completedStep === 2 && <div className="opacity-50">이전 단계: 나이/체중 입력</div>}
          </motion.div>
        ))}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="name-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <NameStep />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="age-weight-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <AgeWeightStep onNext={() => setStep(step + 1)} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="breed-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <BreedStep onNext={() => setStep(step + 1)} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div
              key="sex-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <SexStep onNext={() => setStep(step + 1)} />
            </motion.div>
          )}
          {step === 5 && (
            <motion.div
              key="health-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <HealthStep />
            </motion.div>
          )}
          {step === 6 && (
            <motion.div
              key="performance-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <PerformanceStep />
            </motion.div>
          )}
          {step === 7 && (
            <motion.div
              key="preference-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <PreferenceStep />
            </motion.div>
          )}  
          {step === 8 && (
            <motion.div
              key="environment-training-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: completedSteps.length + 1 }}
            >
              <EnvironmentAndTrainingStep />
            </motion.div>
          )}
          {step === 9 && (
            <motion.div
              key="confirm-step"
              className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
              variants={cardVariants}
            >   
              <ConfirmStep />
            </motion.div>
          )}
        </AnimatePresence>  
            


      </div>
    </div>
  );
}