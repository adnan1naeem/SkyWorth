import { Grid, Box, Button, Typography } from '@mui/material';
import Retailer from "./../../components/WhereToBuy/Retailer";
import ContactRow from './../../components/contactUs/contactRow'
import LocationSection from '../../components/contactUs/locationSection';
import FeedBackForm from '../../components/contactUs/FeedBackForm';
import Section from '../../components/contactUs/Section'
const Index = () => {


  return (
    <Box sx={{ marginTop: {xs:'70px',md:"70px",lg:'90px'} }}>
      <Retailer
        title="Contact Us" 
        description="" 
      />
      <Box>
        <ContactRow/>
        <LocationSection/>
        <Section/>
        <FeedBackForm/>
      </Box>
    </Box>
  );
};

export default Index;
