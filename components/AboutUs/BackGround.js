import React from "react";
import { Box, Typography } from "@mui/material";


const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  margin: "20px auto",
  backgroundColor: "#fff",
  boxShadow: "0px 16px 16px 16px rgba(0,0,0,0.1)",
  textAlign: "center",
  mt: "20px",
  mb: "20px",
  overflow: "hidden",
  pt: "65px",
  pb: "65px",
};

const headingStyles = {
  marginBottom: "24px",
  fontWeight: "bold",
  color: "#0069c8",
  lineHeight: 1.2,
};

const subheadingStyles = {
  marginBottom: "24px",
  color: "#333",
  lineHeight: 1.5,
  width: "90%",
};

const bodyTextStyles = {
  lineHeight: 1.8,
  color: "#333",
  width: "90%",
};

function BackGround() {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h4" component="h1" sx={headingStyles}>
        SKYWORTH BACKGROUND
      </Typography>
      <Typography variant="body1" sx={subheadingStyles}>
        SKYWORTH Development Malaysia Sdn. Bhd. was established on Nov 28, 2016;
        it is 100% held by SKYWORTH Group.
      </Typography>
      <Typography variant="body1" sx={bodyTextStyles}>
        SKYWORTH was established in 1988, with the head office located within
        Shenzhen High Tech Industrial Park, which is honored as “China’s Silicon
        Valley”, and has more than 40,000 employees. SKYWORTH is a large-scale
        high-tech corporation mainly engaged in the development and
        manufacturing of consumer electronics, display devices, digital set-top
        boxes, security monitors, network communication, semiconductors,
        refrigerators, washing machines, cell phones, and LED lighting, etc. In
        2000, SKYWORTH was listed on the main board of the HK Stock Exchange
        (HK0751). After a development of more than 28 years, SKYWORTH has grown
        to be one of the Top Five Color TV brands in the world and a top brand
        in the Chinese display industry market.
      </Typography>
    </Box>
  );
}

export default BackGround;
