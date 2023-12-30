import { ContextType } from "@/backend/interface/api/common";
import Products from "@/backend/models/product/product.schema";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: ContextType) {
  const { params } = context;

  try {
    const deleteById = await Products.deleteOne({ _id: params.id });
    console.log("🚀 ~ file: route.ts:10 ~ DELETE ~ deleteById:", deleteById);
    if (deleteById.deletedCount < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong when deleting the product",
          isDelete: deleteById,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully delete selected product",
        isDelete: deleteById,
      },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
      err,
    });
  }
}
