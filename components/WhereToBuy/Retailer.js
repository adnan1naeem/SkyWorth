import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    height: "40vh",
    backgroundColor: "#0069c8",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white", 
    padding: 2, 
  },
  heading: {
    variant: "h3",
    gutterBottom: true,
    fontFamily: 'Kanit', 
    fontWeight: '500',
    opacity: 0, // Start as invisible
    transform: 'translateY(20px)', // Start slightly below
    transition: 'opacity 0.5s ease, transform 0.5s ease', // Transition for both opacity and transform
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
    fontSize: '16px',
    fontFamily: 'Kanit', 
    fontWeight: '400',
    opacity: 0, // Start as invisible
    transform: 'translateY(20px)', // Start slightly below
    transition: 'opacity 0.5s ease, transform 0.5s ease', // Transition for both opacity and transform
    width:{xs:'100%', sm:"70%"}
  },
};

function Retailer({ title = "RETAILER", description = "Locate your nearest retail shops in our list of authorised retailers by state." }) {
  const [isVisible, setIsVisible] = useState(false);
  const retailerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 700); // Delay for 1 second
          observer.unobserve(retailerRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (retailerRef.current) {
      observer.observe(retailerRef.current);
    }

    return () => {
      if (retailerRef.current) {
        observer.unobserve(retailerRef.current);
      }
    };
  }, []);

  return (
    <Box ref={retailerRef} sx={styles.container}>
      <Typography 
        {...styles.heading} 
        sx={{
          ...styles.heading,
          opacity: isVisible ? 1 : 0, // Fade in when visible
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Slide effect from below
          
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{
          ...styles.paragraph,
          opacity: isVisible ? 1 : 0, // Fade in when visible
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Slide effect from below
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default Retailer;
