import './NewPost.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Domain, Event, LunchDining, Place } from '@mui/icons-material';
import { getGeocoding, publishPostWithGeoData } from '../api';

import Header from '../components/common/Header';
import React from 'react';
import { useState } from 'react';

function NewPost() {
  const [title, setTitle] = useState('Post something here ...');
  const [location, setLocation] = useState('Suggested location ...');
  const [locations, setLocations] = useState([] as string[]);
  const [modalView, setModalView] = useState(false);
  const [type, setType] = useState('Event');
  const [text, setText] = useState('');
  const [wellbeing, setWellbeing] = useState(false);
  const [music, setMusic] = useState(false);
  const [food, setFood] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F8A82F',
        dark: '#F8A82F',
      },
      success: {
        main: '#9BF8D6',
        dark: '#9BF8D6',
      },
      info: {
        main: '#FD93FF',
        dark: '#FD93FF',
      },
      secondary: {
        main: '#D9B4FF',
        dark: '#D9B4FF',
      },
    },
  });
  const addNewPost = () => {
    const tags = [type];

    publishPostWithGeoData({
      id: 'id' + Math.random() * 100,
      name: 'Sanjeev',
      title,
      locationName: location,
      postingType: type,
      tags,
      text,
    });
  };

  if (locations.length === 0) {
    getGeocoding().then((data: any) => {
      console.log(data);
      setLocation(data[0]);
      setLocations(data.slice(0, 6));
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '15px' }}>
        <Header />
        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
          <input
            contentEditable="true"
            suppressContentEditableWarning={true}
            className="new-post-title"
            style={{
              fontFamily: 'Tiempos',
              color: title.startsWith('Post') ? '#C6C6C6' : 'black',
              fontSize: '24px',
            }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onClick={() => setTitle('')}
          />
        </div>
        <div
          style={{
            marginLeft: '20px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <div>
              <Place />
            </div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                fullWidth
                className="location-open-select"
                open={modalView}
                onClose={() => setModalView(false)}
                onOpen={() => setModalView(false)}
                value={location}
                label=""
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations?.map((location: string, index: number) => (
                  <MenuItem value={location} key={index}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <input
              type={'select'}
              style={{
                marginLeft: '10px',
                fontWeight: '700',
                fontSize: '22px',
              }}
              value={location}
            /> */}
          </div>
          <div
            style={{
              color: '#F8A82F',
              textDecoration: 'underline',
              position: 'absolute',
              right: '35px',
            }}
            onClick={() => setModalView(true)}
          >
            Edit
          </div>
        </div>
        <div>
          <h4 style={{ marginLeft: '20px' }}>What are you posting about?</h4>
        </div>
        <div style={{ marginLeft: '20px' }}>
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
        <div>
          <h4 style={{ marginLeft: '20px' }}>
            Add tags{' '}
            <span style={{ color: '#C8C8C8', fontSize: '12px' }}>optional</span>
          </h4>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Chip
            size="small"
            color="success"
            label="Wellbeing"
            variant={wellbeing ? 'filled' : 'outlined'}
            onClick={() => setWellbeing(!wellbeing)}
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
            variant={music ? 'filled' : 'outlined'}
            onClick={() => setMusic(!music)}
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
            variant={food ? 'filled' : 'outlined'}
            onClick={() => setFood(!food)}
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
        <div style={{ marginLeft: '20px', paddingRight: '20px' }}>
          <h4>Tell us about this location</h4>
          <TextField
            minRows="4"
            fullWidth
            multiline
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tell us whats going on"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            width: '90%',
            justifyItems: 'center',
          }}
        >
          <div style={{ width: '80%', margin: 'auto' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={addNewPost}
              style={{
                borderRadius: '65px',
                height: '50px',
                color: 'white',
                boxShadow: 'none',
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default NewPost;
