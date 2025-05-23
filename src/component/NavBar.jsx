import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user?.email);
  console.log(user?.photoURL);
  console.log(user);

  const handleLogOut = () => {
    console.log("logged out");
    logOut()
      .then(() => {
        alert("User Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between w-11/12 mx-auto items-center">
      <div className="nav-start">{user && user.email}</div>
      <div className="nav-center flex gap-6 text-gray-400">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="nav-end flex items-center gap-1">
        {/* 7.6 now show the user picture */}
        <img src={`${user ? user.photoURL : userIcon}`} alt="user" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-gray-800 text-white "
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className=" btn bg-gray-800 text-white ">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
