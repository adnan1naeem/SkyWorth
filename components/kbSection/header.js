import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";

function Header({title}) {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "0 auto",
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        align="left"
        sx={{ color: "#636363", fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        marginTop={3}
      >
        <Box display="flex" alignItems="center">
          <Link href="/">
            <Typography
              variant="body1"
              component="span"
              sx={{
                marginRight: 1,
                fontSize: "14px",
                color: "#107eec",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Home
            </Typography>
          </Link>
          <Typography
            variant="body1"
            component="span"
            sx={{ mr: "5px", fontSize: "14px" }}
          >
            /
          </Typography>
          <Link
            href="/faq"
            style={{ textDecoration: "none", color: "black", marginLeft: 1 }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontSize: "14px",
                color: "#107eec",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Knowledgebase
            </Typography>
          </Link>
          <Typography
            variant="body1"
            component="span"
            sx={{ ml: "4px", fontSize: "14px" }}
          >
            / {title}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ marginTop: 6, borderBottomWidth: 0.5 }} />
    </Box>
  );
}

export default Header;
