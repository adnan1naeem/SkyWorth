import { Box, Typography } from "@mui/material";
import Link from "next/link";
const FAQCard = ({ title, badgeNumber }) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "20px",
        textAlign: "center",
        width: "52vh",
        height: "20vh",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          transform: "translateY(-2px)",
        },
      }}
    >
    <Link href={`/kbSection?title=${encodeURIComponent(title)}`}>
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
      </Link>
    </Box>
  );
};

export default FAQCard;
