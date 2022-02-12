import React, { useEffect, useState } from 'react';
import './PostDetail.css';

import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Header from '../components/postDetail/Header';

import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import { IPost } from '../types';
import PostHeader from '../components/common/PostHeader';
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
    </div>
  );
};

export default PostDetail;
