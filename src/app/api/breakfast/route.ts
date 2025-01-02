import {  NextResponse } from "next/server";
import { breakFast } from "@/data";

export  function GET(){

    return NextResponse.json(breakFast)
}