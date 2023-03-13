import dbConnect from "@/config/dbConnect";
import { allRooms } from "@/controllers/roomControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();

// GET /api/rooms
handler.get(allRooms);

export default handler;
