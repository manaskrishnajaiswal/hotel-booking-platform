import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
// console.log(MONGO_URI);
const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default dbConnect;
