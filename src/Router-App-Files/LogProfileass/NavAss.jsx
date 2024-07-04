import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function NavAss() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(() => !isShow)}>
        <FontAwesomeIcon
          className="text-red-600 text-2xl lg:hidden md:hidden"
          icon={faBars}
        />
      </button>
      <nav>
        <ul className="flex justify-around">
          <li className="nav-li">
            <Link>Home</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Sponsor</Link>
          </li>
          <li>
            <Link>Programme</Link>
          </li>
          <li>
            <Link>About-Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default NavAss;
