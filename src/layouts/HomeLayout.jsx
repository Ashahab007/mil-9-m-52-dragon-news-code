import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import Latest from "../component/Latest";
import NavBar from "../component/NavBar";
import LeftAside from "../component/homelayouts/LeftAside";
import RightAside from "../component/homelayouts/RightAside";

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
      <main className="w-11/12 mx-auto justify-center items-center grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
