// app/chefs/page.tsx
import ChefCard from '../../components/ChefCard/ChefCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const chefs = [
    {
        nome: "Chef Pablo Picanhé",
        descricao: `O engenheiro do sabor, transforma sua cozinha em um laboratório sensorial. Especialista em ciência dos alimentos, ele não apenas cozinha — ele reinventa a gastronomia.\n\nSeu prato assinatura, Pulmão de Mar, é uma imersão nos sabores do oceano: espuma de ostra, névoa de algas e uma joia de manga-pimenta que surpreende a cada colherada.`,
        imagem: "/foto_carlao.png",
        layout: "left"
    },
    {
        nome: "Chef Henri D’Alvorada",
        descricao: `Domina a arte de unir tradição francesa e alma brasileira. Com elegância e afeto, cria pratos que contam histórias através de sabores.\n\nSeu destaque é o Magret ao Tucupi de Champagne — pato grelhado ao ponto, com redução amazônica e toque europeu, finalizado à mesa com névoa cítrica. Uma experiência que encanta os sentidos e celebra a fusão cultural.`,
        imagem: "/foto_rafa.png",
        layout: "right"
    },
    {
        nome: "Chef Mascarone",
        descricao: `Transforma o ato de comer em um espetáculo. Inspirado no teatro italiano, ele une elegância, mistério e criatividade em pratos que surpreendem todos os sentidos.\n\nSua assinatura, o Risoto Nero di Carnevale, traz tinta de lula, brie defumado e vinho do Porto sob uma máscara crocante de parmesão. Um prato que revela sabores e segredos — como um verdadeiro ato final à mesa.`,
        imagem: "/foto_arthur.png",
        layout: "left"
    }
];

export default function ChefsPage() {
    return (
        <div className="min-h-screen bg-gray-50 lohit">
            <Header />
            <main className="container mx-auto px-4 py-12">
                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-emerald-700 mb-4">Nossos Chefs</h1>
                    <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                        Conheça os talentos que transformam ingredientes em experiências memoráveis
                    </p>
                </div>

                {/* Seção dos Chefs */}
                <div className="space-y-20">
                    {chefs.map((chef, index) => (
                        <ChefCard
                            key={index}
                            nome={chef.nome}
                            descricao={chef.descricao}
                            imagem={chef.imagem}
                            layout={chef.layout as 'left' | 'right'}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}