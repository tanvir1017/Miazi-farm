import { ContextType } from "@/backend/interface/api/common";
import ConnectToDB from "@/backend/lib/db.connector";
import Products from "@/backend/models/testmodel";
import { CaptureResponseType_Generics } from "@/backend/types/product.type";

import { NextResponse } from "next/server";

export async function GET(request: Request, context: ContextType) {
  const { params } = context;
  console.log(params);

  await ConnectToDB();

  const idBasedData = await Products.findById({ _id: params.id });

  if (!idBasedData) {
    return new NextResponse<CaptureResponseType_Generics>(
      JSON.stringify({
        success: false,
        message: `Failed to retrieve data based on this id:${params.id}`,
        data: [],
      })
    );
  }
  return new NextResponse<CaptureResponseType_Generics>(
    JSON.stringify({
      success: true,
      message: `Retrieve products data with this specific id:${params.id}`,
      data: idBasedData,
    })
  );
}
