import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import EventBanner from '../../components/EventDetails/Banner';
import ImageGallery from '../../components/EventDetails/ImageGallery';
import eventsData from "../../components/EventsNews/Events.json";
import { useRef, useState } from 'react';
import LeaveComment from '../../components/EventDetails/LeaveComment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileItem from '../../components/EventDetails/ProfileItem';

function EventsDetail() {
  const router = useRouter();
  const { title } = router.query;

  // Find the event that matches the title from the URL
  const matchedEvent = eventsData.find(event => event.heading === decodeURIComponent(title));

  // Extract event details if found
  const image = matchedEvent ? matchedEvent.image : '';
  const date = matchedEvent ? matchedEvent.date : '';
  const writtenBy = matchedEvent ? matchedEvent.writtenBy : '';
  const paragraphs = matchedEvent ? matchedEvent.paragraphs : [];

  // Example gallery array (customize as needed)
  const gallery = [
    image,
    "https://skyworth.com.my/wp-content/uploads/2023/09/badminton-johor-4.jpg",
    image,
    image
  ];


  return (
    <Box sx={{ mt: '5%' }}>
      <EventBanner title={title} image={image} date={date} writtenBy={writtenBy} />
      <ImageGallery images={gallery} />

      {/* Map through paragraphs */}
      <Box sx={styles.paragraphContainer}>
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} sx={styles.paragraph}>
            {paragraph}
          </Typography>
        ))}

      </Box>
      <Box sx={styles.paragraphContainer1}>
      <ProfileItem
        iconUrl={'https://secure.gravatar.com/avatar/bccaa7edd010a1778059e202c747d9b2?s=160&d=mm&r=g'}
        text="Skyworth"
        iconSize={80}
      />
      </Box>
      <LeaveComment />
    </Box>
  );
}

const styles = {
  paragraphContainer: {
    mt: 4,
    pt: 2,
    pb: 2,
    borderTop: '2px solid #ccc',
    borderBottom: '2px solid #ccc',
    maxWidth: '1000px',
    margin: '0 auto',
    mb: 10
  },
  paragraphContainer1: {
    mt: 4,
    pt: 2,
    pb: 2,
    maxWidth: '1000px',
    margin: '0 auto',
    mb: 10
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    fontFamily: 'Kanit',
    mt: 6,
    mb: 6,
    transition: "opacity 1.5s ease, transform 1.5s ease",
  }
};

export default EventsDetail;
