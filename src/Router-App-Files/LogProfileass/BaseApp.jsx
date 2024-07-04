import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AssProfile from "./AssProfile";
import LoginAssigment from "./LoginAssigment";
import ErrorPage from "./ErrorPage";
import "./styleTail.css";
function BaseApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginAssigment />} />
      <Route path="/login" element={<LoginAssigment />} />
      <Route path="/profile" element={<AssProfile />} />
      <Route path="*" element={<ErrorPage />} />{" "}
    </Routes>
  );
}

export default BaseApp;
