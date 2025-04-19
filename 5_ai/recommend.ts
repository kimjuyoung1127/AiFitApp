// ai/recommend.ts

import { Exercise } from "@/7_types/exercise"

export interface Recommendation {
    id: number
    name: string
    reason: string
    precautions: string
    imageUrl: string
    difficulty: string
    difficultyStars: number
    equipment: string[]
    hasEquipment: boolean
  }
  
  export function getRecommendations(dogProfile: any): Recommendation[] {
    // AI 추천 로직을 여기에 구현하세요.
    // 예를 들어, dogProfile을 기반으로 추천 목록을 생성합니다.
  
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
        ],
        },
        {
        id: 3,
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
        ],
        },          
        {
        id: 4,
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
        ],
        },          
        {
        id: 5,
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
        ],  
        },
    
      // ... (다른 운동 데이터 추가)
    ]
    
    return exercises
  }