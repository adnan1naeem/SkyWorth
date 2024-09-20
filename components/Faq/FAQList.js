import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FAQCard from './FAQCard'; // import the above component

const faqData = [
  { title: 'Television', badgeNumber: 19 },
  { title: 'Refrigerator', badgeNumber: 13 },
  { title: 'Chest Freezer', badgeNumber: 10 },
  { title: 'Chest Freezer', badgeNumber: 10 },
];

const FAQList = () => {
  return (
    <Box sx={{ mt: 18, mx: 2, mb:'10%' }}>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            flexGrow: 1,
            height: '2px',
            background: 'linear-gradient(to left, #444, transparent)',
            width: '5%',
            mr: 1,
          }}
        />
        <Typography variant="h4" sx={{ color: '#444', textAlign: 'center',fontSize:'32px' }}>
          Browse All The FAQ
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            height: '2px', // Adjusted height
            background: 'linear-gradient(to right, #444, transparent)',
            width: '5%', // Adjusted width
            ml: 1,
          }}
        />
      </Box>
      
      {/* FAQ Cards */}
      <Grid container spacing={2} sx={{mt:'5%'}}>
        {faqData.map((faq, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{display:'flex', justifyContent:'center'}}>
            <FAQCard title={faq.title} badgeNumber={faq.badgeNumber} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQList;
