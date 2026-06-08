"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, BarChart3, ChevronDown, ChevronUp, Vote, Wallet, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const dashboardFeatures = [
  { icon: Vote, label: "Vote on Proposals", desc: "Token-weighted voting on active CIPs" },
  { icon: BarChart3, label: "Treasury Overview", desc: "Real-time DAO financials" },
  { icon: Wallet, label: "Member Profile", desc: "NFTs, roles, and vote history" },
];

export function DashboardSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="dashboard" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
                <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">DAO Dashboard</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
                </Button>
            </div>
            {isExpanded && (
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your central hub for governance, treasury, and member activity.
                </p>
            )}
        </div>
        {isExpanded && (
            <div className="mx-auto max-w-4xl pt-12">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-8">
                    {dashboardFeatures.map((feature) => (
                        <Card key={feature.label} className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="font-body text-lg">{feature.label}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-sm text-muted-foreground">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 border-primary/20">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                            <Lock className="w-8 h-8" />
                        </div>
                        <CardTitle className="font-body">Launching Soon</CardTitle>
                        <CardDescription>The full DAO Dashboard is under development. Connect your wallet on the landing page to be ready.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Button asChild size="lg" className="gap-2">
                            <a href="#join">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )}
      </div>
    </section>
  );
}
