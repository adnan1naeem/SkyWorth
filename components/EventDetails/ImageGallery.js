import { useState } from "react";
import { Box, Modal, IconButton, Typography } from "@mui/material";
import { Close, ArrowForward, ArrowBack, Fullscreen, Search } from "@mui/icons-material";
import { styled } from "@mui/system"; // Ensure this import is present

// Zoomable image container styles
const ZoomableImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
});

// Image styles with zoom effect
const ZoomableImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  transition: "transform 0.3s ease",
  cursor:'pointer',
  "&:hover": {
    transform: "scale(1.1)", // Zoom effect on hover
    zIndex: 1,
  },
});

function ImageGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false); 

  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
    setZoomed(false); // Reset zoom state on opening
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setZoomed(false); // Reset zoom state when changing image
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setZoomed(false); // Reset zoom state when changing image
  };

  const toggleZoom = () => {
    setZoomed((prev) => !prev); // Toggle zoom state
  };

  return (
    <Box sx={styles.galleryContainer}>
      <Box sx={styles.imageGrid}>
        {images.map((image, index) => (
          <ZoomableImageContainer key={index}>
            <ZoomableImage
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleOpen(index)}
            />
          </ZoomableImageContainer>
        ))}
      </Box>

      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Box sx={styles.modalOverlay}>
          <IconButton onClick={handleClose} sx={styles.closeButton}>
            <Close />
          </IconButton>
          <IconButton onClick={handlePrev} sx={styles.prevButton}>
            <ArrowBack />
          </IconButton>

          {/* Search Icon for zoom functionality */}
          <IconButton onClick={toggleZoom} sx={styles.searchButton}>
            <Search />
          </IconButton>

          <IconButton onClick={handleNext} sx={styles.nextButton}>
            <ArrowForward />
          </IconButton>
          <IconButton
            onClick={() => console.log("Full Screen")}
            sx={styles.fullscreenButton}
          >
            <Fullscreen />
          </IconButton>
          <Box sx={styles.imageInfo}>
            <Typography variant="body1" sx={styles.imageNumber}>
              {`${currentImageIndex + 1} / ${images.length}`}
            </Typography>
          </Box>

          <Box sx={styles.modalContent}>
            <Box
              component="img"
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              sx={{
                ...styles.modalImage,
                transform: zoomed ? "scale(1.1)" : "scale(1)", // Apply zoom effect
                transition: "transform 0.3s ease", // Smooth transition for zoom
              }}
              onClick={toggleZoom} // Toggle zoom on click
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

const styles = {
  galleryContainer: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1000px",
    marginTop: '5%',
    marginBottom: '5%',
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr", 
      md: "repeat(2, 1fr)", 
    },
    gap: "16px",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    position: "relative",
    maxWidth: "90%", // Increase width to 90%
    maxHeight: "90%", // Limit height to 90%
  },
  modalImage: {
    width: "100%", // Full width of modalContent
    height: "auto",
    maxHeight: "90vh", // Adjust maxHeight to keep aspect ratio
    objectFit: "contain",
  },
  closeButton: {
    position: "absolute",
    top: "6px",
    right: "16px",
    color: "#fff",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: "16px",
    color: "#fff",
    transform: "translateY(-50%)",
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: "16px",
    color: "#fff",
    transform: "translateY(-50%)",
  },
  searchButton: {
    position: "absolute",
    top: "26px",
    right: "40px",
    transform: "translate(-50%, -50%)", // Center the search icon
    color: "#fff",
  },
  fullscreenButton: {
    position: "absolute",
    top: "6px",
    right: "76px",
    transform: "translateX(-50%)",
    color: "#fff",
  },
  imageInfo: {
    position: "absolute",
    top: "20px",
    left: '16px',
    color: "#fff",
  },
  imageNumber: {
    fontWeight: "bold",
  },
};

export default ImageGallery;
