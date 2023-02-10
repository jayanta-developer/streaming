import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import "./Nav.css";

export default function NavBar() {
  return (
    <Box className="NavStyle">
      <Box className="NavItem"><Link to="/">Streams</Link></Box>
      <Box className="NavItem"><Link to="/streams/new">New Streams</Link></Box>
      <Box className="NavItem"><Link to="/login">Login</Link></Box>
    </Box>
  )
}
