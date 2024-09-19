import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Define the styles
const containerStyles = {
  width: "100%",
  height: "100%",
  mt: "6%",
};

const imageStyles = {
  width: "100%",
  height: "100%",
};

const headingStyles = {
  fontWeight: "bold",
  marginBottom: "16px",
  width: {xs:"100%",sm:'70%'},
  fontSize:'30px',
  marginLeft:{xs:'10px',sm:'40px'},
  marginTop:'10px'
};

const paragraphStyles = {
  lineHeight: 1.9,
  maxWidth: "100%",
  width: "95%",
  marginLeft:{xs:'10px',sm:'40px'},
    marginTop:'30px'

};

// Component definition
function SkyworthSection() {
  return (
    <Box sx={containerStyles}>
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="https://skyworth.com.my/wp-content/uploads/2023/08/SKYWORTH-TV-.jpg"
            alt="SKYWORTH TV"
            style={imageStyles}
          />
        </Grid>

        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#0069c8", color: "white", padding: "20px",pt:'40px'}}
        >
          <Typography variant="h5" component="h1" sx={headingStyles}>
            SKYWORTH has grown to be one of the Top Global TV brands in the
            world.
          </Typography>
          <Typography variant="body1" sx={paragraphStyles}>
            SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV
            Brands during CES. SKYWORTH consistently adheres to its original
            intention, committed to enabling consumers to deeply experience the
            charm of technology in their lives.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkyworthSection;
