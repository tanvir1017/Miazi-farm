import dbConnect from "@/backend/lib/db.connector";
import Products from "@/backend/models/product/product.schema";

import { ProductsResponse } from "@/types/product/product.types";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("db connecting...[Product route *GET*]");
  await dbConnect();
  console.log("db  connected [Product route *GET*]");
  try {
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
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log("db connecting... [product route]");
  await dbConnect();
  console.log("db connected [product route]");
  try {
    const createProduct = Products.insertMany(body);

    console.log(createProduct);

    console.log("product created");
    // Return back response
    return new NextResponse<ProductsResponse>(
      JSON.stringify({
        success: true,
        message: "Retrieve all data from database",
        data: createProduct,
      })
    );
  } catch (error) {}
}
