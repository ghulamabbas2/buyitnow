import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createProductReview } from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(createProductReview);

export default handler;
