import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import MainPage from './app/mainPage';
import PickCity from './app/pickCity/pickCity';
import PickCity2 from './app/pickCity/pickCity2';
import PickCity3 from './app/pickCity/pickCity3';
import TypeSelector from './app/typeSelector/typeSelector';
import TypeSelector2 from './app/typeSelector/typeSelector2';
import TypeSelector3 from './app/typeSelector/typeSelector3'
import Loading from './components/loading.tsx';
import PlaceSelectPage from './app/placeSelector'
import PlannedPlace from "./app/plannedPlace";

// PlaceSelectPage를 위한 wrapper 컴포넌트
const PlaceSelectPageWrapper = () => {
  const location = useLocation();
  const placeList = location.state?.placeList;

  if (!placeList) {
    // placeList가 없으면 TypeSelector 페이지로 리다이렉트
    return <Navigate to="/typeSelector" replace />;
  }

  return <PlaceSelectPage placeList={placeList} />;
};

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pickCity" element={<PickCity />} />
          <Route path="/pickCity2" element={<PickCity2 />} />
          <Route path="/pickCity3" element={<PickCity3 />} />
          <Route path="/typeSelector" element={<TypeSelector />} />
          <Route path="/typeSelector2" element={<TypeSelector2 />} />
          <Route path="/typeSelector3" element={<TypeSelector3 />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/placeSelector" element={<PlaceSelectPageWrapper />} />
          <Route path="/planned" element={<PlannedPlace />} />
        </Routes>
      </Router>
  );
};

export default App;