// app/pratos/page.tsx
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

export default function PratosPage() {
    const categoriasPratos = [
        { title: 'Entradas', image: '/imagem_entrada.png', href: '/pratos/entradas' },
        { title: 'Principais', image: '/imagem_principal.png', href: '/pratos/principais' },
        { title: 'Sobremesas', image: '/imagem_sobremesa.png', href: '/pratos/sobremesas' },
    ];

    const categoriasBebidas = [
        { title: 'Vinhos', image: '/imagem_vinhos.png', href: '/pratos/vinhos' },
        { title: 'Refrigerantes', image: 'imagem_refris.png', href: '/pratos/refrigerantes' },
        { title: 'Sucos', image: 'imagem_sucos.png', href: '/pratos/sucos' },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* Seção de Pratos */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-4xl font-bold text-emerald-700 tilt">Categorias de Pratos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categoriasPratos.map((categoria) => (
              <CategoryCard
                key={categoria.title}
                title={categoria.title}
                image={categoria.image}
                href={categoria.href}
              />
            ))}
          </div>
        </section>
  
        {/* Seção de Bebidas */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-4xl font-bold text-emerald-700 tilt">Categorias de Bebidas</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categoriasBebidas.map((categoria) => (
              <CategoryCard
                key={categoria.title}
                title={categoria.title}
                image={categoria.image}
                href={categoria.href}
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
}