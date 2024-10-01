import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/kbSection/header";
import Search from "../../components/Faq/Search";
import QuestionList from "../../components/kbSection/QuestionList";
import { useRouter } from 'next/router';
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import BackgrondImages from './../../assets/select.jpg'
import Banner from "../../components/AboutUs/Banner";

function KbSection() {
  const router = useRouter();
  const { title } = router.query;
  const handleLearnMore = () => {
    router.push("/product");
  };
  return (
    <Box sx={{mt:'6%'}}>
        <Banner />
      {/* <Header title ={title}/> */}
      <Search />
      <QuestionList title ={title}/>
      <Box sx={{mt:3}}>
      <LeftAlignedBoxWithBackground
        bordershown={true}
        backgroundImage={BackgrondImages}
        buttonText={"View All SKYWORTH TVs"}
        onClick={handleLearnMore}
      />
      </Box>
    </Box>
  );
}

export default KbSection;
