import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import AppProvider from './contexts/app.context';
import Explore from './pages/Explore';
import Filter from './pages/Filter';
import Map from './pages/Map';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import React from 'react';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F8A82F',
        dark: '#F8A82F',
      },
      success: {
        main: '#9BF8D6',
        dark: '#9BF8D6',
      },
      info: {
        main: '#FD93FF',
        dark: '#FD93FF',
      },
      secondary: {
        main: '#D9B4FF',
        dark: '#D9B4FF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
