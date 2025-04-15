// 3_state/useDogForm.ts

import { useState } from 'react';
import { DogProfile } from '../7_types/dog';

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
    sex: '',
  });

  const updateAgeWeight = (data: { age: number; weight: number }) => {
    setDogForm((prev) => ({
      ...prev,
      age: data.age,
      weight: data.weight,
    }));
  };

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
    updateAgeWeight,
    // React Select 헬퍼 함수들
    getBreedAsOption,
    updateBreed
  };
}