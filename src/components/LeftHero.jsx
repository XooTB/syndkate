import React from "react";
import { animated } from "@react-spring/web";

const LeftHero = ({ elementRef, springs, onClick }) => {
  return (
    <animated.div
      ref={elementRef}
      style={{
        ...springs,
      }}
      className="bg-background text-text font-changa h-[100px] leading-none flex flex-col"
    >
      <p>Is it the best time to</p>
      <div className="flex">
        <p className="bg-gradient-to-l from-text to-accent bg-clip-text text-transparent w-auto mr-2">
          Buy?
        </p>
        <p className="text-primary"> IDK!</p>
      </div>
      <p>Take a Look for</p>
      <p>yourself!</p>
    </animated.div>
  );
};

export default LeftHero;
