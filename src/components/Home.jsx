import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const paths = [
    {
      name: "Hompage",
      url: "/products",
    },
    {
      name: "Product Details",
      url: "/product/details",
    },
    {
      name: "Cart",
      url: "/cart",
    },
    {
      name: "Login",
      url: "/login",
    },
    {
      name: "Register",
      url: "/register",
    },
    {
      name: "Shipping",
      url: "/shipping",
    },
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Add new address",
      url: "/address/new",
    },
    {
      name: "Update Profile",
      url: "/profile/update",
    },
    {
      name: "Update Password",
      url: "/password/update",
    },
    {
      name: "User Order",
      url: "/me/orders",
    },
    {
      name: "New Product",
      url: "/product/new",
    },
    {
      name: "All Products Admin",
      url: "/admin/products",
    },
    {
      name: "Upload Images",
      url: "/admin/upload_images",
    },
    {
      name: "Orders Admin",
      url: "/admin/orders",
    },
    {
      name: "Update Order",
      url: "/admin/order/update",
    },
    {
      name: "Users Admin",
      url: "/admin/users",
    },
    {
      name: "Update User Admin",
      url: "/admin/user/update",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl my-10 font-bold">Components List</h1>
      {paths?.map((path) => (
        <Link to={path.url}>
          <p className="text-xl">{path.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
