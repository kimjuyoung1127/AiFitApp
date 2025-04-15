export interface DogProfile {
  name: string;
  age: number;
  breed: string;
  weight: number;
  sex: string;
  healthConditions?: string[];
  exercisePreferences?: string[];
}
