import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from("emails")
      .select("email")
      .eq("email", email)
      .single();

    if (existingEmail) {
      return NextResponse.json({ error: "Email already submitted" }, { status: 409 });
    }

    // Insert new email
    const { error } = await supabase
      .from("emails")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "Email submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
