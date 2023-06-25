// @ts-nocheck
import mongoose from "mongoose";

async function ConnectToDB() {
  try {
    console.log("connecting database");
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`something went wrong. ${error}`);
  }
}

export default ConnectToDB;
