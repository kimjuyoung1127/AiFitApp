"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type Exercise } from "@/7_types/exercise"
import { DogExerciseCard } from "./DogExerciseCard"
import { useTranslation } from "react-i18next"

interface DogExerciseRecommendationsProps {
  onOpenDetail: (exercise: Exercise) => void;
}

export default function DogExerciseRecommendations({ onOpenDetail }: DogExerciseRecommendationsProps) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const exercises: Exercise[] = [
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
      steps: [ 
        "강아지를 디스크 앞에 앉히고 편안한 상태로 만들어주세요.",
        "간식이나 장난감을 이용해 디스크 위에 앞발을 올리도록 유도하세요.",
        "처음에는 5-10초 정도 유지한 후 보상을 주세요.",
        "점차 시간을 늘려가며 30초까지 유지할 수 있도록 훈련하세요.",
        "앞발에 익숙해지면 모든 발을 디스크 위에 올리는 연습을 해보세요.",
      ],
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
      steps: [
        "콘을 일직선이나 지그재그로 배치하세요 (처음에는 간격을 넓게).",
        "강아지를 리드줄로 부드럽게 유도하며 콘 사이를 걷게 하세요.",
        "각 콘을 돌 때마다 칭찬과 간식으로 보상해주세요.",
        "점차 콘 간격을 좁히고 속도를 조금씩 높여보세요.",
        "매일 5-10분씩 꾸준히 연습하면 민첩성이 향상됩니다.",
      ],
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
      steps: [
        "도넛볼을 안정된 바닥에 놓고 움직이지 않게 고정하세요.",
        "강아지를 부드럽게 들어 볼 위에 네 발을 모두 올려놓으세요.",
        "처음에는 보호자가 강아지를 잡아주며 10초간 유지하세요.",
        "균형을 잡는 동안 차분히 칭찬해주고 간식을 주세요.",
        "점차 손을 떼고 혼자 균형을 잡을 수 있도록 연습하세요.",
        "익숙해지면 볼을 살짝 움직여 더 어려운 도전을 해보세요.",
      ],
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
      steps: [
        "낮은 계단(3-5개)을 선택하고 리드줄을 착용하세요.",
        "천천히 계단을 오르도록 유도하고, 각 계단에서 잠시 멈추게 하세요.",
        "내려올 때는 더 천천히, 조심스럽게 내려오도록 도와주세요.",
        "처음에는 1-2회만 반복하고, 점차 3-5회까지 늘려보세요.",
        "운동 후 강아지의 다리나 관절에 이상이 없는지 확인하세요.",
      ],
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
      steps: [
        "밸런스 쿠션을 바닥에 안정적으로 놓으세요.",
        "강아지를 쿠션 앞에 앉히고, 간식이나 장난감으로 쿠션 위로 뛰어오르게 유도하세요.",
        "처음에는 낮은 높이에서 시작하고, 성공할 때마다 칭찬과 보상을 주세요.",
        "쿠션 위에서 잠시 자세를 유지하도록 훈련하세요.",
        "쿠션에서 부드럽게 내려오는 방법도 가르쳐주세요.",
        "하루에 5-10회로 제한하고, 강아지가 지치거나 흥미를 잃으면 중단하세요.",
      ],
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
    <div className="max-w-md mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">
          {t("진행도")}: {currentIndex + 1}/{exercises.length}
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

      <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="h-full"
          >
            <DogExerciseCard
              exercise={exercises[currentIndex]}
              onClick={() => onOpenDetail(exercises[currentIndex])}
            />

            <div className="w-full mt-4">
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevExercise()
                  }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextExercise()
                  }}
                  className="py-3 px-6 rounded-full bg-rose-600 text-white shadow-sm font-medium flex items-center justify-center"
                >
                  {t("다음 운동 보기")}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}