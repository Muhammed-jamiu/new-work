import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function SubNavRoute() {
  const activeStyle = {
    color: "green",
    borderBottomColor: "green",
  };
  return (
    <>
      <div className="flex gap-[20px] mt-[20px] ml-[300px]">
        <NavLink
          to={"dashboard"}
          className="border-[2px] w-[100px] h-[30px] text-center rounded-md  tracking-wide hover:bg-gray-300 bg-gray-400 text-white"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"news"}
          className="border-[2px] w-[100px] h-[30px] text-center rounded-md hover:bg-gray-300 tracking-wide bg-gray-400 text-white"
        >
          News
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"review"}
          className="border-[2px] w-[100px] h-[30px] text-center rounded-md hover:bg-gray-300 tracking-wide bg-gray-400 text-white"
        >
          Review{" "}
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default SubNavRoute;
