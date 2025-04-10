// components/WelcomeSection.tsx
export default function WelcomeSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">
          Seja bem vindo(a)
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seja bem vindo(a) ao Estância Gourmet, restaurante que traz o melhor da culinária contemporânea 
          em uma arquitetura aconchegante, que vai te surpreender.<br />
          Fique a vontade!
        </p>
      </div>
    </section>
  );
}