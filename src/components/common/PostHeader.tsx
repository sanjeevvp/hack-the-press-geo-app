import './PostHeader.css';

import { Chip } from '@mui/material';
import { Domain } from '@mui/icons-material';
import EventIcon from '@mui/icons-material/Event';
import { IPost } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

const PostHeader: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <header className="PostHeaderContainer">
      <div className="UpperContainer">
        <div className="LeftContainer">
          <div className="TitleContainer">
            <EventIcon
              style={{
                fontSize: '1.2em',
              }}
            />
            <h1>{post?.title}</h1>
          </div>
          <div className="LocationContainer">
            <LocationOnIcon
              style={{
                fontSize: '1.2em',
              }}
            />
            <p>{post?.locationName}</p>
          </div>
        </div>
        <div className="RightContainer">
          <div className="IconContainer">
            <ShareIcon />
            <MoreHorizIcon className="MoreHorizIcon" />
          </div>
          <div className="ChipContainer">
            <Chip
              className="PostingTypeChip"
              icon={<Domain />}
              size="small"
              label={post?.postingType}
              style={{
                fontSize: '12px',
                background: '#49E8DE',
                padding: '4.5px 9.5px',
                borderRadius: '16px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="BelowContainer">
        <PersonIcon
          className="PersonIcon"
          style={{
            fontSize: '1.7em',
          }}
        />
        <div className="NameContainer">
          <p className="PostAuthorText">{post?.name}</p>
          <p className="CreatedAtText">1 hr ago</p>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
