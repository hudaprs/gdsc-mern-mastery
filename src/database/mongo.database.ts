// Mongoose
import mongoose from "mongoose";

const startDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/gdsc-mern-mastery");

    console.log("mongodb connected");
  } catch (err) {
    console.error("database: ", err);
    process.exit(1);
  }
};

export { startDatabase };
