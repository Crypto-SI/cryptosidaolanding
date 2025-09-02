"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function DashboardSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="dashboard" className="w-full py-12 md:py-24 lg:py-32 bg-card">
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
                    Your central hub for all DAO activities.
                </p>
            )}
        </div>
        {isExpanded && (
            <div className="mx-auto max-w-3xl pt-12">
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                            <Lock className="w-8 h-8" />
                        </div>
                        <CardTitle className="font-body">Coming Soon!</CardTitle>
                        <CardDescription>This feature is currently under development.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                            A place where users can sign in and vote on proposals as they are available. Here they can also see their vote weight and previous votes as well as any relevant NFTs they might own, their current role if any and tasks they may need to complete or be eligible for. Tasks will be fed in from dework.
                        </p>
                    </CardContent>
                </Card>
            </div>
        )}
      </div>
    </section>
  );
}
