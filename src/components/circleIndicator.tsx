import React from 'react';

interface CircleIndicatorProps {
  currentSlide: number;
  totalSlides: number;
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ currentSlide, totalSlides }) => {
  return (
    <div className="flex mt-8">
      {[...Array(totalSlides)].map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            currentSlide === index ? 'bg-white' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default CircleIndicator;
