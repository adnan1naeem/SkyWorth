import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@mui/material';
import Image3 from './../../assets/TVImage3.png';
import Image2 from './../../assets/TVImage2.png';
import Image1 from './../../assets/TVImage1.png';
const tvProducts = [
  {
    title: '4K OLED',
    description: 'OLED display technology delivers the best black levels, color highlights, and the widest viewing angle experience to every seat in the room.',
    image: Image1,
    buttonText: 'Shop OLED TVs',
  },
  {
    title: '4K UHD',
    description: 'Experience true colors with SKYWORTH HDR technology that renders high contrast images, deep black levels, and bright color highlights.',
    image: Image2,
    buttonText: 'Shop 4K TVs',
  },
  {
    title: 'FHD / HD',
    description: 'Do more on your TV with voice. Ask Google to search 700,000+ movies and shows, get recommendations, and control smart home devices.',
    image: Image3,
    buttonText: 'Shop FHD TVs',
  }
];

const TVProductCard = ({ title, description, image, buttonText }) => (
  <Card
    sx={{
      maxWidth: 345,
      margin: 'auto',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      textAlign: 'center',
    }}
  >
    <CardMedia
      component="img"
      height="auto"
      image={image.src}
      alt={title}
      sx={{ objectFit: 'contain', padding: '16px', height: '200px' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography sx={{fontSize:{xs:18,sm:18,md:18,lg:20},fontWeight:'light'}}color="black">
        {description}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          marginTop: '16px',
          borderRadius: '50px',
          padding: '15px 35px',
          borderColor: '#CCCCCC',
          color: '#000',
          '&:hover': {
            backgroundColor: '#016AC8',
            color: '#fff',
          },
        }}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const ResponsiveTVProductGrid = () => (
  <Container sx={{ padding: '40px 0',marginTop:'50px' }}>
    <Typography variant="h4" sx={{fontWeight:'light',padding:'10px'}} align="center" gutterBottom>
      Choosing the right SKYWORTH TV for you.
    </Typography>
    <Grid container spacing={4}>
      {tvProducts.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <TVProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ResponsiveTVProductGrid;
