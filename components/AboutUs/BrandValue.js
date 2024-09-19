import React from "react";
import { Box, Typography } from "@mui/material";

const containerStyles = {
  width: {xs:"50vh", sm:'53vh' },
  height: {xs:"25vh", md:'23vh', lg:'20vh'},
  border: "2px solid #b3b3b3", // Outer border
  position: "relative",
  padding: "20px",
  boxSizing: "border-box",
};

const innerBoxStyles = {
  width: "calc(100% - 8px)", // Adjust width to account for outer border thickness
  height: "calc(100% - 8px)", // Adjust height to account for outer border thickness
  border: "2px solid #b3b3b3", // Inner border
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "4px",
  left: "4px",
  boxSizing: "border-box",
};

const headingStyles = {
  fontWeight: "bold",
  marginBottom: "8px",
  marginLeft: '24px',
  marginTop:'35px',
  color:'#0062b1'
};

const paragraphStyles = {
  marginLeft: '24px',
  color:'#666666',
  marginTop:'7px',
};

function BrandValue({ year, value }) {
  return (
    <Box sx={containerStyles}>
      <Box sx={innerBoxStyles}>
        <Typography variant="h6" component="h2" sx={headingStyles}>
          {year}
        </Typography>
        <Typography variant="body1" sx={paragraphStyles}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default BrandValue;
