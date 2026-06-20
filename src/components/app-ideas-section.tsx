"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Lightbulb, ArrowUpRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const ideas = [
  {
    rank: 1,
    title: "Persona 6 Guide & Tracker",
    description: "The ultimate companion app for Persona 6 fans — story walkthrough, persona compendium, character profiles, social link tracker, and release calendar. Everything a Persona fan needs, offline, in one place.",
    scores: { trend: 9, gap: 8, build: 7, evergreen: 7, monetization: 7 },
    average: 7.6,
  },
  {
    rank: 2,
    title: "Broadway Season Guide 2026 — Tony Awards Edition",
    description: "A gorgeous, comprehensive guide to the 2025-2026 Broadway season — every Tony-nominated show, synopses, cast lists, song highlights, theater locations, and winner predictions all in one app.",
    scores: { trend: 8, gap: 9, build: 8, evergreen: 8, monetization: 6 },
    average: 7.4,
  },
  {
    rank: 3,
    title: "Reptile ID — Herpetology Field Guide",
    description: "A beautiful reptile and amphibian identification app. Browse 100+ species with photos, habitat maps, care guides, venom warnings, and fun facts. Think iNaturalist meets Audubon Bird Guide but for reptiles.",
    scores: { trend: 7, gap: 9, build: 8, evergreen: 8, monetization: 6 },
    average: 7.2,
  },
];

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-20 text-muted-foreground shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${value * 10}%` }}
        />
      </div>
      <span className="w-6 text-right font-medium">{value}/10</span>
    </div>
  );
}

export function AppIdeasSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="ideas" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">App Ideas</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              <span className="sr-only">{isExpanded ? "Collapse section" : "Expand section"}</span>
            </Button>
          </div>
          {isExpanded && (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Validated app concepts researched and scored by the CryptoSI team. Trending opportunities with real market potential.
            </p>
          )}
        </div>
        {isExpanded && (
          <>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3">
              {ideas.map((idea) => (
                <Card
                  key={idea.rank}
                  className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                          #{idea.rank}
                        </span>
                        <div className="flex items-center gap-1 text-primary">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-bold">{idea.average}/10</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="font-body text-lg leading-tight">{idea.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="text-sm mb-4 flex-grow">{idea.description}</CardDescription>
                    <div className="space-y-1.5 pt-3 border-t">
                      <ScoreBar label="Trend" value={idea.scores.trend} />
                      <ScoreBar label="App Gap" value={idea.scores.gap} />
                      <ScoreBar label="Build" value={idea.scores.build} />
                      <ScoreBar label="Evergreen" value={idea.scores.evergreen} />
                      <ScoreBar label="Money" value={idea.scores.monetization} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="https://ideas.cryptosidao.org" target="_blank" rel="noopener noreferrer">
                  <Lightbulb className="w-4 h-4" />
                  View All Ideas
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
