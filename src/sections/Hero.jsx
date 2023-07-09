import React, { useState } from "react";
import Search from "./Search";
import { animated, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";
import LeftHero from "../components/LeftHero";
import RightHero from "../components/RightHero";

const Hero = () => {
  const [isOpen, toggle] = useState(false);

  const [leftSprings, leftApi] = useSpring(() => ({
    from: { x: 0, width: "50vw", "font-size": "4.5rem" },
  }));

  const [rightSprings, rightApi] = useSpring(() => ({
    from: { width: "50vw" },
  }));

  const [leftRef, { width }] = useMeasure();

  const handleLeft = () => {
    toggle(!isOpen);

    if (isOpen) {
      leftApi.start({
        from: { x: -width - 100, width: "0vw", "font-size": "1rem" },
        to: { x: 0, width: "50vw", "font-size": "4.5rem" },
      });

      rightApi.start({
        from: { width: "100vw" },
        to: { width: "50vw" },
      });
    } else {
      leftApi.start({
        from: { x: 0, width: "50vw", "font-size": "4.5rem" },
        to: { x: width ? -width - 100 : 0, width: "0vw", "font-size": "1rem" },
      });
      rightApi.start({
        from: { width: "50vw" },
        to: { width: "100vw", x: 0 },
      });
    }
  };

  const handleRight = () => {};

  return (
    <div className="hero pt-[50px] flex flex-row">
      {/* Left Container */}
      <LeftHero elementRef={leftRef} springs={leftSprings} />

      {/* Right Container */}
      <RightHero handleClick={handleLeft} springs={rightSprings} />
    </div>
  );
};

export default Hero;
