"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, LandPlot, HandCoins, ChevronDown, ChevronUp } from "lucide-react";
import { TreasuryChart } from "./treasury-chart";
import { useState } from "react";

export function ReportingSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="reporting" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
                <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Transparent Financials</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
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
                <div className="mx-auto grid gap-4 pt-12 sm:grid-cols-1 md:grid-cols-3">
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Treasury Balance</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$12,458,039.42</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Value Locked (TVL)</CardTitle>
                    <LandPlot className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$78,210,991.00</div>
                    <p className="text-xs text-muted-foreground">Across all portfolio dApps</p>
                    </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Staking Rewards Paid</CardTitle>
                    <HandCoins className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">$3,102,492.71</div>
                    <p className="text-xs text-muted-foreground">Total rewards distributed to date</p>
                    </CardContent>
                </Card>
                </div>
                <div className="mx-auto pt-8">
                    <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                        <CardHeader>
                            <CardTitle>Treasury Growth</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TreasuryChart />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center mt-8">
                <Button asChild variant="outline">
                    <Link href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/assets" target="_blank" rel="noopener noreferrer">
                    View Assets
                    </Link>
                </Button>
                </div>
            </>
        )}
      </div>
    </section>
  );
}
