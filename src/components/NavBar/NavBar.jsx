import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
// import GoogleAuth from "../GoogleAuth"
import GoogleSignUp from "../GoogleSignUp"
import "./Nav.css";

export default function NavBar() {
  return (
    <Box className="NavStyle">
      <Box className="NavItem"><Link to="/">Streams</Link></Box>
      <Box className="NavItem"><Link to="/streams/new">New Streams</Link></Box>
      <Box className="NavItem"><GoogleSignUp /></Box>
    </Box>
  )
}
