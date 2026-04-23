"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  textClassName?: string;
  showIcon?: boolean;
  iconSize?: number;
}

export default function BrandLogo({ 
  className = "flex items-center gap-4", 
  textClassName = "text-xl font-serif tracking-widest text-white", 
  showIcon = true,
  iconSize = 44
}: BrandLogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link href="/" className={className} onClick={handleClick}>
      {showIcon && (
        <Image
          src="/logo.png"
          alt="logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      )}
      <div className={textClassName}>
        BLINDS DEPOT
      </div>
    </Link>
  );
}
