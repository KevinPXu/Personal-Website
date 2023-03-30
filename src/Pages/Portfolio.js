import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import { projectList } from '../data';
import Card from '../Components/Card';

function Portfolio() {
  return (
    <Box
      id='Portfolio'
      sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Divider textAlign='left'>Portfolio</Divider>
      <Grid
        container
        spacing={2}>
        {projectList.map((item) => (
          <Grid
            item
            xs={6}
            md={4}
            key={item.id}>
            <Card
              title={item.title}
              description={item.description}
              url={item.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
