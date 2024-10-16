import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Aboutbackground from './../../assets/Aboutbackground.jpg';

function AllStat() {
  const stats = [
    { title: "2", titleText: "Listed Companies", listText: ["Skyworth Group (00751.HK)", "Skyworth Digital (000810.SZ)"] },
    { title: "20", titleText: "High Tech Enterprises", text: "Companies", yearText: " (Year 2022)" },
    { title: "36", titleText: "Staff Size", text: "Thousands Staff", yearText: "(Year 2023)" },
    { title: "136", titleText: "Total Revenue", text: "Billion CNY", yearText: "(Year 2023)" },
    { title: "39", titleText: "Gross Profit", text: "Billion CNY", yearText: "(Year 2023)" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const styles = {
    container: {
      position: "relative",
      backgroundImage: `url(${Aboutbackground?.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: { xs: "172vh", md: "50vh", lg: "50vh" },
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
    },
    statBox: (index) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "20px",
      color: "white",
      zIndex: 2,
      "&::after": {
        content: '""',
        display: index !== 4 ? { xs: "none", md: "block" } : "none",
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
    titleText: {
      fontWeight: { xs: "600", md: "300" },
      fontSize: "20px",
    },
    text: {
      lineHeight: 1.7,
      fontFamily: "Kanit",
    },
    listText: {
      lineHeight: 1.5,
      fontFamily: "Kanit",
      fontSize: "16px",
    },
    yearText: {
      fontSize: "14px",
      marginTop: "5px",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <Box sx={styles.container} ref={containerRef}>
      {stats.map((stat, index) => (
        <Box key={index} sx={styles.statBox(index)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <Box sx={styles.contentWrapper}>
              <Typography sx={styles.titleText}>{stat.titleText}</Typography>
              <Typography variant="h6" component="h6" sx={styles.title}>
                {stat.title}
              </Typography>
            </Box>
            {stat.text && (
              <Typography variant="body1" sx={styles.text}>
                {stat.text}
              </Typography>
            )}
            {stat.listText && (
              <Box sx={styles.listText}>
                {stat.listText.map((item, idx) => (
                  <Typography key={idx} variant="body2">
                    {item}
                  </Typography>
                ))}
              </Box>
            )}
            {stat.yearText && (
              <Typography variant="body2" sx={styles.yearText}>
                {stat.yearText}
              </Typography>
            )}
          </motion.div>
        </Box>
      ))}
    </Box>
  );
}

export default AllStat;
