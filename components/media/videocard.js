import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const videoData = [
  {
    title: 'Product Overview',
    description: 'Learn more about the features of our latest TV models.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URLs
  },
  {
    title: 'Setup Guide',
    description: 'Follow this guide to set up your new SKYWORTH TV.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URLs
  },
  {
    title: 'Customer Reviews',
    description: 'Hear what our customers have to say about SKYWORTH TVs.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URLs
  },
];

const VideoCards = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      maxWidth="lg" 
      justifyContent="center" 
      sx={{ 
        margin: {md:"none",lg:'auto'}, // Center the grid and apply top/bottom margin
        paddingLeft: { xs: 2, sm: 3, md: 4 }, // Add some padding for smaller screens
        paddingTop:"40px",
        paddingBottom:"40px",
        paddingRight: { xs: 2, sm: 3, md: 4 }, // Equal right padding
      }}
    >
      {videoData.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ margin: 'auto', width: '100%', maxWidth: '400px' }}> {/* Responsive width */}
            <CardMedia
              component="iframe"
              height="200"
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
              sx={{
                borderRadius: '8px 8px 0 0',
                width: '100%', // Set width to 100% for responsiveness
                height: '200px', // Fixed height for consistency
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {video.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoCards;
