import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

//components
import NavBar from "./NavBar/NavBar";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/new" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/show" element={<StreamShow />} />
      </Routes>
    </>
  );
}
