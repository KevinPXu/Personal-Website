import { Avatar, Grid, Typography } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
import React from 'react';

function About() {
  return (
    <div id='About'>
      <Typography
        variant='h2'
        component='h2'
        align='center'
        my={5}
        ml={10}>
        About Me
      </Typography>
      <Grid
        container
        my={5}
        spacing={1}>
        <Grid
          xs={8}
          display='flex'
          justifyContent='center'
          alignItems='center'>
          <Typography
            mx={8}
            variant='p'
            component='p'>
            Hi! My name is Kevin Xu, I gradusted from University of Miami with a
            Bachelors in Health Science. I deeply care about helping others and
            I have decided to pursue that through the use of technology. My interest was first piqued 
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Avatar
            sx={{ width: 250, height: 250 }}
            src={ProfilePic}></Avatar>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
