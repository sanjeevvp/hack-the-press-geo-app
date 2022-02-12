import React from 'react';
import './PostHeader.css';
import { IPost } from '../../types';

import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Chip } from '@mui/material';

const PostHeader: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <header className="PostHeaderContainer">
      <div className="UpperContainer">
        <div className="LeftContainer">
          <div className="TitleContainer">
            <EventIcon />
            <h1>{post?.title}</h1>
          </div>
          <div className="LocationContainer">
            <LocationOnIcon />
            <p>{post?.locationName}</p>
          </div>
        </div>
        <div className="RightContainer">
          <div className="IconContainer">
            <ShareIcon />
            <MoreHorizIcon />
          </div>
          <div className="ChipContainer">
            <Chip avatar={<Avatar>M</Avatar>} label={post?.postingType} />
          </div>
        </div>
      </div>
      <div className="BelowContainer">
        <PersonIcon />
        <div className="NameContainer">
          <p>{post?.name}</p>
          <p>1 hr ago</p>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
