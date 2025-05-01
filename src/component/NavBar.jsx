import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between w-11/12 mx-auto items-center">
      <div className="nav-start"></div>
      <div className="nav-center flex gap-6 text-gray-400">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="nav-end flex gap-1">
        <img src={user} alt="user" />
        <button className="btn btn-primary">Log In</button>
      </div>
    </div>
  );
};

export default NavBar;
