import React from "react";
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
  },
  paragraph: {
    textAlign: "center",
  },
};

function Retailer({ title = "RETAILER", description = "Locate your nearest retail shops in our list of authorised retailers by state." }) {
  return (
    <Box sx={styles.container}>
      <Typography {...styles.heading}>{title}</Typography>
      <Typography variant="body1" sx={styles.paragraph}>
        {description}
      </Typography>
    </Box>
  );
}

export default Retailer;
