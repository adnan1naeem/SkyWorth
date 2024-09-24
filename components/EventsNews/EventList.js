import React from "react";
import { Box } from "@mui/material";
import EventCard from "./EventCard";


const events = [
  {
    id: 1,
    heading: "SKYWORTH New Product Launching 1st February 2024: Elevate Your Lifestyle",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-cheras-2.jpg",
  },
  {
    id: 2,
    heading: "SKYWORTH New Product Launching 1st February 2024: Elevate Your Lifestyle",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-johor-2.jpg",
  },
  {
    id: 3,
    heading: "SKYWORTH Badminton Tournament 2023 Johor Bahru Stop: A Resonating Success",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-penang-3.jpg",
  },
  {
    id: 4,
    heading: "SKYWORTH Badminton Tournament 2023 Penang Stop: A Captivating Display of Passion and Sportsmanship",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-penang-3.jpg",
  },
  {
    id: 5,
    heading: "SKYWORTH Badminton Championship a Smashing Success",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-cheras-2.jpg",
  },
  {
    id: 6,
    heading: "SKYWORTH & Lions Eye Clinic Project: Providing Free Eye Health Screening and Glasses to School Children",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/lions-club-glasses-event-6.jpg",
  },
  {
    id: 7,
    heading: "A toast to celebrate yet another achievement!",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/skyworth-event_11zon.jpg",
  },
  {
    id: 8,
    heading: "SKYWORTH Malaysia Donates SKYWORTH SUE7600 Eye Care Google TVs to Sekolah Menengah Kebangsaan Sri Hartamas",
    image: "https://skyworth.com.my/wp-content/uploads/2023/09/charity-for-smk-sri-hartamas-3.jpg",
  },
];

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
        padding: "0 16px", // Adding padding for left-right margin
        mb:'5%'
      }}
    >
      {events.map((event) => (
        <EventCard key={event.id} heading={event.heading} image={event.image} />
      ))}
    </Box>
  );
}
