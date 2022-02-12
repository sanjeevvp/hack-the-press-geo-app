import React from 'react';
import './Header.css';
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const openFilter = () => navigate('/filter');

  return (
    <header className="ExploreHeaderContainer">
      <h1>Shoreditch, London</h1>
      <TuneIcon onClick={openFilter} />
    </header>
  );
};

export default Header;
