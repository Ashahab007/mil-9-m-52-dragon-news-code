import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-2">
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
