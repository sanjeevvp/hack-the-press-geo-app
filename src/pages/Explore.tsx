import React from 'react';
import Header from '../components/explore/Header';
import Post from '../components/explore/Post';

const Explore = () => {
  return (
    <div>
      <Header />
      <section>
        <Post />
        <Post />
      </section>
    </div>
  );
};

export default Explore;
