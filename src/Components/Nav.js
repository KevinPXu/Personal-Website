import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Button, Container, Toolbar } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
function Nav() {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: '#0D1D1A' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Avatar
            alt='Kevin Xu'
            src={ProfilePic}
          />
          <Button
            href='#About'
            variant='text'
            sx={{ color: 'white' }}>
            About Me
          </Button>
          <Button
            href='#Portfolio'
            variant='text'
            sx={{ color: 'white' }}>
            Portfolio
          </Button>
          <Button
            href='#Contact'
            variant='text'
            sx={{ color: 'white' }}>
            Contact Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
