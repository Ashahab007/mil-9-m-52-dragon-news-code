import React from "react";
import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playgroundImage from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen mt-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl text-left font-bold mb-4">Q-Zone</h2>

        <div className="space-y-4">
          {/* Swimming Card (Highlighted) */}
          <div className="card bordered">
            <figure className="px-4 pt-4 w-full">
              <img
                src={swimmingImage}
                alt="Swimming"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center"></div>
          </div>

          {/* Class Card */}
          <div className="card bordered">
            <figure className="px-4 pt-4">
              <img src={classImage} alt="Class" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center"></div>
          </div>

          {/* Play Ground Card */}
          <div className="card bordered">
            <figure className="px-4 pt-4">
              <img
                src={playgroundImage}
                alt="Play Ground"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZone;
