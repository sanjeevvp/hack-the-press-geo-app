import React from 'react';
import './Header.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  return (
    <header className="PostDetailHeaderContainer">
      <div className="BackContainer" onClick={() => history.back()}>
        <ArrowBackIosIcon />
        <span>back</span>
      </div>
    </header>
  );
};

export default Header;
