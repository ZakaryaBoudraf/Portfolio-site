import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProjectPapers from "./components/ProjectPapers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Portfolio-site" element={<App />} />
      <Route path="/project-papers" element={<ProjectPapers />} />
    </Routes>
  </BrowserRouter>
);
