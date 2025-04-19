"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import DogExerciseRecommendations from "./components/DogExerciseRecommendations"
import { Info, AlertTriangle, CheckCircle, X } from "lucide-react"
import { Exercise } from "@/7_types/exercise"

export default function ResultScreen() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  useEffect(() => {
    setLoading(false)
  }, [])

  const openDetail = (exercise: Exercise) => {
    setSelectedExercise(exercise)
  }

  const defaultSteps = [
    "강아지를 디스크 앞에 앉히고 편안한 상태로 만들어주세요.",
    "간식이나 장난감을 이용해 디스크 위에 앞발을 올리도록 유도하세요.",
    "처음에는 5-10초 정도 유지한 후 보상을 주세요.",
    "점차 시간을 늘려가며 30초까지 유지할 수 있도록 훈련하세요.",
    "앞발에 익숙해지면 모든 발을 디스크 위에 올리는 연습을 해보세요.",
  ]

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">{t('로딩 중...')}</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">{t('오류가 발생했습니다. 다시 시도해 주세요.')}</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-10">
      <h1 className="text-3xl font-bold text-center my-6">{t('운동 추천 결과')}</h1>
      <DogExerciseRecommendations onOpenDetail={openDetail} />

      {selectedExercise && (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">{t(selectedExercise.name)}</h2>
          <div className="flex justify-center mb-6">
            <img
              src={selectedExercise.imageUrl || "/placeholder.svg?height=200&width=200"}
              alt={t(selectedExercise.name)}
              className="w-[200px] h-[200px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="bg-orange-50 rounded-xl p-4 mb-5">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-orange-700 mb-1">{t("추천 이유")}</h3>
                <p className="text-gray-700">{t(selectedExercise.reason)}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="font-medium text-gray-800 mb-3">{t("운동 방법")}</h3>
            <ol className="space-y-3 pl-2">
              {(selectedExercise.steps || defaultSteps).map((step: string, index: number) => (
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
                <p className="text-gray-700">{t(selectedExercise.precautions)}</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">{t("필요 기구")}</h3>
            {selectedExercise.equipment.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedExercise.equipment.map((item, index) => (
                  <div
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm flex items-center ${
                      selectedExercise.hasEquipment ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {selectedExercise.hasEquipment ? <CheckCircle className="w-4 h-4 mr-1" /> : null}
                    {t(item)}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t("특별한 기구가 필요하지 않아요")}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
