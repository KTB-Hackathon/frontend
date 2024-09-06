import React from 'react';
import CircleIndicator from '../../components/circleIndicator';
import NavButton from '../../components/navButton'; 
import CityButton from '../../components/cityButton';

const PickCity3: React.FC = () => {
  const totalSlides = 6;
  const currentSlide = 1;

  const cityButtons = [
    { label: '단양', path: '/typeSelector'},
    { label: '제천', path: '/typeSelector' },
    { label: '충주', path: '/typeSelector' },
    { label: '음성', path: '/typeSelector'},
    { label: '진천', path: '/typeSelector' },
    { label: '증평', path: '/typeSelector' },
    { label: '괴산', path: '/typeSelector' },
    { label: '청주', path: '/typeSelector'},
    { label: '보은', path: '/typeSelector'},
    { label: '옥천', path: '/typeSelector'},
    { label: '영동', path: '/typeSelector'},
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
        <img src="public/충남.png" alt="여행 이미지" className="max-w-full max-h-full object-contain" />
      </div>


      {/* NavButton 컴포넌트 사용 */}
      <NavButton direction="left" link="/pickCity2" />
      <NavButton direction="right" link="/typeSelector" />
    </div>
  );
};

export default PickCity3;
