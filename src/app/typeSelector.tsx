import React from 'react';
import { Link } from 'react-router-dom';
import CircleIndicator from '../components/circleIndicator';

interface Theme {
  name: string;
  emoji: string;
}
const themes: Theme[] = [
  { name: '자동차', emoji: '🚘' },
  { name: '도보', emoji: '🚶‍♀️' },
];

const TypeSelector: React.FC = () => {

  const totalSlides = 4;
  const currentSlide = 2;

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">여행 유형을 선택해주세요</h1>
        <p className="text-xl">어떤 교통수단을 사용하실 예정이신가요?</p>
        {/* circleIndicator 컴포넌트 사용 */}
        <CircleIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
        <Link to="/" className="absolute bottom-4 left-4 text-white text-2xl">
          ⬅️
        </Link>
        <Link to="/themeSelector" className="absolute bottom-4 right-4 text-black text-2xl">
          ➡️
        </Link>
      </div>
      <div className="w-1/2 bg-white p-8">
        <ul className="space-y-4">
          {themes.map((theme, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100"
            >
              <span>{theme.name}</span>
              <span>{theme.emoji}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default TypeSelector;
