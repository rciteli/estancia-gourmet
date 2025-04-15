// components/SpecialEventsSection.tsx
import Image from 'next/image';

export default function SpecialEventsSection() {
  return (
    <section className="relative min-h-screen bg-gray-900">
      {/* Imagem de fundo principal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-special.png"
          alt="Fundo decorativo"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Container do conteúdo */}
      <div className="relative z-10 h-screen flex flex-col justify-between">
        {/* Eventos de Casamento - Topo */}
        <div className="w-full h-[100%] flex flex-col md:flex-row-reverse items-center">
          {/* Imagem */}
          <div className="w-full md:w-1/2 h-full relative">
            <Image
              src="/pratos.png"
              alt="Eventos de casamento"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
          
          {/* Texto com overlay */}
          <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center relative">
            <div>
              <h2 className="text-4xl font-bold text-emerald-400 mb-6 tilt">
                EVENTOS DE CASAMENTO
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed walter">
                Celebre o amor em grande estilo no Estância Gourmet! Nosso espaço aconchegante e 
                nossa gastronomia requintada garantem o cuidado perfeito para casamentos inesquecíveis. 
                Do buffet personalizado à decoração cuidadosa, cada detalhe é pensado para transformar 
                seu grande dia em uma experiência única.
              </p>
            </div>
          </div>
        </div>

        {/* Carta de Vinhos - Base */}
        <div className="w-full h-[100%] flex flex-col md:flex-row items-center">
          {/* Imagem */}
          <div className="w-full md:w-1/2 h-full relative">
            <Image
              src="/vinhos.png"
              alt="Carta de vinhos"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
          
          {/* Texto com overlay */}
          <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center relative">
            <div>
              <h2 className="text-4xl font-bold text-emerald-400 mb-6 tilt">
                CARTA DE VINHOS
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed walter">
                Nossa carta conta com uma seleção premium de vinhos, cuidadosamente assinada pelo 
                nosso sommelier. Contamos com os melhores vinhos nacionais e internacionais que 
                harmonizam perfeitamente com nossas criações gastronômicas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}