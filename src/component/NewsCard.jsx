import { parseISO } from "date-fns";
import { format } from "date-fns";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

// 1.0 My requirement is upon clicking on the read more button it will show the news details
const NewsCard = ({ news }) => {
  console.log(news);

  console.log(format(parseISO("2025-04-22T16:45:00.000Z"), "MMMM d, yyyy"));

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full bg-gray-200 space-x-3 p-8">
          <img
            src={news?.image_url}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex w-full justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{news?.author.name}</p>
              <p className="text-xs text-gray-500">
                {format(parseISO(news?.author?.published_date), "MMMM d, yyyy")}
              </p>
            </div>
            <span className="flex gap-2">
              <CiShare2 size={30}></CiShare2>
              <CiBookmark size={30}></CiBookmark>
            </span>
          </div>
        </div>
        {/* <Share2 className="text-gray-500 w-5 h-5 cursor-pointer" /> */}
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-900 leading-snug">
          {news?.title}
        </h2>

        <img
          src={news?.image_url}
          alt="News"
          className="w-full h-48 object-cover mt-3 rounded-lg"
        />

        <p className="text-sm text-gray-700 mt-4">
          {news?.details.slice(0, 250)}...
        </p>

        <Link
          // 1.2 created dynamic id to show the news
          to={`/news-details/${news.id}`}
          className="text-orange-500 font-semibold text-sm mt-2 underline"
        >
          Read More
        </Link>
        <hr className="border-b border-gray-200 mt-4" />
        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-400">
            <span>{news?.rating.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="flex items-center gap-2">
              <FaRegEye></FaRegEye> {news?.total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
