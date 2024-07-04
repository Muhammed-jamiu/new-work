import React, { useState, useEffect } from "react";
function Show(props) {
  return (
    <>
      <div>
        <p>Welcome to our world of Coding</p>
        <p>Weldone Sir How are you doing now</p>
        <p>Seeing you progressing on your web dev journy insha-Allah</p>
      </div>
      <p>{props.name}</p>
    </>
  );
}

export default Show;
