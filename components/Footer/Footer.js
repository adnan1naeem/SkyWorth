import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";

function Footer() {
  return (
    <Box sx={{ background: "#00224d", paddingTop: "1%", width: '100%', paddingBottom: '30px', bottom: 0 }}>
      <Box
        sx={{
          marginTop: "1%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: { xs: "8%", lg: "5.5%", xl: "16%" },
          paddingRight: { xs: "10%", lg: "10.5%" },
          paddingBottom: "0.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "20px", md: "50px" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <FooterCard
            title="About"
            text1="About Us"
            href_one="/aboutUs"
            text2="Contact Us"
            href_two="/contactUs"
            text3="Service Center"
            href_three="/contactUs"
            text4="FAQ"
            href_four="/faq"
          />
          <FooterCard
            title="Product"
            text1="All Products"
            href_one="/product"
            text2="QLED Mini"
            href_two="/product/3"
            text3="QLED"
            href_three="/product/5"
            text4="UHD"
            href_four="/product/6"
            text5="FHD/HD"
            href_five="/product/11"
            mt={{ xs: '10%', sm: 0 }}
          />
          <FooterCard
            title="Service & Support"
            text1="Where to Buy"
            href_one="/whereToBuy"
            text2="Warranty Information"
            href_two="/Warrenty"
            text3="Privacy Policy"
            href_three="/Privacy-Policy"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: 'row' },
          flexWrap: "wrap",
          paddingLeft: { xs: "8.6%", lg: "5.7%", xl: "16.2%" },
          paddingRight: { xs: "10%", lg: "10.5%" },
          alignItems: "center", 
        }}
      >
        <Box sx={{ flex: 1, alignSelf: { xs: "flex-start", md: 'self-end' } }}>
          <Image
            src={require('./../../assets/skyworth-white-logo.svg')}
            alt="Skyworth Logo"
            style={{
              width: "120px",
              alignContent: "center",
              marginBottom: "20px",
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
                ml: "-10%",
              },
            }}
          />
        </Box>
        <Box sx={{ textAlign: { xs: 'start', md: "center" }, alignSelf: { xs: "flex-start", md: "center" }, width: "100%", maxWidth: "400px" }}>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "1rem", fontSize: "21px",fontWeight: 600, }}>
            Our Social Media
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              float: { xs: 'inline-start', md: "none" },
              justifyContent: "center",
              "@media screen and (min-width: 100px) and (max-width: 467px)": {
                marginTop: "3%",
              },
            }}
          >
            <IconButton sx={{ color: "#fff", border: "1px solid #fff", borderRadius: "50%", height: 55, width: 55 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", border: "1px solid #fff", borderRadius: "50%", height: 55, width: 55 }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", border: "1px solid #fff", borderRadius: "50%", height: 55, width: 55 }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", border: "1px solid #fff", borderRadius: "50%", height: 55, width: 55 }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2%",
          borderTop: "1.5px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: { xs: "8%", lg: "5.5%", xl: "16%" },
          paddingRight: { xs: "10%", lg: "10.5%" },
          paddingTop: "2%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: 400,
              fontSize: "14px",
              fontFamily: "Mont-Regular, Sans-serif",
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
                ml: '-10%',
              },
            }}>
            © 2024 SkyWoth
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
