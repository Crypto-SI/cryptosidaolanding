"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Vote, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function WhatWeDoSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
                <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Welcome to CryptoSI DAO</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
                </Button>
            </div>
            {isExpanded && (
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The CryptoSI DAO is at the forefront of decentralized governance and funding, empowering the community to steer the future of CryptoSI-backed projects. By leveraging a liquid governance model, we ensure that every member has a voice and can influence the direction of our ecosystem.
                </p>
            )}
        </div>
        {isExpanded && (
            <>
                <div className="mx-auto max-w-5xl pt-12">
                    <h3 className="text-2xl font-bold text-center mb-8">What We Do</h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <CardTitle className="font-body mt-4">Innovative Projects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">We support and fund pioneering projects within the CryptoSI ecosystem.</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full">
                                    <Vote className="w-8 h-8" />
                                </div>
                                <CardTitle className="font-body mt-4">Community Governance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Our members vote on proposals and decide on the allocation of funds.</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <CardTitle className="font-body mt-4">Engagement and Progression</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Participate in decision-making processes and contribute to the growth of our ecosystem.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg text-muted-foreground">
                        Join us in revolutionizing decentralized finance and be a part of the future today.
                    </p>
                </div>
            </>
        )}
      </div>
    </section>
  );
}
