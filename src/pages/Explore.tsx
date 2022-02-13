import './Explore.css';

import React, { useEffect, useState } from 'react';

import ButtonFooter from '../components/common/ButtonFooter';
import Header from '../components/explore/Header';
import { IPost } from '../types';
import Post from '../components/explore/Post';
import { getPosts } from '../api';

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
    <div className="ExploreContainer">
      <Header />
      {posts?.map((post: IPost, index: number) => (
        <Post post={post} key={index} />
      ))}
      <ButtonFooter />
    </div>
  );
};

export default Explore;
