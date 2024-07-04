import React from "react";
import "./Hello.css";
import { Link } from "react-router-dom";
import Welcome from "../componenet/welcome";
function Hello() {
  return (
    <>
      <div>
        <h1> Hello world ! WELCOME</h1>
      </div>

      <Link className="link">Home</Link>

      <Welcome className="name" />
    </>
  );
}

export default Hello;
