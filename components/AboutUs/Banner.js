import React from "react";
import { Box } from "@mui/material";
import AboutImage from './../../assets/AboutMainImage.jpg';
// Define styles as objects
const bannerContainerStyles = {
  height: {
    xs: "70vh",
    lg: "60vh",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const imageContainerStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

function Banner() {
  return (
    <Box sx={bannerContainerStyles}>
      <Box sx={imageContainerStyles}>
        <img
          src={AboutImage?.src}
          alt="main"
          style={imageStyles}
        />
      </Box>
    </Box>
  );
}

export default Banner;
