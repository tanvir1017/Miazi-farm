import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;
const connectDB = () =>
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
export default connectDB;
