// app/pratos/[categoria]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CardPrato from '@/components/CardPrato/CardPrato';
import { Prato } from '@/types/types';

export default function ListaPratos() {
  const params = useParams<{ categoria: string }>();
  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    if (!params?.categoria) return;

    fetch('/data/pratos.json')
      .then(res => res.json())
      .then((data: Prato[]) => {
        const filtered = data.filter(prato => 
          prato.categoria === params.categoria
        );
        setPratos(filtered);
      });
  }, [params?.categoria]);

  if (!params?.categoria) return <div>Carregando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-8">
        {params.categoria}
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pratos.map(prato => (
          <CardPrato key={prato.id} prato={prato} />
        ))}
      </div>
    </div>
  );
}