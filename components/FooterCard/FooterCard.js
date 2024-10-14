import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function FooterCard({ onLinkClick, ...props }) {
  return (
    <Box>
      <Card
        sx={{
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          {props?.title && (
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "21px",
                fontWeight: 600,
                paddingBottom: { xs: "3%", lg: props.title === "Service & Support" ? '5%' : props.title === "About" ? "7%" : "10%" },
                fontFamily: "Mont-Bold, Sans-serif",
              }}
            >
              {props.title}
            </Typography>
          )}

          {props?.text1 && (
            <Typography
              onClick={() => onLinkClick(props.href_one)}
              sx={{
                mt: props.mt,
                color: "#ffffff",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Mont-Regular, Sans-serif",
                fontWeight: 250,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "17px",
                },
              }}
            >
              {props.text1}
            </Typography>
          )}

          {props?.text2 && (
            <Typography
              onClick={() => onLinkClick(props.href_two)}
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Mont-Regular, Sans-serif",
                fontWeight: 250,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "17px",
                },
              }}
            >
              {props.text2}
            </Typography>
          )}

          {props?.text3 && (
            <Typography
              onClick={() => onLinkClick(props.href_three)}
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Mont-Regular, Sans-serif",
                fontWeight: 250,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "17px",
                },
              }}
            >
              {props.text3}
            </Typography>
          )}

          {props?.text4 && (
            <Typography
              onClick={() => onLinkClick(props.href_four)}
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Mont-Regular, Sans-serif",
                fontWeight: 250,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "17px",
                },
              }}
            >
              {props.text4}
            </Typography>
          )}

          {props.text5 && (
            <Typography
              onClick={() => onLinkClick(props.href_five)}
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color: '#bdbdbd',
                },
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Mont-Regular, Sans-serif",
                fontWeight: 250,
                "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                  fontSize: "17px",
                },
              }}
            >
              {props.text5}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterCard;
