'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface BackButtonProps {
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
}

export default function BackButton({
  children = 'Voltar',
  className = 'flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors',
  iconClassName = 'h-6 w-6',
  ariaLabel = 'Voltar para página anterior'
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={iconClassName} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      {children}
    </button>
  );
}