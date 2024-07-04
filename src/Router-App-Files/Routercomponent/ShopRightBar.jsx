import React from "react";
import SetProductTwo from "../../Router-App-Files/Routercomponent/SetProductTwo";
import { productsTwo } from "./ProductsTwo";
function ShopRightBar() {
  return (
    // <SetProductTwo></SetProductTwo>
    <div className="shoprightbar">
      {productsTwo.map((productstwo) => {
        return <SetProductTwo products={productstwo} />;
      })}
    </div>
  );
}

export default ShopRightBar;
