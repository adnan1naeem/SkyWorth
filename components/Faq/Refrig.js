import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ListComponent from "./ListCompnent";

const Refrig = () => {
  const listItems = [
    "Clean the door gaskets every 3 months to keep the refrigerator surrounding clean.",
    "Remove all the items inside the refrigerator once a month and thoroughly clean it.",
    "Maintain proper temperature and humidity level to prevent food spoiling.",
    "Keep the leftover food in air-tight containers to prevent the smell circulating in the refrigerator.",
    "Keep the refrigerator level all the time to prevent the compressor from straining which may cause the refrigerator to be less efficient and potentially affect the product life-span.",
    "Do not place the refrigerator in the area that is subject to weathering conditions such as direct sunlight, wind, or rain.",
    "Do not place heavy or fragile objects, containers filled with liquid, flammable or heating devices on the top of the refrigerator.",
  ];

  return (
    <Box
      sx={{
        width: { lg: "100%" },
        margin: "0 auto",
        mt: 4,
        p: 5,
        background: "linear-gradient(90deg,#000000 0%,#002e5f 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: '1600px', // Set max width for inner Box
          margin: '0 auto', // Center the inner Box
          width: '100%', // Ensure it takes full width up to max
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "white",
            mt: "6%",
            ml: "1%",
            mb: "4%",
          }}
        >
          Care and Maintenance For Google TV
        </Typography>

        <Grid container spacing={1} mb={10}>
          <Grid item xs={12} md={6} lg={6}>
            {listItems.slice(0, 4).map((text, index) => (
              <ListComponent key={index} text={text} color="white" />
            ))}
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            {listItems.slice(4).map((text, index) => (
              <ListComponent key={index} text={text} color="white" />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Refrig;
