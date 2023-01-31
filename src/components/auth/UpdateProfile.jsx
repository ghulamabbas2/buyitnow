import React from "react";
import Sidebar from "../layout/Sidebar";

const UpdateProfile = () => {
  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                style={{ maxWidth: "480px" }}
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white"
              >
                <form>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Update Profile
                  </h2>

                  <div className="mb-4">
                    <label className="block mb-1"> Full Name </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type your name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1"> Email </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1"> Avatar </label>
                    <div className="mb-4 flex flex-col md:flex-row">
                      <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
                        <img
                          className="w-14 h-14 rounded-full"
                          src={"/logo192.png"}
                        />
                      </div>
                      <div className="md:w-2/3 lg:w-80">
                        <input
                          className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6"
                          type="file"
                          id="formFile"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Update
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;
