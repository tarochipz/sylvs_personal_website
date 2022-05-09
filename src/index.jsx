import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./app.jsx";
// import PhotographyRoute from "./routes/photographyRoute.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
  
  // ReactDOM.render(
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<App />} />
  //       <Route path="photography" element={<PhotographyRoute />} />
  //     </Routes>
  //   </BrowserRouter>,
  //   document.getElementById("root")
);
