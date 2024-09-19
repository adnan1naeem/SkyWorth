import React from "react";
import { Box } from "@mui/material";

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
          src="https://skyworth.com.my/wp-content/uploads/2023/08/beautiful-architecture-building-exterior-cityscape-singapore-city-skyline.jpg"
          alt="main"
          style={imageStyles}
        />
      </Box>
    </Box>
  );
}

export default Banner;
