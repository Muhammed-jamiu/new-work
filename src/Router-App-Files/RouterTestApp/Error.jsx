import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1 className="p">Page Not Found</h1>
      <Link to={"/"}>Go Back To Home Page</Link>
    </div>
  );
}

export default Error;
