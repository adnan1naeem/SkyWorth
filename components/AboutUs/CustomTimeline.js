import { Typography } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const TimelineContainer = styled.div`
  background-color: white;
  padding: 50px;
  display: flex;
  justify-content: center;

  .vertical-timeline::before {
    background-color: #0062b1;
  }

  .vertical-timeline-element-arrow {
    border-right: 7px solid #0062b1;
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const YearBox = styled.div`
  background-color: #0062b1;
  color: white;
  height: 7vh;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 300;
  padding-left:20px;
  font-family: 'Kanit';
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const DescriptionBox = styled.div`
  background-color: #e6e6e6;
  color: #474b51;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  font-family: 'Kanit';
  font-weight:250;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const Heading={
  marginTop: '5%',
  textAlign: "center",
  fontFamily: 'kanit',
  marginBottom: "20px",
  fontWeight: "400",
  fontSize: "2rem",
};
const DateStyled = styled.span`
  color: #0062b1;
  font-weight: bold;
  font-size: 20px;
  margin-left: 14px;
`;

const TimelineEvent = ({ date, title, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<DateStyled>{date}</DateStyled>}
    iconStyle={{
      background: "#1976d2",
      color: "#1976d2",
      border: "none",
      width: "12px",
      height: "12px",
      marginLeft: "-6px",
      top: "22px",
    }}
    contentStyle={{
      background: "transparent",
      padding: "0px",
      border: "none",
      boxShadow: "none",
    }}
    contentArrowStyle={{ borderRight: "9px solid #0062b1" }}
  >
    <EventContainer>
      <YearBox>{title}</YearBox>
      <DescriptionBox>{description}</DescriptionBox>
    </EventContainer>
  </VerticalTimelineElement>
);

const timelineData = [
  {
    date: "1988",
    title: "1988",
    description: "SKYWORTH Group was founded in April.",
  },
  {
    date: "1999",
    title: "1999",
    description: "Established SKYWORTH Lab in Silicon Valley, USA. Listed on the HK Stock Exchange in April (Stock Code: 0751).",
  },
  {
    date: "2000",
    title: "2000",
    description: "Listed on HK stock in 2000. (Stock Code: 0751)",
  },
  {
    date: "2007",
    title: "2007",
    description: "Became the co-partner and sponsor of Chinese Space Craft. Awarded as the special products for Chinese Space Craft.",
  },
  {
    date: "2013",
    title: "2013",
    description: "Launched the world's first full color gamut TV and the first OLED TV in China.",
  },
  {
    date: "2015",
    title: "2015",
    description: "Acquired Metz and Strong Media for entrance into EU market.",
  },
  {
    date: "2016",
    title: "2016",
    description: "Merged Toshiba Indonesia factory to facilitate supply chain in Southeast Asia.",
  },
  {
    date: "2018",
    title: "2018",
    description: "Set up a new brand METZ blue and landed in Europe, India, and Hong Kong, China.",
  },
  {
    date: "2019",
    title: "2019",
    description: "Announced the new global brand strategy, “Open, Share, Win-win”. SKYWORTH will integrate “Hardware, System, Content, and AIOT” into an intelligent solution.",
  },
  {
    date: "2020",
    title: "2020",
    description: "Acquired Metz and Strong Media for entrance into EU market.",
  },
  {
    date: "2021",
    title: "2021",
    description: "Merged Toshiba Indonesia factory to facilitate supply chain in Southeast Asia.",
  },  {
    date: "2022",
    title: "2022",
    description: "Set up a new brand METZ blue and landed in Europe, India, and Hong Kong, China.",
  },
];

const CustomTimeline = () => {
  return (
    <>
      <Typography sx={Heading}>SKYWORTH'S COMPANY MILESTONE</Typography>
      <TimelineContainer>
        <VerticalTimeline>
          {timelineData.map((event, index) => (
            <TimelineEvent
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </VerticalTimeline>
      </TimelineContainer>
    </>
  );
};

export default CustomTimeline;
