'use client';

import { useState } from 'react';
import Image from 'next/image';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
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
  );
}
