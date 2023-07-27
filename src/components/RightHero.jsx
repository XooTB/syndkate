import React from "react";
import { animated, useResize } from "@react-spring/web";
import SearchBox from "../sections/SearchBox";

const RightHero = ({ ref, springs, handleClick, styles }) => {
  return (
    <animated.div
      ref={ref}
      style={{
        ...springs,
      }}
      className="bg-transparent flex items-center flex-col md:justify-center md:h-[100%] md:min-h-[470px]"
    >
      <p className="text-text1 font-semibold text-center text-base py-5 md:text-lg md:py-6">
        Search through the products
      </p>
      <div className="flex justify-center items-center w-full">
        <SearchBox onClick={handleClick} />
      </div>
    </animated.div>
  );
};

export default RightHero;
