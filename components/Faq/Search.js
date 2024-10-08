import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Tooltip, Typography, Modal, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import TextInput from "../Warrenty/TextInput";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "row", sm: "row" },
    margin:"0px 10px",
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
    width: "20vh",
    textAlign: "center",
    height: 'auto',
  },
  tooltipText: {
    fontSize: "1rem",
    color: "black",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    width: { xs: "80%", sm: "30%" },
    padding: 2,
    borderRadius: 4,
  },
  textField: {
    marginBottom: 2,
  },
  formControl: {
    marginBottom: 2,
    width: '100%',
  },
};

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState('');

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleTooltipClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
        onClick={handleTooltipClick}
      >
        <Paper elevation={3} sx={styles.paper}>
          <IconButton sx={styles.iconButton}>
            <QuestionMarkIcon />
          </IconButton>
        </Paper>
      </Tooltip>


      <Modal open={openModal} onClose={handleCloseModal} sx={styles.modal}>
        <Paper sx={styles.modalPaper}>
         
      <TextInput label ="Question/Title:" name="Question/Title:"/>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            placeholder="Enter your Email"
            sx={styles.textField}
          />
          <FormControl variant="outlined" sx={styles.formControl}>
            <InputLabel>Select a Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Select a Category"
              placeholder="Select a Category"
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            variant="outlined"
            label="Answer/Details"
            placeholder="Details"
            multiline
            rows={4}
            sx={styles.textField}
          />
          <Box display="flex" justifyContent="flex-start">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default Search;
