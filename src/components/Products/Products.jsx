import React from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from "../../store/productSlice"
import { useSelector } from 'react-redux';

export default function Products() {
  const dispatch = useDispatch()
  dispatch(getProduct())
  const products = useSelector(state => state.products);
  console.log(products)

  return (
    <div>Products</div>
  )
}
