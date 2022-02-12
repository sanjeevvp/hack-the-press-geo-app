import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Explore from './pages/Explore';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import Filter from './pages/Filter';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/post" element={<NewPost />} />
      <Route path="/filter" element={<Filter />} />
    </Routes>
  );
};

export default App;
