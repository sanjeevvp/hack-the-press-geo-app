import { Button, Chip, TextField } from '@mui/material';
import {
  ChevronLeft,
  Domain,
  Event,
  LunchDining,
  Nightlife,
  Place,
} from '@mui/icons-material';
import React, { useState } from 'react';

import { publishPostWithGeoData } from '../api';

function NewPost() {
  const [title, setTitle] = useState('');
  const [news, setNews] = useState(false);
  const [event, setEvent] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [music, setMusic] = useState(false);
  const [text, setText] = useState('');
  const addNewPost = () => {
    const tags = [];
    if (news) {
      tags.push('news');
    }
    if (event) {
      tags.push('event');
    }
    if (lunch) {
      tags.push('lunch');
    }
    if (music) {
      tags.push('music');
    }

    publishPostWithGeoData({
      name: 'Sanjeev',
      title,
      locationName: 'Newspeak House',
      postingType: 'General',
      tags,
      text,
    });
  };
  return (
    <div style={{ padding: '15px' }}>
      <div
        style={{ display: 'inline-flex', alignItems: 'center' }}
        onClick={() => history.back()}
      >
        <div>
          <ChevronLeft style={{}} />{' '}
        </div>
        <span
          style={{
            color: 'grey',
            marginLeft: '10px',
            marginBottom: '5px',
            textDecoration: 'underline',
          }}
        >
          Back
        </span>
      </div>
      <div>
        <h1 style={{ marginLeft: '20px' }}>Post something</h1>
      </div>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '20px',
        }}
      >
        <div>
          <Place />
        </div>
        <p style={{ marginLeft: '10px', fontWeight: '700', fontSize: '16px' }}>
          Newspeak House
        </p>
      </div>
      <div style={{ marginLeft: '20px', paddingRight: '20px' }}>
        <h4>Give your post a title</h4>
        <TextField
          size="small"
          id="outlined-basic"
          fullWidth
          label=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: '20px' }}>What are you posting about?</h4>
      </div>
      <div style={{ marginLeft: '20px' }}>
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
          icon={<Event />}
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
        <Chip
          icon={<LunchDining />}
          clickable
          size="small"
          color="success"
          label="Lunch"
          variant={lunch ? 'filled' : 'outlined'}
          onClick={() => setLunch(!lunch)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
          }}
        />
        <Chip
          icon={<Nightlife />}
          clickable
          size="small"
          color="success"
          label="Music"
          variant={music ? 'filled' : 'outlined'}
          onClick={() => setMusic(!music)}
          style={{
            marginRight: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '5px',
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
        style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '20px' }}
      >
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={addNewPost}
        >
          Post
        </Button>
      </div>
    </div>
  );
}

export default NewPost;
