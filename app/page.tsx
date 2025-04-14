'use client';

import { useEffect } from 'react';
import { useRouter, redirect } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/onboarding');
  }, [router]);

  redirect('/onboarding');  // 추후 로그인 상태에 따라 분기 가능

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF6EE]">
      <h1 className="text-2xl font-bold">DogFit 🐕</h1>
    </main>
  );
} 