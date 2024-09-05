import React from 'react';
import {Link} from 'react-router-dom'

const RecommendPlaces: React.FC = () => {

  return (
    <div>
  <h1>장소를 선택해주세요.</h1>
  <Link to="/typeSelector" className="absolute bottom-4 left-4 text-white text-2xl">
    ⬅️
  </Link>
  </div>
  );
};

export default RecommendPlaces;