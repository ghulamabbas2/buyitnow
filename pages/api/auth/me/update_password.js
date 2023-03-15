import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { updatePassword } from "@/backend/controllers/authControllers";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(updatePassword);

export default handler;
