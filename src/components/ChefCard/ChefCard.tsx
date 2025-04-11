// components/ChefCard.tsx
import Image from 'next/image';

interface ChefCardProps {
  nome: string;
  descricao: string;
  imagem: string;
  layout: 'left' | 'right';
}

export default function ChefCard({ nome, descricao, imagem, layout }: ChefCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${layout === 'right' ? 'md:flex-row-reverse' : ''} gap-8 mb-16 items-center`}>
      {/* Contêiner da Imagem */}
      <div className="md:w-1/2 relative h-170 w-full">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      
      {/* Contêiner do Texto */}
      <div className="md:w-1/2 flex flex-col justify-center p-4">
        <h3 className="text-3xl font-bold text-emerald-700 mb-4">{nome}</h3>
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {descricao}
        </p>
      </div>
    </div>
  );
}