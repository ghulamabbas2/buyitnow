import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controllers/authControllers";

const handler = nc();

dbConnect();

handler.post(registerUser);

export default handler;
