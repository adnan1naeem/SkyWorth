import React, { useState, useRef } from "react";
import {
  Button,
  Box,
  Typography,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const FileUpload = ({ label, onChange, required }) => {
  const [imageUrl, setImageUrl] = useState(null); 
  const [fileName, setFileName] = useState(""); 
  const [uploadProgress, setUploadProgress] = useState(100); 

  const fileInputRef = useRef(); 

  const handleChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
        setFileName(file.name); 
        if (onChange) {
          onChange(file);
        }
      };
      reader.readAsDataURL(file);
      setUploadProgress(100); 
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null); 
    setFileName(""); 
    setUploadProgress(0);
    fileInputRef.current.value = ""; 
  };

  const uniqueId = `file-upload-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          marginBottom: "4px",
          fontSize: 16,
          fontFamily: "Kanit",
          fontWeight: "400",
        }}
      >
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Typography>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id={uniqueId}
        type="file"
        onChange={handleChange}
        ref={fileInputRef}
        disabled={!!imageUrl}
      />
      {!imageUrl && (
        <label htmlFor={uniqueId}>
          <Button
            sx={{
              backgroundColor: "#6f757e",
              color: "white",
              padding: "10px 20px",
              borderRadius: 0,
              fontFamily: "Kanit",
              fontWeight: "400",
              marginTop: "10px",
              marginBottom: "10px",
              textTransform: "capitalize",
            }}
            component="span"
          >
            Choose File
          </Button>
        </label>
      )}
      {imageUrl && (
        <Box
          mt={2}
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc", // Border around the container
            borderRadius: "8px", // Optional: rounded corners
            padding: "10px",
            position: "relative",
          }}
        >
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "10px", marginBottom: "4px" }}
            >
              {fileName}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              sx={{
                height: "6px",
                mt: "0.5%",
                backgroundColor: "#f3f3f3",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#1976d2", // Customize progress bar color
                },
              }}
            />

            <Typography variant="body2" mt={1}>
              100% Completed 422.2KB
            </Typography>
          </Box>
          <IconButton
            sx={{
              marginLeft: "10px",
              padding: "4px", // Reduce padding to make the icon smaller
              backgroundColor: "none",
              borderRadius: "50%",
              position: "absolute",
              right: "6px",
              top: "2px",
              border: "none",
              color: "#f56c6c",
            }}
            onClick={handleRemoveImage}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
