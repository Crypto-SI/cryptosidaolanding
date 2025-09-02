import Image from 'next/image';

interface DaoLogoProps {
    className?: string;
}

export function DaoLogo({ className }: DaoLogoProps) {
  return (
    <Image
      src="/crddicon.png"
      alt="CryptoSI DAO Logo"
      width={24}
      height={24}
      className={className}
    />
  );
}
