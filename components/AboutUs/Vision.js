import React from "react";
import { Box, Typography } from "@mui/material";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  textAlign: "center",
  fontFamily:"Kanit",
  padding: "20px",
};

const headingStyles = {
  fontWeight: "bold",
  color: "black",
  fontFamily:"Kanit",
  marginBottom: "16px",
};

const paragraphStyles = {
  color: "black",
  width: "20rem",
  lineHeight: 1.9,
  fontFamily:"Kanit",
  whiteSpace: 'pre-line',
  height:{md:'80px',lg:'100px'},
  fontWeight:250,
};

function Vision({ title, text }) {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6" component="h6" sx={headingStyles}>
        {title}
      </Typography>
      <Typography variant="body1" sx={paragraphStyles}>
        {text}
      </Typography>
    </Box>
  );
}

export default Vision;
