"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useDogForm } from "@/3_state/useDogForm"
import { Triangle, Circle, Disc, CircleDot, Square, RectangleVerticalIcon as Rectangle } from "lucide-react"

export default function EnvironmentAndTrainingStep() {
  const { dogForm, setDogForm } = useDogForm()

  const equipmentItems = [
    {
      key: "cone_bar",
      label: "콘 + 바 세트",
      description: "콘과 가벼운 바를 조합 – 보폭 조절 운동",
      icon: <Triangle className="h-6 w-6" />,
    },
    {
      key: "balance_cushion",
      label: "밸런스 쿠션",
      description: "푹신한 쿠션",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      key: "balance_disc",
      label: "밸런스 디스크",
      description: "흔들리는 원형 디스크 – 중심 잡기 운동",
      icon: <Disc className="h-6 w-6" />,
    },
    {
      key: "donut_ball",
      label: "도넛 / 짐볼",
      description: "불안정한 도넛형 공 – 균형 & 전신 근력 운동",
      icon: <CircleDot className="h-6 w-6" />,
    },
    {
      key: "yoga_block",
      label: "요가 블록",
      description: "단단한 네모 블록 – 발 위치 인식 운동",
      icon: <Square className="h-6 w-6" />,
    },
    {
      key: "platform_board",
      label: "단단한 플랫폼",
      description: "올라가서 앉고 기다리는 운동용 발판",
      icon: <Rectangle className="h-6 w-6" />,
    },
  ]

  const [selectedEquipment, setSelectedEquipment] = useState<Record<string, boolean>>({
    cone_bar: false,
    balance_cushion: false,
    balance_disc: false,
    donut_ball: false,
    yoga_block: false,
    platform_board: false,
  })

  const toggleEquipment = (key: string) => {
    setSelectedEquipment((prev) => {
      const updated = {
        ...prev,
        [key]: !prev[key],
      }
      updateDogFormEquipment(updated)
      return updated
    })
  }

  const updateDogFormEquipment = (equipment: Record<string, boolean>) => {
    const selected = Object.keys(equipment).filter((key) => equipment[key])
    setDogForm((prev) => ({
      ...prev,
      equipment: selected,
    }))
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#FFF6EE" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-md w-full p-6 rounded-lg">
        <h2 className="text-xl font-medium text-center mb-6">사용 중인 운동기구를 선택해주세요</h2>

        <div className="space-y-4 mb-8">
          {equipmentItems.map((item) => (
            <button
              key={item.key}
              onClick={() => toggleEquipment(item.key)}
              className={`w-full p-4 rounded-lg flex items-start gap-3 transition-all text-left ${
                selectedEquipment[item.key]
                  ? "bg-orange-100 border-2 border-orange-400"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center text-orange-500 mt-1">
                {item.icon}
              </div>
              <div>
                <span className="font-medium block">{item.label}</span>
                <span className="text-sm text-gray-500">{item.description}</span>
              </div>
            </button>
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
    </motion.div>
  )
}
