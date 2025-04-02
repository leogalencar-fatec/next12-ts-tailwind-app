import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET || "default-key";

export async function middleware(req: NextRequest) {
}

// Protected paths
export const config = {
  matcher: ["/"],
};
