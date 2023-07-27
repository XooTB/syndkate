import React from "react";

const About = () => {
  return (
    <div className="px-[50px] md:px-[150px] pt-12 text-text1 bg-background1 bg-opacity-50">
      <h1 className="text-4xl md:text-5xl font-inika font-semibold pb-10">
        About <span className="font-keania capitalize">SyndKate</span>
      </h1>
      <p className="font-opensans font-light text-base md:text-xl pr-[20px] md:pr-[50px] pb-[100px]">
        Syndkate is a hobby project. Its purpose is to provide a platform in
        Bangladesh that helps buyers understand the market prices of tech
        products more easily. The idea for this project came about when I
        noticed that there was no platform available where buyers could access
        historical price data for a specific product without any hassle.
        <br />
        <br />
        In Bangladesh, it can be difficult to find the best prices and deals
        across different platforms since there are so many retailers to navigate
        through. This lack of centralized information and comprehensive
        resources gave me the inspiration for this project.
        <br />
        <br />
        Syndkate simplifies the buying process by centralizing the information
        and eliminating the need to manually search through multiple platforms.
        This saves buyers time and effort. The project aims to provide accurate
        and up-to-date data, ensuring transparency and reliability in the
        information it presents.
        <br />
        <br />
        Although Syndkate currently supports only a few retailers, it is
        dedicated to continuous improvement and expansion. The goal is to
        include a wide range of tech products and involve more retailers. The
        aim is to create a comprehensive and inclusive platform that meets the
        diverse needs of buyers in Bangladesh.
        <br />
        <br />
        To summarize, Syndkate is a passion project that emerged from the need
        for a centralized platform that offers buyers in Bangladesh a clearer
        understanding of market prices for tech products. By providing
        historical price data, Syndkate empowers buyers to make informed
        decisions, find the best deals, and navigate the tech market with
        confidence.
        <br />
        <br />
        <span className="font-keania text-base md:text-lg">- Creator</span>
      </p>
    </div>
  );
};

export default About;
