import React from 'react';
import { Modal, Box, IconButton, Typography, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageThumbnail from './ImageThumbnail';

const ProductModal = ({
  open,
  onClose,
  selectedProduct,
  activeImageIndex,
  handlePrevImage,
  handleNextImage,
  handleThumbnailClick,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {xs:"80%",lg:'60%'},
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ float:'inline-end',zIndex:999}}
        >
          <CloseIcon  onClick={onClose}/>
        </IconButton>
        {selectedProduct && (
          <>
            <Box sx={{ position: 'relative', textAlign: 'center', mb: 2 }}>
              <IconButton
                aria-label="previous image"
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-10%)',
                  zIndex: 10,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                }}
              >
                <ArrowBackIosIcon sx={{paddingLeft:'4px'}}/>
              </IconButton>
              <img
                src={selectedProduct.image[activeImageIndex]?.src}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  borderRadius: 4,
                }}
              />
              <IconButton
                aria-label="next image"
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            <Grid container spacing={2} justifyContent="center">
              {selectedProduct?.image?.map((image, index) => (
                <Grid item key={index} sx={{ cursor: 'pointer' }}>
                  <ImageThumbnail
                    image={image?.src}
                    isActive={activeImageIndex === index}
                    onClick={() => handleThumbnailClick(index)}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography
              id="product-modal-title"
              sx={{
                fontWeight: 400,
                fontSize: { xs: 25, sm: 30, md: 35, lg: 35 },
                lineHeight: 1,
                width: '100%',
                margin: '50px 10px 10px 10px',
              }}
              variant="h6"
            >
              {selectedProduct?.name}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ProductModal;
