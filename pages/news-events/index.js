import React from "react";
import { Box } from "@mui/material";
import Retailer from "../../components/WhereToBuy/Retailer";
import EventCard from "../../components/EventsNews/EventCard";
import EventList from "../../components/EventsNews/EventList";


function NewsEvents() {

  return (
    <Box mt={12}>
     <Retailer
        title="NEWS & EVENTS" 
        description="Stay informed with the latest headlines, breaking news, and insightful articles on our News and Event page. Discover what’s happening in SKYWORTH community." 
      />
      <EventList/>
    </Box>
  );
}

export default NewsEvents;
