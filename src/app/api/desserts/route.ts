import {  NextResponse } from "next/server";
import { desserts } from "@/data";


export  function GET (){
    return NextResponse.json(desserts)
}