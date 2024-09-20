import { Box, Typography } from "@mui/material";

const FAQCard = ({ title, badgeNumber }) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "20px",
        textAlign: "center",
        width: "55vh",
        height: "20vh",
        position: "relative",
        transition: "all 0.3s ease", // Smooth transition
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Shadow on hover
          transform: "translateY(-5px)", // Slight lift effect
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 20,
          backgroundColor: "red",
          color: "white",
          padding: "14px 11px",
          clipPath: "polygon(100% 0%, 100% 100%, 50% 75%, 0 100%, 0 0)",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "16px" }}>
          {badgeNumber}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{ mt: 5, color: "#0069c8", fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FAQCard;
