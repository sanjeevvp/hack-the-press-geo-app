import { Fab } from '@mui/material';
import React from 'react';
import './Explore.css';
import Header from '../components/explore/Header';
import Post from '../components/explore/Post';
import AddIcon from '@mui/icons-material/Add';

const Explore = () => {
  return (
    <div>
      <Header />
      <section>
        <Post />
        <Post />
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </section>
    </div>
  );
};

export default Explore;
