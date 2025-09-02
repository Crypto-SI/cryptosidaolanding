import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function ProposalSection() {
  return (
    <section id="proposals" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Proposals</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Proposals are the cornerstone of our DAO's governance. They are formal suggestions submitted by community members to be voted upon. Proposals can cover a wide range of topics, including funding for new projects, changes to the DAO's protocol, or new community initiatives.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6">
            <Button asChild size="lg">
                <Link href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/proposals?proposals=tokenvoting" target="_blank" rel="noopener noreferrer">
                    View & Submit Proposals
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
