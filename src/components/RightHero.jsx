import React from "react";
import { animated, useResize } from "@react-spring/web";
import Search from "../sections/Search";

const RightHero = ({ ref, springs, handleClick, styles }) => {
  return (
    <animated.div
      ref={ref}
      style={{
        ...springs,
      }}
      className="bg-background flex items-center flex-col mt-[100px] h-[100%]"
    >
      <p className="text-text font-semibold text-xl text-center pb-4">
        Search the Historical prices of Tech Products in Bangladesh
      </p>
      <div className="flex justify-center items-center w-full">
        <Search onClick={handleClick} />
      </div>
    </animated.div>
  );
};

export default RightHero;
