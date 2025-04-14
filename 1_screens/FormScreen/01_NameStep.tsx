// 1_screens/FormScreen/01_NameStep.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const nameSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요!"),
});

export default function NameStep() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: ''
    }
  });

  const handleButtonClick = () => {
    console.log("다음 버튼 클릭됨");
    window.dispatchEvent(new CustomEvent('nextStep'));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-6 text-center">
        강아지의 이름을 입력해주세요 🐶
      </h1>
      <div className="space-y-4 w-full max-w-[280px]">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <input
            type="text"
            placeholder="강아지 이름"
            {...register('name')}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA94D] focus:border-transparent"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
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