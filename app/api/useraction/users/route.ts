import dbConnect from "@/backend/lib/db.connector";
import User from "@/backend/models/userschema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  try {
    const allRegisteredUser = await User.find({});
    if (!allRegisteredUser) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Failed to retrieve all users data",
          user: null,
        }),
        {
          status: 404,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Successfully able to retrieve all users info from database",
        users: allRegisteredUser,
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: `The ${err} has been caught`,
        user: null,
      }),
      {
        status: 500,
      }
    );
  }
}
