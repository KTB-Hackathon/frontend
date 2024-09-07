import React from 'react';
import CircleIndicator from '../../components/circleIndicator';
import NavButton from '../../components/navButton'; 
import CityButton from '../../components/cityButton';

const PickCity: React.FC = () => {
  const totalSlides = 5;
  const currentSlide = 0;

  const cityButtons = [
    { label: '충남', path: '/pickCity2' },
    { label: '충북', path: '/pickCity3' },
    { label: '세종', path: '/typeSelector'},
    { label: '대전', path: '/typeSelector' },
  ];


  return ( 
    <div className="flex h-screen">
      {/* 왼쪽 이미지와 텍스트 영역 */}
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center items-center relative border-r-4 border-white text-center">
      <img src="/image.png" alt="pinImage" className="mb-7 w-45 h-45 object-contain" />
      <h1 className="text-3xl font-bold mb-4">원하는 도시를 선택해주세요</h1>
      <CityButton buttons={cityButtons} />
      
      {/* 하단 인디케이터와 네비게이션 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <CircleIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
      </div>
    </div>


      {/* 오른쪽 이미지 영역 */}
      <div className="w-1/2 bg-white p-8 flex justify-center items-center shadow-xl">
        <img src="public/충청도.png" alt="여행 이미지" className="max-w-full max-h-full object-contain" />
      </div>

      {/* NavButton 컴포넌트 사용 */}
      <NavButton direction="left" link="/" />
      <NavButton direction="right" link="/pickCity2" />
    </div>
  );
};

export default PickCity;
