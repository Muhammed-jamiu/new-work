import React from "react";
import MakeUsers from "./MakeUsers";
import { profiles } from "./profiles";

function Users() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "50px",
          marginLeft: "80px",
        }}
      >
        {profiles.map((profile) => {
          return <MakeUsers detail={profile} />;
        })}
      </div>
    </>
  );
}

export default Users;
