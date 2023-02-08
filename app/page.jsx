import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};

const HomePage = async () => {
  const productsData = await getProducts();

  return <ListProducts data={productsData} />;
};

export default HomePage;
