import React, { Suspense } from "react";
import Category from "../Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftAside;
