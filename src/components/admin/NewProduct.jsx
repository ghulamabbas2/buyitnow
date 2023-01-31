import React from "react";
import Sidebar from "../layout/Sidebar";

const NewProduct = () => {
  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Sports",
  ];

  return (
    <section className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Sidebar />
          <main className="md:w-2/3 lg:w-3/4 px-4">
            <section class="container max-w-3xl p-6 mx-auto">
              <h1 class="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
                Create New Product
              </h1>

              <form>
                <div class="mb-4">
                  <label class="block mb-1"> Name </label>
                  <input
                    type="text"
                    class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Product name"
                    name="name"
                    required
                  />
                </div>

                <div class="mb-4 mt-5">
                  <label class="block mb-1"> Description </label>
                  <textarea
                    rows="4"
                    class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Product description"
                    name="description"
                    required
                  ></textarea>
                </div>

                <div class="grid md:grid-cols-2 gap-x-2 mt-5">
                  <div class="mb-4">
                    <label class="block mb-1"> Price </label>
                    <div class="relative">
                      <div class="col-span-2">
                        <input
                          type="text"
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          placeholder="0.00"
                          name="price"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1"> Category </label>
                    <div class="relative">
                      <select
                        class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        name="category"
                        required
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                        <svg
                          width="22"
                          height="22"
                          class="fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 10l5 5 5-5H7z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-x-2 mt-5">
                  <div class="mb-4">
                    <label class="block mb-1"> Seller / Brand </label>
                    <input
                      type="text"
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      placeholder="Seller or brand"
                      name="seller"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block mb-1"> Stock </label>
                    <div class="relative">
                      <div class="col-span-2">
                        <input
                          type="text"
                          class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          placeholder="0"
                          name="stock"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                  Create Product
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
