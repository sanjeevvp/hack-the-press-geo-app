import React, { useState } from 'react';
import './Filter.css';

import Header from '../components/filter/Header';
import { Chip, Slider } from '@mui/material';
import { Domain } from '@mui/icons-material';

const Filter = () => {
  const [news, setNews] = useState(false);
  const [event, setEvent] = useState(false);
  const [general, setGeneral] = useState(false);

  return (
    <div className="FilterContainer">
      <Header />
      <div className="FilterContentContainer">
        <span>Choose your radius</span>
        <Slider aria-label="radius" defaultValue={30} />
      </div>
      <div className="FilterContentContainer">
        <span>Choose your categories</span>
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="General"
          variant={general ? 'filled' : 'outlined'}
          onClick={() => setGeneral(!general)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="News"
          variant={news ? 'filled' : 'outlined'}
          onClick={() => setNews(!news)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="Event"
          variant={event ? 'filled' : 'outlined'}
          onClick={() => setEvent(!event)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
      </div>
      <div className="FilterContentContainer">
        <span>Choose your radius</span>
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="General"
          variant={general ? 'filled' : 'outlined'}
          onClick={() => setGeneral(!general)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="News"
          variant={news ? 'filled' : 'outlined'}
          onClick={() => setNews(!news)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
        <Chip
          icon={<Domain />}
          clickable
          size="small"
          color="success"
          label="Event"
          variant={event ? 'filled' : 'outlined'}
          onClick={() => setEvent(!event)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
      </div>
      <footer className="FilterFooter">
        <button className="SaveButton">Save my filters</button>
      </footer>
    </div>
  );
};

export default Filter;
