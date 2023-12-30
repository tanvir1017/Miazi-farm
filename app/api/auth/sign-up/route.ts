import connectDB from "@/backend/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

import User from "@/backend/models/users/user.schema";
import { registerUserValidatorSchema } from "@/validator/auth-info.validator";
import { ErrorReporter } from "@/validator/error-reporter";
import vine, { errors } from "@vinejs/vine";

import bcrypt from "bcryptjs";

console.log("connecting to db");
connectDB();
console.log("connected to db");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const preValidatorByVine = vine.compile(registerUserValidatorSchema);

    preValidatorByVine.errorReporter = () => new ErrorReporter();

    const outputAfterValidation = await preValidatorByVine.validate(body);

    const existUser = await User.findOne({
      email: outputAfterValidation.email,
    });

    if (existUser) {
      return NextResponse.json(
        {
          status: 403,
          message: {
            email: "This email is already taken",
          },
        },
        { status: 200 }
      );
    } else {
      const saltingPassCode = bcrypt.genSaltSync(10);
      outputAfterValidation.password = bcrypt.hashSync(
        outputAfterValidation.password,
        saltingPassCode
      );
      await User.create(outputAfterValidation);
      return NextResponse.json(
        {
          status: 201,
          message: {
            success: "Account created successfully",
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
