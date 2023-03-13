import dbConnect from "@/config/dbConnect";
import { allRooms, newRoom } from "@/controllers/roomControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();

// GET /api/rooms
handler.get(allRooms);

// POST /api/rooms
handler.post(newRoom);

export default handler;
