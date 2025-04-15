import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDogForm } from '../../3_state/useDogForm';

const sexSchema = z.object({
  sex: z.string().min(1, '성별은 필수입니다'),
});

export default function SexStep({ onNext }: { onNext: () => void }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(sexSchema),
    defaultValues: { sex: '' }
  });
  const { dogForm, setDogForm } = useDogForm();
  const [selectedSex, setSelectedSex] = useState<string>(dogForm.sex || '');

  const onSubmit = () => {
    setDogForm((prev) => ({ ...prev, gender: selectedSex }));       
    window.dispatchEvent(new CustomEvent('nextStep'));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF6EE] px-4">
      <h2 className="text-lg font-medium mb-4 text-center">강아지의 성별을 선택해주세요 🐶</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <div className="flex justify-center gap-4 mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg ${selectedSex === 'male' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
            onClick={() => {
              setSelectedSex('male');
              setValue('sex', 'male');
            }}
          >
            수컷
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg ${selectedSex === 'female' ? 'bg-pink-500 text-white' : 'bg-white border border-gray-300'}`}
            onClick={() => {
              setSelectedSex('female');
              setValue('sex', 'female');
            }}
          >
            암컷
          </button>
        </div>
        {errors.sex && (
          <p className="text-red-500 text-xs mb-4 px-4 text-center">{errors.sex.message}</p>
        )}
        
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
