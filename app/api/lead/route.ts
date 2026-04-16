import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // PASTE YOUR GOOGLE SHEET WEB APP URL BELOW
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyp94vNiYyccZFs6LSKoI7nB0FmytdEaCjQqVvO6ejwU1ZMlzp7EOySOsKxPH0-60of/exec";

    if (!GOOGLE_SCRIPT_URL) {
      console.warn("GOOGLE_SCRIPT_URL is not defined. Logging lead data locally.");
      console.log("New Lead:", data);

      // Simulate success in development if URL is missing
      return NextResponse.json({ success: true, message: "Lead logged (dev)" });
    }

    // Forwarding to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Google Script responded with an error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
