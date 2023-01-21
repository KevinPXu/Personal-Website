import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Container, Toolbar } from '@mui/material';
function Nav() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Avatar
            alt='Kevin Xu'
            src='../public/IMG_0747.jpg'
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
