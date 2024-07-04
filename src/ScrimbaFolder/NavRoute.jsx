import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
function NavRoute() {
  const activeStyle = {
    color: "white",
    backgroundColor: "green",
  };
  return (
    <>
      <div className="flex justify-around mt-[30px]">
        <div>
          <h2 className="border-[2px] w-[130px] text-center rounded-md bg-gray-300 cursor-pointer hover:bg-gray-400 ">
            REACT-ROUTER
          </h2>
        </div>
        <nav className=" flex gap-[20px] relative left-[70px]">
          <NavLink
            to={"/"}
            className="text-white border-[1px] w-[100px] rounded-md text-center bg-sky-500 hover:bg-sky-600 hover:"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home page
          </NavLink>
          <NavLink
            to={"routerpage"}
            className="text-white border-[1px] w-[100px] rounded-md text-center bg-sky-500 hover:bg-sky-600"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About-Us
          </NavLink>
          <NavLink
            to={"profile"}
            className="text-white border-[1px] w-[100px] rounded-md text-center bg-sky-500 hover:bg-sky-600"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Profile
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to={"host"}
            className="text-white border-[1px] w-[100px] rounded-md text-center bg-sky-500 hover:bg-sky-600"
          >
            Host
          </NavLink>
        </nav>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default NavRoute;
