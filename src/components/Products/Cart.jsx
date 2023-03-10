import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Container, Box, Button } from '@mui/material';



export default function Cart() {
  const cartItems = useSelector(state => state.cart)
  const [item, setItem] = useState(cartItems)
  console.log(item)

  useEffect(() => {
    setItem(cartItems)
  }, [cartItems])

  return (
    <Container sx={{ p: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", height: "auto" }}>
      {
        item.map(product => (
          <Box sx={{ width: "500px", height: "110px", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
            <Box sx={{ width: "100px" }}><img objectFit="cover" width="100%" src={product?.image} alt="" /></Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
              <h5>{product?.title}</h5>
              <p>{product?.description.slice(0, 10)}...</p>
              <h6>$-{product?.price}</h6>
            </Box>
            <Box sx={{ padding: "40px 0px 0px 16px" }}><Button variant="outlined" color="error">
              Remove
            </Button></Box>

          </Box>
        ))
      }
    </Container>
  )
}
