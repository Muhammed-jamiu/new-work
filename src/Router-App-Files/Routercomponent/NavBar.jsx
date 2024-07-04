import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div>
          <ul className="link-con">
            <li>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="link"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/profile");
                }}
                className="link"
                // to="/profile"
              >
                My-Profile
              </button>
            </li>
            <li>
              <button
                // style={({ isActive }) => {
                //   return {
                //     color: isActive ? "red" : "black",
                //   };
                // }}
                onClick={() => {
                  navigate("/search");
                }}
                className="link"
                // to="/search"
              >
                Search
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/shop");
                }}
                className="link"
              >
                Shop
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="link"
                // to="/login"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/users");
                }}
                className="link"
              >
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/booking");
                }}
                className="link"
                to="booking"
              >
                Booking
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/about-us");
                }}
                className="link"
                // to="about-us"
              >
                About-Us
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
      {/* Note the outlet above allow us to display page not componenet on the RouterApp jsx base on the way we render the navBar componenet there */}
    </>
  );
}

export default NavBar;
