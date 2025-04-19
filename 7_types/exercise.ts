// 7_types/exercise.ts

export interface Exercise {
    id: number
    name: string
    difficulty: string
    difficultyStars: number
    equipment: string[]
    hasEquipment: boolean
    reason: string
    precautions: string
    imageUrl: string
    steps?: string[]
    

  }