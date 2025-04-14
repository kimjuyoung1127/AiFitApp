'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AUTH_MODES, type AuthMode } from './constants';
import { AuthSlider } from './AuthSlider';
import { BackButton } from './BackButton';

export default function LoginFlowPage() {
  const [mode, setMode] = useState<AuthMode>(AUTH_MODES.LOGIN);
  const [direction, setDirection] = useState(0);

  const handleModeChange = (newMode: AuthMode) => {
    setDirection(newMode === AUTH_MODES.SIGNUP ? 1 : -1);
    setMode(newMode);
  };

  return (
    <>
      <BackButton mode={mode} onBack={() => handleModeChange(AUTH_MODES.LOGIN)} />
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <AuthSlider 
          key={mode}
          mode={mode}
          direction={direction}
          onModeChange={handleModeChange}
        />
      </AnimatePresence>
    </>
  );
} 