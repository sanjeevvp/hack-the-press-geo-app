import React from 'react';
import './Post.css';
import { IPost } from '../../types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostHeader from '../common/PostHeader';
import { useNavigate } from 'react-router-dom';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate();
  const openPostDetail = () => navigate(`/post/${post?.id}`);

  return (
    <article>
      <PostHeader post={post} />
      <div>
        <p>{post.text}</p>
      </div>
      <div className="ExpandIconContainer">
        <ExpandMoreIcon onClick={openPostDetail} />
      </div>
    </article>
  );
};

export default Post;
