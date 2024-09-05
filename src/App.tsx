import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './app/mainPage';
import ThemeSelector from './app/themeSelector';
import TypeSelector from './app/typeSelector';
import Loading from './app/loading';
import RecommendPlaces from './app/recommendPlaces'
import PickCity from './app/pickCity';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pickCity" element={<PickCity />} />
        <Route path="/themeSelector" element={<ThemeSelector />} />
        <Route path="/typeSelector" element={<TypeSelector />} /> 
        <Route path="/loading" element={<Loading />} /> 
        <Route path="/recommendPlaces" element={<RecommendPlaces />} />
      </Routes>
    </Router>
  );
};

export default App;