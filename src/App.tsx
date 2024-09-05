import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './app/mainPage';
import ThemeSelector from './app/themeSelector';
import TypeSelector from './app/typeSelector';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/themeSelector" element={<ThemeSelector />} />
        <Route path="/typeSelector" element={<TypeSelector />} /> 
      </Routes>
    </Router>
  );
};

export default App;