import React from "react";
import Hero from "../sections/Hero";
import useMeasure from "react-use-measure";
import discount from "../assets/icons/discount.svg";
import chart from "../assets/icons/chart.svg";
import clock from "../assets/icons/clock.svg";
import shop from "../assets/icons/shop.svg";

const Home = () => {
  const [windRef, { width }] = useMeasure();

  return (
    <div ref={windRef}>
      <div className="md:min-h-[520px] md:px-[100px]">
        <Hero windWidth={width} />{" "}
      </div>
      <div className="w-full bg-background1 bg-opacity-40 md:px-[100px] flex flex-wrap items-center justify-evenly mt-28 py-10">
        {/*  */}
        <div className="w-1/2 md:w-2/12 flex flex-col items-center justify-center px-6 mb-7">
          <h2 className="text-xl font-inika font-semibold text-text1">
            Best Deals
          </h2>
          <img src={discount} className=" h-16 w-16" />
          <p className=" text-base text-text1 font-opensans text-center">
            Find the Best deals across all the online shops in Bangladesh
          </p>
        </div>
        <div className="w-1/2 md:w-2/12 flex flex-col items-center justify-center px-6 mb-7">
          <h2 className="text-xl font-inika font-semibold text-text1">Shops</h2>
          <img src={shop} className=" h-16 w-16" />
          <p className=" text-base text-text1 font-opensans text-center">
            Support for most online retailers in BD, and more coming soon!
          </p>
        </div>
        <div className="w-1/2 md:w-2/12 flex flex-col items-center justify-center px-6 mb-7">
          <h2 className="text-xl font-inika font-semibold text-text1 text-center">
            Historical Prices
          </h2>
          <img src={chart} className=" h-16 w-16" />
          <p className=" text-base text-text1 font-opensans text-center">
            Historical price movement for you to make an educated decision
          </p>
        </div>
        <div className="w-1/2 md:w-2/12 flex flex-col items-center justify-center px-6 mb-7">
          <h2 className="text-xl font-inika font-semibold text-text1">
            Best Deals
          </h2>
          <img src={clock} className=" h-16 w-16" />
          <p className=" text-base text-text1 font-opensans text-center">
            Up-to-date market Prices, so that you can find the deal you’re
            looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
