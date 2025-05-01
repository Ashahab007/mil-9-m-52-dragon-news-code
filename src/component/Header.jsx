import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img src={logo} alt="logo" className="w-[350px]" />
      <p>Journalism Without Fear or Favour</p>
      <p>
        <span className="font-semibold text-shadow-black">
          {format(new Date(), "EEEE, ")}
        </span>
        <span className="text-gray-500">
          {" "}
          {format(new Date(), "MMMM dd, yyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
