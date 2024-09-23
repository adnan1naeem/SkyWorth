import React from "react";
import { Box } from "@mui/material";
import Retailer from "./../../components/WhereToBuy/Retailer";
import Search from "../../components/Faq/Search";
import FAQList from "../../components/Faq/FAQList";
function Faq() {
  return (
    <Box>
      <Retailer
        title="FAQ"
        description="Find your frequently asked questions here"
      />
      <Search />
      <FAQList />
    </Box>
  );
}

export default Faq;
