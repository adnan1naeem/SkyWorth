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
    date: "1988",
    title: "1988",
    description: "Ranked 4th in China sales volume",
  },
  {
    date: "2000",
    title: "2000",
    description: "Listed on HongKong Stock Exchange",
  },
  {
    date: "2007",
    title: "2007",
    description: "Co Partner of China Aerospace",
  },
  {
    date: "2014",
    title: "2014",
    description: "Skyworth Digital was listed on Shenzen Stock Echange",
  },
  {
    date: "2015",
    title: "2015",
    description: "Acquried METZ and Strong",
  },
  {
    date: "2016",
    title: "2016",
    description: "Merged Toshiba Indonesia factory",
  },
  {
    date: "2020",
    title: "2020",
    description: "Skyworth Photovoltaic was founded",
  },
  {
    date: "2022",
    title: "2022",
    description: "Ranked Fortune China 500",
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
