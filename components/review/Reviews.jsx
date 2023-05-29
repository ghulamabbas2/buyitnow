import React from "react";
import StarRatings from "react-star-ratings";

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews?.map((review) => (
        <article className="block p-6 bg-white max-w-sm rounded-lg border border-gray-200 shadow-md mb-5">
          <div className="flex items-center mb-4 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={
                review?.user?.avatar
                  ? review?.user?.avatar?.url
                  : "/images/default.png"
              }
              alt="user"
            />
            <div className="space-y-1 font-medium">
              <p>
                {review?.user?.name}
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  Posted on: {review?.createdAt.substring(0, 10)}
                </time>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center space-x-2 mb-2">
            <div className="ratings">
              <StarRatings
                rating={review?.rating}
                starRatedColor="#ffb829"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
            </div>
            <span className="text-yellow-500">{review?.rating}</span>
          </div>

          <p className="mb-2 font-light text-gray-500 dark:text-gray-400 text-xl">
            {review?.comment}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Reviews;
