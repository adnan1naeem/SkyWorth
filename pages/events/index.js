import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import EventCard from "../../components/Events/EventCard";

function Events() {
  return <Box sx={{ mt: "10%",mb:'10%' }}>
  <EventCard/>
  
  </Box>;
}

export default Events;
