import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { progress } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";

export const dynamic = "force-dynamic";

function unauthorized() {
  return Response.json({ error: "Autenticação necessária." }, { status: 401 });
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return unauthorized();
  const [row] = await getDb().select().from(progress).where(eq(progress.userId, user.userId)).limit(1);
  return Response.json(row ? { data: JSON.parse(row.data), updatedAt: row.updatedAt } : { data: null, updatedAt: 0 });
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return unauthorized();
  const body = await request.json() as { data?: unknown; updatedAt?: unknown };
  if (!body.data || typeof body.data !== "object" || !Number.isFinite(body.updatedAt) || Number(body.updatedAt) < 0) {
    return Response.json({ error: "Progresso inválido." }, { status: 400 });
  }
  const serialized = JSON.stringify(body.data);
  if (serialized.length > 2_000_000) return Response.json({ error: "Progresso acima do limite." }, { status: 413 });
  const updatedAt = Number(body.updatedAt);
  const [existing] = await getDb().select({ updatedAt: progress.updatedAt }).from(progress).where(eq(progress.userId, user.userId)).limit(1);
  if (existing && existing.updatedAt > updatedAt) return Response.json({ ok: false, conflict: true, updatedAt: existing.updatedAt }, { status: 409 });
  await getDb().insert(progress).values({ userId: user.userId, data: serialized, updatedAt }).onConflictDoUpdate({ target: progress.userId, set: { data: serialized, updatedAt } });
  return Response.json({ ok: true, updatedAt });
}
