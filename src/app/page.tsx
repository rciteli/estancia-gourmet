'use client';

import { useEffect, useState } from 'react';
import CardPrato from '@/components/cardprato/CardPrato';
import MenuCategorias from '@/components/menucategorias/MenuCategorias';
import Rodape from '@/components/footer/Footer';
import { Prato } from '@/types/types';

export default function Home() {
    const [pratos, setPratos] = useState<Prato[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');

    useEffect(() => {
        fetch('/data/pratos.json')
            .then((res) => res.json())
            .then((data: Prato[]) => setPratos(data));
    }, []);

    const pratosFiltrados = categoriaSelecionada
        ? pratos.filter((prato) => prato.categoria === categoriaSelecionada)
        : pratos;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <MenuCategorias
                onSelectCategoria={setCategoriaSelecionada}
                pratos={pratos} // Se estiver usando a versão dinâmica
            />

            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-4xl font-bold text-primary mb-8 text-center">
                    Cardápio do Restaurante
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pratosFiltrados.map((prato) => (
                        <CardPrato key={prato.id} prato={prato} />
                    ))}
                </div>
            </main>

            <Rodape />
        </div>
    );
}