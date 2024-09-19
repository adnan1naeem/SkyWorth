import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

function FooterReach() {
  return (
    <Box>
      <Card
        sx={{
          width: { sx: "12rem", sm: "14rem", md: "14rem", lg: "14em" },
          height: "17rem",
          background: "none",
          boxShadow: "none",

        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: "300",
              paddingBottom: "10%",
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            Contact Us
          </Typography>
          <a
            href="support@skyworthusa.com"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center", // Align items vertically
                color: "#ffffff",
                marginTop: "10px",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontWeight: 300,
                width: { md: "16rem" },
                paddingBottom: 1,
                borderBottom: "1.5px solid white",
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "16px",
                },
              }}
            >
              <span style={{ fontSize: "15px", fontFamily: "Mont-Regular, Sans-serif", }}>Email SKYWORTH</span>
            </Typography>
          </a>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "300",
              fontFamily: "Mont-Regular, Sans-serif",
              lineHeight: "1.5",
              marginTop:'10px'
            }}
          >
            8:30am - 5pm PST<br />
            Monday - Friday<br />
            1-888-606-3212<br />
            14586 Central Avenue,<br />
            Chino, CA 91710
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterReach;
