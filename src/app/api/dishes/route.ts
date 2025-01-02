import { NextResponse } from "next/server";
import { dishes } from "@/data";

export  function GET(){

    return NextResponse.json(dishes)
}