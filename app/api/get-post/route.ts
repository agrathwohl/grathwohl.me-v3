import { NextResponse } from "next/server";
import { getPostData } from "../lib/posts";

export const runtime = "edge";

export async function GET(request: Request) {
  const data = getPostData("2020-08-14-Web-Audio");
  return NextResponse.json({ data });
}
