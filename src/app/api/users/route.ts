import connectMongoDB from "@/libs/mongodb";
import user2 from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const{username, password, phonenumber, email, address} = await request.json();
    await connectMongoDB();
    await user2.create({username, password, phonenumber, email, address});
    return NextResponse.json({message:"Item added successfully"}, {status: 201})
}