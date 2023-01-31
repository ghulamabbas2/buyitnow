import React from "react";
import Sidebar from "../layout/Sidebar";

const UploadImages = () => {
  return (
    <section className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Sidebar />
          <main className="md:w-2/3 lg:w-3/4 px-4">
            <div
              style={{ maxWidth: "480px" }}
              className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
            >
              <form>
                <h2 className="mb-3 text-2xl font-semibold">
                  Upload Product Images
                </h2>

                <div className="mb-4 flex flex-col md:flex-row">
                  <div className="w-full">
                    <input
                      className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-8"
                      type="file"
                      id="formFile"
                      multiple
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-2 my-5">
                  <img
                    src={"/logo192.png"}
                    alt="Preview"
                    className="col-span-1 object-contain shadow rounded border-2 border-gray p-2 h-full w-full"
                    width="50"
                    height="50"
                  />
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
  );
};

export default UploadImages;
