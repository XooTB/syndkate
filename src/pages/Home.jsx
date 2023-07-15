import React from "react";
import Hero from "../sections/Hero";
import useMeasure from "react-use-measure";

const Home = () => {
  const [windRef, { width }] = useMeasure();

  return (
    <div ref={windRef}>
      <Hero windWidth={width} />{" "}
    </div>
  );
};

export default Home;
