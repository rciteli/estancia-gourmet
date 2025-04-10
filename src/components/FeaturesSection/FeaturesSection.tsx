// components/FeaturesSection.tsx
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="bg-emerald-500 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Card Experiência Completa */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0 rounded-4xl shadow-4xl overflow-hidden">
            <Image
              src="/imagem_prato.png"
              alt="Experiência completa"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
            />
            
            {/* Camada de texto */}
            <div className="absolute bottom-0 w-full h-[40%] bg-gray-900/80 backdrop-contrast-sm">
              <div className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-emerald-400 text-center mb-4">
                  EXPERIÊNCIA COMPLETA
                </h3>
                <p className="text-gray-200 text-justify text-base leading-relaxed px-4">
                  Buscamos sempre o melhor serviço possível com matéria prima de primeira e muito 
                  carinho, dando aos nossos clientes uma experiência única, do início ao fim!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Pratos Únicos */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0 rounded-4xl shadow-4xl overflow-hidden">
            <Image
              src="/imagem_prato2.png"
              alt="Pratos únicos"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
            />
            
            {/* Camada de texto */}
            <div className="absolute bottom-0 w-full h-[40%] bg-gray-900/80 backdrop-contrast-sm">
              <div className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-emerald-400 text-center mb-4">
                  PRATOS ÚNICOS
                </h3>
                <p className="text-gray-200 text-justify text-base leading-relaxed px-4">
                  Contamos com diversos pratos de autoria própria, com a nossa assinatura e qualidade, 
                  mas sem deixar pra trás os clássicos que já ganharam o gosto do público!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}