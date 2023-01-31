import React from "react";
import { Link } from "react-router-dom";
import UserAddresses from "../user/UserAddresses";
import Sidebar from "../layout/Sidebar";

const Profile = () => {
  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <figure className="flex items-start sm:items-center">
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={"/logo192.png"}
                    alt={"user name"}
                  />
                </div>
                <figcaption>
                  <h5 className="font-semibold text-lg">Ghulam</h5>
                  <p>
                    <b>Email:</b> ghulam@gmail.com | <b>Joined On:</b>
                    2023-12-24
                  </p>
                </figcaption>
              </figure>

              <hr className="my-4" />

              <UserAddresses />

              <Link to="/address/new">
                <button className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
                  <i className="mr-1 fa fa-plus"></i> Add new address
                </button>
              </Link>

              <hr className="my-4" />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
