import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDogForm } from '../../3_state/useDogForm';
import { UserIcon as Female, UserIcon as Male, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handleSexSelect = (sex: string) => {
    setSelectedSex(sex);
    setValue('sex', sex);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF6EE] p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[320px] space-y-6">
        <h2 className="text-center text-2xl font-semibold text-rose-800">당신의 강아지는:</h2>

        <div className="space-y-4">
          <div 
            className={`w-full rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-pointer ${
              selectedSex === "female"
                ? "border-pink-500 bg-pink-50 shadow-md transform scale-[1.02]"
                : "border-gray-200 bg-white hover:border-pink-400 hover:bg-pink-50/50 hover:shadow-sm"
            }`}
            onClick={() => handleSexSelect("female")}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Female className={`h-12 w-12 ${selectedSex === "female" ? "text-pink-600" : "text-pink-500"} pointer-events-none`} />
              <span className={`text-xl font-medium ${selectedSex === "female" ? "text-pink-800" : "text-gray-800"}`}>여아</span>
            </div>
          </div>

          <div
            className={`w-full rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-pointer ${
              selectedSex === "male"
                ? "border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]"
                : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-sm"
            }`}
            onClick={() => handleSexSelect("male")}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Male className={`h-12 w-12 ${selectedSex === "male" ? "text-blue-600" : "text-blue-500"} pointer-events-none`} />
              <span className={`text-xl font-medium ${selectedSex === "male" ? "text-blue-800" : "text-gray-800"}`}>남아</span>
            </div>
          </div>
          
          <input type="hidden" {...register('sex')} />
          
          {errors.sex && (
            <p className="text-red-500 text-sm">{errors.sex.message?.toString()}</p>
          )}
        </div>

        <div className="flex justify-between gap-4 pt-4">
          <button
            type="button"
            className="flex-1 rounded-xl border-2 border-gray-200 bg-white p-3 text-center font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow"
            onClick={() => window.dispatchEvent(new CustomEvent('prevStep'))}
          >
            <div className="flex items-center justify-center gap-1">
              <ChevronLeft className="h-5 w-5 pointer-events-none" />
              <span>이전</span>
            </div>
          </button>

          <button
            type="submit"
            className="flex-1 rounded-xl border-2 border-rose-200 bg-rose-50 p-3 text-center font-medium text-rose-700 shadow-sm transition-all hover:bg-rose-100 hover:shadow"
          >
            <div className="flex items-center justify-center gap-1">
              <span>다음</span>
              <ChevronRight className="h-5 w-5 pointer-events-none" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
