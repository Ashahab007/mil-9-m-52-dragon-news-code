import React, { use } from "react";
import { data } from "react-router";

const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);

const Category = () => {
  // here use hook is used because the categories will render one time
  const categories = use(categoryPromise);
  console.log(categories);

  return (
    <div>
      <h3>All Categories</h3>
      {categories.map((category) => (
        <h5>{category.name}</h5>
      ))}
    </div>
  );
};

export default Category;
