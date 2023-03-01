import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box } from '@mui/material';
import ProductCard from "./ProductCard"
import { STATUSES } from '../../store/productSlice';

export default function ProductsCard() {
  const { data: product, status } = useSelector((state) => state.products);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <Container>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  )
}
