'use client';

import { OnboardingCard } from '@/2_ui/onboarding/OnboardingCard';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();

  const handleNext = () => {
    // 다음 온보딩 페이지로 이동
    router.push('/onboarding/2');
  };

  return (
    <OnboardingCard
      step={1}
      title="강아지를 위한 건강한 하루의 시작 🐶"
      description="우리 강아지의 몸과 마음을 위한 맞춤 피트니스 루틴을 제공해요!"
      imagePath="/images/onboarding1.png"
      onNext={handleNext}
    />
  );
} 