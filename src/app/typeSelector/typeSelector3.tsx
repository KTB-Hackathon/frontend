import React from 'react';
import CircleIndicator from '../../components/circleIndicator';
import NavButton from '../../components/navButton';
import { useNavigate } from 'react-router-dom';

interface Theme {
  name: string;
  description: string;
  emoji: string;
  imageUrl: string; // 이미지 경로 추가
}

const themes: Theme[] = [
  { 
    name: '휴양', 
    description: '일상에서 벗어나 편안한 휴식을 취할 수 있는 여행지예요.', 
    emoji: '🏝️', 
    imageUrl: '/type/vacation.png' 
  },
  { 
    name: '체험활동', 
    description: '다양한 액티비티와 체험을 통해 새로운 경험을 할 수 있는 여행이에요.', 
    emoji: '🥁', 
    imageUrl: 'type/activity.png' 
  },
];

const TypeSelector3: React.FC = () => {
  const navigate = useNavigate();
  const totalSlides = 5;
  const currentSlide = 4;
  
    // 페이지 이동 핸들러 함수
    const handleNavigation = (path: string) => {
      navigate(path);
    };

  return (
    <div className="flex h-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center items-center relative border-r-4 border-white text-center">
        <h1 className="text-3xl font-bold mb-4">가고 싶은 테마를 선택해주세요.</h1>
        <p className="text-xl">어떤 종류의 여행을 원하시나요?</p>

        {/* 하단 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <CircleIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 bg-white p-8 flex flex-col justify-between">
        {/* 위쪽 영역 (자동차) */}
        <div 
          className="h-1/2 flex flex-col items-center justify-center border-b-2 border-black cursor-pointer hover:bg-gray-200 transition-all"
          onClick={() => handleNavigation("/typeSelector4")} 
        >
          {/* 자동차 정보 */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold mb-2">{themes[0].name}</h2>
            <p className="text-lg">{themes[0].description}</p>
          </div>

          {/* 자동차 이미지 */}
          <img 
            src={themes[0].imageUrl} // 자동차 이미지를 사용
            alt={`${themes[0].name} 이미지`}
            className="w-32 h-32 object-cover"
          />
        </div>

        {/* 아래쪽 영역 (도보) */}
        <div 
          className="h-1/2 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-all"
          onClick={() => handleNavigation("/typeSelector4")} 
        >
          {/* 도보 정보 */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold mb-2">{themes[1].name}</h2>
            <p className="text-lg">{themes[1].description}</p>
          </div>

          {/* 도보 이미지 */}
          <img 
            src={themes[1].imageUrl} 
            alt={`${themes[1].name} 이미지`}
            className="w-32 h-32 object-cover"
          />
           <NavButton direction="right" link="/typeSelector4" />
           <NavButton direction="left" link="/typeSelector2" />
        </div>
      </div>
    </div>
  );
};

export default TypeSelector3;
