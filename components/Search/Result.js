import React from "react";
import { Box, Typography } from "@mui/material";

const Result = ({resultSearch}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Typography variant="h4" component="h1" color="textPrimary">
      Result For "{resultSearch}"
       
      </Typography>
    </Box>
  );
};

export default Result;
