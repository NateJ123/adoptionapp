import connectMongoDB from "@/libs/mongodb";
import shelter2 from "@/models/shelterSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const{id, name, contact:{email, phoneNumber, address}} = await request.json();
    await connectMongoDB();
    await shelter2.create({id, name, contact:{email, phoneNumber, address}});
    return NextResponse.json({message:"Item added successfully"}, {status: 201})
}

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const shelters = await shelter2.find();
    return NextResponse.json({shelters});
}