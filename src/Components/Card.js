import React from 'react';
import { Card as MuiCard, CardMedia } from '@mui/material';


function Card({imgUrl}) {
  return <MuiCard sx={{ maxWidth: 345 }}>
    <CardMedia component="img" alt="project img" src={imgUrl} />
  </MuiCard>;
}

export default Card;
