import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getAddresses,
  newAddress,
} from "@/backend/controllers/addressControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";

import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(getAddresses);
handler.use(isAuthenticatedUser).post(newAddress);

export default handler;
