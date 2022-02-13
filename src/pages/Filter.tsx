import './Filter.css';

import { Chip, Slider } from '@mui/material';
import React, { useState } from 'react';

import { Domain, Event, LunchDining } from '@mui/icons-material';

import Header from '../components/filter/Header';
import PlaceIcon from '@mui/icons-material/Place';
import { useAppContext } from '../contexts/app.context';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(500);
  const [type, setTypeState] = useState('');
  const [tags, setTags] = useState([] as string[]);

  const { update, ...state } = useAppContext();
  const MaxRadius = 5000;

  React.useEffect(() => {
    setRadius(Number(state.radius));
    setType(state.categories?.[0]);
    setTags(state.tags);
  }, []);

  const setType = (typeInput: string) => {
    if (type === typeInput) {
      setTypeState('');
    } else {
      setTypeState(typeInput);
    }
  };

  const saveFilters = () => {
    update({
      radius: String(radius),
      tags,
    });
    navigate('/');
  };

  const addOrRemoveInterest = (interest: string) => {
    setTags((t) => {
      if (t.includes(interest)) {
        return t.filter((tag) => tag !== interest);
      } else {
        return [...t, interest];
      }
    });
  };

  return (
    <div className="FilterContainer">
      <Header />
      <div className="FilterRadiusContainer">
        <div className="FilterRadiusTextContainer">
          <PlaceIcon />
          <span>Choose your radius</span>
        </div>
        <Slider
          className="RadiusSlider"
          aria-label="radius"
          value={radius}
          step={500}
          min={0}
          max={MaxRadius}
          marks={true}
          valueLabelDisplay="auto"
          onChange={(e, v) => setRadius(v as number)}
        />
      </div>

      <div className="FilterCategoryContainer">
        <h4>Choose your category</h4>
        <div className="FilterCategoryChipsContainer">
          <Chip
            icon={<Domain />}
            clickable
            size="small"
            color="info"
            label="General"
            variant={type === 'General' ? 'filled' : 'outlined'}
            onClick={() => setType('General')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
          <Chip
            icon={<Event />}
            clickable
            size="small"
            color="secondary"
            label="News"
            variant={type === 'News' ? 'filled' : 'outlined'}
            onClick={() => setType('News')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
          <Chip
            icon={<LunchDining />}
            size="small"
            color="success"
            label="Event"
            variant={type === 'Event' ? 'filled' : 'outlined'}
            onClick={() => setType('Event')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
        </div>
      </div>

      <div className="FilterContentContainer">
        <h4>Choose your interests</h4>

        <div className="FilterCategoryChipsContainer">
          <Chip
            size="small"
            color="success"
            label="Wellbeing"
            variant={tags.includes('wellbeing') ? 'filled' : 'outlined'}
            onClick={() => addOrRemoveInterest('wellbeing')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
          <Chip
            size="small"
            color="success"
            label="Music"
            variant={tags.includes('music') ? 'filled' : 'outlined'}
            onClick={() => addOrRemoveInterest('music')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
          <Chip
            size="small"
            color="success"
            label="Food"
            variant={tags.includes('food') ? 'filled' : 'outlined'}
            onClick={() => addOrRemoveInterest('food')}
            style={{
              color: 'black',
              marginRight: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginBottom: '5px',
              boxSizing: 'border-box',
              borderRadius: '16px',
            }}
          />
        </div>
      </div>

      <footer className="FilterFooter">
        <button onClick={saveFilters} className="SaveButton">
          Save my filters
        </button>
      </footer>
    </div>
  );
};

export default Filter;
