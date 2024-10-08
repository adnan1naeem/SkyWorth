import React from "react";
import { Box, Typography } from "@mui/material";
// import Retailer from "../../components/WhereToBuy/Retailer";
// import EventCard from "../../components/EventsNews/EventCard";
// import EventList from "../../components/EventsNews/EventList";

import { motion } from "framer-motion";
function NewsEvents() {

  return (
    <Box mt={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Typography variant="h4" fontSize={"24px"} fontFamily={"kanit"}color="textSecondary" align="center">
          No News & Events
        </Typography>
      </motion.div>
     {/* <Retailer
        title="No News & Events'" 
        description="Stay informed with the latest headlines, breaking news, and insightful articles on our News and Event page. Discover what’s happening in SKYWORTH community." 
      />
      <EventList/> */}
    </Box>
  );
}

export default NewsEvents;
