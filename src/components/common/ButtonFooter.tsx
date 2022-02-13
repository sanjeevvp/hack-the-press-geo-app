import './ButtonFooter.css';

import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonFooter = () => {
  const navigate = useNavigate();
  const openNewPost = () => navigate('/post');
  const openMap = () => navigate('/map');
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
        <MapIcon className="MapButton" onClick={openMap} />
      </div>
    </footer>
  );
};

export default ButtonFooter;
