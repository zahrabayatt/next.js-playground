import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });

  return NextResponse.json(token);
}

// don't use this in production, we only use it to see the json web token decoded!
