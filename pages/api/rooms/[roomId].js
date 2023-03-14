import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  singleRoom,
  deleteRoom,
  updateRoom,
} from "@/controllers/roomControllers";
import nc from "next-connect";

const handler = nc({ onError });
dbConnect();

// GET /api/rooms/:roomId
handler.get(singleRoom);

// PUT /api/rooms/:roomId
handler.put(updateRoom);

// DEL /api/rooms/:roomId
handler.delete(deleteRoom);

export default handler;
