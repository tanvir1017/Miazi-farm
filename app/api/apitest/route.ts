import dbConnect from "@/lib/db.connector";
import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("connecting to db");
  await dbConnect();
  console.log("connected to db");
  return new NextResponse(
    JSON.stringify({
      message: "Hello World!",
    })
  );
};
