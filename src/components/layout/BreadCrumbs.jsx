import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <section className="py-5 sm:py-7 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Breadcrumbs
            </Link>
            <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
