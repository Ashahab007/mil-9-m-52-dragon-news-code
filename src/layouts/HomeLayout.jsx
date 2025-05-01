import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import Latest from "../component/Latest";
import NavBar from "../component/NavBar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="latest">
        <Latest></Latest>
      </section>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
