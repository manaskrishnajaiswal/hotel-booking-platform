import Room from "@/models/room";
import ErrorHandler from "@/utilsMod/errorHandler";
import catchAsyncErrors from "@/middlewares/catchAsyncErrors";

// Get all rooms => GET /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// Create a new room => POST /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({ success: true, room });
});

// Get a single room => GET /api/rooms/:roomId
const singleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.roomId);
  if (!room) return next(new ErrorHandler("Room not Found!!", 404));
  res.status(200).json({ success: true, room });
});

// Update a single room => PUT /api/rooms/:roomId
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.roomId);
  if (!room) return next(new ErrorHandler("Room not Found!!", 404));
  const updatedRoom = await Room.findByIdAndUpdate(req.query.roomId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Room updated successfully",
    updatedRoom,
  });
});

// Delete a single room => DEL /api/rooms/:roomId
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findByIdAndDelete(req.query.roomId);
  if (!room) return next(new ErrorHandler("Room not Found!!", 404));
  res.status(200).json({ success: true, message: "Room deleted successfully" });
});

export { allRooms, newRoom, singleRoom, deleteRoom, updateRoom };
