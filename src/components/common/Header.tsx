import './Header.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';

const Header = () => {
  return (
    <header className="PostDetailHeaderContainer">
      <div className="BackContainer" onClick={() => history.back()}>
        <ArrowBackIosIcon />
        <span>Back</span>
      </div>
    </header>
  );
};

export default Header;
