import React from "react";
function SetProduct(props) {
  //Note i disstructure it instead of props i used product
  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={props.products.img} alt="" />
        </div>
        <div className="product-details">
          <span>{props.products.name}</span>
          <span>{props.products.size}</span>
          <span>{props.products.price}</span>
        </div>
      </div>
    </>
  );
}

export default SetProduct;
