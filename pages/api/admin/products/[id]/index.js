import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import {
  deleteProduct,
  updateProduct,
} from "@/backend/controllers/productControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateProduct);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteProduct);

export default handler;
