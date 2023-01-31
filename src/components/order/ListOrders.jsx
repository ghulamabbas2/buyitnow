import React from "react";
import OrderItem from "./OrderItem";
import Sidebar from "../layout/Sidebar";

const ListOrders = () => {
  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <h3 className="text-xl font-semibold mb-5">Your Orders</h3>
              <OrderItem />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListOrders;
