import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';


const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        onClick={handleClick}>
        <img
          src={ProfilePic}
          alt='My Icon'
          style={{
            width: '2em',
            height: '2em',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disablePortal={true}>
        <MenuItem onClick={handleClose}>
          <a
            href='#About'
            style={{ textDecoration: 'none', color: 'black' }}>
            About
          </a>
        </MenuItem>
        <MenuItem
          href='#Portfolio'
          onClick={handleClose}>
          <a
            href='#Portfolio'
            style={{ textDecoration: 'none', color: 'black' }}>
            Portfolio
          </a>
        </MenuItem>
        <MenuItem
          href='#Contact'
          onClick={handleClose}>
          <a
            href='#Contact'
            style={{ textDecoration: 'none', color: 'black' }}>
            Contact
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
