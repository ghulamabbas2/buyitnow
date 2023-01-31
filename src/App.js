import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ListProducts from "./components/products/ListProducts";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/auth/Profile";
import NewAddress from "./components/user/NewAddress";
import UpdateProfile from "./components/auth/UpdateProfile";
import UpdatePassword from "./components/auth/UpdatePassword";
import ListOrders from "./components/order/ListOrders";
import NewProduct from "./components/admin/NewProduct";
import Products from "./components/admin/Products";
import UploadImages from "./components/admin/UploadImages";
import Orders from "./components/admin/Orders";
import UpdateOrder from "./components/admin/UpdateOrder";
import Users from "./components/admin/Users";
import UpdateUser from "./components/admin/UpdateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ListProducts />} />
      <Route path="/product/details" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/address/new" element={<NewAddress />} />
      <Route path="/profile/update" element={<UpdateProfile />} />
      <Route path="/password/update" element={<UpdatePassword />} />
      <Route path="/me/orders" element={<ListOrders />} />
      <Route path="/product/new" element={<NewProduct />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/upload_images" element={<UploadImages />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/order/update" element={<UpdateOrder />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/update" element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
