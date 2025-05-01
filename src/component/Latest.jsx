import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex gap-1 justify-center items-center bg-base-300 p-3 my-4 w-11/12 mx-auto">
      <p className="bg-secondary text-white py-2 px-3">Latest</p>
      <Marquee pauseOnHover={true} gradient={false}>
        <div className="flex gap-6">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            nesciunt!
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            nesciunt!
          </span>
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
