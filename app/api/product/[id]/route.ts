import { ContextType } from "@/backend/interface/api/common";
import ConnectToDB from "@/backend/lib/db.connector";
import Products from "@/backend/models/product/product.schema";
import { ProductsResponse } from "@/types/product/product.types";

import { NextResponse } from "next/server";

export async function GET(request: Request, context: ContextType) {
  const { params } = context;

  await ConnectToDB();

  const idBasedData = await Products.findById({ _id: params.id });

  if (!idBasedData) {
    return new NextResponse<ProductsResponse>(
      JSON.stringify({
        success: false,
        message: `Failed to retrieve data based on this id:${params.id}`,
        data: [],
      })
    );
  }
  return new NextResponse<ProductsResponse>(
    JSON.stringify({
      success: true,
      message: `Retrieve products data with this specific id:${params.id}`,
      data: idBasedData,
    })
  );
}
