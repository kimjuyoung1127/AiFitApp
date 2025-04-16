"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useDogForm } from "../../3_state/useDogForm"
import { formatHealthLabel } from "../../4_utils/formatHealthLabel"
import { healthLabelsMap } from "../../7_types/healthLabels"
import { performanceLabelsMap } from "../../7_types/performanceLabels"

export default function ConfirmStep() {
  const router = useRouter()
  const { dogForm } = useDogForm()

  // Helper function to render intensity indicators
  const renderIntensity = (value: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full mr-1 ${i < value ? "bg-orange-400" : "bg-gray-200"}`}></div>
        ))}
        <span className="ml-1 text-gray-500">{value}/5</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#FFF6EE" }}>
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6">강아지 정보 확인</h1>
        <p className="text-gray-600 text-center mb-8">입력하신 정보를 확인하고 맞춤 운동을 추천받으세요</p>

        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <h2 className="text-center text-lg font-semibold mb-3">기본 정보</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-center text-sm text-gray-500">이름</p>
              <p className="text-center font-medium">{dogForm.name || "미입력"}</p>
            </div>
            <div>
              <p className="text-center text-sm text-gray-500">나이 / 체중</p>
              <p className="text-center     font-medium">
                {dogForm.age || "?"} 세 / {dogForm.weight || "?"} kg
              </p>
            </div>
            <div>
              <p className="text-center text-sm text-gray-500">품종</p>
              <p className="text-center font-medium">{dogForm.breed || "미입력"}</p>
            </div>
            <div>
              <p className="text-center text-sm text-gray-500">성별</p>
              <p className="text-center font-medium">{dogForm.sex || "미입력"}</p>
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <h2 className="text-center text-lg font-semibold mb-3">건강 상태</h2>
          <div className="space-y-3">
            {Object.entries(dogForm.health || {}).map(([key, value]) => {
              const label = formatHealthLabel(value)
              return (
                <div key={key} className="flex justify-between items-center">
                  <span className="font-medium">{healthLabelsMap[key]}</span>
                  <div className={`flex items-center ${label.color}`}>
                    <span className="mr-1">{label.emoji}</span>
                    <span>{label.status}</span>
                  </div>
                </div>
              )


            })}
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <h2 className="text-center text-lg font-semibold mb-3">퍼포먼스</h2>
          <div className="space-y-3">
            {Object.entries(dogForm.performance || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="font-medium">{performanceLabelsMap[key]}</span>
                {renderIntensity(value)}
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Exercises */}
        {dogForm.preferences && (
          <div className="bg-white rounded-xl shadow-md p-5 mb-4">
            <h2 className="text-center text-lg font-semibold mb-3">선호 운동</h2>
            <div className="space-y-3">
              {dogForm.preferences.selected.map((activity) => (
                <div key={activity} className="flex justify-between items-center">
                  <span className="font-medium">{activity}</span>
                  {renderIntensity(dogForm.preferences?.intensity[activity] || 0)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8 mb-10">
          <button
            className="flex-1 py-3 px-6 rounded-full bg-white text-rose-600 border border-rose-200 shadow-sm font-medium flex items-center justify-center"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            이전
          </button>
          <button
            className="flex-1 py-3 px-6 rounded-full bg-rose-600 text-white shadow-sm font-medium flex items-center justify-center"
            onClick={() => router.push('/result')}
          >
            운동 추천 받기
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}