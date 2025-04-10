// app/pratos/[categoria]/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Prato } from '@/types/types';

export default function DetalhePrato() {
  const params = useParams<{ categoria: string; id: string }>();
  const [prato, setPrato] = useState<Prato | null>(null);

  useEffect(() => {
    if (!params?.categoria || !params?.id) return;

    fetch('/data/pratos.json')
      .then(res => res.json())
      .then((data: Prato[]) => {
        const found = data.find(p => 
          p.id === Number(params.id) && p.categoria === params.categoria
        );
        setPrato(found || null);
      });
  }, [params]);

  if (!prato) return <div className="container mx-auto px-4 py-8">Carregando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img 
          src={prato.imagem}
          alt={prato.nome}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{prato.nome}</h1>
          <p className="text-gray-600 mb-6">{prato.descricao}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-emerald-700 mb-2">Ingredientes</h2>
            <ul className="list-disc pl-6">
              {prato.ingredientes.map((ingrediente, index) => (
                <li key={index} className="text-gray-600">{ingrediente}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-emerald-700 mb-2">Modo de Preparo</h2>
            <p className="text-gray-600">{prato.preparo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}