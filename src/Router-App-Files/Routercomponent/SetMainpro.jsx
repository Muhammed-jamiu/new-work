import React from "react";

function SetMainpro({ mainproducts }) {
  return (
    <>
      <div className="main-general">
        <div className="other">{/* <h2>hello</h2> */}</div>
        <div className="main-container">
          <div className="main-img">
            <img src={mainproducts.img} alt="" />
          </div>
          <div className="main-details">
            <span>{mainproducts.name}</span>
            <span>{mainproducts.size}</span>
            <span>{mainproducts.price}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetMainpro;
