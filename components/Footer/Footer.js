import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";

function Footer() {
  return (
    <Box sx={{ background: "#00224d", pt: "1%", pb: '30px', width: '100%', bottom: 0, borderTop: "20px solid #0263B2" }}>
      <Box
        sx={{
          mt: "1%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: { xs: "8%", lg: "5.5%", xl: "16%" },
          pb: "0.5%",
        }}
      >
        <Box sx={{ display: "flex",flexDirection: { xs: "column", sm: "column", md: "row" }, flexWrap: "wrap", gap: { xs: "20px", md: "50px" }, justifyContent: "space-between", width: "100%" }}>
          <Box>
            <FooterCard
              title="About"
              text1="About Us"
              href_one="/aboutUs"
              text2="Contact Us"
              href_two="/contactUs"
              text3="Customer Service"
              href_three="/contactUs"
              text4="FAQ"
              href_four="/faq"
            />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Image
                src={require('./../../assets/skyworth-white-logo.svg')}
                alt="Skyworth Logo"
                width={120}
                height={40}
                style={{
                  alignSelf: "center",
                  mb: "20px",
                }}
              />
            </Box>
          </Box>
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
            mt={{ xs: '5%', sm: 0 }}
          />
          <Box>
            <FooterCard
              title="Service & Support"
              text1="Where to Buy"
              href_one="/whereToBuy"
              text2="Warranty Information"
              href_two="/Warrenty"
              text3="Privacy Policy"
              href_three="/Privacy-Policy"
            />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Typography variant="h6" sx={{ color: "#fff", mb: 2, fontSize: "21px", fontWeight: 600 }}>
                Our Social Media
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <SocialIcon icon={<FacebookIcon />} />
                <SocialIcon icon={<LinkedInIcon />} link={"https://www.linkedin.com/in/skyworth-pakistan-4b0829329/"}/>
                <SocialIcon icon={<InstagramIcon />} link="https://www.instagram.com/844skyworth/?utm_source=qr&r=nametag" />
                <SocialIcon icon={<YouTubeIcon />}  link={"https://www.youtube.com/@SkyworthPakistan"}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: 'row' },
          flexWrap: "wrap",
          px: { xs: "8.6%", lg: "5.7%", xl: "16.2%" },
          alignItems: "center",
          mt: 2
        }}
      >
        <Box sx={{ textAlign: 'flex-start', width: '100%' }}>
          <Image
            src={require('./../../assets/skyworth-white-logo.svg')}
            alt="Skyworth Logo"
            width={120}
            height={40}
          />
        </Box>

        <Box sx={{ textAlign: 'start', width: "100%", marginTop: '20px' }}>
          <Typography variant="h6" sx={{ color: "#fff", mb: 2, fontSize: "21px", fontWeight: 600 }}>
            Our Social Media
          </Typography>
          <Box sx={{ display: "flex", gap: 1, marginBottom: "10px", justifyContent: 'start' }}>
            <SocialIcon icon={<FacebookIcon />} />
            <SocialIcon icon={<LinkedInIcon />} link={"https://www.linkedin.com/in/skyworth-pakistan-4b0829329/"}/>
            <SocialIcon icon={<InstagramIcon />} link="https://www.instagram.com/844skyworth/?utm_source=qr&r=nametag" />
            <SocialIcon icon={<YouTubeIcon />} link={"https://www.youtube.com/@SkyworthPakistan"}/>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "2%",
          borderTop: "1.5px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: { xs: "8%", lg: "5.5%", xl: "16%" },
          pt: "2%",
          placeContent: 'center'
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: "14px",
            fontFamily: "Mont-Regular, Sans-serif",
            "@media (min-width: 1200px) and (max-width: 1300px)": {
              fontSize: "13px",
              ml: '-10%',
            },
          }}>
          © 2024 SkyWorthPakistan
        </Typography>
      </Box>
    </Box>
  );
}

const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <IconButton
      sx={{
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "50%",
        height: { xs: 40, md: 40, lg: 55 },
        width: { xs: 40, md: 40, lg: 55 },
      }}
    >
      {icon}
    </IconButton>
  </a>
);

export default Footer;
