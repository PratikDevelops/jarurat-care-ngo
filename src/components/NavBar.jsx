import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#7366ff" }}>
      <Typography variant="h6" sx={{ color: "white" }}>
        Jarurat Care NGO
      </Typography>
      <Box>
        <Button component={Link} to="/" sx={{ color: "white" }}>Home</Button>
        <Button component={Link} to="/form" sx={{ color: "white" }}>Form</Button>
        <Button component={Link} to="/map" sx={{ color: "white" }}>Map</Button>
        <Button component={Link} to="/data" sx={{ color: "white" }}>Data</Button>
      </Box>
    </Box>
  );
};

export default NavBar;
