import React from "react";
import ImageSlider from "./../../components/Home/Swiper";
import CenteredImageWithText from "../../components/Home/CenterImageContainer";
import TVProductCard from '../../components/Home/TVProductCard'
import { Container } from '@mui/material';
import BackgrondImages from './../../assets/select.jpg'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import HomePage1 from './../../assets/homePage1.jpg'
import HomePage2 from './../../assets/homePage2.png'
import ResponsiveTVProductGrid from "./CardData";
import { useRouter } from "next/router";
function HomeScreen() {
  const router = useRouter();

  const handleReadMoreClick = () => {
    router.push('/aboutUs');
  };
  const handleLearnMore=()=>{
    router.push('/product');
  }

  return (
    <div >
      <ImageSlider />
      <div style={{marginTop:{xs:'10px',md:'40px'}}}>
      <CenteredImageWithText
        text="SKYWORTH Pakistan is 100% hold by SKYWORTH Group."
        body="SKYWORTH was established in 1988, with the head office located within Shenzhen High Tech Industrial Park which is honored as “China’s silicon valley”, and has more than 40,000 employees."
        body2="SKYWORTH is a large-scale high-tech corporation mainly engaged in the development and manufacturing of consumer electronics, display devices, digital set top boxes, security monitors, network communication, semi-conductors, refrigerators,washing machines, cell phones and LED lighting etc."
        ButtonText={"Read More"}
        onClick={handleReadMoreClick}
      />
      </div>
      <TVProductCard />
      <Container maxWidth="xl" sx={{marginTop:'40px'}}>
        <CenteredImageWithText imageSrc={HomePage1} />
        <CenteredImageWithText
          heading={"Personalize Your TV with Upgradeable Google Licensed Orient Google TV"}
          imageSrc={HomePage2}
          body="Simplify your entertainment experience with Android TV. Discover 700,000+* movies and shows in one place. Ask Google to control your TV with your voice. And cast your photos, videos, and music from devices to your TV easily with Chromecast built-in."
          ButtonText={"Learn More"}
          onClick={handleLearnMore}
        />
      </Container>
      <Container maxWidth="xl" sx={{marginTop:"20px"}}>
        <ResponsiveTVProductGrid />
      </Container>
      <LeftAlignedBoxWithBackground bordershown={true} backgroundImage={BackgrondImages} buttonText={"View All SKYWORTH TVs"} onClick={handleLearnMore}/>
    </div>
  );
}

export default HomeScreen;
