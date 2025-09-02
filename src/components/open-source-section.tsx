"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function OpenSourceSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="open-source" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex items-center justify-center gap-4">
                        <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Transparent & Open Source</h2>
                        <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                            <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
                        </Button>
                    </div>
                     {isExpanded && (
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           We believe in full transparency. Our entire codebase is open source and available for anyone to view, audit, and contribute to.
                        </p>
                    )}
                </div>
                {isExpanded && (
                    <div className="mx-auto max-w-3xl pt-12 text-center">
                        <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardContent className="pt-6">
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                                    <Github className="w-10 h-10" />
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    Explore our repositories, track our progress, and join our developer community on GitHub. We welcome contributions and collaboration to make the CryptoSI DAO ecosystem stronger and more secure.
                                </p>
                                <Button asChild size="lg">
                                    <Link href="https://github.com/CryptoSI-DAODAO" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
