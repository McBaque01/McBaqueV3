import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Portfolio } from "../pages/Portfolio";

export const RouteHero = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Portfolio" />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};
