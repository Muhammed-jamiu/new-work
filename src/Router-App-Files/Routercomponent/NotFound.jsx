import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-con">
      <h1>Page Not Found</h1>
      <Link className="notfound" to={"/"}>
        Go back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
