import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📩 Нове повідомлення:", body);

    // тут пізніше можна буде зберігати в Supabase або MongoDB
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Помилка при надсиланні форми" }, { status: 500 });
  }
}
