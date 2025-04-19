'use client';

import { OnboardingCard } from '@/2_ui/onboarding/OnboardingCard';
import { useRouter } from 'next/navigation';
import { onboardingContent } from '@/app/onboarding/data/onboardingText';

export default function OnboardingPage3() {
  const router = useRouter();
  
  return (
    <OnboardingCard
      step={3}
      title="일일 운동 미션 체크 📋"
      description="추천된 운동 루틴을 따라하면서 완료 여부를 체크할 수 있어요"
      imagePath="/images/onboarding3.png"
      onSkip={() => router.push('/home')}
      onNext={() => router.push('/onboarding/4')}
    />
  );
} 