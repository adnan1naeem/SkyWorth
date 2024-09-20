import React, { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CityBox from "./CityBox";

// Sample data for cities and their corresponding details
const cityData = [
  {
    city: "Kuala Lumpur",
    branches: [
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 537, JALAN TUANKU ABDUL RAHMAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "03-2693 6480",
        fax: "03-2694 1699",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 24, JALAN 1/76D, DESA PANADAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "011-2788 1655",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 537, JALAN TUANKU ABDUL RAHMAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "03-2693 6480",
        fax: "03-2694 1699",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 24, JALAN 1/76D, DESA PANADAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "011-2788 1655",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 537, JALAN TUANKU ABDUL RAHMAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "03-2693 6480",
        fax: "03-2694 1699",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 24, JALAN 1/76D, DESA PANADAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "011-2788 1655",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 537, JALAN TUANKU ABDUL RAHMAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "03-2693 6480",
        fax: "03-2694 1699",
      },
      {
        name: "EVERYBODY ELECTRICAL SDN. BHD.",
        address:
          "NO 24, JALAN 1/76D, DESA PANADAN, 55100 KUALA LUMPUR, MALAYSIA.",
        tel: "011-2788 1655",
      },
    ],
  },
  {
    city: "Selangor",
    branches: [
      {
        name: "YU LEONG HOME APPLIANCES SDN BHD (AMPANG).",
        address:
          "NO 35 & 37, JALAN PUTRA 11, TAMAN PUTRA, 68000 AMPANG, SELANGOR.",
        tel: "03-4295 6868",
      },
      {
        name: "CH GLOBAL MARKETING PLT.",
        address: "NO. 17, JALAN KAPAR, 41400 KLANG, SELANGOR.",
        tel: "03-3342 6096",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
  {
    city: "Johor",
    branches: [
      {
        name: "U HOME ELECTRONIC.",
        address:
          "NO 15, JALAN PENDIDIKAN 8/2, TAMAN UNIVERSITI, 81300 SKUDAI, JOHOR.",
        tel: "07-5626205",
      },
      {
        name: "ENG HOCK ENTERPRISE",
        address: "NO.71, JALAN MERIAM, 84000 MUAR, JOHOR.",
        tel: "06-9537140 / 011-1145 1398",
      },
    ],
  },
];

// Styles for the components
const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 5%",
      cursor: "pointer",
      borderRadius: "4px",
      "&:hover": {
        color: "#0069c8",
      },
    },
    title: {
      fontWeight: "bold",
      color: "black",
    },
    iconButton: {
      border: "1px solid black",
      borderRadius: "50%",
      padding: "5px",
      color: "black",
      "&:hover": {
        color: "#0069c8",
        borderColor: "#0069c8",
      },
    },
    line: {
      width: "90%",
      height: "0.3px",
      backgroundColor: "rgba(0,0,0,.65)",
      margin: "10px auto",
      mt: "1.5%",
      mb: "1.5%",
    },
  };
  
  // Cities Component
  function Cities() {
    const [openCity, setOpenCity] = useState(null);
  
    const handleToggle = (city) => {
      setOpenCity(openCity === city ? null : city);
    };
  
    return (
      <Box sx={{ mt: "8%", mb: "8%" }}>
        {cityData.map((cityInfo, index) => (
          <Box key={index}>
            <Box
              sx={{
                ...styles.header,
                color: openCity === cityInfo.city ? "#0069c8" : "rgba(0,0,0,.65)",
              }}
              onClick={() => handleToggle(cityInfo.city)}
            >
              <Typography
                variant="h6"
                sx={{
                  ...styles.title,
                  color: openCity === cityInfo.city ? "#0069c8" : "rgba(0,0,0,.65)",
                }}
              >
                {cityInfo.city}
              </Typography>
              <IconButton
                sx={{
                  ...styles.iconButton,
                  borderColor: openCity === cityInfo.city ? "#0069c8" : "rgba(0,0,0,.65)",
                  color: openCity === cityInfo.city ? "#0069c8" : "rgba(0,0,0,.65)",
                }}
              >
                {openCity === cityInfo.city ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
  
            <Box sx={styles.line}></Box>
  
            {openCity === cityInfo.city && (
              <Box sx={{ mx: '1.5%' }}>
                <Grid container spacing={2}>
                  {cityInfo.branches.map((branch, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex", justifyContent: "center" }}>
                      <CityBox branches={[branch]} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    );
  }
  
  export default Cities;
