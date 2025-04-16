"use client"

import { useState } from "react"
import { PlayIcon as Run, Zap, Mountain, Scale, Hand } from "lucide-react"
import { useDogForm } from "@/3_state/useDogForm"

export default function PreferenceStep() {
  const { dogForm, setDogForm } = useDogForm()

  const [selectedActivities, setSelectedActivities] = useState<Record<string, boolean>>({
    running: false,
    jumping: false,
    climbing: false,
    balance: false,
    holding: false,
  })

  const [intensities, setIntensities] = useState<Record<string, number>>({
    running: 0,
    jumping: 0,
    climbing: 0,
    balance: 0,
    holding: 0,
  })

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) => {
      const updated = {
        ...prev,
        [activity]: !prev[activity],
      }
      updatePreferences(updated, intensities)
      return updated
    })
  }

  const updateIntensity = (activity: string, value: number[]) => {
    setIntensities((prev) => {
      const updated = {
        ...prev,
        [activity]: value[0],
      }
      updatePreferences(selectedActivities, updated)
      return updated
    })
  }

  const updatePreferences = (activities: Record<string, boolean>, intensity: Record<string, number>) => {
    const selected = Object.keys(activities).filter((activity) => activities[activity])
    setDogForm((prev) => ({
      ...prev,
      preferences: {
        selected,
        intensity,
      },
    }))
  }

  const activityIcons = {
    running: <Run className="h-6 w-6" />,
    jumping: <Zap className="h-6 w-6" />,
    climbing: <Mountain className="h-6 w-6" />,
    balance: <Scale className="h-6 w-6" />,
    holding: <Hand className="h-6 w-6" />,
  }

  const activityNames = {
    running: "달리기",
    jumping: "점프",
    climbing: "오르기",
    balance: "균형 잡기",
    holding: "버티기",
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFF6EE" }}>
      <div className="max-w-md w-full p-6 rounded-lg">
        <h2 className="text-xl font-medium text-center mb-6">아이가 좋아하는 활동을 <br /> 골라주세요</h2>

        <div className="space-y-6 mb-8">
          {Object.keys(selectedActivities).map((activity) => (
            <div 
              key={activity} 
              className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleActivity(activity)}
                className={`w-full rounded-lg flex items-center gap-3 transition-all p-3 ${
                  selectedActivities[activity]
                    ? "bg-orange-50 border-2 border-orange-400"
                    : "bg-white border border-gray-100"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  {activityIcons[activity as keyof typeof activityIcons]}
                </div>
                <span className="font-medium text-lg">{activityNames[activity as keyof typeof activityNames]}</span>
              </button>

              {selectedActivities[activity] && (
                <div className="px-4 py-4 mt-3 bg-orange-50 rounded-lg">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-orange-700">강도</span>
                    <span className="text-sm font-bold text-orange-700">{intensities[activity]}/5</span>
                  </div>
                  <input
                    type="range"
                    value={intensities[activity]}
                    min={0}
                    max={5}
                    step={1}
                    onChange={(e) => updateIntensity(activity, [parseInt(e.target.value)])}
                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="mt-2 flex justify-between text-xs text-orange-600">
                    <span>약함</span>
                    <span>강함</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            className="flex-1 py-3 px-6 rounded-full bg-white text-rose-600 border border-rose-200 shadow-sm font-medium"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            이전
          </button>
          <button
            className="flex-1 py-3 px-6 rounded-full bg-rose-600 text-white shadow-sm font-medium"
            onClick={() => window.dispatchEvent(new CustomEvent('nextStep'))}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  )
}
