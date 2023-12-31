import React from "react";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePageResult = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="bg-background1 bg-opacity-20 mt-1 flex border-[1px] px-3 py-2">
      <div className="w-1/5 md:w-1/6 flex items-center justify-center">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} className="w-12 cursor-pointer" />
        </Link>
      </div>
      <div className="pl-2 md:pl-0 text-text1 text-left font-noto w-4/6">
        <Link to={`/product/${product._id}`}>
          <h3 className=" text-xs md:text-lg hover:text-accent1 cursor-pointer">
            {product.productTitle}
          </h3>
        </Link>
        <p className="text-xs">
          <span className="text-accent1">Price:</span> {product.latestPrice}
        </p>
      </div>
      <div className="w-1/6 flex items-center justify-center">
        <img src={useStore(product.store)} className="h-5 w-5 md:h-9 md:w-10" />
      </div>
    </div>
  );
};

export default HomePageResult;
