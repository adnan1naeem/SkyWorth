import React from "react";
import { Box, Typography } from "@mui/material";

const containerStyles = {
  width: {xs:"50vh", sm:'65vh' },
  height: {xs:"25vh", md:'16vh', lg:'14vh'},
  border: "2px solid #CCCCCC80", // Outer border
  position: "relative",
  boxSizing: "border-box",
};

const innerBoxStyles = {
  width: "calc(100% - 8px)", // Adjust width to account for outer border thickness
  height: "calc(100% - 8px)", // Adjust height to account for outer border thickness
  border: "2px solid #CCCCCC80", // Inner border
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
  fontFamily:"Kanit",
  marginTop:'35px',
  color:'#0062b1'
};

const paragraphStyles = {
  marginLeft: '24px',
  color:'#666666',
  fontFamily:"Kanit",
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
