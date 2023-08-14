import { cfIpList } from "@/lib/cf-ip-list";

export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      ipList: cfIpList,
    }),
  );
}
