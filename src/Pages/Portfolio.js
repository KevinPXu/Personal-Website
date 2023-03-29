import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import { projectList } from '../data';

function Portfolio() {
  return (
    <Box
      id='Portfolio'
      style={{ height: '100vh' }}
      sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Divider textAlign='left'>Portfolio</Divider>
      <Grid
        container
        m={2}>
        {projectList.map((item) => (
          <Grid key={item.id}>hello {item.id}</Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
