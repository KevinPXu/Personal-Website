import React from 'react';
import { Divider, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLaptopCode,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';

function Contact() {
  return (
    <div
      id='Contact'
      style={{ height: '20vh' }}>
      <Divider
        color='#9E6328'
        variant='inset'
        textAlign='left'>
        Contact
      </Divider>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton href='https://www.linkedin.com/in/kevin-xu98/'>
          <FontAwesomeIcon
            icon={faSitemap}
            size='3x'
            style={{ padding: '40px' }}
          />
        </IconButton>
        <IconButton href='https://github.com/KevinPXu'>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size='3x'
            style={{ padding: '40px' }}
          />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon
            icon={faEnvelope}
            size='3x'
            style={{ padding: '40px' }}
          />
        </IconButton>
      </Box>
    </div>
  );
}

export default Contact;
