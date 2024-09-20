import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import FooterReach from "../FooterCard/FooterReach";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";

function Footer() {
  return (
    <Box sx={{ background: "#00224d", paddingTop: "3%", width:'100%', paddingBottom: '100px',bottom:0 }}>
      <Box
        sx={{
          display: "flex",
          ml: { xs: "0", sm: "5%", md: "1%" },
          gap: { xs: "2%", md: "2%", lg: "4%" },
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: '100vw',  // Ensure the container does not overflow horizontally
        }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0%" }}>
          <FooterCard
            title="Televisions"
            text1="Lifestyle TVs"
            href_one="/about"
            text2="Companion Portable 24P100"
            href_two="/industries"
            text3="UE7600 Series 4K Google TV"
            href_three="/portfolios"
            text4="UD7300 Series 4K Google TV"
            href_four="/contact-us"
            text5="75UD6300 Series 4K Google TV"
            href_five="/privacypolicy"
            mt={{ xs: '10%', sm: 0 }}
          />
          <FooterCard
            title="Media Center"
            text1="News"
            href_one="/about"
            text2="Media Registration"
            href_two="/industries"
            text3="Resources for Download"
            href_three="/portfolios"
            text4="Skyworth Press Releases"
            href_four="/contact-us"
            mt={{ xs: '10%', sm: 0 }}
          />
          <FooterCard
            title="About"
            text1="About Skyworth"
            href_one="/mobile-application"
            text2="Skyworth OLED Technology"
            href_two="/website"
            text3="LCD vs QLED vs OLED"
            href_three="/ui-ux-design"
            text4="Android TV & Smart TV"
            href_four="/sqa"
          />
          <FooterCard
            title="Support"
            text1="FAQ"
            href_one="/career"
            text2="Product Support"
            href_two="https://blog.techtiz.co"
            text3="Warranty Policy"
            href_three="/WarrentyPolicy"
            text4="Privacy Policy"
            href_four="/contact-us"
            text5="Terms of Service"
            href_five='/ReturnPolicy'
            mt={{ xs: '12%', sm: 0 }}
          />
          <FooterReach />
        </Box>
      </Box>
      <Box sx={{
        paddingLeft: { xs: "8%", lg: "10.5%", xl: "18%" },
        paddingRight: { xs: "10%", lg: "15.5%" },
        maxWidth: '100vw'
      }}>
        <Box sx={{ flexWrap: "wrap", display: "flex", marginBottom: { xs: '40px' }, justifyContent: { xs: 'center', sm: "center", md: 'center', lg: "right", xl: "right" }, gap: { xs: "2%", md: "2%", lg: "1%" }, }}>
          <IconButton sx={{ color: '#fff', border: '1px solid #fff', borderRadius: '50%', height: 55, width: 55 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff', border: '1px solid #fff', borderRadius: '50%', height: 55, width: 55 }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff', border: '1px solid #fff', borderRadius: '50%', height: 55, width: 55 }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff', border: '1px solid #fff', borderRadius: '50%', height: 55, width: 55 }}>
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { sm: 'center', md: 'center', lg: "space-between" },
          paddingLeft: { xs: "5%", lg: "10.5%", xl: "15.5%" },
          flexDirection: { xs: "row", sm: "column", md: "column", lg: 'row' },
          paddingRight: { xs: "5%", lg: "15.5%" },
          paddingTop: "3%",
          paddingBottom: "1.5%",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: "column", sm: 'column', md: "column", lg: 'row' },
            alignItems: 'center',
            gap: { xs: "10px", sm: '10px', md: "10px", lg: '0px' },
          }}
        >
          <Image
            src={require('./../../assets/skyworth-white-logo.svg')}
            alt="Skyworth Logo"
            style={{
              width: "120px",
              marginBottom:'20px',
            }}
          />
          <Typography
            variant="body2"
            sx={{ marginLeft: 5, color: 'white', fontSize: 13, fontWeight: 200, marginBottom: '15px', alignSelf: 'auto' }}
          >
            Copyright © 2024 SKYWORTH NORTH AMERICA. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flex: 1,
            flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
            textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'right' },
            alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-end' },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: '#bdbdbd',
              },
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 300,
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
              },
            }}
          >
            Terms of Service
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: '#bdbdbd',
              },
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 300,
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
              },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              "&:hover": {
                color: '#bdbdbd',
              },
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 300,
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
              },
            }}
          >
            Do not sell my personal information
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
