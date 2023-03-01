import React from 'react';
import { useSelector } from "react-redux";


export default function Cart() {
  const cartItems = useSelector(state => state.cart)
  const { data: product } = useSelector((state) => state.products);
  console.log(cartItems)
  console.log(product)



  cartItems.map(ell => {
    console.log(ell)
    console.log(product.map(el => {
      el
    }))
  })
  return (
    <div>Cart</div>
  )
}
