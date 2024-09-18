import React from "react";
import Button from "@mui/material/Button";

function ButtonHover({ textButton }) {
  return (
    <div className="App">
      <Button
        variant="outlined"
        sx={{
          borderRadius: "50px",
          color: "#f8f8f8",
          fontWeight: "600",
          fontSize: "15px",
          paddingTop: "6px",
          paddingBottom: "6px",
          border: "2.2px solid #18B0E6",
          textTransform: "none",
          paddingLeft: "15px",
          paddingRight: "15px",
          fontFamily: "Mont-Regular,Sans-serif",

          "&:hover": {
            backgroundColor: "#18B0E6", // Set the desired background color on hover
            border: "2.2px solid #18B0E6",


          },
        }}
      >
        {textButton}
      </Button>
    </div>
  );
}

export default ButtonHover;
