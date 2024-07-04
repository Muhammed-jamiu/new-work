import React from "react";
import ProductTable from "./componenet/Child.jsx";
function ProductList() {
  const products = [
    { name: "Bread", Price: "200naira", size: "2peices", count: "23" },
    { name: "Biscult", Price: "100naira", size: "4pieces", count: "29" },
    { name: "Yam", Price: "1000naira", size: "3tubers", count: "100" },
  ];
  return (
    <>
      <ProductTable products={products} />
    </>
  );
}
export default ProductList;
