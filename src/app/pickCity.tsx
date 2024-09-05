import React from 'react';
import { Link } from 'react-router-dom';
import CircleIndicator from '../components/circleIndicator';

const PickCity: React.FC = () => {
  const totalSlides = 4;  
  const currentSlide = 0;

  return (
    <div className="flex h-screen bg-blue-900 text-white p-8 flex-col justify-center items-center relative">
      <h1 className="text-3xl font-bold mb-4">원하는 도시를 선택해주세요</h1>
      <div className="flex mt-8">
        <CircleIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
      </div>
      <Link to="/" className="absolute bottom-4 left-4 text-white text-2xl">
        ⬅️
      </Link>
      <Link to="/typeSelector" className="absolute bottom-4 right-4 text-white text-2xl">
        ➡️
      </Link>
    </div>
  );
};

export default PickCity;