import React from "react";
import Sidebar from "../layout/Sidebar";

const UpdateOrder = () => {
  return (
    <section className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Sidebar />
          <main className="md:w-2/3 lg:w-3/4 px-4">
            <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
              <header className="lg:flex justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                  <p className="font-semibold">
                    <span>Order ID: 938759485 </span>

                    <span className="text-green-500"> • Delivered</span>
                  </p>
                  <p className="text-gray-500"> 2023-23-12 </p>
                </div>
              </header>
              <div className="grid md:grid-cols-3 gap-2">
                <div>
                  <p className="text-gray-400 mb-1">Person</p>
                  <ul className="text-gray-600">
                    <li>Ghulam</li>
                    <li>Phone: 12345667897</li>
                    <li>Email: test@gmail.com</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Delivery address</p>
                  <ul className="text-gray-600">
                    <li>124 street</li>
                    <li>Orlando, FL, 12345</li>
                    <li>US</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Payment</p>
                  <ul className="text-gray-600">
                    <li className="text-green-400">PAID</li>
                    <li>Tax paid: $12</li>
                    <li>Total paid: $34</li>
                  </ul>
                </div>
              </div>

              <hr className="my-4" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                <figure className="flex flex-row mb-4">
                  <div>
                    <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                      <img
                        src={"/logo192.png"}
                        height="60"
                        width="60"
                        alt="Title"
                      />
                    </div>
                  </div>
                  <figcaption className="ml-3">
                    <p>Product 1</p>
                    <p className="mt-1 font-semibold">2x = $23</p>
                  </figcaption>
                </figure>
              </div>

              <hr />

              <div class="my-8">
                <label class="block mb-3"> Update Order Status </label>
                <div class="relative">
                  <select
                    class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    name="category"
                    required
                  >
                    {["Processing", "Shipped", "Delivered"].map((status) => (
                      <option key={status} value={status}>
                        {status}
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

              <button
                type="submit"
                className="mb-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                Update
              </button>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};

export default UpdateOrder;
