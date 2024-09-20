import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
    marginTop: "5%",
    marginBottom: "5%",
    position: "relative",
  },
  searchBar: (isFocused) => ({
    width: { xs: "80%", sm: isFocused ? "50%" : "35%" },
    transition: "width 0.3s ease",
    padding: "0",
    border: "none",
    outline: "none",
    height: "40px",
  }),
  iconButton: {
    width: { xs: "80%", sm: "40px" },
    height: "40px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: { xs: "0", sm: "0.5%" },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    padding: "0",
    marginLeft: { xs: "0", sm: "0.5%" },
  },
  tooltipPaper: {
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    width: "20vh", // Set width for the tooltip
    textAlign: "center",
    height: 'auto',
  },
  tooltipText: {
    fontSize: "1rem",
    color: "black", // Ensure text color is black for visibility
  },
};

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <Box sx={styles.container}>
      <Paper elevation={3} sx={styles.searchBar(isFocused)}>
        <TextField
          fullWidth
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          InputProps={{
            sx: {
              border: "none",
              outline: "none",
              height: "40px",
              padding: "0",
            },
          }}
        />
      </Paper>
      <Paper elevation={3} sx={styles.paper}>
        <IconButton
          sx={{ ...styles.iconButton, color: searchClicked ? "blue" : "black" }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Tooltip
   
      
   
        title={
          <Paper sx={styles.tooltipPaper}>
            <Typography sx={styles.tooltipText}>
              Not find the answer you are looking for? Ask us or suggest a better answer for any question.
            </Typography>
          </Paper>
        }
        arrow
        placement="bottom"
        sx={{
          tooltip: {
            backgroundColor: "white",
          },
        }}
      >
        <Paper elevation={3} sx={styles.paper}>
          <IconButton sx={styles.iconButton}>
            <QuestionMarkIcon />
          </IconButton>
        </Paper>
      </Tooltip>
    </Box>
  );
}

export default Search;
