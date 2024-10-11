import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard"; // Adjust the import path as needed
import data from './about.json'; // Import your JSON data
import { Box, Typography } from "@mui/material";

function AboutSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data.items) {
      setItems(data.items);
    }
  }, []);

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '16px',
    marginBottom: "10px"
  };

  const mediaQuery = `@media (max-width: 768px) {
    .about-section {
      grid-template-columns: repeat(2, 1fr); 
    }
  }`;

  useEffect(() => {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(mediaQuery));
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box>
      <Typography sx={{textAlign: "center",mt: "60px",color:"grey",fontSize: "30px",fontWeight: "250",fontFamily:'kanit',}}>
        SKYWORTH Honor
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
          gap: 2,
          maxWidth: "1600px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 16px",
          mb: '5%',
        }}
      >
        {items.map((item, index) => (
          <AboutCard
            key={index}
            image={item.image}
            descriptions={item.description.map(desc => desc)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default AboutSection;
