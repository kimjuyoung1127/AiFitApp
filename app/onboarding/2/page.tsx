'use client';

import { OnboardingCard } from '@/2_ui/onboarding/OnboardingCard';
import { useRouter } from 'next/navigation';
import { onboardingContent } from '@/app/onboarding/data/onboardingText';

export default function OnboardingPage2() {
  const router = useRouter();
  const content = onboardingContent[2];
  
  return (
    <OnboardingCard
      step={2}
      title={content.title}
      description={content.description}
      imagePath="/images/onboarding2.png"
      onNext={() => router.push('/onboarding/3')}
      onSkip={() => router.push('/form')}
    />
  );
} 