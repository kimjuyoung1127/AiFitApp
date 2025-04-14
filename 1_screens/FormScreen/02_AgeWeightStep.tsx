// 1_screens/FormScreen/02_AgeWeightStep.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'next-i18next';
import { useDogForm } from '../../3_state/useDogForm';

const ageWeightSchema = z.object({
  age: z.number().min(0, '나이는 필수입니다'),
  weight: z.number().min(0, '체중은 필수입니다'),
});

export default function AgeWeightStep({ onNext }: { onNext: () => void }) {
  const { t } = useTranslation('ageWeight');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ageWeightSchema),
    defaultValues: { age: 0, weight: 0 }
  });
  const { updateAgeWeight } = useDogForm();

  const onSubmit = (data: any) => {
    updateAgeWeight(data);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF6EE] px-4">
      <h2 className="text-lg font-medium mb-4 text-center">강아지의 나이와 체중을 입력해주세요 🐶</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-3 mb-4">
          <input
            {...register('age', { valueAsNumber: true })}
            type="number"
            placeholder="나이"
            className="w-full max-w-[200px] border rounded-md px-3 py-2 mx-auto"
          />
          {errors.age && <p className="text-red-500 text-xs">{errors.age.message}</p>}
          <input
            {...register('weight', { valueAsNumber: true })}
            type="number"
            placeholder="체중"
            className="w-full max-w-[200px] border rounded-md px-3 py-2 mx-auto"
          />
          {errors.weight && <p className="text-red-500 text-xs">{errors.weight.message}</p>}
        </div>
        
        <div className="flex justify-between gap-4 max-w-[320px] mx-auto mt-6">
          <button
            type="button"
            className="bg-white border border-[#FFA94D] text-[#FFA94D] rounded-lg px-4 py-3 w-full text-center shadow-sm hover:bg-orange-50"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            이전
          </button>
          <button
            type="submit"
            className="bg-[#FFA94D] hover:bg-[#FF8C2B] text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-colors w-full"
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
}