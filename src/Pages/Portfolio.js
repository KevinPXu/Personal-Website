import React from 'react';
import { Divider, Grid } from '@mui/material';
import { projectList } from '../data';

function Portfolio() {
  return (
    <div
      id='Portfolio'
      style={{ height: '100vh' }}>
      <Divider
        color='#9E6328'
        variant='inset'
        //style={{ background: '#9E6328' }}
        textAlign='left'>
        Portfolio
      </Divider>
      <Grid
        container
        m={2}>
        {projectList.map((item) => (
          <Grid key={item.id}>hello {item.id}</Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
