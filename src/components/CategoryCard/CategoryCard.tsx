// components/CategoryCard.tsx
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative block h-96 w-full overflow-hidden rounded-4xl shadow-xl transition-transform duration-300 hover:scale-105">
      <div 
        className="h-full w-full bg-cover bg-center manjari"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
          <div className="flex h-full items-center justify-center">
            <h3 className="text-3xl font-bold text-white drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}