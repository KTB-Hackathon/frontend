import React from 'react';
import { Link } from 'react-router-dom';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <h2 className="text-4xl font-bold">분석중 ... 🏃‍♀️</h2>
            <p className="text-lg mt-4">잠시만 기다려주세요!</p>
            <Link to="/recommendPlaces" className="absolute bottom-4 right-4 text-black text-2xl">
          ➡️
        </Link>
        </div>
        
    );
}

export default Loading;
