import React from "react";
import ProductRow from "./Gchild.jsx";
function ProductTable({ products }) {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.name} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProductTable;
