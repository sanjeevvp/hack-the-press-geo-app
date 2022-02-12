import React from 'react';
import './Post.css';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Chip } from '@mui/material';

const Post = () => {
  return (
    <article>
      <header className="PostHeaderContainer">
        <div className="UpperContainer">
          <div className="LeftContainer">
            <div className="TitleContainer">
              <EventIcon />
              <h1>Hackathon</h1>
            </div>
            <div className="LocationContainer">
              <LocationOnIcon />
              <p>Newspeak House</p>
            </div>
          </div>
          <div className="RightContainer">
            <div className="IconContainer">
              <ShareIcon />
              <MoreHorizIcon />
            </div>
            <div className="ChipContainer">
              <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
            </div>
          </div>
        </div>
        <div className="BelowContainer">
          <PersonIcon />
          <div className="NameContainer">
            <p>Min Nam</p>
            <p>1 hr ago</p>
          </div>
        </div>
      </header>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quam corporis eaque eveniet eos, nihil error distinctio
          saepe. Repudiandae accusantium consectetur distinctio ut dignissimos
          exercitationem reiciendis nihil, incidunt sapiente debitis
        </p>
      </div>
      <div className="ExpandIconContainer">
        <ExpandMoreIcon />
      </div>
    </article>
  );
};

export default Post;
