import { Prato } from '@/types/types';

type Props = {
  onSelectCategoria: (categoria: string) => void;
  pratos?: Prato[];
};

export default function MenuCategorias({ onSelectCategoria, pratos = [] }: Props) {
  const categoriasUnicas = Array.from(
    new Set(pratos.map((prato) => prato.categoria))
  );

  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => onSelectCategoria('')}
          className="px-4 py-2 rounded-full bg-accent text-text font-semibold"
        >
          Todos
        </button>
        
        {categoriasUnicas.map((categoria) => (
          <button
            key={categoria}
            onClick={() => onSelectCategoria(categoria)}
            className="px-4 py-2 rounded-full bg-background text-secondary hover:bg-accent hover:text-text transition-colors"
          >
            {categoria}
          </button>
        ))}
      </div>
    </nav>
  );
}