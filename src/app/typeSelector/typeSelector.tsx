import React from 'react';
import CircleIndicator from '../../components/circleIndicator';
import NavButton from '../../components/navButton';

interface Theme {
  name: string;
  description: string;
  emoji: string;
  imageUrl: string; // 이미지 경로 추가
}

const themes: Theme[] = [
  { 
    name: '자동차', 
    description: '차를 타고 여행을 다닐 예정이에요', 
    emoji: '🚘', 
    imageUrl: 'https://via.placeholder.com/150x150?text=Car+Image' 
  },
  { 
    name: '도보', 
    description: '대중교통을 타고 여행을 다닐 예정이에요', 
    emoji: '🚶‍♀️', 
    imageUrl: 'https://via.placeholder.com/150x150?text=Walk+Image' 
  },
];

const TypeSelector: React.FC = () => {
  const totalSlides = 6;
  const currentSlide = 2;
  
  return (
    <div className="flex h-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center items-start relative">
        <h1 className="text-3xl font-bold mb-4">여행 유형을 선택해주세요</h1>
        <p className="text-xl">어떤 교통수단을 이용하실 예정이신가요?</p>

        {/* 하단 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <CircleIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-1/2 bg-white p-8 flex flex-col justify-between">
        {/* 위쪽 영역 (자동차) */}
        <div className="h-1/2 flex flex-col items-center justify-center border-b-2 border-black">
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
        <div className="h-1/2 flex flex-col items-center justify-center">
          {/* 도보 정보 */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold mb-2">{themes[1].name}</h2>
            <p className="text-lg">{themes[1].description}</p>
          </div>

          {/* 도보 이미지 */}
          <img 
            src={themes[1].imageUrl} // 도보 이미지를 사용
            alt={`${themes[1].name} 이미지`}
            className="w-32 h-32 object-cover"
          />
           <NavButton direction="right" link="/typeSelector2" />
           <NavButton direction="left" link="/pickCity3" />
        </div>
      </div>
    </div>
  );
};

export default TypeSelector;
