"use client";

import { useState } from "react";
import { useWallet, truncateAddress } from "@/lib/wallet";
import { Button } from "./ui/button";
import { Wallet, ChevronDown, LogOut, AlertTriangle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ConnectWalletButton() {
  const { address, chain, isConnecting, isConnected, connect, disconnect, switchToArbitrum } = useWallet();
  const [showModal, setShowModal] = useState(false);

  if (!isConnected) {
    return (
      <>
        <Button onClick={() => setShowModal(true)} disabled={isConnecting} className="gap-2">
          <Wallet className="h-4 w-4" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>

        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}>
            <div
              className="bg-card border rounded-xl p-6 w-full max-w-sm mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Connect Wallet</h3>

              <div className="space-y-3">
                <Button
                  className="w-full justify-start gap-3"
                  onClick={async () => {
                    try {
                      await connect("metamask");
                      setShowModal(false);
                    } catch {
                      alert("Failed to connect MetaMask. Is it installed?");
                    }
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9582 1L19.8241 10.7183L22.2665 4.99099L32.9582 1Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.66296 1L15.6875 10.809L13.3545 4.99098L2.66296 1Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.2295 23.5334L24.7346 28.872L32.2175 30.9323L34.3611 23.6501L28.2295 23.5334Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.27271 23.6501L3.40493 30.9323L10.8763 28.872L7.39301 23.5334L1.27271 23.6501Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.4706 14.5149L8.39502 17.6507L15.8013 17.9876L15.5521 9.94141L10.4706 14.5149Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.1505 14.5149L19.9956 9.85059L19.8241 17.9876L27.2304 17.6507L25.1505 14.5149Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8763 28.8721L15.3806 26.6953L11.4935 23.7012L10.8763 28.8721Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.2406 26.6953L24.7346 28.8721L24.1277 23.7012L20.2406 26.6953Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  MetaMask
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={async () => {
                    try {
                      await connect("walletconnect");
                      setShowModal(false);
                    } catch {
                      // handled in connect()
                    }
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.19105 4.89807C14.0955 -0.780923 23.6475 -0.780923 29.5519 4.89807L30.2624 5.58197C30.5576 5.86592 30.5576 6.32583 30.2624 6.60978L27.8303 8.94904C27.6827 9.09102 27.4439 9.09102 27.2963 8.94904L26.3185 8.00822C22.1997 4.04541 15.5433 4.04541 11.4245 8.00822L10.3763 9.01803C10.2287 9.16001 9.98986 9.16001 9.84226 9.01803L7.41015 6.67877C7.11493 6.39482 7.11493 5.93491 7.41015 5.65096L8.19105 4.89807ZM34.5783 9.71793L36.7421 11.8007C37.0373 12.0847 37.0373 12.5446 36.7421 12.8285L26.9698 22.2307C26.6746 22.5147 26.2122 22.5147 25.917 22.2307C25.917 22.2307 25.917 22.2307 25.917 22.2307L19.0002 15.5751C18.9264 15.5041 18.807 15.5041 18.7332 15.5751C18.7332 15.5751 18.7332 15.5751 18.7332 15.5751L11.8165 22.2307C11.5213 22.5147 11.0589 22.5147 10.7637 22.2307C10.7637 22.2307 10.7637 22.2307 10.7637 22.2307L0.990753 12.8285C0.695528 12.5446 0.695528 12.0847 0.990753 11.8007L3.15456 9.71793C3.44979 9.43398 3.91217 9.43398 4.20739 9.71793L11.1242 16.3735C11.198 16.4445 11.3174 16.4445 11.3912 16.3735C11.3912 16.3735 11.3912 16.3735 11.3912 16.3735L18.3079 9.71793C18.6031 9.43398 19.0655 9.43398 19.3607 9.71793C19.3607 9.71793 19.3607 9.71793 19.3607 9.71793L26.2775 16.3735C26.3513 16.4445 26.4707 16.4445 26.5445 16.3735L33.4612 9.71793C33.7564 9.43398 34.2188 9.43398 34.514 9.71793L34.5783 9.71793Z" fill="#3B99FC"/>
                  </svg>
                  WalletConnect
                </Button>
              </div>

              <button
                className="mt-4 text-sm text-muted-foreground hover:text-foreground w-full text-center"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  const isWrongNetwork = chain && chain.id !== 42161;

  return (
    <div className="flex items-center gap-2">
      {isWrongNetwork && (
        <Button variant="destructive" size="sm" onClick={switchToArbitrum} className="gap-1 text-xs">
          <AlertTriangle className="w-3 h-3" />
          Switch to Arbitrum
        </Button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 text-sm">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">{chain?.name || "Unknown"}</span>
            <span>{truncateAddress(address!)}</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            Connected to {chain?.name || "Unknown"}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(address!)}
          >
            <Wallet className="h-4 w-4" />
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 cursor-pointer text-destructive" onClick={disconnect}>
            <LogOut className="h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
