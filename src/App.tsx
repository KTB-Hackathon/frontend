import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './app/mainPage';
import PickCity from './app/pickCity/pickCity';
import PickCity2 from './app/pickCity/pickCity2';
import PickCity3 from './app/pickCity/pickCity3';
import TypeSelector from './app/typeSelector/typeSelector';
import TypeSelector2 from './app/typeSelector/typeSelector2';
import TypeSelector3 from './app/typeSelector/typeSelector3';
import TypeSelector4 from './app/typeSelector/typeSelector4';
import Loading from './app/loading';


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
        <Route path="/typeSelector4" element={<TypeSelector4 />} />
        <Route path="/loading" element={<Loading />} /> 
      </Routes>
    </Router>
  );
};

export default App;