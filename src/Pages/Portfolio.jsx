import React from 'react';
import { Grid } from '@mui/material';
import { projectList } from '../data';
import Card from '../Components/Card';

function Portfolio() {
  return (
    <div id='Portfolio'>
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
              imageURL={item.imageURL}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
