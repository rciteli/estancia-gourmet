export default function MenuCategorias() {
    const categorias = ["Entradas", "Pratos Principais", "Sobremesas"];
    return (
      <nav className="bg-background p-4">
        {categorias.map((categoria) => (
          <a
            key={categoria}
            href={`/categorias/${categoria.toLowerCase()}`}
            className="text-secondary hover:text-primary mx-2"
          >
            {categoria}
          </a>
        ))}
      </nav>
    );
  }