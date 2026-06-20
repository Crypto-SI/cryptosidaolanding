"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, LandPlot, HandCoins, ChevronDown, ChevronUp, RefreshCw, ExternalLink } from "lucide-react";
import { TreasuryChart } from "./treasury-chart";
import { useState, useEffect, useCallback } from "react";

type TreasuryData = {
  ethBalance: number;
  ethPriceUsd: number;
  treasuryUsd: number;
  crddBalance: number;
  lastUpdated: string;
};

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function formatTokens(value: number, ticker: string): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)}B ${ticker}`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M ${ticker}`;
  }
  return `${value.toFixed(4)} ${ticker}`;
}

function getTimeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins === 1) return "1 min ago";
  return `${mins} mins ago`;
}

export function ReportingSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState<TreasuryData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/treasury");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError("Could not load treasury data. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch only when section is expanded for the first time
  useEffect(() => {
    if (isExpanded && !data && !isLoading) {
      fetchData();
    }
  }, [isExpanded, data, isLoading, fetchData]);

  return (
    <section id="reporting" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Transparent Financials</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              <span className="sr-only">{isExpanded ? "Collapse section" : "Expand section"}</span>
            </Button>
          </div>
          {isExpanded && (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Full transparency into the DAO's treasury and financial activities. All data is verifiable on-chain.
            </p>
          )}
        </div>
        {isExpanded && (
          <>
            {/* Loading state */}
            {isLoading && (
              <div className="mx-auto pt-12 flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground">Fetching on-chain data...</p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="mx-auto pt-12 flex flex-col items-center gap-4">
                <p className="text-sm text-destructive">{error}</p>
                <Button variant="outline" size="sm" onClick={fetchData} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Retry
                </Button>
              </div>
            )}

            {/* Data display */}
            {data && !isLoading && (
              <>
                <div className="mx-auto grid gap-4 pt-12 sm:grid-cols-1 md:grid-cols-3">
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Treasury Balance</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatUsd(data.treasuryUsd)}</div>
                      <p className="text-xs text-muted-foreground">
                        {data.ethBalance} ETH @ {formatUsd(data.ethPriceUsd)}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">DAO Token Holdings</CardTitle>
                      <LandPlot className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{formatTokens(data.crddBalance, "CRDD")}</div>
                      <p className="text-xs text-muted-foreground">
                        Price TBD — awaiting liquidity
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Staking Rewards Paid</CardTitle>
                      <HandCoins className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$0.00</div>
                      <p className="text-xs text-muted-foreground">Staking program launching soon</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mx-auto pt-8">
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader>
                      <CardTitle>Treasury Assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <TreasuryChart />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-3">
                  <p className="text-xs text-muted-foreground">
                    Last updated: {getTimeAgo(data.lastUpdated)} • Live from Arbitrum
                  </p>
                  <Button variant="ghost" size="sm" onClick={fetchData} className="gap-1 text-xs">
                    <RefreshCw className="w-3 h-3" />
                    Refresh
                  </Button>
                </div>
              </>
            )}

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="gap-2">
                <Link href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/assets" target="_blank" rel="noopener noreferrer">
                  View on Aragon
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
