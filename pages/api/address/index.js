import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getAddresses,
  newAddress,
} from "@/backend/controllers/addressControllers";

const handler = nc();

dbConnect();

handler.get(getAddresses);
handler.post(newAddress);

export default handler;
