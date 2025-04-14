'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SignupFormProps {
  onLoginClick: () => void;
}

export function SignupForm({ onLoginClick }: SignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div className="space-y-12">
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">DogFit에 오신 걸 환영해요</h1>
        <p className="text-lg text-gray-500">회원가입</p>
      </div>

      {/* 폼 */}
      <form className="space-y-12">
        {/* 이름 입력 */}
        <div>
          <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
        </div>

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
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
        </div>

        {/* 비밀번호 입력 */}
        <div className="space-y-8">
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
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
          <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
            <Image 
              src="/icons/password_icon.png" 
              alt="비밀번호 확인" 
              width={22} 
              height={22}
              className="mr-6" 
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="w-full bg-[#FFA94D] hover:bg-[#FF8C2B] text-lg font-semibold tracking-wide text-white h-14 rounded-xl shadow-md transition-colors mt-14"
        >
          회원가입
        </button>
      </form>

      {/* 로그인 링크 */}
      <div className="text-center">
        <p className="text-base text-gray-500">
          이미 계정이 있으신가요?{' '}
          <button
            onClick={onLoginClick}
            className="text-[#FFA94D] hover:underline font-medium"
          >
            로그인
          </button>
        </p>
      </div>
    </div>
  );
} 