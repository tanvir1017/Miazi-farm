import { ContextType } from "@/interfaces/api/common";
import ConnectToDB from "@/lib/db.connector";
import Products from "@/models/testmodel";
import { NextResponse } from "next/server";
import { CaptureResponseType_Generics } from "../product.type";

export async function GET(request: Request, context: ContextType) {
    const { params: { slug } } = context
    await ConnectToDB();

    const idBasedData = await Products.findById({ _id: slug })

    if (!idBasedData) {
        return new NextResponse<CaptureResponseType_Generics>(
            JSON.stringify({
                success: false,
                message: `Failed to retrieve data based on this id:${slug}`,
                data: []
            })
        );
    }
    return new NextResponse<CaptureResponseType_Generics>(
        JSON.stringify({
            success: true,
            message: `Retrieve products data with this specific id:${slug}`,
            data: idBasedData
        })
    );






}