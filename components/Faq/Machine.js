import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ListComponent from "./ListCompnent";

const Machine = () => {
  const listItems = [
    "Clean exterior of the washing machine with warm water and a neutral non abrasive household detergent.",
    "Do not expose washing machine to direct sunlight and keep the machine covered when not in use.",
    "Choose the right detergent that is not harsh or heavily alkaline in nature.",
    "Clean the Magic Filter after every laundry wash.",
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
          color: "black",
          mt: "6%",
          ml: "1%",
          mb: "4%",
        }}
      >
        Care and Maintenance For Washing Machine

      </Typography>

      <Grid container spacing={1} mb={10}>
        <Grid item xs={12} md={6} lg={6}>
          {listItems.slice(0, 4).map((text, index) => (
            <ListComponent key={index} text={text} color="black" />
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          {listItems.slice(4).map((text, index) => (
            <ListComponent key={index} text={text} color="black" />
          ))}
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Machine;
