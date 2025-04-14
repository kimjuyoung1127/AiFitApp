'use client';

import { useState } from 'react';
import { Button } from '@/2_ui/base/Button';

export function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('회원가입 시도:', { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
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
      <div>
        <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none text-base"
          />
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none text-base"
          />
        </div>
        <div className="flex items-center border-2 rounded-xl bg-white shadow-sm px-8 py-5 focus-within:ring-2 focus-within:ring-violet-100 hover:border-gray-300 transition-all">
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full outline-none text-base"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#FFA94D] hover:bg-[#FF8C2B] text-lg font-semibold tracking-wide text-white h-14 rounded-xl shadow-md transition-colors mt-14"
      >
        회원가입
      </button>
    </form>
  );
}
