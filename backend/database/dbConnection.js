import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "recruitment_management",
    });

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("Failed to connect MongoDB:", error.message);
    process.exit(1); // ❗ stop server if DB fails
  }
};

export default dbConnection;
