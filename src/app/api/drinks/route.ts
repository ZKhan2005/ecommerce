import { NextResponse } from "next/server";
import { drink } from "@/data";

export function GET() {
    return NextResponse.json(drink);
}
