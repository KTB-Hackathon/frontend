import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <h2 className="text-4xl font-bold">분석중 ... 🏃‍♀️</h2>
            <p className="text-lg mt-4">잠시만 기다려주세요!</p>
        </div>
    );
}

export default Loading;
