import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);

const Category = () => {
  // here use hook is used because the categories will render one time
  const categories = use(categoryPromise);
  console.log(categories);

  return (
    <div>
      <h3 className="font-bold">All Categories</h3>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn bg-base-100 hover:bg-base-300 border-0"}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
