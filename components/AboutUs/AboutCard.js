import React, { useState } from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { keyframes } from '@mui/system';

function AboutCard({ image, descriptions }) {

  const scrollAnimation = keyframes`
    0% { transform: translateY(70%); }  
    100% { transform: translateY(-100%); }  
  `;

  // State to manage the current description index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine if the animation should be applied
  const shouldAnimate = descriptions.length > 8;

  // Function to handle hover
  const handleMouseEnter = () => {
    setCurrentIndex(0); 
  };

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, 
        height: 'auto',
        margin: "auto",
        borderRadius: 0,
        mt: 2,
        mb: 0,
        position: "relative",
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 1,
          backgroundColor: "#0069c8", 
        },
      }}
      onMouseEnter={handleMouseEnter} 
    >
      
      <CardMedia
        component="img"
        image={image} 
        alt="Sample Image"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover", 
        }}
      />

     
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 255, 0)", // Initial background color
          opacity: 0, // Initially hidden
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "opacity 0.5s ease, background-color 0.5s ease", // Smooth transition
          overflow: "hidden",
        }}
      >
       
        <Box
          className="scrolling-text"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            animation: shouldAnimate ? `${scrollAnimation} 15s linear infinite` : 'none', 
            height: "100%",
            width: "100%",
            padding: { xs: "10px", md: "20px" }, 
            opacity: 1, 
            transform: `translateY(-${currentIndex * (100 / descriptions.length)}%)`, 
          }}
        >
          {descriptions.map((description, index) => (
            <Typography
              key={index}
              variant="body1"
              component="div"
              sx={{
                textAlign: "center",
                fontSize: { xs: "10px", md: "12px" }, 
                padding: "10px 0", 
                color: "white",
              }}
            >
              {description.text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default AboutCard;
