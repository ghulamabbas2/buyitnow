import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getProducts } from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getProducts);

export default handler;
