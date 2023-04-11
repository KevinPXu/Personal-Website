import React from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLaptopCode,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import WavesOpacity from '../Assets/images/wavesOpacity.svg';

function Contact() {
  return (
    <div
      id='Contact'
      style={{
        backgroundImage: `url(${WavesOpacity})`,
        transform: `rotateX(180deg)`,
        height: '100vh',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '5px',
        }}
        style={{ transform: `rotateX(180deg)` }}>
        <IconButton href='https://www.linkedin.com/in/kevin-xu98/'>
          <FontAwesomeIcon
            icon={faSitemap}
            size='2x'
            color='white'
            style={{ padding: '40px' }}
          />
        </IconButton>
        <IconButton href='https://github.com/KevinPXu'>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size='2x'
            color='white'
            style={{ padding: '40px' }}
          />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon
            icon={faEnvelope}
            size='2x'
            color='white'
            style={{ padding: '40px' }}
          />
        </IconButton>
      </Box>
    </div>
  );
}

export default Contact;
