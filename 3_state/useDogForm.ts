// 3_state/useDogForm.ts

import { useState } from 'react';

export interface DogProfile {
  name: string;
  age: number;
  weight: number;
  breed: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export function useDogForm() {
  const [dogForm, setDogForm] = useState<DogProfile>({
    name: '',
    age: 0,
    weight: 0,
    breed: '',
  });

  // React Select를 위한 유틸리티 함수들
  const getBreedAsOption = (): SelectOption | null => {
    return dogForm.breed ? { value: dogForm.breed, label: dogForm.breed } : null;
  };

  const updateBreed = (option: SelectOption | null) => {
    setDogForm({
      ...dogForm,
      breed: option ? option.value : '',
    });
  };

  return { 
    dogForm, 
    setDogForm,
    // React Select 헬퍼 함수들
    getBreedAsOption,
    updateBreed
  };
}