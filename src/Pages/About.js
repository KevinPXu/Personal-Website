import { Avatar } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
import React from 'react';

function About() {
  return (
    <div
      style={{ height: '100vh' }}
      id='About'
      className='container'>
      <div className='aboutHeaderContainer'>
        <h1 className='aboutHeader'>About Me</h1>
      </div>
      <p className='aboutText'>
        Hi! My name is Kevin Xu, I graduated from University of Miami with a
        Bachelors in Health Science. I deeply care about helping others and I
        have decided to pursue that through the use of technology. My interest
        was first piqued
      </p>

      <Avatar
        sx={{ width: 250, height: 250 }}
        style={{ position: 'absolute', top: '130%', right: '10%' }}
        src={ProfilePic}></Avatar>
    </div>
  );
}

export default About;
