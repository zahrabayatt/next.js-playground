import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Mosh" });
}

// Put for updating object by replacing it
// Patch for updating object by updating one or more properties

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body
  // if invalid, return 400
  // else fetch the user with the given id
  // if doesn't exist, return 404
  // else update the user
  // return the updated user

  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}
