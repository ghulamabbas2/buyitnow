"use client";

import React, { useContext, useEffect } from "react";
import OrderItem from "./OrderItem";
import CustomPagination from "../layouts/CustomPagination";
import CartContext from "@/context/CartContext";
import { useSearchParams, useRouter } from "next/navigation";

const ListOrders = ({ orders }) => {
  const { clearCart } = useContext(CartContext);
  const params = useSearchParams();
  const router = useRouter();

  const orderSuccess = params.get("order_success");

  useEffect(() => {
    if (orderSuccess === "true") {
      clearCart();
      router.replace("/me/orders");
    }
  }, []);

  return (
    <>
      <h3 className="text-xl font-semibold mb-5">Your Orders</h3>
      {orders?.orders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}

      <CustomPagination
        resPerPage={orders?.resPerPage}
        productsCount={orders?.ordersCount}
      />
    </>
  );
};

export default ListOrders;
