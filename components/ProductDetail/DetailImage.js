import React from 'react';
import { Grid, Card, CardMedia, Box } from '@mui/material';

const DetailImages = ({ detailImages }) => {
  return (
    <Box sx={{ paddingBottom: '30px' }}>
      <Grid container spacing={2}>
        {detailImages?.detailImages?.map((image, index) => (
          <Grid item xs={12} key={index}> {/* Make each image span 12 columns (full width) */}
            <Card sx={{ boxShadow: 'none', marginBottom: '30px' }}>
              <CardMedia
                component="img"
                image={image}
                alt={`Detail Image ${index + 1}`}
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DetailImages;
