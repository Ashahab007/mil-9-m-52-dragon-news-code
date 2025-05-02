import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

// 1.8 received the id
const NewsDetailsCard = ({ id }) => {
  // 1.12 declare a state to show in UI
  const [news, setNews] = useState({});
  console.log(id);
  // 1.10 get the fetched data from loader and destructure it
  const data = useLoaderData();
  console.log(data);

  /* 1.11 apply find method to find the matched id and show in UI using useEffect as the data will re-render*/

  useEffect(() => {
    const foundNews = data.find((news) => id == news.id);
    console.log(foundNews);
    setNews(foundNews);
  }, [data, id]);

  return (
    <div className="space-y-4">
      <img src={news.image_url} />
      <h3 className="font-bold text-2xl">{news.title}</h3>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        All news in this category
      </Link>
    </div>
  );
};
export default NewsDetailsCard;
