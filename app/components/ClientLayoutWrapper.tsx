'use client'; // 파일 최상단에 위치!

import { AnimatePresence } from 'framer-motion';
import React from 'react';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
} 