import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    height: {
      xs: "30vh",
      sm: "35vh",
      md: "40vh",

    },
    width: {
      xs: "80vw",
      sm: "60vw",
      md: "52vh",
    },
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: {
      xs: "10px",
      sm: "20px",
    },
    display: "flex",
    flexDirection: "column",
    paddingLeft: {
      xs: "20px",
      sm: "35px",
      md: "45px",
    },
    overflow: "hidden",
  },
  heading: {
    marginTop: {
      xs: "10px",
      sm: "15px",
      md: "20px",
    },
    color: "#0069c8",
    fontWeight: "bold",
    fontSize: {
      xs: "18px",
      sm: "20px",
      md: "22px",
    },
  },
  paragraph: {
    color: "#676767",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "14px",
    },
    marginTop: {
      xs: "15px",
      sm: "20px",
      md: "30px",
    },
  },
};

// Accept props for branches
function CityBox({ branches }) {
  return (
    <Box sx={styles.container}>
      {branches.map((branch, index) => (
        <Box key={index}>
          <Typography sx={styles.heading}>
            {branch.name}
          </Typography>
          <Typography sx={styles.paragraph}>
            {branch.address}
          </Typography>
          <Typography sx={styles.paragraph}>Tel: {branch.tel}</Typography>
          {branch.fax && <Typography sx={styles.paragraph}>Fax: {branch.fax}</Typography>}
          <Box sx={styles.line}></Box>
        </Box>
      ))}
    </Box>
  );
}

export default CityBox;
