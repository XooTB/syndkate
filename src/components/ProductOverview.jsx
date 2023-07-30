import React from "react";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

const ProductOverview = ({ product }) => {
  const navigate = useNavigate();

  const link = `/product/${product._id}`;

  return (
    <div className="flex justify-center items-center rounded-xl mt-2 px-3 py-2 text-text1 bg-background1 bg-opacity-50 font-opensans text-base md:text-lg hover:bg-opacity-60">
      <img
        src={product.image}
        className="h-20 p-2 md:w-28 bg-background border-[1px] border-background1 rounded-md hover:cursor-pointer"
      />

      <div className="flex flex-col pl-2 md:pl-4 pt-2 w-2/3">
        <a href={link}>
          <h1 className="font-inika text-sm md:text-lg hover:cursor-pointer hover:text-accent1">
            {product.productTitle}
          </h1>
        </a>
        <h3 className="pt-3 text-sm font-semibold md:text-base">
          <span className="text-accent1 font-opensans">Price:</span>{" "}
          {product.latestPrice} BDT
        </h3>
      </div>
      <div className="w-1/3 flex items-center">
        <div className="flex items-center pl-5">
          <img src={useStore(product.store)} className="h-10 w-16" />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
