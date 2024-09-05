import React from 'react';

const TypeSelector: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* 왼쪽 */}
      <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">여행 유형을 선택해주세요</h1>
      </div>

      {/* 오른쪽 */}
      <div className="w-1/2 bg-white p-8">
      <h3 className="text-4xl font-bold">자동차와 도보.. 칸도 안나눠지고 적용이 아무것도 안돼요 ㅠㅠ..</h3>
      </div>
    </div>
  );
};

export default TypeSelector;
