import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';


export default function Header() {
    return (
        <header className="relative h-96 shadow-md">
            {/* Overlay escuro para melhor contraste */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg_header.png"
                    alt="Background Estância Gourmet"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0"></div>
            </div>

            <div className="container relative mx-auto px-4 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="w-48 md:w-56">
                        <Image
                            src="/logo_estancia.png"
                            alt="Estância Gourmet"
                            width={160}
                            height={160}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <Navbar />
            </div>
        </header>
    );
}