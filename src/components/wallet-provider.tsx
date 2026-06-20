"use client";

import { WalletProvider } from "@/lib/wallet";

export function WalletProviderWrapper({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children}</WalletProvider>;
}
