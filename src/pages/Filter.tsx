import './Filter.css';

import { Chip, Slider } from '@mui/material';
import React, { useState } from 'react';

import { Domain } from '@mui/icons-material';
import Header from '../components/filter/Header';
import PlaceIcon from '@mui/icons-material/Place';

const Filter = () => {
  const [radius, setRadius] = useState(500);
  const [news, setNews] = useState(false);
  const [event, setEvent] = useState(false);
  const [general, setGeneral] = useState(false);

  return (
    <div className="FilterContainer">
      <Header />
      <div className="FilterRadiusContainer">
        <PlaceIcon />
        <span>Choose your radius</span>
        <Slider
          className="RadiusSlider"
          aria-label="radius"
          value={Number(radius)}
          step={100}
          min={0}
          max={5000}
          onChange={(e, v) => setRadius(v as number)}
        />
      </div>
      <div className="FilterCategoryContainer">
        <span>Choose your post type</span>
        <div className="FilterCategoryChipsContainer">
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
      </div>
      <div className="FilterContentContainer">
        <span>Choose your categories</span>
        <div className="FilterCategoryChipsContainer">
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
      </div>
      <footer className="FilterFooter">
        <button className="SaveButton">Save my filters</button>
      </footer>
    </div>
  );
};

export default Filter;
