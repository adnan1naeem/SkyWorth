import React from "react";
import { Box } from "@mui/material";
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import backgroundImage from '../../assets/backgroundImage.webp';
import topImage from '../../assets/backgroundImage.jpg';
import { useRouter } from "next/router";
import VideoCards from "../../components/media/videocard";

function WhereToBuy() {
  const router = useRouter();
  
  return (
    <Box>
      <LeftAlignedBoxWithBackground 
        Imageheight={"450px"} 
        title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} 
        description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} 
        bordershown={true} 
        backgroundImage={topImage} 
      />
      <VideoCards />
      <LeftAlignedBoxWithBackground
        Imageheight={{ xs: "400px", lg: '600px' }}
        title={"Can't find a store near you?"}
        description={"Shop by series online and get your TV shipped straight to your home."}
        buttonText={"Shop SKYWORTH TVs"}
        backgroundImage={backgroundImage}
        onClick={() => { router.push('/product') }} 
      />
    </Box>
  );
}

export default WhereToBuy;
