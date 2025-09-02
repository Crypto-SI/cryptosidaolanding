import Image from 'next/image';

interface DaoLogoProps {
    className?: string;
}

export function DaoLogo({ className }: DaoLogoProps) {
  return (
    <Image
      src="/images/crddicon.png"
      alt="CryptoSI DAO Logo"
      width={48}
      height={48}
      className={className}
    />
  );
}
