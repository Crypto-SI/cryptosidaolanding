"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl xl:text-7xl/none text-primary">
                CryptoSI DAO Hub
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
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
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"></div>
             <div className="relative w-full h-full flex items-center justify-center">
                <DaoGlobe />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function DaoGlobe() {
  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center">
      <div className="w-full h-full relative animate-spin-slow">
        <div className="absolute w-full h-full border-2 border-primary/20 rounded-full"></div>
        <div className="absolute w-full h-full border-2 border-primary/20 rounded-full transform scale-75"></div>
        <div className="absolute w-full h-full border-2 border-primary/20 rounded-full transform scale-50"></div>
        
        {/* Nodes */}
        <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-4 h-4 bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="absolute top-[15%] left-[15%] w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[15%] right-[15%] w-3 h-3 bg-accent rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-[15%] left-[15%] w-3 h-3 bg-accent rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-[15%] right-[15%] w-3 h-3 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
       <style jsx>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
