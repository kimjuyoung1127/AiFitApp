// 3_state/useDogForm.ts

import { useState } from 'react';

export function useDogForm() {
  const [dogForm, setDogForm] = useState({ name: '' });

  return { dogForm, setDogForm };
}