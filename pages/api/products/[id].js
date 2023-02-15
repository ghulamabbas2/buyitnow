import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getProduct } from "@/backend/controllers/productControllers";

const handler = nc();

dbConnect();

handler.get(getProduct);

export default handler;
