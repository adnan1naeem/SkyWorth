import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BrandValue from "./BrandValue";

const brandData = [
  { year: "2009", value: "SKYWORTH Brand Value was 2.7 billion USD." },
  { year: "2010", value: "SKYWORTH Brand Value was 3.6 billion USD." },
  { year: "2011", value: "SKYWORTH Brand Value was 4.47 billion USD." },
  { year: "2012", value: "SKYWORTH Brand Value was 5.7 billion USD." },
  { year: "2013", value: "SKYWORTH Brand Value was 7.95 billion USD." },
  { year: "2014", value: "SKYWORTH Brand Value was 8.98 billion USD." },
];

const headingStyles = {
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "bold",
  fontSize: "2.3rem", // Adjust as needed
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginTop: '4%',
  marginBottom: '4%',
  paddingLeft: '20px', // Add padding for left side
  paddingRight: '20px', // Add padding for right side
};

const itemStyles = {
  padding: '0 16px', // Add horizontal padding to space out the grid items
  display: 'flex',
  justifyContent: 'center',
};

function BrandValueGrid() {
  return (
    <Box sx={containerStyles}>
      <Typography sx={headingStyles}>SKYWORTH’S BRAND VALUE</Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: '2%' }}>
        {brandData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
            <Box sx={itemStyles}>
              <BrandValue year={data.year} value={data.value} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BrandValueGrid;