"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, AlertTriangle, Info, CheckCircle } from "lucide-react"

export default function ResultScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  // Sample exercise recommendations
  const exercises = [
    {
      id: 1,
      name: "균형 디스크 스텝",
      difficulty: "초급",
      difficultyStars: 1,
      equipment: ["밸런스 디스크"],
      hasEquipment: true,
      reason: "초코의 슬개골 상태를 고려해 부담이 적은 균형 운동으로 시작하는 것이 좋아요.",
      precautions: "처음에는 5분 이내로 짧게 시작하고, 디스크가 너무 흔들리지 않도록 주의하세요.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "콘 슬라롬 걷기",
      difficulty: "초급",
      difficultyStars: 2,
      equipment: ["콘 + 바 세트"],
      hasEquipment: true,
      reason: "포메라니안은 민첩성이 좋아 방향 전환 운동에 적합해요. 관절에 무리가 적은 걷기 운동이에요.",
      precautions: "콘 사이 간격은 처음에는 넓게 시작해서 점차 좁혀가세요. 급격한 방향 전환은 피하세요.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "도넛볼 밸런스",
      difficulty: "중급",
      difficultyStars: 3,
      equipment: ["도넛 / 짐볼"],
      hasEquipment: true,
      reason: "초코의 균형 능력이 좋아 도넛볼 위에서의 균형 잡기 운동이 효과적이에요.",
      precautions: "처음에는 보호자가 옆에서 잡아주고, 점차 혼자 할 수 있도록 연습하세요.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "계단 오르내리기",
      difficulty: "중급",
      difficultyStars: 3,
      equipment: [],
      hasEquipment: true,
      reason: "아파트 환경에서 쉽게 할 수 있는 운동으로, 초코의 지구력 향상에 도움이 됩니다.",
      precautions: "처음에는 3-5개 계단만 연습하고, 무릎에 무리가 가지 않도록 천천히 진행하세요.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "쿠션 점프",
      difficulty: "고급",
      difficultyStars: 4,
      equipment: ["밸런스 쿠션"],
      hasEquipment: true,
      reason: "초코의 점프 능력을 향상시키고 전신 근력을 키우는 데 효과적인 운동이에요.",
      precautions: "착지 시 충격을 최소화하기 위해 쿠션 위에 착지하도록 훈련하세요. 하루 5-10회로 제한하세요.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const nextExercise = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === exercises.length - 1 ? 0 : prev + 1))
  }

  const prevExercise = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? exercises.length - 1 : prev - 1))
  }

  // Render difficulty stars
  const renderDifficultyStars = (stars: number) => {
    return (
      <div className="flex items-center">
        {[...Array(stars)].map((_, i) => (
          <span key={i} className="text-yellow-500">
            ⭐
          </span>
        ))}
      </div>
    )
  }

  // Variants for page transitions
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  }

  return (
    <div className="min-h-screen py-6 px-4" style={{ backgroundColor: "#FFF6EE" }}>
      <div className="max-w-md mx-auto">
        {/* Progress indicator */}
        <div className="mb-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            진행도: {currentIndex + 1}/{exercises.length}
          </span>
          <div className="flex space-x-1">
            {exercises.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Exercise cards */}
        <div className="relative h-[calc(100vh-120px)] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                {/* Exercise title */}
                <h1 className="text-2xl font-bold text-center mb-4">{exercises[currentIndex].name}</h1>

                {/* Difficulty badge */}
                <div className="flex justify-center mb-4">
                  <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center">
                    <span className="mr-1">{exercises[currentIndex].difficulty}</span>
                    {renderDifficultyStars(exercises[currentIndex].difficultyStars)}
                  </div>
                </div>

                {/* Illustration placeholder */}
                <div className="flex justify-center mb-6">
                  <img
                    src={exercises[currentIndex].imageUrl || "/placeholder.svg"}
                    alt={exercises[currentIndex].name}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Recommendation reason */}
                <div className="bg-orange-50 rounded-xl p-4 mb-4 relative">
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-orange-50 rotate-45"></div>
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{exercises[currentIndex].reason}</p>
                  </div>
                </div>

                {/* Precautions */}
                <div className="bg-rose-50 rounded-xl p-4 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{exercises[currentIndex].precautions}</p>
                  </div>
                </div>

                {/* Equipment */}
                <div className="mt-auto">
                  <h3 className="font-medium mb-2">필요 기구</h3>
                  {exercises[currentIndex].equipment.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exercises[currentIndex].equipment.map((item, index) => (
                        <div
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm flex items-center ${
                            exercises[currentIndex].hasEquipment
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {exercises[currentIndex].hasEquipment ? <CheckCircle className="w-4 h-4 mr-1" /> : null}
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 mb-4">특별한 기구가 필요하지 않아요</p>
                  )}
                </div>

                {/* Navigation buttons Wrapper */}
                <div className="w-full mt-4">
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={prevExercise}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                      onClick={nextExercise}
                      className="py-3 px-6 rounded-full bg-rose-600 text-white shadow-sm font-medium flex items-center justify-center"
                    >
                      다음 운동 보기
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
