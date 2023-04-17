import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./compononts/our_menu";
import MainCon from "./mainCon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainCon />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
