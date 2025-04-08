interface Prato {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    destaque?: boolean;
  }
  
  export default function CardPrato({ prato }: { prato: Prato }) {
    return (
      <div className="p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {prato.destaque && <span className="bg-accent text-text px-2 py-1 rounded-full text-sm">Destaque</span>}
        <h3 className="text-xl font-bold mt-2">{prato.nome}</h3>
        <p className="text-secondary">{prato.categoria}</p>
        <p className="text-primary font-semibold">R$ {prato.preco.toFixed(2)}</p>
      </div>
    );
  }