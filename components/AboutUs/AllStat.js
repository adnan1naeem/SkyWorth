import React from "react";
import { Box, Typography } from "@mui/material";

function AllStat() {
  const stats = [
    { title: "2", text: "Listed SKYWORTH Company" },
    { title: "20", text: "National high-tech enterprises" },
    { title: "36", text: "Thousands Employees" },
    { title: "136", text: "Billion Brand Value" },
    { title: "39", text: "Billion Business Income" },
  ];

  const styles = {
    container: {
      position: "relative",
      backgroundImage: `url(https://skyworth.com.my/wp-content/uploads/2023/08/image-53_11zon.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: { xs: "165vh", md: "60vh", lg: "50vh" },
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr", 
        sm: "repeat(2, 1fr)",
        md: "repeat(5, 1fr)",
      },
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
      gap: "20px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
      },
      "@media (max-width: 1100px)": {
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columns when screen width is less than 1100px
      },
      "@media (max-width: 768px)": {
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns when screen width is less than 768px
      },
      "@media (max-width: 600px)": {
        gridTemplateColumns: "1fr", // 1 column when screen width is less than 600px
      },
    },
    statBox: (index, length) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "20px",
      color: "white",
      zIndex: 2,
      "&::before": {
        content: '""',
        display: { xs: "none", md: index === 0 ? "block" : "none" },
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        height: "70%",
        borderLeft: "2px solid white",
      },
      "&::after": {
        content: '""',
        display: {
          xs: "none",
          md: "block", // Ensures line appears after all items
        },
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        height: "70%",
        borderRight: "2px solid white",
      },
    }),
    title: {
      fontWeight: "bold",
      fontSize: "45px",
    },
    text: {
      lineHeight: 1.7,
      width: "10rem",
    },
  };

  return (
    <Box sx={styles.container}>
      {stats.map((stat, index) => (
        <Box key={index} sx={styles.statBox(index, stats.length)}>
          <Typography variant="h6" component="h6" sx={styles.title}>
            {stat.title}
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            {stat.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default AllStat;
