import React from 'react';
import './ButtonFooter.css';

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonFooter = () => {
  const navigate = useNavigate();
  const openNewPost = () => navigate('/post');
  const openHome = () => navigate('/');

  return (
    <footer className="ButtonFooterContainer">
      <div className="HomeButtonContainer">
        <HomeIcon className="HomeButton" onClick={openHome} />
      </div>
      <div className="PlusButtonContainer">
        <Fab
          className="AddIconContainer"
          aria-label="add"
          onClick={openNewPost}
        >
          <AddIcon />
        </Fab>
      </div>
      <div className="MapButtonContainer">
        <MapIcon className="MapButton" />
      </div>
    </footer>
  );
};

export default ButtonFooter;
