import React from 'react';
import './Post.css';
import { IPost } from '../../types';

import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Chip } from '@mui/material';
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
