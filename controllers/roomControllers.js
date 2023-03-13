import Room from "@/models/room";

// Get all rooms => GET /api/rooms
const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
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

export { allRooms, newRoom };
