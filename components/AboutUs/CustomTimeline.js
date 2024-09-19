import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from 'styled-components';

// All in one file

const TimelineContainer = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
  display: flex;
  justify-content: center;
`;
const YearBox = styled.div`
  background-color: #1976d2; /* Blue color for the year box */
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px 8px 0 0; /* Rounded corners at the top */
`;

// Description box styling
const DescriptionBox = styled.div`
  background-color: #ffffff;
  color: #6c757d; /* Gray color for the text */
  padding: 20px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-top: none; /* No border on top to connect to the year box */
  border-radius: 0 0 8px 8px; /* Rounded corners at the bottom */
`;

const TimelineEvent = ({ date, title, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={date}
    iconStyle={{ background: "#007bff", color: "#fff" }}
  >
    <YearBox>{title}</YearBox>
    <DescriptionBox>{description}</DescriptionBox>
  </VerticalTimelineElement>
);

const CustomTimeline = () => {
  return (
    <TimelineContainer>
      <VerticalTimeline>
        <TimelineEvent
          date="1988"
          title="1988"
          description="SKYWORTH Group was founded in April."
        />
        <TimelineEvent
          date="1999"
          title="1999"
          description="Established SKYWORTH Lab in Silicon Valley, USA. Listed on the HK Stock Exchange in April (Stock Code: 0751)."
        />
        <TimelineEvent
          date="2000"
          title="2000"
          description="Listed on HK stock in 2000. (Stock Code: 0751)"
        />
      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default CustomTimeline;
