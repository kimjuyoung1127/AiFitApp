'use client';

import { useRouter } from 'next/navigation';
import { LoginForm } from '@/2_ui/login/LoginForm';
import { SNSLoginButtons } from '@/2_ui/signup/SNSLoginButtons';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#FFF6EE]">
      <div className="w-full max-w-[520px] bg-white rounded-2xl p-16 flex flex-col gap-16">
        {/* 타이틀 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">DogFit에 오신 걸 환영해요</h1>
          <p className="text-lg text-gray-500">반려견과 함께하는 건강한 하루의 시작</p>
        </div>

        {/* 로그인 폼 */}
        <div className="mb-16">
          <LoginForm />
        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-6 my-8">
          <hr className="flex-1 border-gray-200" />
          <span className="text-base text-gray-400 px-8">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* SNS 로그인 */}
        <div className="mb-16">
          <SNSLoginButtons />
        </div>

        {/* 회원가입 링크 */}
        <div className="text-center pt-12">
          <p className="text-base text-gray-500">
            아직 회원이 아니신가요?{' '}
            <button
              onClick={() => router.push('/signup')}
              className="text-[#FFA94D] hover:underline font-medium"
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 