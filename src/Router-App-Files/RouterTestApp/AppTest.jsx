import React from "react";
import { Route, Routes } from "react-router";
// import { useState } from "react";
import "../RouterTestApp/Test.css";
import Login from "../RouterTestApp/Login";
import Profile from "../RouterTestApp/Profile";
import Home from "../RouterTestApp/Home";
import Nav from ".//Nav";
import Error from "./Error";
import "../../style/tail.css";

function AppTest() {
  return (
    <div className="App-con">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Nav />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/:username/:Id" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppTest;
