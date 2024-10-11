import { Grid, Box, Button, Typography } from '@mui/material';
import ContactRow from './../../components/contactUs/contactRow'
import FeedBackForm from '../../components/contactUs/FeedBackForm';
import contactImage from './../../assets/contactImage.jpg'
import contactImage2 from './../../assets/contact-us-2.jpg'
import LeftAlignedBoxWithBackground from '../../components/Home/LeftAlignedBoxWithBackground';
import CenteredImageWithText from '../../components/Home/CenterImageContainer';
import TopBanner from './../../assets/Top-Banner.jpg'
const Index = () => {
  return (
    <Box >
      <LeftAlignedBoxWithBackground title={" "} Imageheight={{xs:"400px",md:"500px"}} backgroundImage={TopBanner} />
      <Box>
        <ContactRow />
        {/* <LocationSection /> */}
        {/* <Section /> */}
        <CenteredImageWithText
          heading={"SKYWORTH GLOBAL HEAD QUARTERS"}
          imageSrc={contactImage2}
        />
        <FeedBackForm />
      </Box>
    </Box>
  );
};

export default Index;
