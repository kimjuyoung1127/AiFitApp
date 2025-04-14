'use client';

export const AUTH_MODES = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  RESET: 'reset',
} as const;

export type AuthMode = typeof AUTH_MODES[keyof typeof AUTH_MODES];

export const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}; 