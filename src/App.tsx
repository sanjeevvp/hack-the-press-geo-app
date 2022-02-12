import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Explore from './pages/Explore';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/post" element={<NewPost />} />
    </Routes>
  );
};

export default App;
