import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Interface completa com todas as propriedades
interface Prato {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  ingredientes: string[];
}

export default function DetalhePrato() {
  const params = useParams();
  const [prato, setPrato] = useState<Prato | null>(null);

  useEffect(() => {
    // Verifica se params existe antes de acessar .id
    if (!params?.id) return;

    fetch('/data/pratos.json')
      .then((res) => res.json())
      .then((data: Prato[]) => {
        const found = data.find((p) => p.id === Number(params.id));
        setPrato(found || null);
      });
  }, [params?.id]); // Adicionei optional chaining

  if (!prato) return <div className="text-center p-8">Carregando...</div>;

  return (
    <div className="container mx-auto p-4 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">{prato.nome}</h1>
        <img 
          src={prato.imagem} 
          alt={prato.nome} 
          className="rounded-lg mb-6 w-full h-64 object-cover"
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Ingredientes</h2>
          <ul className="list-disc pl-6 mb-6">
            {prato.ingredientes.map((ingrediente, index) => (
              <li key={index} className="text-dark">{ingrediente}</li>
            ))}
          </ul>
          
          <div className="mt-4">
            <p className="text-lg text-secondary">Categoria: {prato.categoria}</p>
            <p className="text-xl font-bold text-primary mt-2">
              Preço: R$ {prato.preco.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}