import Link from "next/link";
import { DaoLogo } from "./icons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 w-full bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <DaoLogo className="h-6 w-6 text-primary" />
            <Image src="/images/crddlogotrans1.png" alt="CryptoSI DAO" width={120} height={24} />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CryptoSI DAO. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <Link
              href="https://twitter.com/Crypto_SI"
              className="text-sm text-muted-foreground hover:text-primary"
              target="_blank" rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/cryptosi.eth/"
              className="text-sm text-muted-foreground hover:text-primary"
              target="_blank" rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://discord.gg/VSPUucsyvn"
              className="text-sm text-muted-foreground hover:text-primary"
              target="_blank" rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
