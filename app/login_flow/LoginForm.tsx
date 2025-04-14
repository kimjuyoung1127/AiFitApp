'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LoginFormProps {
  onSignupClick: () => void;
  onResetClick: () => void;
}

export function LoginForm({ onSignupClick, onResetClick }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="space-y-12">
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">DogFit에 오신 걸 환영해요</h1>
        <p className="text-lg text-gray-500">반려견과 함께하는 건강한 하루의 시작</p>
      </div>

      {/* 폼 */}
      <form className="space-y-12">
        {/* 이메일 입력 */}
        <div>
          <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
            <Image 
              src="/icons/email_icon.png" 
              alt="이메일" 
              width={22} 
              height={22}
              className="mr-6" 
            />
            <input
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
        </div>

        {/* 비밀번호 입력 */}
        <div className="space-y-3">
          <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
            <Image 
              src="/icons/password_icon.png" 
              alt="비밀번호" 
              width={22} 
              height={22}
              className="mr-6" 
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onResetClick}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              비밀번호 찾기
            </button>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-lg font-semibold tracking-wide text-white h-14 rounded-xl shadow-md transition-colors mt-14"
        >
          로그인
        </button>
      </form>

      {/* 구분선 */}
      <div className="flex items-center gap-6 my-8">
        <hr className="flex-1 border-gray-200" />
        <span className="text-base text-gray-400 px-8">or</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      {/* SNS 로그인 */}
      <div className="space-y-6">
        {/* SNS 버튼들 */}
      </div>

      {/* 회원가입 링크 */}
      <div className="text-center">
        <p className="text-base text-gray-500">
          아직 회원이 아니신가요?{' '}
          <button
            onClick={onSignupClick}
            className="text-[#FFA94D] hover:underline font-medium"
          >
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
} 