import dbConnect from "@/config/dbConnect";
import { singleRoom } from "@/controllers/roomControllers";
import nc from "next-connect";

const handler = nc();
dbConnect();

// GET /api/rooms/:roomId
handler.get(singleRoom);

export default handler;
