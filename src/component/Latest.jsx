import React, { use } from "react";
import Marquee from "react-fast-marquee";

const allNews = fetch("/public/news.json").then((res) => res.json());

const Latest = () => {
  const news = use(allNews);
  // console.log(news[0].category_id);
  const breakingNews = news.filter(
    (filteredNews) => filteredNews.others.is_today_pick == true
  );
  // console.log(breakingNews[0].title);

  return (
    <div className="flex gap-1 justify-center items-center bg-base-300 p-3 my-4 w-11/12 mx-auto">
      <p className="bg-secondary text-white py-2 px-3">Latest</p>
      <Marquee pauseOnHover={true} gradient={false}>
        <div className="flex">
          {breakingNews.map((news) => (
            <span className="pr-4">{news.title}. </span>
          ))}
        </div>
      </Marquee>
    </div>
    /*  <div className="flex gap-1 justify-center items-center bg-base-300 p-3 my-4 w-11/12 mx-auto">
      <p className="bg-secondary text-white py-2 px-3">Latest </p>
      <Marquee className="flex gap-0" pauseOnHover={true}>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
          nesciunt!
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
          nesciunt!
        </span>
      </Marquee>
    </div> */
  );
};

export default Latest;
