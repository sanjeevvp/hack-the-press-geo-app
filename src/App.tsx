import './App.css';

import { Route, Routes } from 'react-router-dom';

import Explore from './pages/Explore';
import Filter from './pages/Filter';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import React from 'react';

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
