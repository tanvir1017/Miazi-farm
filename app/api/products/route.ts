import ConnectToDB from "@/lib/db.connector";
import { default as Products, default as TestModel } from "@/models/testmodel";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await ConnectToDB();

  const products = await TestModel.find({});

  return new NextResponse(
    JSON.stringify({products})
  );
}

export async function POST(req: Request) {
  // graving document data from client
  const body = await req.json();

  // connecting to database
  await ConnectToDB();

  const postProduct = await Products.create(body);
  if (postProduct) {
    console.log("product created");
    // Return back response
    return new NextResponse(
      JSON.stringify({
        postProduct,
        active: true,
        getRequest: 0,
        postRequest: 1,
        patchRequest: 0,
      })
    );
  } else {
    throw Error("Error while creating product");
  }
}
