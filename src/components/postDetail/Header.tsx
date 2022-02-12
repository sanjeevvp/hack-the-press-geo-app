import React from 'react';
import './Header.css';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  return (
    <header className="PostDetailHeaderContainer">
      <div className="BackContainer">
        <ArrowBackIosIcon />
        back
      </div>
      <TuneIcon />
    </header>
  );
};

export default Header;
