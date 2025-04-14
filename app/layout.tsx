// layout.tsx는 두 개의 파일로 분리
// 1. metadata를 위한 서버 컴포넌트
export const metadata = {
  title: 'DogFit',
  description: '강아지를 위한 맞춤 운동 추천',
}

// 2. 클라이언트 컴포넌트로 AnimatePresence 래퍼
// 'use client' 지시어는 여기서 완전히 제거합니다.
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayoutWrapper from './components/ClientLayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

// 3. 메인 레이아웃 (서버 컴포넌트)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  )
} 