import { useRouter } from "next/router";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import ArticleActions from "../../components/kbSection/ArticleActions";

function KnowledgeBase() {
  const router = useRouter();
  const { text, description,title } = router.query;

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        maxWidth: "100%",
        width: { xs: "100%", sm: "90%", md: "75%", lg: "70%" },
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: { xs: 2, md: 3 },
          marginTop: { xs: "20%", sm: "15%", md: "10%" },
          color: "#444",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "12px", md: "12.58px" },
          color: "#212f3e",
        }}
      >
        1 minute read
      </Typography>

      {/* Breadcrumbs */}
      <Box
        display="flex"
        alignItems="center"
        marginTop={3}
        flexWrap="wrap" // Ensure wrapping on smaller screens
      >
        <Link href="/">
          <Typography
            variant="body1"
            component="span"
            sx={{
              marginRight: 1,
              fontSize: { xs: "12px", sm: "14px" },
              color: "#107eec",
            }}
          >
            Home
          </Typography>
        </Link>
        <Typography
          variant="body1"
          component="span"
          sx={{
            mr: "5px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          /
        </Typography>
        <Link
          href="/faq"
          style={{ textDecoration: "none", marginLeft: 1 }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              color: "#107eec",
            }}
          >
            Knowledgebase
          </Typography>
        </Link>
        <Typography
          variant="body1"
          component="span"
          sx={{
            ml: "5px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          /
        </Typography>
          
        <Typography
          variant="body1"
          component="span"
          sx={{
            ml: "6px",
            fontSize: { xs: "12px", sm: "14px" },
            color: "#107eec",
            cursor:'pointer'
          }}
          onClick={() => router.back()}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          component="span"
          sx={{
            ml: "4px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          / {title} {text}
        </Typography>
      </Box>

      {/* Article Description */}
      <Typography
        variant="body1"
        sx={{
          mt: { xs: 2, sm: 4 },
          color: "#212f3e",
          fontSize: { xs: "14px", sm: "16px" },
          mb:'10%'
        }}
      >
        {description}
      </Typography>

      {/* Article Actions */}
      {/* <ArticleActions /> */}
    </Box>
  );
}

export default KnowledgeBase;
