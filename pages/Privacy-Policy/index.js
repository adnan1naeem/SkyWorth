import React from "react";
import PrivacyPolicyText from "../../components/PolicyText";
import { Box } from "@mui/material";
import PrivacyPoilcy from './PrivacyPoilcy.json'
function Index() {
  return (
    <div>
      <Box paddingTop={{ xs: '20%', sm: '15%', md: '8%', lg: '5%' }}></Box>

      {PrivacyPoilcy.map((item, index) => (
        <PrivacyPolicyText
          termsOfServices={true}
          key={index}
          heading={item.heading}
          description1={item.description1}
          description2={item.description2}
          contactInfo={item.contactInfo}
          strongText={item.strongText}
          phoneNumber={item?.phoneNumber}
          textwithLink={item?.textwithLink}
          link={item?.link}
        />
      ))}
      <Box sx={{ marginTop: '5%' }}></Box>
    </div>
  );
}

export default Index;