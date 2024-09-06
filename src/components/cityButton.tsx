import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonData {
  label: string;
  path: string;
}

interface CityButtonProps {
  buttons: ButtonData[];
}

const CityButton: React.FC<CityButtonProps> = ({ buttons }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap -mx-2">
      {buttons.map((button, index) => (
        <div key={index} className="w-1/4 px-2 py-2">
          <button
            onClick = {() => navigate(button.path)}
            className = "w-full px-4 py-2 text-white rounded-full hover:bg-gray-600"
          >
            {button.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CityButton;
