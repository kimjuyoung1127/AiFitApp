"use client"

import { Info, AlertTriangle, CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"      
import { Recommendation } from "5_ai/recommend"
import { useRouter } from "next/router"


interface DogExerciseCardProps {
  exercise: Recommendation;
  onClick: () => void;
}

export function DogExerciseCard({ exercise, onClick }: DogExerciseCardProps) {
  const { t } = useTranslation()
  const router = useRouter()

  // Render difficulty stars
  const renderDifficultyStars = (stars: number) => (
    <div className="flex items-center">
      {[...Array(stars)].map((_, i) => (
        <span key={i} className="text-yellow-500">⭐</span>
      ))}
    </div>
  )


    return (
      <div
      className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col cursor-pointer"
      onClick={() => router.push(`/exercise/${exercise.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/exercise/${exercise.id}`) }}
    >
      <h1 className="text-2xl font-bold text-center mb-4">{t(exercise.name)}</h1>
      <div className="flex justify-center mb-4">
        <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center">
          <span className="mr-1">{t(exercise.difficulty)}</span>
          {renderDifficultyStars(exercise.difficultyStars)}
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <img
          src={exercise.imageUrl || "/placeholder.svg"}
          alt={exercise.name}
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="bg-orange-50 rounded-xl p-4 mb-4 relative">
        <div className="absolute -top-2 left-4 w-4 h-4 bg-orange-50 rotate-45"></div>
        <div className="flex items-start">
          <Info className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700">{t(exercise.reason)}</p>
        </div>
      </div>
      <div className="bg-rose-50 rounded-xl p-4 mb-4">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700">{t(exercise.precautions)}</p>
        </div>
      </div>
      <div className="mt-auto">
        <h3 className="font-medium mb-2">{t("필요 기구")}</h3>
        {exercise.equipment.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
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
          <p className="text-gray-500 mb-4">{t("특별한 기구가 필요하지 않아요")}</p>
        )}
      </div>
    </div>
  )
}