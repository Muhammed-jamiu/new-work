import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router";
// import "../Router-App-Files/Router.css";
import AboutUs from "./Routercomponent/AboutUs";
import Home from "./Routercomponent/Home";
import Profile from "./Routercomponent/Profile";
import NavBar from "./Routercomponent/NavBar";
import Search from "./Routercomponent/Search";
import Login from "./Routercomponent/Login";
import Shop from "./Routercomponent/Shop";
import Booking from "./Routercomponent/Booking";
import NotFound from "./Routercomponent/NotFound";
import Users from "./Routercomponent/Users";
function RouterApp() {
  return (
    <>
      <div className="App">
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default RouterApp;
