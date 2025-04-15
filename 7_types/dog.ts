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

export interface DogProfile {
  name: string;
  age: number;
  breed: string;
  weight: number;
  sex: string;
  healthConditions?: string[];
  exercisePreferences?: string[];
  health: HealthProfile;
}
