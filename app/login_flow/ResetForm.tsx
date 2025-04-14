'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ResetFormProps {
  onLoginClick: () => void;
}

export function ResetForm({ onLoginClick }: ResetFormProps) {
  const [email, setEmail] = useState('');

  return (
    <div className="space-y-12">
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">비밀번호 찾기</h1>
        <p className="text-lg text-gray-500">
          가입하신 이메일을 입력하시면<br />
          비밀번호 재설정 링크를 보내드립니다
        </p>
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
              placeholder="가입하신 이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-base"
            />
          </div>
        </div>

        {/* 재설정 링크 발송 버튼 */}
        <button
          type="submit"
          className="w-full bg-[#FFA94D] hover:bg-[#FF8C2B] text-lg font-semibold tracking-wide text-white h-14 rounded-xl shadow-md transition-colors mt-14"
        >
          재설정 링크 발송
        </button>
      </form>

      {/* 로그인 링크 */}
      <div className="text-center">
        <p className="text-base text-gray-500">
          비밀번호가 기억나셨나요?{' '}
          <button
            onClick={onLoginClick}
            className="text-[#FFA94D] hover:underline font-medium"
          >
            로그인하기
          </button>
        </p>
      </div>
    </div>
  );
} 