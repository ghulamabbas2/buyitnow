import React from "react";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article className="block p-6 bg-white max-w-sm rounded-lg border border-gray-200 shadow-md mb-5">
        <div className="flex items-center mb-4 space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={"/logo192.png"}
            alt="user"
          />
          <div className="space-y-1 font-medium">
            <p>
              Ghulam
              <time className="block text-sm text-gray-500 dark:text-gray-400">
                Posted on: 12-12-2023
              </time>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center space-x-2 mb-2">
          <div className="ratings">
            <StarRatings
              rating={5}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
          </div>
          <span className="text-yellow-500">{5}</span>
        </div>

        <p className="mb-2 font-light text-gray-500 dark:text-gray-400 text-xl">
          This is user review
        </p>
      </article>
    </div>
  );
};

export default Reviews;
