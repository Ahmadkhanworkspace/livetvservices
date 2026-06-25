import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LOCAL_DATA_PATH = path.join(process.cwd(), "src/data/whatsapp.json");
const DEFAULT_NUMBER = "447828932728";
const DEFAULT_PASSWORD = "Admin123!"; // Default fallback if no env variable is set

// Lazy import @vercel/kv to prevent local import issues if not initialized
async function getStorage() {
  try {
    const url = 
      process.env.KV_REST_API_URL || 
      process.env.UPSTASH_REDIS_REST_URL || 
      process.env.STORAGE_REST_API_URL ||
      process.env.REDIS_REST_API_URL;

    const token = 
      process.env.KV_REST_API_TOKEN || 
      process.env.UPSTASH_REDIS_REST_TOKEN || 
      process.env.STORAGE_REST_API_TOKEN ||
      process.env.REDIS_REST_API_TOKEN;

    if (url && token) {
      const { createClient } = await import("@vercel/kv");
      return createClient({ url, token });
    }
  } catch (e) {
    console.error("Failed to load or import @vercel/kv:", e);
  }
  return null;
}

export async function getWhatsappNumber() {
  try {
    const kv = await getStorage();
    if (kv) {
      const stored = await kv.get("whatsapp_number");
      if (stored) return stored as string;
    }
  } catch (e) {
    console.error("Failed to read from Vercel KV, falling back to local file:", e);
  }
  
  // Local file fallback
  try {
    if (fs.existsSync(LOCAL_DATA_PATH)) {
      const data = JSON.parse(fs.readFileSync(LOCAL_DATA_PATH, "utf8"));
      return data.number || DEFAULT_NUMBER;
    }
  } catch (e) {
    console.error("Failed to read from local file fallback:", e);
  }
  
  return DEFAULT_NUMBER;
}

async function saveWhatsappNumber(newNumber: string) {
  try {
    const kv = await getStorage();
    if (kv) {
      await kv.set("whatsapp_number", newNumber);
      return true;
    }
  } catch (e) {
    console.error("Failed to write to Vercel KV, falling back to local file:", e);
  }

  // Local file fallback
  try {
    const dir = path.dirname(LOCAL_DATA_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_DATA_PATH, JSON.stringify({ number: newNumber }), "utf8");
    return true;
  } catch (e) {
    console.error("Failed to write to local file fallback:", e);
    return false;
  }
}

export async function GET() {
  const num = await getWhatsappNumber();
  return NextResponse.json({ number: num });
}

export async function POST(req: Request) {
  try {
    const { password, number: newNumber } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;

    if (password !== correctPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    if (!newNumber || newNumber.length < 7) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 });
    }

    const cleanedNumber = newNumber.replace(/\D/g, ""); // strip non-digits
    const success = await saveWhatsappNumber(cleanedNumber);

    if (success) {
      return NextResponse.json({ success: true, number: cleanedNumber });
    } else {
      return NextResponse.json({ error: "Failed to write data" }, { status: 500 });
    }
  } catch (e) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 500 });
  }
}
