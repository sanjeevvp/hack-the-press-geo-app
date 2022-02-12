import './App.css';

import { Route, Routes } from 'react-router-dom';

import Explore from './pages/Explore';
import NewPost from './pages/NewPost';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/post" element={<NewPost />} />
    </Routes>
  );
};

export default App;
