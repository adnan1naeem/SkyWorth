import React from 'react';
import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import CardComponent from './../../components/Home/CardComponent';

const cardData = [
  { title: 'Product Selection', description: 'Skyworth products offer unmatched quality and performance. To make selection of any of the Skyworth TV according to your preference of technology and features please click below.', buttonText: 'View Products', route: '/product' },
  { title: 'Product Warranty', description: 'Click here for your product warranty registration and further to know more about warranty offerings according to product types.', buttonText: 'Click here', route: '/WarrentyPolicy' },
  { title: 'Efficient Customer Service', description: 'Just let us know about any of your queries regarding product types, technologies and any of the features or if you need any help regarding product performance and working issues.', buttonText: 'Click here', route: '/CusomerSupport' }
];

const ResponsiveTVProductGrid = () => {
  const router = useRouter();

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <Container sx={{ margin: '0 auto', padding: '40px 0' }} maxWidth={"lg"}>
      <Grid container spacing={1} justifyContent={{ xs: "center", lg: "flex-start" }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent 
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              onClick={() => handleCardClick(card.route)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResponsiveTVProductGrid;
