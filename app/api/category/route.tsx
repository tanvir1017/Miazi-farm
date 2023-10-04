import connectDB from "@/backend/lib/connectDB";
import Products from "@/backend/models/product/product.schema";
import { ProductCategoryResponse } from "@/types/product/product.interface";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Db connecting... [category route [*GET*]");
  // await dbConnect();
  connectDB();
  console.log("Db connected [category route *[GET]*]");
  try {
    const productCategory = await Products.distinct("category");
    if (productCategory) {
      return new NextResponse<ProductCategoryResponse>(
        JSON.stringify({
          success: true,
          message: "Retrieve all category from db collections",
          category: productCategory,
        })
      );
    }
    return new NextResponse<ProductCategoryResponse>(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
        category: null,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
