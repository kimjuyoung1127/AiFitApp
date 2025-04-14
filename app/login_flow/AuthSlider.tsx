'use client';

import { motion } from 'framer-motion';
import { AUTH_MODES, SLIDE_VARIANTS, type AuthMode } from './constants';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { ResetForm } from './ResetForm';

interface AuthSliderProps {
  mode: AuthMode;
  direction: number;
  onModeChange: (mode: AuthMode) => void;
}

export function AuthSlider({ mode, direction, onModeChange }: AuthSliderProps) {
  return (
    <motion.div
      key={mode}
      custom={direction}
      variants={SLIDE_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
    >
      {mode === AUTH_MODES.LOGIN && (
        <LoginForm 
          onSignupClick={() => onModeChange(AUTH_MODES.SIGNUP)}
          onResetClick={() => onModeChange(AUTH_MODES.RESET)}
        />
      )}
      {mode === AUTH_MODES.SIGNUP && (
        <SignupForm 
          onLoginClick={() => onModeChange(AUTH_MODES.LOGIN)}
        />
      )}
      {mode === AUTH_MODES.RESET && (
        <ResetForm 
          onLoginClick={() => onModeChange(AUTH_MODES.LOGIN)}
        />
      )}
    </motion.div>
  );
} 