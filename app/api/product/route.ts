import connectDB from "@/backend/lib/connectDB";
import dbConnect from "@/backend/lib/db.connector";
import Products from "@/backend/models/product/product.schema";

import { ProductsResponse } from "@/types/product/product.types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const getCategory = new URL(req.url);
  const categoryFind = getCategory.searchParams.get("category");

  console.log("db connecting...[Product route *GET*]");
  connectDB();

  try {
    const getCategoryBasedProduct = async () => {
      return await Products.find({ category: { $eq: categoryFind } });
    };

    const getAllProduct = async () => {
      return await Products.find({});
    };

    const categoryProducts = categoryFind
      ? await getCategoryBasedProduct()
      : await getAllProduct();
    if (!categoryProducts) {
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
        data: categoryProducts,
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
