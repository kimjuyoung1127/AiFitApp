'use client';

import { OnboardingCard } from '@/2_ui/onboarding/OnboardingCard';
import { useRouter } from 'next/navigation';
import { onboardingContent } from '@/app/onboarding/data/onboardingText';

export default function OnboardingPage4() {
  const router = useRouter();
  
  return (
    <OnboardingCard
      step={4}
      title="AI가 계속 발전해요! 💡"
      description="사용자의 선택과 피드백을 학습해서 더 정교한 추천을 제공해요"
      imagePath="/images/onboarding4.png"
      onSkip={() => router.push('/form')}
      onNext={() => router.push('/form/01_namestep')}
      buttonText="시작해볼까요?"
    />
  );
} 