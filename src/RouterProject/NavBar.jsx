import React from "react";
// import "./projectStyle/proj.css";
import "../RouterProject/projectStyle/proj.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <div className="navone">
        <button>Home</button>
        <button>My Profile</button>
      </div>
      <div className="navtwo">
        <Link className="">Event</Link> <button>Search</button>
      </div>
      <div className="navthree">
        <button>Shopping</button>
        <button>Booking</button>
        <button>About-Us</button>
      </div>
    </div>
  );
}

export default NavBar;
