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
    name: '잘 알려진 방문지', 
    description: ' 유명한 랜드마크와 관광지가 많아 볼거리가 풍부해요.', 
    emoji: '📍', 
    imageUrl: 'https://via.placeholder.com/150x150?text=Car+Image' 
  },
  { 
    name: '잘 알려지지 않은 방문지', 
    description: '비교적 한적하고 조용한 여행을 즐기기에 좋아요.', 
    emoji: '🧷', 
    imageUrl: 'https://via.placeholder.com/150x150?text=Walk+Image' 
  },
];

const TypeSelector3: React.FC = () => {
  const totalSlides = 6;
  const currentSlide = 5;
  
  return (
    <div className="flex h-screen">
      {/* 왼쪽 영역 */}
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center items-start relative">
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
           <NavButton direction="right" link="/loading" />
           <NavButton direction="left" link="/typeSelector3" />
        </div>
      </div>
    </div>
  );
};

export default TypeSelector3;
