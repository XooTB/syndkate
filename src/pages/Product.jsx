import React from "react";
import { productData } from "../constants/productData.js";

const Product = () => {
  const product = productData;
  return (
    <div className="">
      <div>
        <img src={product.image} />
        <div>
          <h1>{product.productTitle}</h1>
          <p></p>
          <table>
            <tr>
              <td>CurrentPrice: </td>
              <td>42000</td>
            </tr>
            <tr>
              <td>Historical Low: </td>
              <td>38000</td>
            </tr>
            <tr>
              <td>Historical High: </td>
              <td>46000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
