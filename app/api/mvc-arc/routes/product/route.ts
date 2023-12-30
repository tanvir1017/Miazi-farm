import Products from "@/backend/models/product/product.schema";

import { ProductsResponse } from "@/types/product/product.types";
import { NextResponse } from "next/server";
import connectDb from "../../db/connect-db";

// connecting database first
connectDb()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

// GET REQUEST FOR FIND EVERY PRODUCT
export async function GET(req: Request) {
  try {
    const getAllProduct = await Products.find({});
    return NextResponse.json(
      { success: true, message: "hello", product: getAllProduct },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

// POST REQUEST FOR ADD NEW PRODUCT
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const createProduct = await Products.create(body);
    console.log(createProduct);

    // Return back response
    if (!createProduct) {
      return NextResponse.json<{ success: boolean; message: string; data: [] }>(
        {
          success: false,
          message: "Having trouble to create product",
          data: [],
        },
        { status: 500 }
      );
    }
    return NextResponse.json<ProductsResponse>(
      {
        success: true,
        message: "Product created successfully",
        data: createProduct,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "something went wrong",
        error: err,
      },
      { status: 500 }
    );
  }
}
