// 1_screens/FormScreen/02_AgeWeightStep.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const ageWeightSchema = z.object({
  age: z.coerce.number().min(0, "나이를 입력해주세요!"),
  weight: z.coerce.number().min(0, "체중을 입력해주세요!"),
});

export default function AgeWeightStep() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ageWeightSchema),
    defaultValues: {
      age: 0,
      weight: 0
    }
  });

  const handleButtonClick = () => {
    console.log("다음 버튼 클릭됨 (AgeWeightStep)");
    window.dispatchEvent(new CustomEvent('nextStep'));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-6 text-center">
        강아지의 나이와 체중을 입력해주세요 🐶
      </h1>
      <div className="space-y-5 w-full max-w-[280px]">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">나이</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#FFA94D] focus-within:border-transparent">
            <input
              type="number"
              {...register('age')}
              className="w-full p-3 border-0 focus:outline-none focus:ring-0"
              placeholder="0"
            />
            <div className="px-3 text-gray-500 bg-gray-50 h-full flex items-center">
              살
            </div>
          </div>
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">체중</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#FFA94D] focus-within:border-transparent">
            <input
              type="number"
              {...register('weight')}
              className="w-full p-3 border-0 focus:outline-none focus:ring-0"
              placeholder="0"
            />
            <div className="px-3 text-gray-500 bg-gray-50 h-full flex items-center">
              kg
            </div>
          </div>
          {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
        </div>
        
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full bg-[#FFA94D] hover:bg-[#FF8C2B] text-white font-medium py-3 px-4 rounded-lg shadow-sm transition-colors mt-4"
        >
          다음
        </button>
      </div>
    </div>
  );
}