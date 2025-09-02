import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DaoLogo } from "@/components/icons";
import { Menu, Wallet } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#reporting", label: "Reporting" },
  { href: "#governance", label: "Governance" },
  { href: "#staking", label: "Staking" },
  { href: "#proposals", label: "Proposals" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <DaoLogo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              CryptoSI DAO
            </span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button className="hidden sm:inline-flex">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
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
                        <span className="font-bold font-headline">CryptoSI DAO</span>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Button className="mt-auto">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
