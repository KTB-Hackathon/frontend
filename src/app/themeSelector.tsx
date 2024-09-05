import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Theme {
  name: string;
  emoji: string;
}

const themes: Theme[] = [
  { name: '자연투어', emoji: '🌱' },
  { name: '음식투어', emoji: '🍔' },
  { name: '액티비티', emoji: '🏄' },
  { name: '역사탐방', emoji: '🏛️' },
];

const ThemeSelector: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">가고 싶은 테마를 선택해주세요</h1>
        <p className="text-xl">어떤 종류의 여행을 원하시나요?</p>
        <div className="flex mt-8">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
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
      <div className="button-container">
            <Link to="/typeSelector" className="button">
              페이지 이동
            </Link>
          </div>
    </div>

  );
};

export default ThemeSelector;