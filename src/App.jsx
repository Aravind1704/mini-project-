import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Home from "./Home.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
