"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const projects = [
  {
    name: "Bidify",
    description: "Decentralized Auction Platform.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    hint: "auction gavel",
    link: "https://bidify.cloud",
  },
  {
    name: "Vulcan Pad",
    description: "Launchpad for innovative crypto projects.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    hint: "rocket launch",
    link: "https://vulcanpad.tech",
  },
  {
    name: "Turbo Trade",
    description: "High-speed decentralized trading.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    hint: "fast chart",
    link: "https://turbotrade.tech",
  },
  {
    name: "DAO Watch",
    description: "Analytics and insights for DAOs.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    hint: "data analytics",
    link: "https://daowatch.blog",
  },
  {
    name: "Soonak",
    description: "A revolutionary DeFi protocol.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    hint: "DeFi protocol",
    link: "#",
  },
  {
    name: "Crypto Waffle",
    description: "Sweet deals on crypto assets.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    hint: "crypto waffle",
    link: "#",
  },
  {
    name: "Kin Protocol",
    description: "Connecting communities with crypto.",
    imageUrl: "https://picsum.photos/600/400?random=7",
    hint: "community crypto",
    link: "#",
  },
  {
    name: "Lisa Kim",
    description: "Digital art and NFT marketplace.",
    imageUrl: "https://picsum.photos/600/400?random=8",
    hint: "digital art",
    link: "#",
  },
];

export function PortfolioSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Our Projects</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
            </Button>
          </div>
          {isExpanded && (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              CryptoSI DAO has successfully completed several projects, thanks to our dedicated community. Here’s a showcase of what we’ve achieved:
            </p>
          )}
        </div>
        {isExpanded && (
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-12">
            {projects.map((project) => (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" key={project.name} className="group">
                <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 h-full flex flex-col">
                    <CardHeader className="p-0">
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={project.hint}
                    />
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-xl font-bold font-body flex items-center justify-between">
                        {project.name}
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                    </CardContent>
                </Card>
                </Link>
            ))}
            </div>
        )}
      </div>
    </section>
  );
}
