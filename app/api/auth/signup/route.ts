import dbConnect from "@/backend/lib/db.connector";
import User from "@/backend/models/users/user.schema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const userData = await req.json();

  console.log("connecting to db");
  await dbConnect();
  console.log("connected to db");

  try {
    if (!userData) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Don't have form data",
          user: [],
        }),
        {
          status: 404,
        }
      );
    }

    const { name, email, password } = userData;
    //   check if user exist or not;
    const existenceUser = await User.findOne({ email });
    //  if exist then
    if (existenceUser) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: `User creation failed. This ${email} emailID already registered `,
          user: null,
        }),
        {
          status: 422,
        }
      );
    }

    // if not exist hash the password and save it to db
    const createUser = await User.create({
      name,
      email,
      password: await hash(password, 12),
    });

    if (!createUser) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Something went wrong while creating a user",
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
        message: "User created successfully",
        user: createUser,
      }),
      {
        status: 201,
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
