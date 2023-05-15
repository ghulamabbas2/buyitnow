import Product from "../models/product";
import APIFilters from "../utils/APIFilters";
import { uploads } from "../utils/cloudinary";
import fs from "fs";

export const newProduct = async (req, res, next) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  const resPerPage = 2;
  const productsCount = await Product.countDocuments();

  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFilters.query;
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();

  res.status(200).json({
    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
  });
};

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    res.status(404).json({
      error: "Product not found.",
    });
  }

  res.status(200).json({
    product,
  });
};

export const uploadProductImages = async (req, res, next) => {
  let product = await Product.findById(req.query.id);

  if (!product) {
    res.status(404).json({
      error: "Product not found.",
    });
  }

  const uploader = async (path) => await uploads(path, "buyitnow/products");

  const urls = [];
  const files = req.files;

  for (const file of files) {
    const { path } = file;
    const imgUrl = await uploader(path);
    urls.push(imgUrl);
    fs.unlinkSync(path);
  }

  product = await Product.findByIdAndUpdate(req.query.id, {
    images: urls,
  });

  res.status(200).json({
    data: urls,
    product,
  });
};
