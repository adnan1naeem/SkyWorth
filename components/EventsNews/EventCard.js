import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/system";
import Link from "next/link";

const ZoomableImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
});

const ZoomableImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    zIndex: 1,
  },
});

export default function EventCard({ heading, image }) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "90%", md: "90%", lg: "95%" },
        m: 2,
        transition: "0.3s",
      }}
    >
      <ZoomableImageContainer>
        <ZoomableImage src={image} alt={heading} />
      </ZoomableImageContainer>

      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            ref={weeksRef}
            sx={{
              backgroundColor: "#0069c8",
              color: "#fff",
              px: 1.6,
              py: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)", // Slide effect
              transition: "opacity 1.5s ease, transform 1.5s ease", // Transition for both opacity and transform
            }}
          >
            <Typography variant="body2" sx={{fontFamily: "Kanit",}}>Events</Typography>
          </Box>
        </Box>

        <Link
            href={{
              pathname: '/event-detail',
              query: { title: encodeURIComponent(heading) },
            }}
            passHref
          >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              cursor: "pointer",
              "&:hover": { color: "#0069c8" },
              transition: "opacity 1.5s ease, transform 1.5s ease", 
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: { xs: "15px", sm: "18px" },
                width: "80%",
                color: hovered ? "#0069c8" : "black",
                mt: 2.5,
                fontWeight: "500",
                transition: "color 0.3s ease",
                fontFamily: "Kanit",

              }}
            >
              {heading}
            </Typography>

            {hovered ? (
              <ArrowRightAltIcon
                sx={{
                  fontSize: "30px",
                  color: "#0069c8",
                  transition: "0.3s ease",
                }}
              />
            ) : (
              <ArrowForwardIosIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px" },
                  border: "2px solid black",
                  borderRadius: "50%",
                  padding: "4px",
                  color: hovered ? "#0069c8" : "black",
                  transition: "all 0.3s ease",
                  marginTop: 1,
                }}
              />
            )}
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
