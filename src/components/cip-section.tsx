import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, FileText, Scaling, Users, Vote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const cipInfo = [
    {
        icon: <FileText className="w-8 h-8" />,
        title: "What is a CIP?",
        description: "A CryptoSI DAO Improvement Proposal (CIP) is a formal suggestion to modify the DAO. It covers bug fixes, new features, and social protocols for partnerships and other use cases.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Why are CIPs necessary?",
        description: "As a decentralized system without a central leader, the CIP process organizes our community, ensuring development is orderly and builds trust in the DAO's reputation.",
    },
    {
        icon: <Scaling className="w-8 h-8" />,
        title: "How are CIPs approved?",
        description: "Anyone can propose a CIP. After discussion on Discord, it's posted on GitHub. Community consensus is key for approval, with members voting to activate proposals.",
    },
    {
        icon: <Vote className="w-8 h-8" />,
        title: "Role of CRDD Tokens",
        description: "CRDD is the sole voting token. Holders participate in decision-making on a '1 token = 1 vote' basis, proposing ideas and voting on critical matters for the DAO.",
    },
]

export function CipSection() {
  return (
    <section id="proposals" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">DAO Improvement Proposals (CIPs)</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The proposal process is fundamental to our decentralized governance, allowing the community to shape the future of the CryptoSI DAO.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 pt-12">
          {cipInfo.map((item) => (
            <Card key={item.title} className="flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full w-fit">
                            {item.icon}
                        </div>
                        <CardTitle className="font-body">{item.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center space-y-6">
            <p className="text-muted-foreground max-w-4xl mx-auto">
                For more details on our governance processes, how proposals are made, and how to vote, please visit our Governance Page. Once live, the Dashboard will be your hub to sign in, vote on proposals, view your voting history, and check your voting weight.
            </p>
            <Button asChild size="lg">
                <Link href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/proposals?proposals=tokenvoting" target="_blank" rel="noopener noreferrer">
                    View & Submit Proposals
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
