import './Post.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IPost } from '../../types';
import PostHeader from '../common/PostHeader';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate();
  const openPostDetail = () => navigate(`/post/${post?.id}`);

  return (
    <article className="PostCardContainer">
      <PostHeader post={post} />
      <div className="PostCardTextContainer">
        <p>{post.text}</p>
      </div>
      <div className="ExpandIconContainer">
        <ExpandMoreIcon onClick={openPostDetail} />
      </div>
    </article>
  );
};

export default Post;
