"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

type Chain = {
  id: number;
  name: string;
};

const ARBITRUM: Chain = { id: 42161, name: "Arbitrum One" };
const ARBITRUM_HEX = "0xa4b1";

type WalletState = {
  address: string | null;
  chain: Chain | null;
  isConnecting: boolean;
  isConnected: boolean;
  connect: (type: "metamask" | "walletconnect") => Promise<void>;
  disconnect: () => void;
  switchToArbitrum: () => Promise<void>;
};

const WalletContext = createContext<WalletState | null>(null);

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}

export function truncateAddress(addr: string): string {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [chain, setChain] = useState<Chain | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Restore session from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cryptoSiWallet");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.address) setAddress(parsed.address);
      } catch {
        localStorage.removeItem("cryptoSiWallet");
      }
    }
  }, []);

  // Listen for account/chain changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: unknown) => {
      const accts = accounts as string[];
      if (accts.length === 0) {
        setAddress(null);
        setChain(null);
        localStorage.removeItem("cryptoSiWallet");
      } else {
        setAddress(accts[0]);
        localStorage.setItem("cryptoSiWallet", JSON.stringify({ address: accts[0] }));
      }
    };

    const handleChainChanged = (chainId: unknown) => {
      const hex = chainId as string;
      const id = parseInt(hex, 16);
      if (id === ARBITRUM.id) {
        setChain(ARBITRUM);
      } else {
        setChain({ id, name: `Chain ${id}` });
      }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum?.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  const connect = useCallback(async (type: "metamask" | "walletconnect") => {
    setIsConnecting(true);
    try {
      if (type === "metamask") {
        if (!window.ethereum?.isMetaMask) {
          throw new Error("MetaMask not installed");
        }
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        }) as string[];
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        }) as string;

        const id = parseInt(chainId, 16);
        setAddress(accounts[0]);
        setChain(id === ARBITRUM.id ? ARBITRUM : { id, name: `Chain ${id}` });
        localStorage.setItem("cryptoSiWallet", JSON.stringify({ address: accounts[0] }));
      }

      if (type === "walletconnect") {
        // TODO: Full WalletConnect v2 integration
        // For now, guide user to MetaMask
        alert("WalletConnect coming soon. Please use MetaMask for now.");
      }
    } catch (err) {
      console.error("Wallet connection failed:", err);
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    setChain(null);
    localStorage.removeItem("cryptoSiWallet");
  }, []);

  const switchToArbitrum = useCallback(async () => {
    if (!window.ethereum) return;
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ARBITRUM_HEX }],
      });
    } catch (err: unknown) {
      const e = err as { code?: number };
      if (e.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: ARBITRUM_HEX,
            chainName: "Arbitrum One",
            rpcUrls: ["https://arb1.arbitrum.io/rpc"],
            blockExplorerUrls: ["https://arbiscan.io"],
            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
          }],
        });
      } else {
        throw err;
      }
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{
        address,
        chain,
        isConnecting,
        isConnected: !!address,
        connect,
        disconnect,
        switchToArbitrum,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
