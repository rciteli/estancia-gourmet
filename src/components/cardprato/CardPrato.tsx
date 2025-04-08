import Link from 'next/link';
import { Prato } from '@/types/types';

export default function CardPrato({ prato }: { prato: Prato }) {
  return (
    <Link 
      href={`/pratos/${prato.id}`}
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-black rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <img
            src={prato.imagem}
            alt={prato.nome}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-accent text-text px-3 py-1 rounded-full text-sm">
            {prato.categoria}
          </span>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-dark mb-2">{prato.nome}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{prato.descricao}</p>
          <p className="text-primary font-bold text-lg">R$ {prato.preco.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}