import React, { useEffect, useState } from 'react';
import './PostDetail.css';
import PostDetailImage from '../images/PostDetail.png';

import Header from '../components/common/Header';

import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import { IPost } from '../types';
import PostHeader from '../components/common/PostHeader';
import ButtonFooter from '../components/common/ButtonFooter';

const PostDetail = () => {
  const { postId } = useParams();

  const [post, setPost] = useState<IPost | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="PostDetailContainer">
      <Header />
      <div className="ImageContainer">
        <img className="PostDetailImage" src={PostDetailImage} />
      </div>
      <div className="PostDetailContentContainer">
        <PostHeader post={post as IPost} />
        <div className="PostDetailTextContainer">{post?.text}</div>
      </div>
      <ButtonFooter />
    </div>
  );
};

export default PostDetail;
