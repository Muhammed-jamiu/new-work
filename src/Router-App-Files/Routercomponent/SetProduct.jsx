import React from "react";
function SetProduct({ product }) {
  //Note i disstructure it instead of props i used product
  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="product-details">
          <span>{product.name}</span>
          <span>{product.size}</span>
          <span>{product.price}</span>
        </div>
      </div>
    </>
  );
}

export default SetProduct;
