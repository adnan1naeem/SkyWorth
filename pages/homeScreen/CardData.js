import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CardComponent from './../../components/Home/CardComponent';

const cardData = [
  { title: 'Free Shipping', description: 'All purchases of SKYWORTH TV pricing include Free Shipping.', buttonText: 'Learn More' },
  { title: 'Product Warranty', description: 'SKYWORTH offers a one-year warranty on labor and parts from date of purchase.', buttonText: 'Learn More' },
  { title: 'Unmatched Customer Service & Help', description: 'We’re here to answer your product questions and guide you through the process.', buttonText: 'Learn More' }
];

const ResponsiveTVProductGrid = () => (
  <Container sx={{ margin: '0 auto', padding: '40px 0' }} maxWidth={"lg"}>
    <Grid container spacing={1} justifyContent={{ xs: "center", lg: "flex-start" }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardComponent 
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ResponsiveTVProductGrid;
