import React from "react";
import axios from "axios";

import UpdateProduct from "@/components/admin/UpdateProduct";

const getProduct = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  return data;
};

const HomePage = async ({ params }) => {
  const data = await getProduct(params.id);

  return <UpdateProduct data={data.product} />;
};

export default HomePage;
