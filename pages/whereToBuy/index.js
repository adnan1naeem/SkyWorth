import React from "react";
import { Box } from "@mui/material";
<<<<<<< Updated upstream
import Retailer from "./../../components/WhereToBuy/Retailer";
import Cities from "./../../components/WhereToBuy/Cities";
=======
import Retailer from "../../components/WhereToBuy/RETAILER";
import Cities from "../../components/WhereToBuy/Cities";

>>>>>>> Stashed changes
function WhereToBuy() {
  return (
    <Box>
      <Retailer 
        title="Find Your Retailer" 
        description="Discover authorized retailers in your area." 
      />
      
      <Box
        sx={{
          maxWidth: '1600px', // Set max width for Cities Box
          margin: '0 auto', // Center the Box
          width: '100%', // Ensure it takes full width up to max
          p: 2, // Optional padding
        }}
      >
        <Cities />
      </Box>
    </Box>
  );
}

export default WhereToBuy;
