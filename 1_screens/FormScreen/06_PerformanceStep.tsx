"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Activity, ChevronDown, ChevronUp } from "lucide-react"
import { useDogForm } from "../../3_state/useDogForm"


// 퍼포먼스 항목과 DogProfile의 performance 속성 간 매핑
const performanceFieldMapping = {
  // 기본 항목
  endurance: "endurance",
  mobility: "mobility",
  reaction: "reaction",
  focus: "focus",
  agility: "agility",
  // 고급 항목
  balance: "balance",
  confidence: "confidence",
  bodyAwareness: "bodyAwareness",
  problemSolving: "problemSolving",
  speed: "speed"
}

export default function PerformanceStep() {
  const { dogForm, setDogForm } = useDogForm()
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  // 초기 상태 설정 (기존 데이터가 있으면 사용)
  const [performanceValues, setPerformanceValues] = useState({
    // 기본 항목
    endurance: dogForm.performance?.endurance || 0,
    mobility: dogForm.performance?.mobility || 0,
    reaction: dogForm.performance?.reaction || 0,
    focus: dogForm.performance?.focus || 0,
    agility: dogForm.performance?.agility || 0,
    // 고급 항목
    balance: dogForm.performance?.balance || 0,
    confidence: dogForm.performance?.confidence || 0,
    bodyAwareness: dogForm.performance?.bodyAwareness || 0,
    problemSolving: dogForm.performance?.problemSolving || 0,
    speed: dogForm.performance?.speed || 0,
  })

  // 슬라이더 값이 변경될 때 로컬 상태와 dogForm 모두 업데이트
  const handleSliderChange = (category: keyof typeof performanceValues, value: number) => {
    setPerformanceValues((prev) => ({
      ...prev,
      [category]: value,
    }))
    
    // dogForm의 performance 객체 업데이트
    const performanceField = performanceFieldMapping[category as keyof typeof performanceFieldMapping]
    setDogForm((prev) => {
      const updatedPerformance = {
        ...(prev.performance || {}),
        [performanceField]: value as number
      }
      return {
        ...prev,
        performance: updatedPerformance
      }
    })
  }

  const basicPerformanceCategories = [
    {
      id: "endurance",
      title: "체력",
      description: "장시간 활동을 지속할 수 있는 능력",
      value: performanceValues.endurance,
    },
    {
      id: "mobility",
      title: "유연성",
      description: "몸을 자유롭게 움직일 수 있는 능력",
      value: performanceValues.mobility,
    },
    {
      id: "reaction",
      title: "반응 속도",
      description: "자극에 빠르게 반응하는 능력",
      value: performanceValues.reaction,
    },
    {
      id: "focus",
      title: "집중력",
      description: "주의를 유지하고 산만함을 피하는 능력",
      value: performanceValues.focus,
    },
    {
      id: "agility",
      title: "민첩성",
      description: "빠르고 정확하게 방향을 바꾸는 능력",
      value: performanceValues.agility,
    },
  ]

  const advancedPerformanceCategories = [
    {
      id: "balance",
      title: "균형감각",
      description: "안정적인 자세를 유지하는 능력",
      value: performanceValues.balance,
    },
    {
      id: "confidence",
      title: "자신감",
      description: "새로운 환경이나 도전에 대한 자신감",
      value: performanceValues.confidence,
    },
    {
      id: "bodyAwareness",
      title: "신체 인식력",
      description: "자신의 몸 위치를 인식하는 능력",
      value: performanceValues.bodyAwareness,
    },
    {
      id: "problemSolving",
      title: "문제 해결력",
      description: "장애물이나 퍼즐을 해결하는 능력",
      value: performanceValues.problemSolving,
    },
    {
      id: "speed",
      title: "속도",
      description: "빠르게 움직일 수 있는 능력",
      value: performanceValues.speed,
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF6EE] py-8 px-4">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-center">
          <Activity className="mr-2 h-6 w-6 text-blue-500" />
          <h1 className="text-2xl font-bold text-blue-700">강아지 운동 능력</h1>
        </div>

        <p className="mb-8 text-center text-sm text-blue-600">
          각 항목을 0(매우 낮음)부터 5(매우 뛰어남)까지 평가해주세요
        </p>

        <div className="space-y-4">
          {basicPerformanceCategories.map((category) => (
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
                    handleSliderChange(category.id as keyof typeof performanceValues, Number.parseInt(e.target.value))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-500"
                />
                <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                  {category.value}
                </span>
              </div>

              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>낮음</span>
                <span>높음</span>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 mb-4 w-full flex items-center justify-center rounded-xl bg-blue-50 p-3 text-blue-700 shadow-sm transition-all hover:bg-blue-100"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          {showAdvanced ? (
            <>
              <ChevronUp className="mr-1 h-5 w-5" />
              고급 항목 접기
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-5 w-5" />
              고급 항목 펼치기
            </>
          )}
        </button>

        {showAdvanced && (
          <div className="space-y-4 mb-6">
            {advancedPerformanceCategories.map((category) => (
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
                      handleSliderChange(category.id as keyof typeof performanceValues, Number.parseInt(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-500"
                  />
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                    {category.value}
                  </span>
                </div>

                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>낮음</span>
                  <span>높음</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-6 py-3 font-medium text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:shadow"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            <ChevronLeft className="mr-1 h-5 w-5 pointer-events-none" />
            이전
          </button>

          <button
            type="button"
            className="flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
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
