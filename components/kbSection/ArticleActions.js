import React, { useState } from "react";
import { Box, Typography, IconButton, Modal, Divider, useMediaQuery } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ArticleActions = () => {
  const [openShareModal, setOpenShareModal] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Handle print function
  const handlePrint = () => {
    window.print();
  };

  // Toggle modal for sharing options
  const handleOpenShareModal = () => setOpenShareModal(true);
  const handleCloseShareModal = () => setOpenShareModal(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMobile ? "center" : "space-between",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        border: "2px solid #ddd",
        padding: isMobile ? "5px 10px" : "10px 20px",
        borderRadius: "2px",
        backgroundColor: "#f9f9f9",
        marginTop: "5%",
        marginBottom: "15%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        {/* Like */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: isMobile ? "10px" : "0" }}>
          <IconButton>
            <ThumbUpAltOutlinedIcon sx={{ color: "#007bff" }} />
          </IconButton>
          <Typography sx={{ color: "#007bff", fontSize: "14px" }}>10</Typography>
        </Box>

        {/* Divider */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ margin: "0 10px", borderColor: "#ddd" }}
          />
        )}

        {/* Dislike */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: isMobile ? "10px" : "0" }}>
          <IconButton>
            <ThumbDownAltOutlinedIcon sx={{ color: "#007bff" }} />
          </IconButton>
          <Typography sx={{ color: "#007bff", fontSize: "14px" }}>10</Typography>
        </Box>

        {/* Divider */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ margin: "0 10px", borderColor: "#ddd" }}
          />
        )}

        {/* Views */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: isMobile ? "10px" : "0" }}>
          <IconButton>
            <VisibilityOutlinedIcon sx={{ color: "#007bff" }} />
          </IconButton>
          <Typography sx={{ color: "#007bff", fontSize: "14px" }}>186</Typography>
        </Box>

        {/* Divider */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ margin: "0 10px", borderColor: "#ddd" }}
          />
        )}

        {/* Print */}
        <IconButton onClick={handlePrint} sx={{ marginBottom: isMobile ? "10px" : "0" }}>
          <PrintOutlinedIcon sx={{ color: "#007bff" }} />
        </IconButton>

        {/* Divider */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ margin: "0 10px", borderColor: "#ddd" }}
          />
        )}

        {/* Share */}
        <IconButton onClick={handleOpenShareModal} sx={{ marginBottom: isMobile ? "10px" : "0" }}>
          <ShareOutlinedIcon sx={{ color: "#007bff" }} />
        </IconButton>
      </Box>

      {/* Read Time */}
      <Typography sx={{ color: "#666", fontSize: "14px", textAlign: isMobile ? "center" : "right" }}>
        1 minute read
      </Typography>

      {/* Share Modal */}
      <Modal open={openShareModal} onClose={handleCloseShareModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 100,
            backgroundColor: "white",
            padding: 2,
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <IconButton>
              <FacebookIcon sx={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "#1DA1F2" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "#0077b5" }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ArticleActions;
