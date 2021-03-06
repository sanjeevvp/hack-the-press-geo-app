import './PostHeader.css';

import { Chip } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import { IPost } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';

const PostHeader: React.FC<{ post: IPost }> = ({ post }) => {
  const sharePost = async () => {
    await navigator.share({
      title: post.name,
      url: `${window.location.host}/post/${post.id}`,
    });
  };

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
            <ShareIcon onClick={sharePost} />
            <MoreHorizIcon className="MoreHorizIcon" />
          </div>
          <div className="ChipContainer">
            <Chip
              className="PostingTypeChip"
              icon={
                post?.postingType === 'Event' ? (
                  <DateRangeIcon />
                ) : post?.postingType === 'News' ? (
                  <NewspaperIcon />
                ) : (
                  <ArticleIcon />
                )
              }
              size="small"
              label={post?.postingType}
              style={{
                fontSize: '12px',
                background:
                  post?.postingType === 'Event'
                    ? '#49E8DE'
                    : post?.postingType === 'News'
                    ? '#D9B4FF'
                    : '#FD93FF',
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
          <p className="CreatedAtText">{moment(post?.createdAt).fromNow()}</p>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
