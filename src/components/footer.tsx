import Link from "next/link";
import { DaoLogo } from "./icons";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 w-full">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <DaoLogo className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground font-headline">
            CryptoSI DAO Hub
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CryptoSI DAO. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Twitter
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Discord
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
