import { NextRequest, NextResponse } from "next/server";

export const GET = (_: NextRequest) => {
  return NextResponse.json("Hello, World!", { status: 200 });
};

export const POST = (_: NextRequest) => {
  return NextResponse.json("Hello, World!", { status: 200 });
};
