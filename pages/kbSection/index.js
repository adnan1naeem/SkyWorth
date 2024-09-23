import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/kbSection/header";
import Search from "../../components/Faq/Search";
import QuestionList from "../../components/kbSection/QuestionList";
import { useRouter } from 'next/router';

function KbSection() {
  const router = useRouter();
  const { title } = router.query;
  return (
    <Box sx={{mt:'13%'}}>
      <Header title ={title}/>
      <Search />
      <QuestionList title ={title}/>
    </Box>
  );
}

export default KbSection;
