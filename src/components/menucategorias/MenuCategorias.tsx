// components/menucategorias/MenuCategorias.tsx
import { Prato } from '@/types/types';

interface MenuCategoriasProps {
  onSelectCategoria: (categoria: string) => void;
  pratos: Prato[];
}

export default function MenuCategorias({ 
  onSelectCategoria,
  pratos 
}: MenuCategoriasProps) {
  const categoriasUnicas = Array.from(
    new Set(pratos.map(prato => prato.categoria))
  );

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex flex-wrap gap-4 justify-center">
        {categoriasUnicas.map((categoria) => (
          <button
            key={categoria}
            onClick={() => onSelectCategoria(categoria)}
            className="text-text hover:bg-accent px-4 py-2 rounded-full transition-colors"
          >
            {categoria}
          </button>
        ))}
        <button
          onClick={() => onSelectCategoria('')}
          className="text-text hover:bg-accent px-4 py-2 rounded-full transition-colors"
        >
          Todos
        </button>
      </div>
    </nav>
  );
}