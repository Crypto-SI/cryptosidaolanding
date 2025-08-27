import Image from "next/image";
import { ProposalForm } from "./proposal-form";
import { Card, CardContent } from "@/components/ui/card";

export function ProposalSection() {
  return (
    <section id="proposals" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Shape the Future
            </div>
            <h2 className="lg:leading-tighter text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Submit Your Proposal
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Have an idea that could benefit the CryptoSI ecosystem? Submit it for community review.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Card className="w-full">
                <CardContent className="p-6">
                    <ProposalForm />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
