import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

//components
import NavBar from "./components/NavBar/NavBar";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import Products from "./components/Products/Products";
import Cart from "./components/Products/Cart";

import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";

export default function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/new" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/show" element={<StreamShow />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
