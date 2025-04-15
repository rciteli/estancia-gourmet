
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Prato } from '@/types/types';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function DetalhePrato() {
  const { categoria, id } = useParams<{ categoria: string; id: string }>();
  const [prato, setPrato] = useState<Prato | null>(null);

  useEffect(() => {
    if (!categoria || !id) return;

    fetch('/data/pratos.json')
      .then(res => res.json())
      .then((data: Prato[]) => {
        const found = data.find(
          p => p.id === Number(id) && p.categoria === categoria
        );
        setPrato(found || null);
      });
  }, [categoria, id]);

  if (!prato) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500">Carregando prato...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-10 px-4 manjari">
        <div className="max-w-3xl h-auto mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={prato.imagem}
            alt={prato.nome}
            loading="lazy"
            className="w-full h-64 object-cover"
          />

          <div className="p-6 sm:p-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{prato.nome}</h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {prato.descricao}
            </p>

            <div className="text-left">
              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-2 text-center">🍽 Ingredientes</h2>
                <ul className="list-inside space-y-2 text-gray-700">
                  {prato.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span></span>
                      <span>{ingrediente}</span>
                    </li>
                  ))}
                </ul>

              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-2 text-center">👨‍🍳 Modo de Preparo</h2>
                <p className="text-gray-700 leading-relaxed">{prato.preparo}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
