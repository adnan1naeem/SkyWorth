import React from "react";
import { Box } from "@mui/material";
import EventCard from "./EventCard";
import eventsData from "./Events.json"; 

export default function EventList() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
        gap: 2,
        maxWidth: "1600px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 16px", 
        mb: '5%'
      }}
    >
      {eventsData.map((event) => (
        <EventCard key={event.id} heading={event.heading} image={event.image}  />
      ))}
    </Box>
  );
}
