import './Explore.css';

import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Header from '../components/explore/Header';
import Post from '../components/explore/Post';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();
  const openNewPost = () => navigate('/post');
  return (
    <div>
      <Header />
      <section>
        <Post />
        <Post />
        <Fab color="primary" aria-label="add" onClick={openNewPost}>
          <AddIcon />
        </Fab>
      </section>
    </div>
  );
};

export default Explore;
