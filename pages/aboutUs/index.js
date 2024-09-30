import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Banner from "../../components/AboutUs/Banner";
import BackGround from "../../components/AboutUs/BackGround";
import Vision from "../../components/AboutUs/Vision";
import AllStat from "../../components/AboutUs/AllStat";
import CustomTimeline from "../../components/AboutUs/CustomTimeline";
import BrandValueGrid from "../../components/AboutUs/BrandValueGrid";
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import BackgrondImages from './../../assets/aboutImage.jpg'
const sections = [
  {
    title: "Mission",
    text: "Dedicated to creating a better life for mankind",
  },
  {
    title: "Vision",
    text: "Become a global leader in smart appliances and information technology",
  },
  {
    title: "core value",
    text: "Technology leadership, quality first, innovation, efficiency, user first, employee-oriented, and results sharing",
  },
];

function AboutUs() {
  return (
    <Box>
      <Banner />
      <BackGround />
      <Grid container spacing={4} justifyContent={"center"} sx={{ padding: { xs: '20px', sm: '40px' } }}>
        {sections.map((section, index) => (
          <Grid item spacing={3} key={index}>
            <Vision title={section.title} text={section.text} />
          </Grid>
        ))}
      </Grid>
      <AllStat />
      < CustomTimeline />
      {/* <SkyworthSection/> */}
      < BrandValueGrid />
      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} />
    </Box>
  );
}

export default AboutUs;
