import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const ZoomableImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  alignContent:'center',
});

const ZoomableImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    position: "relative",
    zIndex: 1,
  },
});

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0069c8',
  color: '#fff',
  position: 'relative',
  padding: '10px 25px ',
  textTransform: 'none',
  fontSize: '16px',
  fontFamily:'Kanit',
  fontWeight: '250',
  display: 'flex',
  borderRadius:0,
  overflow: 'hidden',
  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: '20px',
  //   bottom: '50%',
  //   width: '20px',
  //   height: '2px',
  //   backgroundColor: '#fff',
  //   transition: 'width 0.3s ease',
  // },
  // '&::after': {
  //   content: '"→"',
  //   position: 'absolute',
  //   left: '-20px',
  //   bottom: '25%',
  //   opacity: 0,
  //   transition: 'left 0.4s ease, opacity 0.3s ease',
  //   color: '#fff',
  //   fontSize: '16px',
  // },
  // '&:hover::before': {
  //   width: '0',
  // },
  // '&:hover::after': {
  //   left: '10px',
  //   opacity: 1,
  // },
  // '&:hover': {
  //   backgroundColor: '#0056b3',
  // },
}));

const AwardSection = ({
  bgColor,
  flexDirection,
  awardImage,
  awardYear = "2020 – 2023",
  awardTitle,
  awardDescription,
  buttonText,
}) => {
  const isBlackBackground = bgColor === "black";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: flexDirection || "row" },
        backgroundColor: bgColor || "black",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, lg: 8 },
        textAlign: { xs: "center", lg: "left" },
        width: "100%",
        minHeight: "9vh",
        padding: {
          xs: "80px 30px",
          sm: "80px 30px",
          md: "30px 30px",
          lg: "30px 0px",
        },
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: flexDirection || "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "left", md: "flex-start" },
            textAlign: { xs: "left", md: "left" },
            paddingLeft: isBlackBackground ? 0 : { md: "60px", lg: "60px" },
            paddingRight: isBlackBackground ? { md: "60px", lg: "60px" } : 0,
            maxWidth: { md: "60%" },
            marginTop: { xs: "30px", sm: "30px", md: "30px", lg: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: isBlackBackground ? "white" : "black",
              mb: 1,
              fontSize: { xs: "16px", sm: "18px" },
              marginBottom: "20px",
              borderLeft: "3px solid #0069c8",
              height: "17px",
              lineHeight: "18px",
              paddingLeft: "30px",
              transition: "opacity 1s ease-in-out",
              fontFamily: "Kanit",
              fontWeight: "500",
              opacity: 1,
              marginTop: { md: "30px" },
            }}
          >
            {awardYear}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "30px",
              lineHeight: "52px",
              color: isBlackBackground ? "white" : "inherit",
              mb: 2,
              fontFamily: "Kanit",
              fontWeight: "500",
              paddingRight: { xs: "0%", sm: 0, md: "10%", lg: "25%" },
            }}
          >
            {awardTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isBlackBackground ? "white" : "inherit",
              mb: 3,
              fontSize: 16,
              lineHeight: "30px",
              fontFamily: "Kanit",
              fontWeight: "400",
            }}
          >
            {awardDescription}
          </Typography>
          {buttonText&& <CustomButton href="/product">
            {buttonText || "Shop Now"}
          </CustomButton>}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ZoomableImageContainer>
            <ZoomableImage src={awardImage} alt="Award Image" />
          </ZoomableImageContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default AwardSection;
