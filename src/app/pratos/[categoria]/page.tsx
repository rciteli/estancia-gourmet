'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Prato } from '@/types/types';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackButton from '@/components/BackButton/BackButton';

export default function ListaEntradas() {
  const params = useParams<{ categoria: string }>();
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.categoria) return;

    fetch('/data/pratos.json')
      .then(res => res.json())
      .then((data: Prato[]) => {
        const filtrados = data.filter(prato => 
          prato.categoria.toLowerCase() === params.categoria.toLowerCase()
        );
        setPratos(filtrados);
        setLoading(false);
      });
  }, [params?.categoria]);

  if (!params?.categoria || loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="animate-pulse">
          Carregando...
        </div>
      </div>
    );
  }

  const categoriaFormatada = params.categoria.charAt(0).toUpperCase() + 
                           params.categoria.slice(1).toLowerCase();

  return (
    <div>
      <Header />
    <div className="container mx-auto p-4 manjari text-center">
    <BackButton />
      <h1 className="text-3xl font-bold text-emerald-700 mb-8">
        {categoriaFormatada}
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pratos.map(prato => (
          <Link 
            key={prato.id} 
            href={`/pratos/${params.categoria}/${prato.id}`}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={prato.imagem} 
              alt={prato.nome} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{prato.nome}</h2>
              <p className="text-gray-600 mt-2">{prato.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}