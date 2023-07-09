import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav h-[100px] bg-background flex justify-between items-center w-full">
      <div className="w-[130px] ml-[50px]"></div>
      <NavLink to="/">
        <h1 className=" font-keania text-text bold text-5xl font-bold uppercase tracking-widest">
          SyndKate
        </h1>
      </NavLink>
      <NavLink to="/about">
        <button className="bg-secondary h-[50px] w-[130px] rounded-2xl font-changa mr-[50px] hover:bg-primary hover:text-background">
          About
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
