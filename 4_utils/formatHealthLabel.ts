interface HealthLabel {
  status: string;
  emoji: string;
  color: string;
}

export function formatHealthLabel(value: number): HealthLabel {
  switch (value) {
    case 0:
      return { status: "매우 좋음", emoji: "😊", color: "text-green-600" };
    case 1:
      return { status: "양호", emoji: "🙂", color: "text-green-500" };
    case 2:
      return { status: "약간 불편함", emoji: "😐", color: "text-yellow-500" };
    case 3:
      return { status: "주의 필요", emoji: "😟", color: "text-orange-500" };
    case 4:
      return { status: "관리 필요", emoji: "😣", color: "text-red-500" };
    case 5:
      return { status: "심각", emoji: "😫", color: "text-red-600" };
    default:
      return { status: "미입력", emoji: "❓", color: "text-gray-400" };
  }
}
