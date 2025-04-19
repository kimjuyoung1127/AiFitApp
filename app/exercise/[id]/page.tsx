"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Exercise } from "@/7_types/exercise"
import { Info, AlertTriangle, CheckCircle, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { getRecommendations } from "@/5_ai/recommend"

export default function ExerciseDetailPage() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const id = pathname ? pathname.split("/").pop() : null // URL에서 ID 추출
  const [exercise, setExercise] = useState<Exercise | null>(null)

  useEffect(() => {
    if (id) {
      const exercises = getRecommendations({})
      const foundExercise = exercises.find((ex) => ex.id === Number(id))
      setExercise(foundExercise || null)
    }
  }, [id])

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-700">{t("운동을 찾을 수 없습니다")}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 relative">
        <button
          onClick={() => window.history.back()} // 뒤로 가기 기능
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">{t(exercise.name)}</h1>
        <div className="flex justify-center mb-6">
          <img
            src={exercise.imageUrl || "/placeholder.svg?height=200&width=200"}
            alt={t(exercise.name)}
            className="w-[200px] h-[200px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="bg-orange-50 rounded-xl p-4 mb-5">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-orange-700 mb-1">{t("추천 이유")}</h3>
              <p className="text-gray-700">{t(exercise.reason)}</p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="font-medium text-gray-800 mb-3">{t("운동 방법")}</h3>
          <ol className="space-y-3 pl-2">
            {exercise.steps?.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mr-2 mt-0.5 font-medium text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-700">{t(step)}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-rose-50 rounded-xl p-4 mb-5">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-rose-700 mb-1">{t("주의사항")}</h3>
              <p className="text-gray-700">{t(exercise.precautions)}</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 mb-2">{t("필요 기구")}</h3>
          {exercise.equipment.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {exercise.equipment.map((item, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm flex items-center ${
                    exercise.hasEquipment ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {exercise.hasEquipment ? <CheckCircle className="w-4 h-4 mr-1" /> : null}
                  {t(item)}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">{t("특별한 기구가 필요하지 않아요")}</p>
          )}
        </div>
      </div>
    </div>
  )
}
