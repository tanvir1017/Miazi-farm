import User from "@/backend/models/users/user.schema";
import { ResponseAuthType } from "@/types/auth/auht.type.";
import { loginUserValidatorSchema } from "@/validator/auth-info.validator";
import { ErrorReporter } from "@/validator/error-reporter";
import vine, { errors } from "@vinejs/vine";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const preValidatorByVine = vine.compile(loginUserValidatorSchema);
    preValidatorByVine.errorReporter = () => new ErrorReporter();
    const outputAfterValidation = await preValidatorByVine.validate(body);

    const checkUser = await User.findOne({
      email: outputAfterValidation.email,
    });

    if (!checkUser) {
      return NextResponse.json<ResponseAuthType>({
        status: 401,
        message: {
          email: "wrong credential",
        },
      });
    } else {
      const decryptPassword = bcrypt.compareSync(
        outputAfterValidation.password,
        checkUser.password
      );
      if (!decryptPassword) {
        return NextResponse.json<ResponseAuthType>({
          status: 401,
          message: {
            password: "wrong credential",
            email: "wrong credential",
          },
        });
      }

      return NextResponse.json<ResponseAuthType>({
        status: 200,
        message: {
          success: "user logged in",
        },
      });
    }
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json<ResponseAuthType>(
        { status: 500, message: error.messages },
        { status: 500 }
      );
    }
  }
}
