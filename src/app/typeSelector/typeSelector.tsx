import React from 'react';
import CircleIndicator from '../../components/circleIndicator';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useHistory 훅 추가

interface Theme {
  name: string;
  description: string;
  emoji: string;
  imageUrl: string;
}

const themes: Theme[] = [
  { 
    name: '자동차', 
    description: '차를 타고 여행을 다닐 예정이에요', 
    emoji: '🚘', 
    imageUrl: '/type/car2.png' 
  },
  { 
    name: '도보', 
    description: '대중교통을 타고 여행을 다닐 예정이에요', 
    emoji: '🚶‍♀️', 
    imageUrl: '/type/walking.png' 
  },
];

const TypeSelector: React.FC = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useHistory 훅
  const totalSlides = 6;
  const currentSlide = 2;
  
  // 페이지 이동 핸들러 함수
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen">
      {/* 왼쪽 영역 */}

    <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center items-center relative border-r-4 border-white text-center">
        <h1 className="text-3xl font-bold mb-4 text-center">여행 유형을 선택해주세요</h1>
        <p className="text-xl text-center">어떤 교통수단을 이용하실 예정이신가요?</p>

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
          onClick={() => handleNavigation("/typeSelector2")} // 자동차 페이지로 이동
        >
          {/* 자동차 정보 */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold mb-2">{themes[0].name}</h2>
            <p className="text-lg">{themes[0].description}</p>
          </div>

          {/* 자동차 이미지 */}
          <img 
            src={themes[0].imageUrl}
            alt={`${themes[0].name} 이미지`}
            className="w-32 h-32 object-cover"
          />
        </div>

        {/* 아래쪽 영역 (도보) */}
        <div 
          className="h-1/2 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-all"
          onClick={() => handleNavigation("/typeSelector2")} // 도보 페이지로 이동
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
        </div>
      </div>
    </div>
  );
};

export default TypeSelector;
