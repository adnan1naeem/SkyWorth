import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  const router=useRouter()
  return (
    <Box sx={{ background: "#00224d", pt: "1%", width: '100%', bottom: 0, borderTop: "20px solid #0263B2" }}>
      <Box
        sx={{
          mt: "1%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: { xs: "8%", lg: "5.5%",  },//xl: "16%"
          pb: "0.5%",
        }}
      >
         <Box sx={{ width:'100%',textAlign: 'center',display:{xs:"block",md:'none'},paddingTop:"12px",marginBottom:'20px'}}>
            <Image
              src={require('./../../assets/newlogo.svg')}
              alt="Skyworth Logo"
              width={220}
              height={40}
            />
           <Typography sx={{ color: "#ffffff",fontSize: "15px",fontFamily: "Mont-Regular, Sans-serif",fontWeight: 250,marginTop:'15px'}}>Orient Electronics</Typography>
           <Typography sx={{ color: "#ffffff",fontSize: "15px",fontFamily: "Mont-Regular, Sans-serif",fontWeight: 250,}}>20km, Multan Road, Lahore Pakistan</Typography>
          </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", md: "row" }, flexWrap: "wrap", gap: { xs: "20px", md: "50px" }, justifyContent: "space-between", width: "100%" }}>
          <Box sx={{ textAlign: 'flex-start',flexDirection:'row',display:{xs:"none",md:'block'},paddingTop:"20px"}}>
            <Image
              src={require('./../../assets/newlogo.svg')}
              alt="Skyworth Logo"
              width={220}
              height={40}
            />
             <Typography sx={{ color: "#ffffff",fontSize: "15px",fontFamily: "Mont-Regular, Sans-serif",fontWeight: 250,marginTop:'15px'}}>Orient Electronics</Typography>
             <Typography sx={{ color: "#ffffff",fontSize: "15px",fontFamily: "Mont-Regular, Sans-serif",fontWeight: 250,}}>20km, Multan Road, Lahore Pakistan</Typography>
          </Box>
         
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
              onLinkClick={(href) => {
                if (href) {
                    router.push(href);
                }
            }}
            />
          </Box>
          <Box>
          <FooterCard
            title="Product"
            text1="All Products"
            href_one="/product"
            text2="QLED MINI"
            href_two={`/product?title=QLED%20MINI`}
            text3="QLED"
            href_three={`/product?title=QLED`}
            text4="UHD"
            href_four={`/product?title=UHD`}
            text5="FHD/HD"
            href_five={`/product?title=FHD/HD`}
            onLinkClick={(href) => {
                if (href) {
                    router.push(href);
                }
            }}
            mt={{ xs: '5%', sm: 0 }}
        />
          </Box>
          <Box>
            <FooterCard
              title="Service & Support"
              text1="Media"
              href_one="/media"
              text2="Warranty Information"
              href_two="/Warrenty"
              text3="Privacy Policy"
              href_three="/Privacy-Policy"
              onLinkClick={(href) => {
                if (href) {
                    router.push(href);
                }
            }}
            />
            <Box sx={{ padding: "0px 16px", }}>
              <Box sx={{ display: "flex", gap: { xs: 1, md: 2 } }}>
                <SocialIcon icon={<FacebookIcon />} />
                <SocialIcon icon={<LinkedInIcon />} link={"https://www.linkedin.com/in/skyworth-pakistan-4b0829329/"} />
                <SocialIcon icon={<InstagramIcon />} link="https://www.instagram.com/844skyworth/?utm_source=qr&r=nametag" />
                <SocialIcon icon={<YouTubeIcon />} link={"https://www.youtube.com/@SkyworthPakistan"} />
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
            padding: "16px",
            alignItems: "center",
            mt: 2
          }}
        >
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
          placeContent: 'center'
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            height:'60px',
            alignContent:'center',
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
        height: { xs: 40, md: 40, lg: 40 },
        width: { xs: 40, md: 40, lg: 40 },
      }}
    >
      {icon}
    </IconButton>
  </a>
);

export default Footer;
