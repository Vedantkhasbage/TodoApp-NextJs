import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client=new PrismaClient();

export async function POST(req:NextRequest){
  
    const data=await req.json();
    console.log(data)
 
  await client.user.create({
        data: {
          name:data.name,
          email:data.password,
        }
    })

    return NextResponse.json({
        message:"successfully Signed Up"
    })
}