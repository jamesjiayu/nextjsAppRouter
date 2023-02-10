import { cookies } from "next/headers";
export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return new Response("HELLLLLLLLOOOOOOO", {
    status: 200,
    headers: { "Set-cookie": `token=${token}` },
  });
}
