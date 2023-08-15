import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { OPTIONS } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
  const session = (await getServerSession(OPTIONS)) as any;

  try{
    const {id, userId} = (await req.json()) as {
      id: number;
      userId: string;
    };

    await prisma.favMovie.create({
      data: {
        movieId: id,
        userId: userId
      }
    });

    return NextResponse.json({
      movie: {
        id
      }
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'Error user',
        message: error.message
      }),
      {status: 500}
    )
  }
}