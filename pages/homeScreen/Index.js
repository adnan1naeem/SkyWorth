import React, { useRef } from "react";
import { Box } from "@mui/material";
// import ImageSlider from "../../components/Home/Swiper";
import CenteredImageWithText from "../../components/Home/CenterImageContainer";
import TVImage from './../../assets/GoogleTV.webp'
function HomeScreen() {
  return (
    <div>
      <CenteredImageWithText
        imageSrc={TVImage}
        text="Say hello to a smarter TV"
        body="Simplify your entertainment experience with Android TV. Discover 700,000+* movies and shows in one place. Ask Google to control your TV with your voice. And cast your photos, videos, and music from devices to your TV easily with Chromecast built-in."
        ButtonText={"Learn More"}
      />
      {/* <ImageSlider/> */}
    </div>
  );
}

export default HomeScreen;
