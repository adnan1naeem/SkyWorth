import React from "react";
import PrivacyPolicyText from "../../components/PolicyText";
import Breadcrumb from "../../components/BreadCrumb";
import { Box, Container } from "@mui/material";
import Warranty from './Warrenty.json'
function Index() {
  return (
    <div>
      <Box paddingTop={{ xs: '20%', sm: '15%', md: '8%', lg: '5%' }}></Box>
      {Warranty?.map((item, index) => (
        <PrivacyPolicyText
          termsOfServices={true}
          key={index}
          heading={item.heading}
          description1={item.description1}
          description2={item.description2}
          description3={item?.description3}
          contactInfo={item.contactInfo}
          strongText={item.strongText}
          endDescription={item?.endDescription}
          bulletPoints={item?.bulletPoints}
          mexcio={item?.mexcio}
          USA={item?.USA}
        />
      ))}
      <Box sx={{ marginTop: '5%' }}></Box>
    </div>
  );
}

export default Index;