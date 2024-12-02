import Pet from "@/app/components/Pet";
import connectMongoDB from "@/libs/mongodb";
import pet2 from "@/models/petSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const{id, name, imageUrl, age, shelter, description} = await request.json();
    await connectMongoDB();
    await pet2.create({id, name, imageUrl, age, shelter, description});
    return NextResponse.json({message:"Item added successfully"}, {status: 201})
}

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const pets = await pet2.find();
    return NextResponse.json({pets});
}