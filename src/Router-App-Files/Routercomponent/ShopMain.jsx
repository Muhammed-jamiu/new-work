import React from "react";
import SetMainpro from "./SetMainpro";
import { mainproducts } from "./Mainproduct";
function ShopMain() {
  return (
    <div className="shopmain">
      {mainproducts.map((mainpros) => {
        return <SetMainpro mainproducts={mainpros} />;
      })}
    </div>
  );
}

export default ShopMain;
