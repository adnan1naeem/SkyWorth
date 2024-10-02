import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

function FooterCard({...props}) {
  return (
    <Box >
      <Card
        sx={{
          height: { sx: "12rem", sm: "10rem", md: "13rem", lg: "15rem" },
          width: { sx: "12rem", sm: "14rem", md: "16rem", lg: "18rem" },
          background: "none",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "21px",
              fontWeight: 600,
              paddingBottom: {xs:"3%",lg:"10%"},
              fontFamily: "Mont-Bold, Sans-serif",
            }}
          >
            {props.title}
          </Typography>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: props.href_one }}
          >
            <Typography
              sx={{
                mt: props.mt,
                color: "#ffffff",
                "&:hover": {
                  color:'#bdbdbd',
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
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: props.href_two }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color:'#bdbdbd',
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
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname:props.href_three }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color:'#bdbdbd',
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
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: props.href_four }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color:'#bdbdbd',
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
          </Link>
        {props.text5&&  <Link
            style={{ textDecoration: "none" }}
            href={{ pathname: props.href_five }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                marginTop: "5px",
                "&:hover": {
                  color:'#bdbdbd',
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
          </Link>}
        </CardContent>
      </Card>
    </Box>
  );
}

export default FooterCard;
