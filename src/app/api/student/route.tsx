import { getStudents } from "@/libs/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest) => {
  try {
 // create server
    const students = await getStudents();
    return NextResponse.json(students, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

// API ROUTES
