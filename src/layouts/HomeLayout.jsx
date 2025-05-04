import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import Latest from "../component/Latest";
import NavBar from "../component/NavBar";
import LeftAside from "../component/homelayouts/LeftAside";
import RightAside from "../component/homelayouts/RightAside";
import Loading from "../pages/Loading";

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
      <main className="w-11/12 mx-auto justify-center grid grid-cols-12 gap-4 mt-6">
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Suspense fallback={<Loading></Loading>}>
            <Outlet></Outlet>
          </Suspense>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
