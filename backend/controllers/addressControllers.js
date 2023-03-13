import Address from "../models/address";

export const newAddress = async (req, res) => {
  const address = await Address.create(req.body);

  res.status(200).json({
    address,
  });
};

export const getAddresses = async (req, res) => {
  const addresses = await Address.find();

  res.status(200).json({
    addresses,
  });
};
