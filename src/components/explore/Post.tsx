import React from 'react';
import './Post.css';
import { IPost } from '../../types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostHeader from '../common/PostHeader';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <article>
      <PostHeader post={post} />
      <div>
        <p>{post.text}</p>
      </div>
      <div className="ExpandIconContainer">
        <ExpandMoreIcon />
      </div>
    </article>
  );
};

export default Post;
