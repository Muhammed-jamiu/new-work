import React from "react";
import RouterPage from "./RouterPage";
import HomeRoute from "./HomeRoute";
import NavRoute from "./NavRoute";
import SubNavRoute from "./SubNavRoute";
import ProfileRoute from "./ProfileRoute";
import TestingRoute1 from "./TestingRoute1";
import TestingRoute2 from "./TestingRoute2";
import TestingRoute3 from "./TestingRoute3";
import ErrorPage from "./ErrorPage";
// import NavAss from "../Router-App-Files/LogProfileass/NavAss";
// import Footer from "./Footer";
// import VanDetails from "./VanDetails";
import ProfileDetails from "./ProfileDetails";
import { Routes, Route } from "react-router";
import "../ScrimbaCss/Route.css";
function ReactRouter() {
  return (
    <div>
      <Routes>
        <Route element={<NavRoute />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="routerpage" element={<RouterPage />} />
          <Route path="profile" element={<ProfileRoute />} />
          <Route path="profile/:id" element={<ProfileDetails />} />
          <Route path="host" element={<SubNavRoute />}>
            <Route path="dashboard" element={<TestingRoute1 />} />
            <Route path="news" element={<TestingRoute2 />} />
            <Route path="review" element={<TestingRoute3 />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default ReactRouter;
