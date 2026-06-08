import { NextResponse } from "next/server";

const ARBITRUM_RPC = "https://arb1.arbitrum.io/rpc";
const DAO_ADDRESS = "0xA736319152057f9c3beb556EeE76Ea56598FFa13";
const COINGECKO_API = "https://api.coingecko.com/api/v3";

// Cache for 5 minutes
let cache: { data: TreasuryData; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000;

type TreasuryData = {
  ethBalance: number;
  ethPriceUsd: number;
  treasuryUsd: number;
  crddBalance: number;
  lastUpdated: string;
};

async function fetchEthBalance(): Promise<number> {
  const res = await fetch(ARBITRUM_RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [DAO_ADDRESS, "latest"],
      id: 1,
    }),
  });
  const json = await res.json();
  return parseInt(json.result, 16) / 1e18;
}

async function fetchCrddBalance(): Promise<number> {
  const paddedAddress = DAO_ADDRESS.toLowerCase().replace("0x", "").padStart(64, "0");
  const data = "0x70a08231" + paddedAddress;
  const res = await fetch(ARBITRUM_RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_call",
      params: [{ to: "0x239F89d0a2484f548A43D40244823623F3732a8B", data }, "latest"],
      id: 2,
    }),
  });
  const json = await res.json();
  return parseInt(json.result, 16) / 1e18;
}

async function fetchEthPrice(): Promise<number> {
  const res = await fetch(
    `${COINGECKO_API}/simple/price?ids=ethereum&vs_currencies=usd`,
    { next: { revalidate: 300 } }
  );
  const json = await res.json();
  return json.ethereum.usd;
}

export async function GET() {
  try {
    // Return cached data if fresh
    if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
      return NextResponse.json(cache.data);
    }

    // Fetch all data in parallel
    const [ethBalance, ethPrice, crddBalance] = await Promise.all([
      fetchEthBalance(),
      fetchEthPrice(),
      fetchCrddBalance(),
    ]);

    const data: TreasuryData = {
      ethBalance: Math.round(ethBalance * 100000) / 100000,
      ethPriceUsd: ethPrice,
      treasuryUsd: Math.round(ethBalance * ethPrice * 100) / 100,
      crddBalance: Math.round(crddBalance),
      lastUpdated: new Date().toISOString(),
    };

    cache = { data, timestamp: Date.now() };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Treasury API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch treasury data" },
      { status: 500 }
    );
  }
}
