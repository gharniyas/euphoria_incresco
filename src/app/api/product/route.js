import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id } = await req.json();

    const client = await clientPromise;
    const db = client.db("euphoria");

    const data = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
