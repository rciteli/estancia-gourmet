// components/UnitsSection.tsx
import Image from 'next/image';

export default function UnitsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Logo */}
          <div className="md:w-1/4 flex justify-center">
            <Image
              src="/logo_estancia.png"
              alt="Estância Gourmet"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Divisória */}
          <div className="h-px md:h-24 md:w-px bg-gray-200 md:mx-8"></div>

          {/* Unidades */}
          <div className="md:w-1/3 text-center md:text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">UNIDADES</h2>
            <div className="text-gray-600">
              <p>São Paulo</p>
              <p>Alameda Iraé, 398, Moema</p>
              <p>Alameda Iraé, 388, Moema</p>
              <p className="mt-4">(11) 2893–4963 – Telefone e WhatsApp</p>
            </div>
          </div>

          {/* Divisória */}
          <div className="h-px md:h-24 md:w-px bg-gray-200 md:mx-8"></div>

          {/* Membros */}
          <div className="md:w-1/3 text-center md:text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">MEMBROS</h2>
            <div className="text-gray-600 space-y-2">
              <p>Carlos Clementino – RM561187</p>
              <p>Matteus Viegas – RM561090</p>
              <p>Rafael Nonato – RM560631</p>
              <p>Sulamita Viegas – RM561089</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}