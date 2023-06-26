// @ts-nocheck
import mongoose from "mongoose";

async function ConnectToDB() {
  try {
    console.log("connecting database");
    mongoose.connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      maxPoolSize: 10,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`something went wrong. ${error}`);
  }
}

export default ConnectToDB;
