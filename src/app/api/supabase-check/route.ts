import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { error } = await supabase.from("products").select("id").limit(1);

  if (error) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Supabase reachable but query failed. Create table 'products' or adjust permissions (RLS/policies).",
        details: error.message,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Supabase is connected.",
  });
}
