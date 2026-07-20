import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

// This route runs server-side only, so your API key stays secret.
// Set ANTHROPIC_API_KEY in Vercel's Environment Variables.
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system:
        "You are a friendly, patient AI tutor for YouLearn AI. Explain concepts clearly, use simple examples, and ask a short follow-up question when helpful. Keep answers focused and not too long.",
      messages,
    });

    const textBlock = response.content.find((c) => c.type === "text");

    return NextResponse.json({
      reply: textBlock ? (textBlock as any).text : "",
    });
  } catch (err: any) {
    console.error("Tutor API error:", err);
    return NextResponse.json(
      { error: "Something went wrong talking to the AI tutor." },
      { status: 500 }
    );
  }
}
