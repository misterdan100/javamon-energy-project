import { NextRequest, NextResponse } from "next/server";
import dataJSON from '@/data/data.json'

export async function GET(req: NextRequest) {


    return NextResponse.json(dataJSON)
}