import connectDB from "@/backend/lib/connectDB";
import User from "@/backend/models/users/user.schema";
import {
  ResponseAuthType,
  ResponseUserTypeFromDb,
} from "@/types/auth/auht.type.";
import { loginUserValidatorSchema } from "@/validator/auth-info.validator";
import { ErrorReporter } from "@/validator/error-reporter";
import vine, { errors } from "@vinejs/vine";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

console.log("🚀 ~ file: sign-in/route.ts:12 ~ connecting...");
connectDB();
console.log("🚀 ~ file: sign-in/route.ts:12 ~ Database connected");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const preValidatorByVine = vine.compile(loginUserValidatorSchema);
    preValidatorByVine.errorReporter = () => new ErrorReporter();
    const outputAfterValidation = await preValidatorByVine.validate(body);

    const existUser: ResponseUserTypeFromDb | null = await User.findOne({
      email: outputAfterValidation.email,
    });

    if (existUser) {
      const checkPassWord = bcrypt.compareSync(
        outputAfterValidation.password,
        existUser.password
      );

      if (checkPassWord) {
        return NextResponse.json<ResponseAuthType>(
          {
            status: 200,
            message: {
              success: "User logged in",
            },
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json<ResponseAuthType>(
          {
            status: 401,
            message: {
              email: "Wrong credential",
              password: "Wrong credential",
            },
          },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json<ResponseAuthType>(
        {
          status: 404,
          message: {
            email: "No user registered at this email",
          },
        },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, message: error.messages },
        { status: 500 }
      );
    }
  }
}
