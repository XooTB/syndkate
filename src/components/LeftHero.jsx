import React from "react";
import { animated } from "@react-spring/web";

const LeftHero = ({ elementRef, springs, onClick }) => {
  return (
    <animated.div
      ref={elementRef}
      style={{
        ...springs,
      }}
      className="bg-background text-text font-changa h-[100%] leading-none"
    >
      <span>Is it the best time to</span>
      <br />
      <div className="flex">
        <p className="bg-gradient-to-l from-text to-accent bg-clip-text text-transparent w-auto mr-2">
          Buy?
        </p>
        <p className="text-primary"> IDK!</p>
      </div>
      <span>Take a Look for</span>
      <br />
      <span>yourself!</span>
    </animated.div>
  );
};

export default LeftHero;
