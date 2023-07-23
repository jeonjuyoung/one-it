import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ratingProps{
  readOnly?:boolean
  value:number;
}

export default function StarRating(props:ratingProps) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" value={props?.value} precision={0.5} readOnly={props?.readOnly || false} />
    </Stack>
  );
}