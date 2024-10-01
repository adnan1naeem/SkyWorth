import React from "react";
import { Box } from "@mui/material";
import Retailer from "./../../components/WhereToBuy/Retailer";
import Search from "../../components/Faq/Search";
import FAQList from "../../components/Faq/FAQList";
import Refrig from "../../components/Faq/Refrig";
import BackgrondImages from './../../assets/select.jpg'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import { useRouter } from 'next/router';
import Banner from "../../components/AboutUs/Banner";

function Faq() {
  const router = useRouter();
  const handleLearnMore = () => {
    router.push("/product");
  };
  return (
    <Box>
    <Banner />
      {/* <Retailer
        title="FAQ"
        description="Find your frequently asked questions here"
      /> */}
      <Search />
      <FAQList />
      <Refrig />
      <Box sx={{mt:3}}>
      <LeftAlignedBoxWithBackground
        bordershown={true}
        backgroundImage={BackgrondImages}
        buttonText={"View All SKYWORTH TVs"}
        onClick={handleLearnMore}
      />
      </Box>
      
      {/* <Machine/>
      <Freezer/> */}
    </Box>
  );
}

export default Faq;
