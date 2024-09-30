import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@mui/material';
import Image1 from './../../assets/QLED1.png';
import Image2 from './../../assets/QLED.png';
import Image3 from './../../assets/UHD.png';
import Image4 from './../../assets/FHD.png';
const tvProducts = [
  {
    title: 'QLED Mini',
    description: 'OLED display technology delivers the best black levels, color highlights, and the widest viewing angle experience to every seat in the room.',
    image: Image1,
    buttonText: 'Shop OLED TVs',
  },
  {
    title: 'QLED',
    description: 'Experience true colors with SKYWORTH HDR technology that renders high contrast images, deep black levels, and bright color highlights.',
    image: Image2,
    buttonText: 'Shop 4K TVs',
  },
  {
    title: 'UHD',
    description: 'Do more on your TV with voice. Ask Google to search 700,000+ movies and shows, get recommendations, and control smart home devices.',
    image: Image3,
    buttonText: 'Shop FHD TVs',
  },
  {
    title: 'FHD/HD',
    description: 'Do more on your TV with voice. Ask Google to search 700,000+ movies and shows, get recommendations, and control smart home devices.',
    image: Image4,
    buttonText: 'Shop FHD TVs',
  }
];

const TVProductCard = ({ title, description, image, buttonText }) => (
  <Card
    sx={{
      maxWidth: 335,
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
      <Typography gutterBottom sx={{
        fontSize: '1.5rem',
        color: '#0c3034',
        fontWeight: 400,
        textAlign: 'center',
      }} component="div">
        {title}
      </Typography>
      <Typography sx={{
        height: { md: "12vh", lg: "17vh", xl: "14vh", },
        fontWeight: 250,
        fontSize: '1.1rem',
      }} color="black">
        {description}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          marginTop: '16px',
          borderRadius: '10px',
          padding: '15px 35px',
          borderColor: 'black',
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
  <Container sx={{ marginTop: '50px' }} maxWidth={"xl"}>
    <Typography sx={{
      fontSize: '1.5rem',
      color: '#0c3034',
      fontWeight: 400,
      textAlign: 'center',
      textTransform: 'capitalize',
    }} align="center" gutterBottom>
      Choosing the right SKYWORTH TV for you.
    </Typography>
    <Grid container spacing={2} justifyContent={{ xs: "center" }}>
      {tvProducts.map((product, index) => (
        <Grid item margin={0} key={index}>
          <TVProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ResponsiveTVProductGrid;
