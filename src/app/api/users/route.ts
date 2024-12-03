import connectMongoDB from "@/libs/mongodb";
import user2 from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: {username: string};
}

export async function POST(request: NextRequest){
    const{username, password, phonenumber, email, address} = await request.json();
    await connectMongoDB();
    await user2.create({username, password, phonenumber, email, address});
    return NextResponse.json({message:"Item added successfully"}, {status: 201})
}

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');
    await connectMongoDB();
    const user = await user2.findOne({ username });
    return NextResponse.json({user});
}

export async function PUT(request: NextRequest, {params}: RouteParams) {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    const { password, phonenumber, email, address} = await request.json();
    await connectMongoDB();
    await user2.findOneAndUpdate({username}, {username, password, phonenumber, email, address});
    return NextResponse.json({ message: "User Updated"}, {status: 200});
}
