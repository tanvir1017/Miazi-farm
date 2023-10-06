import { ContextType } from "@/backend/interface/api/common";
import connectDB from "@/backend/lib/connectDB";
import User from "@/backend/models/users/user.schema";
import { NextRequest, NextResponse } from "next/server";

console.log("🚀 ~ file: route.ts:7 ~ DB connecting...");
connectDB();
console.log("🚀 ~ file: route.ts:7 ~ DB connected");
export async function GET(req: NextRequest, context: ContextType) {
  const { params } = context;
  try {
    const findUser = await User.findOne({
      email: params.email,
    });
    if (!findUser) {
      return NextResponse.json(
        { status: 404, message: "User not found" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { status: 200, message: "User Found", data: findUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: "Something went wrong" },
      { status: 200 }
    );
  }
}
