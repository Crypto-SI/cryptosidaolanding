"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Globe } from "@/components/globe";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/daohero.png"
          alt="DAO Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl xl:text-7xl/none text-primary">
                CryptoSI DAO Hub
              </h1>
              <p className="max-w-[600px] text-foreground md:text-xl">
                The future of decentralized collaboration. Invest, govern, and build with the CryptoSI community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#proposals">
                  Submit a Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#governance">
                  Join Discussion
                </Link>
              </Button>
            </div>
          </div>
           <div className="relative hidden lg:flex items-center justify-center">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
