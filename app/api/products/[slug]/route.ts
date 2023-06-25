import { ContextType } from "@/interfaces/api/common"
import { NextResponse } from "next/server"

export async function GET(request: Request, context: ContextType) {
    const {params:{slug}} = context
    return new NextResponse(JSON.stringify(slug))

}