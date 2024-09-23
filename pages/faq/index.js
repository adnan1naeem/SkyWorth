import React from "react";
import { Box } from "@mui/material";
import Retailer from "./../../components/WhereToBuy/Retailer";
import Search from "../../components/Faq/Search";
import FAQList from "../../components/Faq/FAQList";

import Refrig from "../../components/Faq/Refrig";
import Machine from "../../components/Faq/Machine";
import Freezer from "../../components/Faq/Freezer";
function Faq() {
  return (
    <Box>
      <Retailer
        title="FAQ"
        description="Find your frequently asked questions here"
      />
      <Search />
      <FAQList />
      <Refrig/>
      <Machine/>
      <Freezer/>
    </Box>
  );
}

export default Faq;
