import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Star } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q3 2025",
    title: "Dashboard Creation",
    description: "View all things related to the DAO in one place.",
    stars: 4,
  },
  {
    quarter: "Q4 2025",
    title: "Token distribution",
    description: "CRDD distribution will be ongoing in phases.",
    stars: 3,
  },
  {
    quarter: "Q1 2026",
    title: "Decentralised CryptoSI Team",
    description: "allow people to join freely.",
    stars: 2,
  },
  {
    quarter: "Q2 2026",
    title: "NFT Project",
    description: "PFP for CRDD token holders.",
    stars: 1,
  },
  {
    quarter: "Q3 2026",
    title: "CryptoSI TV",
    description: "Full media organisation dedicated to true crypto adoption.",
    stars: 1,
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Our Roadmap</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our roadmap keeps track of all ongoing and future projects within the Cryptosi DAO. Each project’s progress is visually represented with stars to indicate its stage of development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12">
            {roadmapItems.map((item) => (
                <Card key={item.title} className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="font-body">{item.quarter}</CardTitle>
                            <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < item.stars ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                                ))}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-muted-foreground">
                Join the conversation on our <Link href="https://discord.gg/63JbDWV" className="text-primary hover:underline">Discord Channel</Link> and view detailed project plans on our Kanban board.
            </p>
        </div>
      </div>
    </section>
  );
}
