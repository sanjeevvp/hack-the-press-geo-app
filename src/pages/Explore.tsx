import React, { useEffect, useState } from 'react';
import './Explore.css';

import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Header from '../components/explore/Header';
import Post from '../components/explore/Post';

import { useNavigate } from 'react-router-dom';
import { IPost } from '../types';
import { getPosts } from '../api';
import ButtonFooter from '../components/common/ButtonFooter';

const Explore = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const loadPosts = async () => {
    await getPosts()
      .then((response) => setPosts(response))
      .catch((error) => {
        console.log(error);
        setHasError(true);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Header />
      {posts?.map((post: IPost, index: number) => (
        <Post post={post} key={index} />
      ))}
      <ButtonFooter />
    </div>
  );
};

export default Explore;
