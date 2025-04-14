'use client';

export function SNSLoginButtons() {
  const buttons = [
    {
      name: '네이버',
      icon: '/icons/naver_icon.png',
      bgColor: '#03C75A',
      onClick: () => console.log('네이버 로그인')
    },
    {
      name: '페이스북',
      icon: '/icons/X_icon.png',
      bgColor: '#3b5998',
      onClick: () => console.log('페이스북 로그인')
    },
    {
      name: '구글',
      icon: '/icons/google_icon.png',
      bgColor: '#ea4335',
      onClick: () => console.log('구글 로그인')
    }
  ];

  return (
    <div className="space-y-6">
      {buttons.map((button) => (
        <button
          key={button.name}
          onClick={button.onClick}
          className="flex items-center justify-center w-full text-lg tracking-wide font-medium text-white rounded-xl px-8 py-6 shadow-md transition-all"
          style={{ backgroundColor: button.bgColor }}
        >
          <img src={button.icon} alt={button.name} className="w-6 h-6 mr-6" />
          <span>{button.name}로 쉬운 시작</span>
        </button>
      ))}
    </div>
  );
}
