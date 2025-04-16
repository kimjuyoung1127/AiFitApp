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
    health: {    
      joint_knee: 0,
      joint_hip: 0,
      joint_frontlegs: 0,
      joint_spine: 0,
      heart: 0,
      respiratory: 0,
      obesity: 0,
      vision: 0,
      neurological: 0,
      energy: 0
    },
    performance: {
      endurance: 0,
      mobility: 0,
      reaction: 0,
      focus: 0,
      agility: 0,
      balance: 0,
      confidence: 0,
      bodyAwareness: 0,
      problemSolving: 0,
      speed: 0
    }
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