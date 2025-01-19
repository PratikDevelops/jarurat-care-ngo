import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "20px", backgroundColor: "#7366ff" }}>
      <Typography variant="body2" sx={{ color: "white" }}>
        &copy; 2025 Jarurat Care NGO. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
