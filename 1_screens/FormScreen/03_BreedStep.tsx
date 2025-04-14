// 1_screens/FormScreen/03_BreedStep.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Select from 'react-select';
import { useTranslation } from 'next-i18next';
import { useDogForm, SelectOption } from '../../3_state/useDogForm';

const breedSchema = z.object({
  breed: z.string().min(1, '견종은 필수입니다'),
});

const breeds = [
  "골든 리트리버", "그레이트 데인", "그레이트 피레니즈", "기슈견",
    "닥스훈트", "달마시안", "도베르만 핀셔", "라사 압소", "래브라도 리트리버",
    "러프 콜리", "로트와일러", "마스티프", "말리노이즈", "말티즈",
    "바센지", "보더 콜리", "보르조이", "보스턴 테리어", "불 테리어",
    "불마스티프", "브리타니", "비글", "비즐라", "사모예드", "샤페이",
    "세인트 버나드", "셰퍼드", "스코티시 테리어", "스피츠", "시베리안 허스키",
    "시바견", "시츄", "아메리칸 불리", "아프간 하운드", "알래스칸 말라뮤트",
    "아이리시 세터", "아키타견", "웰시코기", "잉글리시 불도그", "잉글리시 코커 스파니엘",
    "이탈리안 그레이하운드", "잭 러셀 테리어", "진돗개", "차우차우", "치와와",
    "카네 코르소", "코카 스파니엘", "케언 테리어", "콜리", "티베탄 마스티프",
    "파라오 하운드", "파피용", "페키니즈", "포메라니안", "포인터",
    "포르투갈 워터 독", "푸들", "프렌치 불도그", "핏불 테리어",
].map(breed => ({ value: breed, label: breed }));

export default function BreedStep({ onNext }: { onNext: () => void }) {
  const { t } = useTranslation('breed');
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(breedSchema),
    defaultValues: { breed: '' }
  });
  const { getBreedAsOption, updateBreed } = useDogForm();
  const [selectedBreed, setSelectedBreed] = useState<SelectOption | null>(getBreedAsOption());

  const customStyles = {
    control: (base: any) => ({
      ...base,
      width: '100%',
      borderRadius: '0.5rem',
      border: '1px solid #D1D5DB',
      '&:hover': { borderColor: '#FFA94D' },
    }),
    option: (base: any, state: { isSelected: boolean; isFocused: boolean }) => ({
      ...base,
      backgroundColor: state.isSelected ? '#FFF0E5' : state.isFocused ? '#FFF6EE' : 'white',
      '&:hover': { backgroundColor: '#FFF0E5' },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFF6EE] px-4">
      <h2 className="text-lg font-medium mb-4 text-center">강아지의 견종을 선택해주세요 🐶</h2>
      <form onSubmit={handleSubmit(onNext)} className="w-full max-w-xs">
        <div className="max-w-[320px] mx-auto mb-3">
          <Select
            options={breeds}
            styles={customStyles}
            placeholder="견종을 입력해주세요"
            value={selectedBreed}
            onChange={(option) => {
              setSelectedBreed(option);
              updateBreed(option);
              setValue('breed', option ? option.value : '');
            }}
            isClearable
            isSearchable
            className="text-sm"
            noOptionsMessage={() => "검색 결과가 없어요 🐶"}
          />
        </div>
        {errors.breed && (
          <p className="text-red-500 text-xs mb-4 px-4 text-center">{errors.breed.message}</p>
        )}
        
        <div className="max-w-[320px] mx-auto">
          <button
            type="submit"
            className="w-full bg-[#FFA94D] hover:bg-[#FF8C2B] text-white font-medium py-2 px-6 rounded-xl shadow-sm transition-colors text-sm block"
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
}