import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import GoogleSignUp from "../GoogleSignUp";
// import jwt_decode from "jwt-decode";
import "./Nav.css";

export default function NavBar() {
  const [user, setUser] = useState("");
  // const token = localStorage.getItem('token');
  // if (token) {
  //   setUser(jwt_decode(token))
  // }
  return (
    <Box className="NavStyle">
      {/* <h4>{user ? user.name : ""}</h4> */}
      <Box className="NavItem"><Link to="/">Streams</Link></Box>
      <Box className="NavItem"><Link to="/streams/new">New Streams</Link></Box>
      <Box className="NavItem"><GoogleSignUp /></Box>
    </Box>
  )
}
