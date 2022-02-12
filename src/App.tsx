import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
    </Routes>
  );
};

export default App;
