"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, PawPrintIcon as Paw } from "lucide-react"
import { useDogForm } from "../../3_state/useDogForm"


// 건강 상태 항목과 DogProfile의 health 속성 간 매핑
const healthFieldMapping = {
  knee: "joint_knee",
  hip: "joint_hip",
  frontLegs: "joint_frontlegs",
  spine: "joint_spine",
  heart: "heart",
  respiratory: "respiratory",
  obesity: "obesity",
  vision: "vision",
  neurological: "neurological",
  energy: "energy"
}

export default function HealthStep() {
  const { dogForm, setDogForm } = useDogForm()
  
  // 초기 상태 설정 (기존 데이터가 있으면 사용)
  const [healthValues, setHealthValues] = useState({
    knee: dogForm.health?.joint_knee || 0,
    hip: dogForm.health?.joint_hip || 0,
    frontLegs: dogForm.health?.joint_frontlegs || 0,
    spine: dogForm.health?.joint_spine || 0,
    heart: dogForm.health?.heart || 0,
    respiratory: dogForm.health?.respiratory || 0,
    obesity: dogForm.health?.obesity || 0,
    vision: dogForm.health?.vision || 0,
    neurological: dogForm.health?.neurological || 0,
    energy: dogForm.health?.energy || 0,
  })

  // 슬라이더 값이 변경될 때 로컬 상태와 dogForm 모두 업데이트
  const handleSliderChange = (category: keyof typeof healthValues, value: number) => {
    setHealthValues((prev) => ({
      ...prev,
      [category]: value,
    }))
    
    // dogForm의 health 객체 업데이트
    const healthField = healthFieldMapping[category as keyof typeof healthFieldMapping]
    setDogForm((prev) => ({
      ...prev,
      health: {
        ...prev.health,
        [healthField]: value
      }
    }))
  }

  const healthCategories = [
    {
      id: "knee",
      title: "슬개골 (무릎 관절)",
      description: "무릎 탈구나 접질림이 있었나요?",
      value: healthValues.knee,
    },
    {
      id: "hip",
      title: "고관절 (엉덩이 관절)",
      description: "엉덩이 쪽 움직임에 불편함이 있나요?",
      value: healthValues.hip,
    },
    {
      id: "frontLegs",
      title: "앞다리 관절",
      description: "앞다리 지지나 균형에 어려움이 있나요?",
      value: healthValues.frontLegs,
    },
    {
      id: "spine",
      title: "허리/척추",
      description: "허리 통증이나 자세 문제를 겪고 있나요?",
      value: healthValues.spine,
    },
    {
      id: "heart",
      title: "심장 건강",
      description: "심장 박동이나 피로도가 평소보다 높았나요?",
      value: healthValues.heart,
    },
    {
      id: "respiratory",
      title: "호흡기 건강",
      description: "숨소리, 호흡이 평소보다 거칠거나 짧은가요?",
      value: healthValues.respiratory,
    },
    {
      id: "obesity",
      title: "비만도",
      description: "강아지의 몸매는 적정한 편인가요?",
      value: healthValues.obesity,
    },
    {
      id: "vision",
      title: "시력",
      description: "사물이나 보호자를 인식하는 데 어려움이 있나요?",
      value: healthValues.vision,
    },
    {
      id: "neurological",
      title: "신경 반응",
      description: "반응 속도나 움직임이 느린 편인가요?",
      value: healthValues.neurological,
    },
    {
      id: "energy",
      title: "기력/활력",
      description: "평소보다 기운이 없고 쉬고 싶어하나요?",
      value: healthValues.energy,
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF6EE] py-8 px-4">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-center">
          <Heart className="mr-2 h-6 w-6 text-rose-500" />
          <h1 className="text-2xl font-bold text-rose-700">강아지 건강 체크</h1>
          <Paw className="ml-2 h-6 w-6 text-rose-500" />
        </div>

        <p className="mb-8 text-center text-sm text-rose-600">
          각 항목을 0(매우 건강)부터 5(심각한 문제)까지 평가해주세요
        </p>

        <div className="space-y-4">
          {healthCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <h3 className="mb-1 font-bold text-gray-800">{category.title}</h3>
              <p className="mb-3 text-sm text-gray-500">{category.description}</p>

              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="1"
                  value={category.value}
                  onChange={(e) =>
                    handleSliderChange(category.id as keyof typeof healthValues, Number.parseInt(e.target.value))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-rose-500"
                />
                <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-medium text-rose-700">
                  {category.value}
                </span>
              </div>

              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>건강함</span>
                <span>심각함</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-6 py-3 font-medium text-rose-600 shadow-sm transition-all hover:bg-rose-50 hover:shadow"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            <ChevronLeft className="mr-1 h-5 w-5 pointer-events-none" />
            이전
          </button>

          <button
            type="button"
            className="flex items-center rounded-full bg-rose-600 px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow"
            onClick={() => window.dispatchEvent(new CustomEvent('nextStep'))}
          >
            다음
            <ChevronRight className="ml-1 h-5 w-5 pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  )
}
