import dbConnect from "@/backend/lib/db.connector";
import { default as Products } from "@/backend/models/testmodel";
import { ProductsResponse } from "@/types/product/product.types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("connecting to db");
  await dbConnect();
  console.log("connected to db");
  const products = await Products.find({});
  if (!products) {
    return new NextResponse<ProductsResponse>(
      JSON.stringify({
        success: false,
        message: "Failed to retrieve products data",
        data: [],
      })
    );
  }
  return new NextResponse<ProductsResponse>(
    JSON.stringify({
      success: true,
      message: "Retrieve all data from database",
      data: products,
    })
  );
}

export async function POST(req: Request) {
  // graving document data from client
  const body = await req.json();

  console.log("connecting to db");
  await dbConnect();
  console.log("connected to db");

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
