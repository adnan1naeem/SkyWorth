import { Box, Typography, Card, CardContent, CardMedia, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function EventCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 400, position: "relative" }}>
        {/* Image at the top */}
        <CardMedia
          component="img"
          alt="SKYWORTH Badminton Event"
          height="140"
          image="https://skyworth.com.my/wp-content/uploads/2023/09/charity-for-smk-sri-hartamas-3.jpg" // Replace with your image path
        />

        {/* "Event" Button */}
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            borderColor: "#fff",
            color: "#fff",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#1976d2", // Change this to the desired hover color (blue)
              borderColor: "#1976d2",
              color: "#fff",
            },
          }}
        >
          Event
        </Button>

        <CardContent>
          {/* Date */}
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            September 14, 2023
          </Typography>
          {/* Title */}
          <Typography gutterBottom variant="h6" component="div">
            SKYWORTH Badminton Tournament 2023 Penang
          </Typography>
          {/* Description */}
          <Typography variant="body2" color="textSecondary">
            A Captivating Display of Passion and Sportsmanship. The SKYWORTH Badminton Tournament 2023 Penang Stop was a truly captivating event...
          </Typography>
        </CardContent>

        {/* Bottom Section (Icons and Info) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderTop: "1px solid grey",   // Adding top border
            borderBottom: "1px solid grey", // Adding bottom border
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonOutlineIcon sx={{ fontSize: 16, mr: 1 }} />
            <Typography variant="body2">skyworth</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="small">
              <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <Typography variant="body2">0</Typography>
            <IconButton size="small" sx={{ ml: 2 }}>
              <FavoriteBorderIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <Typography variant="body2">0</Typography>
          </Box>
        </Box>

      </Card>
    </Box>
  );
}

export default EventCard;
