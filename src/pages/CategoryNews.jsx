import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Category from "../component/Category";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();

  //   console.log(data);

  useEffect(() => {
    if (id == 0) {
      const allNews = data.map((news) => news);
      setCategoryNews(allNews);
      console.log(allNews);
      //   return;
    } else if (id == 1) {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(breakingNews);
      console.log(breakingNews);
    } else {
      const filteredNews = data.filter((news) => id == news.category_id);
      setCategoryNews(filteredNews);
      console.log(filteredNews);
    }
  }, [data, id]);

  return <div>Total news found {categoryNews.length} news </div>;
};

export default CategoryNews;
