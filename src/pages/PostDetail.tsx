import React, { useEffect, useState } from 'react';
import './PostDetail.css';

import Header from '../components/postDetail/Header';

import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import { IPost } from '../types';
import PostHeader from '../components/common/PostHeader';
import ButtonFooter from '../components/common/ButtonFooter';
const PostDetail = () => {
  const { postId } = useParams();

  const [post, setPost] = useState<IPost | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const loadPost = async () => {
    await getPost(postId as string)
      .then((response) => setPost(response))
      .catch((error) => {
        console.log(error);
        setHasError(true);
      });
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div>
      <Header />
      <div>Image Area</div>
      <PostHeader post={post as IPost} />
      <div>{post?.text}</div>
      <ButtonFooter />
    </div>
  );
};

export default PostDetail;
