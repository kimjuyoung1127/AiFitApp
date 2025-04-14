'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/2_ui/base/Button';
import { onboardingContent } from './data/onboardingText';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const content = onboardingContent[step as keyof typeof onboardingContent];
  const isLastStep = step === 4;

  const handleNext = () => {
    if (isLastStep) {
      router.push('/form');
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    router.push('/form');
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FFF6EE]">
      <div className="w-full max-w-[800px] px-8 py-16 flex flex-col items-center">
        {/* 진행 바 */}
        <div className="w-full mb-4">
          <div className="flex items-center justify-end mb-2">
            <span className="text-sm font-semibold text-[#FFA94D]">{step}/4</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFA94D] transition-all duration-300 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* 스킵 버튼 */}
        <button
          onClick={handleSkip}
          className="self-end text-sm text-gray-400 underline hover:text-gray-600 mt-4 mb-8 transition-colors"
        >
          건너뛰기
        </button>

        {/* 슬라이드 콘텐츠 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center w-full"
          >
            {/* 타이틀 */}
            <h1 className="text-[32px] sm:text-[40px] font-bold text-center mb-12 leading-snug">
              {content.title}
            </h1>

            {/* 이미지 */}
            <div className="relative w-[500px] sm:w-[600px] md:w-[700px] mb-12">
              <div className="relative aspect-square rounded-[24px] overflow-hidden bg-white shadow-lg">
                <Image
                  src={`/images/onboarding${step}.png`}
                  alt="온보딩 이미지"
                  fill
                  priority
                  sizes="(max-width: 768px) 500px, (max-width: 1024px) 600px, 700px"
                  className="object-contain p-6"
                />
              </div>
            </div>

            {/* 설명 텍스트 */}
            <p className="text-center text-[24px] leading-relaxed text-gray-800 mb-12">
              <strong className="font-semibold text-black">DogFit AI는</strong>
              <br />
              {content.description}
            </p>

            {/* 다음 버튼 */}
            <Button
              onClick={handleNext}
              className="w-[300px] bg-[#FFA94D] hover:bg-[#FF8C2B] text-white font-semibold py-4 px-8
                rounded-[20px] shadow-md transition-all duration-200
                hover:shadow-lg hover:scale-[1.02]
                active:scale-[0.98] mb-8"
            >
              {isLastStep ? "시작해볼까요?" : "👉 다음"}
            </Button>

            {/* 로그인 링크 */}
            <div className="w-[300px] flex justify-center mt-4">
              <motion.button
                onClick={() => router.push('/login_flow')}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">이미 계정이 있으신가요?</span>
                <span className="text-[#FFA94D] hover:text-[#FF8C2B] font-semibold">
                  로그인
                </span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
