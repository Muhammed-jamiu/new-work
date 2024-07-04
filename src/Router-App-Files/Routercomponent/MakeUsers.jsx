import React from "react";
import { Link } from "react-router-dom";

function Users({ detail }) {
  return (
    <div
      className="userone"
      style={{
        marginTop: "10px",
      }}
    >
      <img
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "10px",
          marginLeft: "10px",
        }}
        src={detail.img}
      />
      <div
        style={{
          position: "relative",
          left: "40px",
          fontFamily: "sans-serif",
          color: "white",
          border: "1px solid green",
          backgroundColor: "green",
          textAlign: "center",
          width: "90px",
          borderRadius: "7px ",
        }}
      >
        {" "}
        {detail.name}
      </div>
      <Link to={`/users/${detail.name}`} className="btn-one">
        More info
      </Link>
    </div>
  );
}

export default Users;
