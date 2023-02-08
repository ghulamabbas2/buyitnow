import Product from "../models/product";

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};
