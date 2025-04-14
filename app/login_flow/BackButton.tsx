import { AUTH_MODES, type AuthMode } from './constants';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  mode: AuthMode;
  onBack: () => void;
}

export function BackButton({ mode, onBack }: BackButtonProps) {
  if (mode === AUTH_MODES.LOGIN) return null;

  return (
    <button
      onClick={onBack}
      className="absolute top-8 left-8 p-2 text-gray-500 hover:text-gray-700 transition-colors"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
} 