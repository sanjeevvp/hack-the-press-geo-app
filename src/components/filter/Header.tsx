import React from 'react';
import './Header.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const closeFilter = () => navigate('/');

  return (
    <header className="FilterHeaderContainer">
      <h1 style={{ fontSize: '24px', fontWeight: '900' }}>Filter your posts</h1>
      <CloseIcon onClick={closeFilter} />
    </header>
  );
};

export default Header;
