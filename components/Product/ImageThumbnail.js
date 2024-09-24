// ImageThumbnail.js
import React from 'react';
import { Box } from '@mui/material';

const ImageThumbnail = ({ image, isActive, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      width: 50,
      height: 50,
      borderRadius: 2,
      overflow: 'hidden',
      border: isActive ? '2px solid blue' : '1px solid gray',
    }}
  >
    <img
      src={image}
      alt="Thumbnail"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

export default ImageThumbnail;
