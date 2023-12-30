import { getSession } from "next-auth/react";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getSession();
  console.log(token);
  return new NextResponse(JSON.stringify(token));
}
