import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  margin: "20px auto",
  backgroundColor: "#fff",
  boxShadow: "0px 16px 16px 16px rgba(0,0,0,0.1)",
  textAlign: "center",
  mt: "20px",
  mb: "20px",
  overflow: "hidden",
  pt: { xs: "30px", md: "65px" },
  pb: { xs: "30px", md: "65px" },
};

const headingStyles = {
  marginBottom: "24px",
  fontWeight: "500",
  color: "#0069c8",
  fontFamily: "Kanit",
  lineHeight: 1.2,
  fontSize: { xs: "1.38rem", md: '1.5rem' },
};

const subheadingStyles = {
  color: "#333",
  fontFamily: "Kanit",
  lineHeight: 1.5,
  width: "90%",
  fontWeight: 250,
  fontSize: { xs: "1.0rem", md: '1.1rem' },
};

const bodyTextStyles = {
  lineHeight: 1.8,
  color: "#333",
  fontFamily: "Kanit",
  width: "90%",
  whiteSpace: 'pre-line',
  fontWeight: 250,
  fontSize: { xs: "1.0rem", md: '1.1rem' },
};

function BackGround() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `SKYWORTH was established in 1988, with the head office located within Shenzhen High Tech Industrial Park which is honored as “China’s silicon valley”, and has more than 40,000 employees. SKYWORTH is a large-scale high-tech corporation mainly engaged in the development and manufacturing of consumer electronics, display devices, digital set top boxes, security monitors, network communication, semi-conductors, refrigerators, washing machines, cell phones and LED lighting etc.
In 2000 SKYWORTH was listed on the main board of HK Stock Exchange (HK0751). After a development of more than 28 years, SKYWORTH has grown to be one of the Top Five Color TV brands in the world, a top brand in Chinese display industry market and is a top three global provider of the Android TV platform.
SKYWORTH’s overseas TV products have been exported to more than 100 countries and regions, demonstrating the brand’s determination to bringing about market-leading display and AI technology in front of an international audience.
Apart from mainland China and Hong Kong, SKYWORTH Group operates in other areas in Asia, such as the Philippines, Malaysia, Indonesia, Thailand, Vietnam, India and Pakistan as well as South Africa, Germany and the USA.
Supported more than 100 national and provincial research projects, including the National Key Technology Research and Development Program, National High-tech Industrialization Demonstration Project of Core Electronic Devices, High-end Generic Chips and Basic Software, and National Electronic Fund. SKYWORTH was selected as the country's first batch of smart manufacturing point demonstration projects.
Along with China’s economic reform and development of the Shenzhen Special Economic Zone in the 1980s, Mr. Wong launched SKYWORTH and grew the business. Since then, the company has transformed into a pioneer in big-screen AIoT, leading the development of the TV industry in China.
The dedicated exploration of an outstanding entrepreneur has led to the rise of a brand with more than 30 years’ legacy in technological innovations, bringing a high-quality smart home lifestyle to millions of consumers around the globe. Growing from a local base in Shenzhen to a worldwide company, SKYWORTH is now an internationally renowned technology brand.
The company has always been fearless in breaking the norms and thinking outside the box, demonstrating a unique “SKYWORTH style” of innovation and breakthrough. From the first flicker-free TV, the first 4K TV, the first OLED TV, and transparent TVs, to today’s mass-production of 8K TVs, SKYWORTH has created numerous "miracles" in the industry, and consistently played a leading role in China’s color TV industry.
A truly stellar company does not sit around and wait for opportunities to come by. Instead, it creates its own opportunities. Today, a new generation of SKYWORTH staff continues to uphold the spirit of “Be Innovative, Be Bold.” Doubling down on R&D efforts and industrial upgrades in today’s 5G+8K era, SKYWORTH has strengthened its independent innovation capabilities and accelerated the development, deployment, and production of new technologies, products and business models in the industry.
On a national level, SKYWORTH is also boosting the momentum of Shenzhen's ongoing transformation into a world-class 5G city, as part of China’s new infrastructure plan.
For SKYWORTH, 5G+8K technology will be our growth engine in the next 10 years. Under the leadership and efforts of next-generation SKYWORTH staff, I hope that SKYWORTH can harness the power of the Internet of Things and 5G technologies to interconnect products across different categories and platforms, elevating the brand to the next level and writing the next chapter in history.`;

  const previewText = fullText.slice(0, 500); // Show the first 500 characters

  return (
    <Box sx={containerStyles}>
      <Typography variant="h4" component="h1" sx={headingStyles}>
        SKYWORTH BACKGROUND
      </Typography>
      <Typography variant="body1" sx={subheadingStyles}>
      SKYWORTH Pakistan is a joint venture between Skyworth China and Orient Electronics, for the licensed manufacturing, sales, distribution and marketing of Skyworth product portfolio in Pakistan.
      </Typography>
      <Typography variant="body1" sx={bodyTextStyles}>
        {isExpanded ? fullText : `${previewText}...`}
        <span
          style={{ color: "#0069c8", cursor: "pointer" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      </Typography>
    </Box>
  );
}

export default BackGround;
