import React from "react";
import Header from "../component/Header";
import RightAside from "../component/homelayouts/RightAside";
import NewsDetailsCard from "../component/NewsDeatailsCard";
import { useParams } from "react-router";

// 1.3 created NewsDetails component
const NewsDetails = () => {
  // 1.6 get the id using useParams to filter the news in NewsDetailsCard component
  const { id } = useParams();
  console.log(id);

  // 1.5 design the layout of news details page
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto mt-6">
        <section className="col-span-9">
          {/* 1.7 pass the id as params */}
          <NewsDetailsCard id={id}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
