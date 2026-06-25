import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LOCAL_DATA_PATH = path.join(process.cwd(), "src/data/whatsapp.json");
const DEFAULT_NUMBER = "447828932728";
const DEFAULT_PASSWORD = "Admin123!"; // Default fallback if no env variable is set

let cachedStorage: any = null;

// Lazy import @vercel/kv or ioredis to prevent local import issues if not initialized
async function getStorage() {
  if (cachedStorage) return cachedStorage;

  try {
    // 1. Check REST environment variables (Vercel KV or Upstash REST)
    const restUrl = 
      process.env.KV_REST_API_URL || 
      process.env.UPSTASH_REDIS_REST_URL || 
      process.env.STORAGE_REST_API_URL ||
      process.env.REDIS_REST_API_URL;

    const restToken = 
      process.env.KV_REST_API_TOKEN || 
      process.env.UPSTASH_REDIS_REST_TOKEN || 
      process.env.STORAGE_REST_API_TOKEN ||
      process.env.REDIS_REST_API_TOKEN;

    if (restUrl && restToken) {
      const { createClient } = await import("@vercel/kv");
      cachedStorage = createClient({ url: restUrl, token: restToken });
      return cachedStorage;
    }

    // 2. Check TCP environment variables (Upstash Redis TCP)
    const redisUrl = process.env.KV_REDIS_URL || process.env.REDIS_URL;
    if (redisUrl) {
      const { default: Redis } = await import("ioredis");
      cachedStorage = new Redis(redisUrl, {
        connectTimeout: 5000,
        maxRetriesPerRequest: 1,
      });
      return cachedStorage;
    }
  } catch (e) {
    console.error("Failed to load or import storage client:", e);
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
