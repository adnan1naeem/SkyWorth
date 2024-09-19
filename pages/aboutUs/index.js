import React from "react";
import { Box, Grid } from "@mui/material";
import Banner from "../../components/AboutUs/Banner";
import BackGround from "../../components/AboutUs/BackGround";
import Vision from "../../components/AboutUs/Vision";
import AllStat from "../../components/AboutUs/AllStat";
import CustomTimeline from "../../components/AboutUs/CustomTimeline";
import SkyworthSection from "../../components/AboutUs/SkyworthSection";
import BrandValue from "../../components/AboutUs/BrandValue";
import BrandValueGrid from "../../components/AboutUs/BrandValueGrid";

const sections = [
  {
    title: "Mission",
    text: "Wholeheartedly provide mankind with wonderful, healthy, and technological life",
  },
  {
    title: "Vision",
    text: "To be the leader of the global electronics industry",
  },
  {
    title: "Sense Of Worth",
    text: "Everyone in SKYWORTH is the head of the train and the backbone of the team",
  },
];

function AboutUs() {
  return (
    <Box>
      <Banner />
      <BackGround />
      <Grid container spacing={4} sx={{ padding: { xs: '20px', sm: '40px' } }}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Vision title={section.title} text={section.text} />
          </Grid>
        ))}
      </Grid>
      <AllStat/>
      <CustomTimeline/>
      <SkyworthSection/>
      <BrandValueGrid />
    </Box>
  );
}

export default AboutUs;
