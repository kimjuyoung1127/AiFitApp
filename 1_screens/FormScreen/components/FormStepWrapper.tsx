//각 Step의 공통 구조 (제목, 설명, 일러스트, 말풍선, 애니메이션 등)

// 1_screens/FormScreen/components/FormStepWrapper.tsx

import React from 'react';

interface FormStepWrapperProps {
  title: string;
  balloonText: string;
  children: React.ReactNode;
}

export function FormStepWrapper({ title, balloonText, children }: FormStepWrapperProps) {
  return (
    <div className="form-step-wrapper">
      <h2>{title}</h2>
      <p>{balloonText}</p>
      {children}
    </div>
  );
}