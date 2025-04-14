'use client';

import Image from 'next/image';
import { Button } from '@/2_ui/base/Button';

interface OnboardingCardProps {
  step: number;
  title: string;
  description: string;
  imagePath: string;
  onNext: () => void;
  onSkip: () => void;
  buttonText?: string;
}

export function OnboardingCard({
  step,
  title,
  description,
  imagePath,
  onNext,
  onSkip,
  buttonText = "👉 다음"
}: OnboardingCardProps) {
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
          onClick={onSkip}
          className="self-end text-sm text-gray-400 underline hover:text-gray-600 mt-4 mb-8 transition-colors"
        >
          건너뛰기
        </button>

        {/* 타이틀 */}
        <h1 className="text-[32px] sm:text-[40px] font-bold text-center mb-12 leading-snug">
          {title}
        </h1>

        {/* 이미지 컨테이너 */}
        <div className="relative w-[500px] sm:w-[600px] md:w-[700px] mb-12">
          <div className="relative aspect-square rounded-[24px] overflow-hidden bg-white shadow-lg">
            <Image
              src={imagePath}
              alt="운동하는 강아지"
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
          {description}
        </p>

        {/* 다음 버튼 */}
        <Button
          onClick={onNext}
          className="w-[300px] bg-[#FFA94D] text-white font-semibold py-4 px-8 
            rounded-[20px] shadow-md transition-all duration-200
            hover:bg-[#FF8C2B] hover:shadow-lg hover:scale-[1.02]
            active:scale-[0.98]"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
} 