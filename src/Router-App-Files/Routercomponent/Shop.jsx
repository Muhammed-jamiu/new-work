import React from "react";
import ShopMain from "./ShopMain";
import ShopRightBar from "./ShopRightBar";
import ShopSideBar from "./ShopSideBar";
import ProductNav from "./ProductNav";
function Shop() {
  return (
    <div className="shopping-container">
      <div className="shopside">
        {/* <ProductNav></ProductNav> */}
        <ShopSideBar></ShopSideBar>
      </div>
      <div className="restshopping">
        <div className="child-one">
          <ShopMain></ShopMain>
        </div>
        <div className="child-two">
          <ShopRightBar></ShopRightBar>
        </div>
      </div>
    </div>
  );
}

export default Shop;
