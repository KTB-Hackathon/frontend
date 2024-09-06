import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './app/mainPage';
import ThemeSelector from './app/themeSelector';
import TypeSelector from './app/typeSelector';
import PlaceSelectPage from './app/placeSelector.tsx'
import PlannedPlace from "./app/plannedPlace.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/themeSelector" element={<ThemeSelector />} />
        <Route path="/typeSelector" element={<TypeSelector />} />
          <Route path="/placeSelector" element={<PlaceSelectPage />} />
          <Route path="/planned" element={<PlannedPlace />} />
      </Routes>
    </Router>
  );
};

export default App;