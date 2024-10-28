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
      <CenteredImageWithText
        text="SKYWORTH Pakistan Is A Joint Venture Between Skyworth China And Orient Electronics"
        text2={"for the licensed manufacturing, sales, distribution and marketing of Skyworth product portfolio in Pakistan."}
        body2={`SKYWORTH was established in 1988, with the head office located within Shenzhen High Tech Industrial Park which is honored as "China's silicon valley", and has more than 40,000 employees.`}
        ButtonText={"Read More"}
        onClick={handleReadMoreClick}
      />
      <TVProductCard />
      <Container maxWidth="xl" sx={{marginTop:'46px'}}>
        <CenteredImageWithText imageSrc={HomePage1} />
        <CenteredImageWithText
          heading={"Personalize Your TV with Skyworth Google TV"}
          imageSrc={HomePage2}
          body="Simplify your entertainment experience with Android TV. Discover 700,000+ movies and shows in one place. Ask Google to control your TV with your voice. And cast your photos, videos, and music from devices to your TV easily with Chromecast built-in."
          ButtonText={"Learn More"}
          onClick={handleLearnMore}
        />
      </Container>
      <Container maxWidth="xl" sx={{marginTop:"30px",marginBottom:"28px"}}>
        <ResponsiveTVProductGrid />
      </Container>
      <LeftAlignedBoxWithBackground bordershown={true} backgroundImage={BackgrondImages} buttonText={"View All SKYWORTH TVs"} onClick={handleLearnMore}/>
    </div>
  );
}

export default HomeScreen;
