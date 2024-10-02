import React from "react";
import { Box } from "@mui/material";
import Cities from "./../../components/WhereToBuy/Cities";
import BackgrondImages from './../../assets/select.jpg'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import backgroundImage from '../../assets/backgroundImage.webp'
// import CentersNearby from "../../components/WhereToBuy/MapComponent";
import StoreLocator from "../../components/WhereToBuy/Maplocator";
function WhereToBuy() {
  return (
    <Box>
      <LeftAlignedBoxWithBackground title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} bordershown={true} backgroundImage={BackgrondImages} />
      <Box sx={{
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        padding: "0px 16px",
      }}>
        <StoreLocator />
      </Box>
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
      <LeftAlignedBoxWithBackground
        Imageheight={{ xs: "400px", lg: '600px' }}
        title={"Can't find a store near you?"}
        description={"Shop by series online and get your TV shipped straight to your home."}
        buttonText={"Shop SKYWORTH TVs"}
        backgroundImage={backgroundImage} />
    </Box>
  );
}

export default WhereToBuy;
