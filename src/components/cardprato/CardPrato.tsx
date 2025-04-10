import Link from 'next/link';

interface Prato {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

export default function CardPrato({ prato }: { prato: Prato }) {
  return (
    <Link 
      href={`/pratos/${prato.categoria}/${prato.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img 
          src={prato.imagem}
          alt={prato.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{prato.nome}</h3>
        <p className="text-gray-600">{prato.descricao}</p>
      </div>
    </Link>
  );
}