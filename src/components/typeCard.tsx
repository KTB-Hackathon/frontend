import React from 'react';

interface TypeCardProps {
  title: string;
  description: string;
  image: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ title, description, image }) => {
  return (
    <div className="border-b py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="w-24 h-24 bg-gray-300">
        {/* 이미지가 들어갈 자리 */}
        <img src={image} alt={`${title} 이미지`} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TypeCard;
