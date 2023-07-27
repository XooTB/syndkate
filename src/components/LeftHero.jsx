import React from "react";
import { animated } from "@react-spring/web";

const LeftHero = ({ elementRef, springs, onClick }) => {
  return (
    <animated.div
      ref={elementRef}
      style={{
        ...springs,
      }}
      className="font-expletus text-text1 text-lg md:text-xl leading-none flex flex-col justify-center text-center md:text-left md:px-7 md:min-h-[470px] font-bold"
    >
      <p className="leading-snug ">
        Who's offering the Best <span className="text-accent1">Price?</span>
      </p>
      <p className=" leading-normal">Find Out!</p>
    </animated.div>
  );
};

export default LeftHero;
