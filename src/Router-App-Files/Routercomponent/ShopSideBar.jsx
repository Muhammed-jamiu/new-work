import React from "react";
import SetProduct from "./SetProduct";
import { products } from "./Products";
import ProductNav from "./ProductNav";
function ShopSideBar() {
  return (
    <>
      <div className="div-con">
        <div className="division">
          <ProductNav></ProductNav>
        </div>
        <div className="mapping">
          {products.map((product) => {
            return <SetProduct product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ShopSideBar;
