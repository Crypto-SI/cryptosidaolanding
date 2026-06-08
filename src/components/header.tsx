"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DaoLogo } from "@/components/icons";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ConnectWalletButton } from "./connect-wallet-button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#ideas", label: "Ideas" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#reporting", label: "Reporting" },
  { href: "#governance", label: "Governance" },
  // { href: "#staking", label: "Staking" },
  { href: "#proposals", label: "Proposals" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#join", label: "Join" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <DaoLogo className="h-6 w-6 text-primary" />
            <Image src="/images/crddlogotrans1.png" alt="CryptoSI DAO" width={120} height={24} className="hidden sm:inline-block" />
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden sm:block">
            <ConnectWalletButton />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center pb-2">
                  <Link href="/" className="flex items-center space-x-2">
                    <DaoLogo className="h-6 w-6 text-primary" />
                    <Image src="/images/crddlogotrans1.png" alt="CryptoSI DAO" width={120} height={24} />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  <ConnectWalletButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
