import React from "react";
import NavBar from "./navBar.jsx";
import Home from "./pages/home/index.jsx";
import Photography from "./pages/photography/index.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer.jsx";
import "./app.css";

export default function App() {
  return (
    <div className="homepageWrapper">
      <div className="nav">
        <NavBar />
      </div>
      <Routes>
        <Route path="/photography" element={<Photography />} />

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
