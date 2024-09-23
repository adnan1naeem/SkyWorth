import React, { useState } from "react";
import { Box } from "@mui/material";
import Question from "./Question"; // Adjust the path as necessary
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import questionsData from "./QuestionData"; // Adjust the path as necessary

function QuestionList({ title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const questionsPerPage = 9;

  // Get the relevant questions based on the title
  const questions = questionsData[title] || []; // Default to empty array if title not found

  // Handle page change
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle sorting
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Sort the questions based on the selected option
  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortOption === "a-z") {
      return a.text.localeCompare(b.text);
    } else if (sortOption === "popularity") {
      return b.popularity - a.popularity;
    } else if (sortOption === "views") {
      return b.views - a.views;
    } else {
      return 0; // Default sorting
    }
  });

  // Slice questions for pagination
  const currentQuestions = sortedQuestions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  return (
    <Box
      sx={{
        alignItems: "center",
        maxWidth: "950px",
        margin: "0 auto",
        padding: 2,
      }}
    >
      {/* Dropdown for Sorting */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 3 }}>
        <select value={sortOption} onChange={handleSortChange} style={{ padding: '8px', fontSize: '14px' }}>
          <option value="default">Default</option>
          <option value="a-z">Sort A-Z</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="views">Sort by Views</option>
        </select>
      </Box>

      {/* Display Questions */}
      {currentQuestions.map((question, index) => (
        <Question key={index} text={question.text} description={question.des} title={title} />
      ))}

      {/* Pagination */}
      {questions.length > questionsPerPage ? (
        <>
          <Stack spacing={2} sx={{ marginTop: 6, mb: 3 }}>
            <Pagination
              count={Math.ceil(questions.length / questionsPerPage)}
              page={currentPage}
              onChange={handleChange}
              shape="rounded"
              variant="outlined"
            />
          </Stack>
          <Box sx={{ mb: 7 }} /> {/* Margin bottom after pagination */}
        </>
      ) : (
        <Box sx={{ mb: 7 }} /> // Margin bottom if no pagination
      )}
    </Box>
  );
}

export default QuestionList;
