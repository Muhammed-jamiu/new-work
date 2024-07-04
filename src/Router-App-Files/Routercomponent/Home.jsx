import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homes">
      <h1>This is Home Page</h1>
      <Link className="home" to="/users/Muhammed-Jamiu">
        Go to Profile Page
      </Link>
    </div>
  );
}

export default Home;
