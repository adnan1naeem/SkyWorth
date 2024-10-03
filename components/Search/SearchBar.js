import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${searchQuery}`);
      setSearchQuery(""); 
    }
  };

  return (
    <Box sx={{ mt: 15, maxWidth: "900px", margin: "0 auto" }}>
      <Typography
        variant="h6"
        align="left"
        gutterBottom
        sx={{ mt: "10%", fontWeight: "bold", color: "#444444" }}
      >
        Sorry, no results were found.
      </Typography>
      <Typography
        variant="body1"
        align="left"
        gutterBottom
        sx={{ color: "#676767", mt: "2%" }}
      >
        Please try again with different keywords.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          mt: 5,
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="searchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 40px 10px 10px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            outline: "none",
            backgroundColor: "#f4f4f4",
            marginTop: "3%",
            marginBottom: "10%",
            height: "50px",
          }}
        />
        <SearchIcon
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: "12px",
            top: "31%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#0069c8!important",
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
