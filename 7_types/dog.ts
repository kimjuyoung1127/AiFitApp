export interface HealthProfile {
  joint_knee: number;
  joint_hip: number;
  joint_frontlegs: number;
  joint_spine: number;
  heart: number;
  respiratory: number;
  obesity: number;
  vision: number;
  neurological: number;
  energy: number;
}

export interface PerformanceProfile {
  endurance: number;
  mobility: number;
  reaction: number;
  focus: number;
  agility: number;
  balance?: number;
  confidence?: number;
  bodyAwareness?: number;
  problemSolving?: number;
  speed?: number;
}

export interface DogProfile {
  name: string;
  age: number;
  breed: string;
  weight: number;
  sex: string;
  healthConditions?: string[];
  exercisePreferences?: string[];
  health: HealthProfile;
  performance: PerformanceProfile;
}
