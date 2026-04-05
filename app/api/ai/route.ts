import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Groq is OpenAI-compatible — keys in .env.local
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function POST(req: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  // Accept Anthropic-format body: { model, max_tokens, messages }
  const { max_tokens, messages } = await req.json();

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'messages array is required' }, { status: 400 });
  }

  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    max_tokens: max_tokens ?? 2000,
    messages,
  });

  const text = response.choices[0]?.message?.content ?? '';

  // Return Anthropic-compatible format so existing HTML code needs no changes
  return NextResponse.json({ content: [{ type: 'text', text }] });
}
