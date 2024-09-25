import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

function EventBanner({ title, image,writtenBy,date }) {
  return (
    <Box sx={styles.backgroundContainer(decodeURIComponent(image))}>
      <Box sx={styles.titleBox}>
      {/* <Link href="/events"> */}
      <Button variant="outlined" sx={styles.eventButton}>
          Event
        </Button>

      {/* </Link> */}

        <Typography variant="h4" sx={styles.titleText}>
          {decodeURIComponent(title)}
        </Typography>
        <Box sx={styles.infoBox}>
          <Typography variant="body1" sx={styles.infoText}>
            {writtenBy}
          </Typography>
          <Box sx={styles.verticalLine} />
          <Typography variant="body1" sx={styles.infoText}>
            {date}
          </Typography>
          <Box sx={styles.verticalLine} />
          <Typography variant="body1" sx={styles.infoText}>
            No Comment
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  backgroundContainer: (image) => ({
    position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 2,
    },
  }),
  titleBox: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    color: '#fff',
    width: '90%', 
    '@media (min-width: 900px)': {
      width: '65%', 
    },
  },
  eventButton: {
    border: '2px solid rgba(255,255,255,0.4)',
    color: '#fff',
    fontFamily: "Kanit",

    marginBottom: 2,
    '&:hover': {
      backgroundColor: '#0069c8', 
      borderColor: '#0069c8',
    },
  },
  titleText: {
    fontWeight: '500',
    marginBottom: '16px',
    marginTop:'20px',
    fontFamily: "Kanit",
    fontSize:"38px"
  },
  infoBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    gap: '15px',
  },
  verticalLine: {
    height: '15px',
    width: '0.7px',
    backgroundColor: '#fff', 
    marginTop:'-1.5%'
  },
  infoText: {
    color: '#fff',
    fontSize: '16px', 
    paddingBottom: '4px',
    marginBottom: '8px',
    width: 'fit-content',
  },
};

export default EventBanner;
