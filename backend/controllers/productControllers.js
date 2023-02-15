import Product from "../models/product";

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
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
