import React, { useState, useRef } from "react";
import Search from "./SearchBox";
import { animated, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";
import LeftHero from "../components/LeftHero";
import RightHero from "../components/RightHero";

const Hero = ({ windWidth }) => {
  const [isOpen, toggle] = useState(false);
  const [leftRef, { width, height }] = useMeasure();

  const [leftSpring, leftAnimation] = useSpring(() => {
    if (windWidth >= 768) {
      console.log(windWidth);
      return {
        from: { x: 0, width: "1vw", fontSize: "0rem" },
        to: {
          x: 0,
          width: "50vw",
          fontSize: "3.5rem",
          alignItems: "start",
        },
      };
    } else {
      return {
        from: { x: 0, width: "50vw", fontSize: "0rem" },
        to: {
          x: 0,
          width: "96vw",
          height: "25vh",
          fontSize: "2.5rem",
          alignItems: "center",
        },
      };
    }
  }, [windWidth]);

  const [rightSpring, rightAnimation] = useSpring(() => {
    if (windWidth >= 768) {
      return {
        from: { width: "1vw" },
        to: { width: "50vw" },
      };
    } else {
      return {
        from: { width: "50vw", height: "1vh" },
        to: { width: "96vw", height: "25vh", textAlign: "center" },
      };
    }
  }, [windWidth]);

  // const [smLeftSpring, smLeft] = useSpring(() => )

  const handleLeft = () => {
    toggle(!isOpen);

    if (windWidth >= 768) {
      // animations for larger Screens

      if (isOpen) {
        leftAnimation.start({
          from: { x: -width - 100, width: "0vw", fontSize: "1rem" },
          to: { x: 0, width: "50vw", fontSize: "3.5rem" },
        });

        rightAnimation.start({
          from: { width: "100vw" },
          to: { width: "50vw" },
        });
      } else {
        leftAnimation.start({
          from: { x: 0, width: "50vw", fontSize: "3.5rem" },
          to: { x: width ? -width - 100 : 0, width: "0vw", fontSize: "1rem" },
        });
        rightAnimation.start({
          from: { width: "50vw" },
          to: { width: "100vw", x: 0 },
        });
      }
      //
      //
      // End of lg animations
    } else {
      //
      //
      // Animations for smaller screens

      if (isOpen) {
        leftAnimation.start({
          from: { y: -height - 100, height: "0vh", fontSize: "0rem" },
          to: { y: 0, height: "25vh", fontSize: "2.5rem" },
        });

        // Right Hero animations

        rightAnimation.start({
          from: { height: "50vh" },
          to: { height: "25vh" },
        });
      } else {
        leftAnimation.start({
          from: { y: 0, height: "25vh", fontSize: "2.5 rem" },
          to: { y: -height - 100, height: "0vh", fontSize: "0rem" },
        });

        // Right Hero Animations for closed;

        rightAnimation.start({
          from: { height: "25vh" },
          to: { height: "50vh" },
        });
      }
    }
  };

  return (
    <div className="hero flex flex-col md:flex-row items-center justify-center w-full">
      {/* Left Container */}
      <LeftHero elementRef={leftRef} springs={leftSpring} />

      {/* Right Container */}
      <RightHero handleClick={handleLeft} springs={rightSpring} />
    </div>
  );
};

export default Hero;
