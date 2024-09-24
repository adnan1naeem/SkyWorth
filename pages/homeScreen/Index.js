import React, { useRef } from "react";
import ImageSlider from "./../../components/Home/Swiper";
import CenteredImageWithText from "../../components/Home/CenterImageContainer";
import TVImage from './../../assets/GoogleTV.webp'
import TVProductCard from '../../components/Home/TVProductCard'
import { Grid, Typography, Checkbox, FormControlLabel, Pagination, Button, Card, CardMedia, CardContent, CardActions, Container } from '@mui/material';
import BackgrondImages from './../../assets/backgroundImage.webp'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
function HomeScreen() {
  return (
    <div >
      <ImageSlider />
      <TVProductCard />
      <Container maxWidth="xl">
        <CenteredImageWithText
          imageSrc={TVImage}
          text="Say hello to a smarter TV"
          body="Simplify your entertainment experience with Android TV. Discover 700,000+* movies and shows in one place. Ask Google to control your TV with your voice. And cast your photos, videos, and music from devices to your TV easily with Chromecast built-in."
          ButtonText={"Learn More"}
        />
        <CenteredImageWithText imageSrc={TVImage} heading="Quantum Dot Technology banner" />
        <CenteredImageWithText imageSrc={TVImage} heading="Sound Bar Banner" />
        <CenteredImageWithText imageSrc={TVImage} heading="Gaming Banner" />
        <CenteredImageWithText imageSrc={TVImage} heading="HDR" />
      </Container>

      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} buttonText={"Shop All SKYWORTH TVs"} />
    </div>
  );
}

export default HomeScreen;
