// components/Navbar.tsx
import Link from 'next/link';
import "@/app/globals.css"; 

export default function Navbar() {
  return (
    <nav className="hidden md:flex gap-8 lohit">
      <Link href="/" className="text-white hover:text-amber-300 transition-colors">
        HOME
      </Link>
      <Link href="/chefs" className="text-white hover:text-amber-300 transition-colors">
        CHEFS
      </Link>
      <Link href="/pratos" className="text-white hover:text-amber-300 transition-colors">
        PRATOS
      </Link>
    </nav>
  );
}