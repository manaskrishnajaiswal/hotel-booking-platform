import Room from "@/models/room";

// Get all rooms => GET /api/rooms
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create a new room => POST /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get a single room => GET /api/rooms/:roomId
const singleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.roomId);
    if (!room)
      return res
        .status(404)
        .json({ success: false, message: "Room not Found!" });
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update a single room => PUT /api/rooms/:roomId
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.roomId);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }
    const updatedRoom = await Room.findByIdAndUpdate(
      req.query.roomId,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      updatedRoom,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a single room => DEL /api/rooms/:roomId
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.query.roomId);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Room deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export { allRooms, newRoom, singleRoom, deleteRoom, updateRoom };
