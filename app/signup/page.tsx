'use client';

import { useRouter } from 'next/navigation';
import { SignupForm } from '@/2_ui/signup/SignupForm';
import { SNSLoginButtons } from '@/2_ui/signup/SNSLoginButtons';

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#FFF6EE]">
      <div className="w-full max-w-[520px] bg-white rounded-2xl p-16">
        {/* 타이틀 */}
        <div className="text-center mb-24">
          <h1 className="text-3xl font-bold mb-8">DogFit에 오신 걸 환영해요</h1>
          <p className="text-lg text-gray-500">회원가입</p>
        </div>

        {/* 회원가입 폼 */}
        <div className="mb-24">
          <SignupForm />
        </div>

        {/* 구분선 */}
        <div className="mb-24">
          <div className="flex items-center gap-8">
            <hr className="flex-1 border-gray-200" />
            <span className="text-base text-gray-400 px-10">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>
        </div>

        {/* SNS 로그인 */}
        <div className="mb-24">
          <SNSLoginButtons />
        </div>

        {/* 로그인 링크 */}
        <div className="text-center">
          <p className="text-base text-gray-500">
            이미 계정이 있으신가요?{' '}
            <button
              onClick={() => router.push('/login')}
              className="text-[#FFA94D] hover:underline font-medium"
            >
              로그인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 