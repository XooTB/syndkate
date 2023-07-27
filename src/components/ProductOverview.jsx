import React from "react";

const ProductOverview = ({ product }) => {
  return (
    <div className="flex shadow-lg rounded-2xl mt-3 px-3 py-2 text-text font-noto text-base md:text-lg">
      <img src={product.image} className="w-20 p-2 md:w-28 bg-background" />
      <div className="flex flex-col md:pl-3 pt-2">
        <h1>{product.productTitle}</h1>
        <h3>Price: {product.latestPrice} BDT</h3>
      </div>
      <div></div>
    </div>
  );
};

export default ProductOverview;
