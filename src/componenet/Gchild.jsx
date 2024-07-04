import React from "react";
function ProductRow({ product }) {
  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.Price}</td>
        <td>{product.size}</td>
        <td>{product.count}</td>
      </tr>
    </>
  );
}
export default ProductRow;
