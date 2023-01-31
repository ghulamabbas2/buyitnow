import React from "react";

const OrderItem = () => {
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
      <header className="lg:flex justify-between mb-4">
        <div className="mb-4 lg:mb-0">
          <p className="font-semibold">
            <span>Order ID: 34345454 </span>• Processing
          </p>
          <p className="text-gray-500">2023-23-12 </p>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <p className="text-gray-400 mb-1">Person</p>
          <ul className="text-gray-600">
            <li>Ghulam</li>
            <li>Phone: 1234567897</li>
            <li>Email: test@gmail.com</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Delivery address</p>
          <ul className="text-gray-600">
            <li>123 street</li>
            <li>Orlando, FL, 12345</li>
            <li>US</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Payment</p>
          <ul className="text-gray-600">
            <li className="text-green-400">PAID</li>
            <li>Tax paid: $12</li>
            <li>Total paid: $343</li>
          </ul>
        </div>
      </div>

      <hr className="my-4" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <figure className="flex flex-row mb-4">
          <div>
            <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
              <img src={"/logo192.png"} height="60" width="60" alt="Title" />
            </div>
          </div>
          <figcaption className="ml-3">
            <p>Product 1</p>
            <p className="mt-1 font-semibold">1x = $23</p>
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default OrderItem;
