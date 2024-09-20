import React from "react";
import { Box } from "@mui/material";
import Retailer from "../../components/WhereToBuy/RETAILER";
import Cities from "../../components/WhereToBuy/Cities";
function WhereToBuy() {
  return (
    <Box>
    <Retailer 
        title="Find Your Retailer" 
        description="Discover authorized retailers in your area." 
      />
    <Cities/>
     
    </Box>
  );
}

export default WhereToBuy;
