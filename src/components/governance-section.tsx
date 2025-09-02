"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const discussions = [
  {
    title: "Proposal: Integrate NexusMarket into core portfolio",
    author: "0xAlice.eth",
    replies: 42,
    views: 1200,
    status: "Active",
    statusVariant: "default",
  },
  {
    title: "Discussion: Future of staking rewards",
    author: "DAO-Maximalist",
    replies: 128,
    views: 5600,
    status: "Hot",
    statusVariant: "destructive",
  },
  {
    title: "Ratification: Q2 Budget Allocation",
    author: "CryptoSI-Treasury",
    replies: 15,
    views: 890,
    status: "Passed",
    statusVariant: "secondary",
  },
  {
    title: "Idea: DAO-sponsored hackathon for developers",
    author: "BuilderBob",
    replies: 78,
    views: 2300,
    status: "Active",
    statusVariant: "default",
  },
];

export function GovernanceSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="governance" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
                <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Community Governance</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
                </Button>
            </div>
            {isExpanded && (
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participate in discussions, vote on proposals, and shape the future of the CryptoSI DAO.
                </p>
            )}
        </div>
        {isExpanded && (
            <>
                <div className="mx-auto pt-12">
                    <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Topic</TableHead>
                                <TableHead className="hidden sm:table-cell">Author</TableHead>
                                <TableHead className="text-center">Replies</TableHead>
                                <TableHead className="hidden md:table-cell text-center">Views</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {discussions.map((item) => (
                                <TableRow key={item.title}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{item.author}</TableCell>
                                    <TableCell className="text-center">{item.replies}</TableCell>
                                    <TableCell className="hidden md:table-cell text-center">{item.views}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={item.statusVariant as any}>{item.status}</Badge>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
                <div className="flex justify-center mt-8">
                    <Button variant="outline">View All Discussions</Button>
                </div>
            </>
        )}
      </div>
    </section>
  );
}
