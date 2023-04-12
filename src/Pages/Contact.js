import React from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import Mail from '../Components/Mail.js';
//import WavesOpacity from '../Assets/images/wavesOpacity.svg';

function Contact() {
  return (
    <div
      id='Contact'
      style={{
        height: '100vh',
      }}>
      <h1 className='contactHeader'>Contact Me</h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '5px',
        }}>
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
        <Mail />
      </Box>
    </div>
  );
}

export default Contact;
