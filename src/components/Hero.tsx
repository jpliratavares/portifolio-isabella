import { Share2, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import bellaImage from '../bella.png';

export default function Hero() {
  return (
    <section id="inicio" className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 leading-tight">
              Isabella Karina
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-700 leading-tight mt-2">
              Lira Nogueira
            </h3>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-md">
            Criando experiências memoráveis com design sustentável.
          </p>

          <button className="bg-[#8a9a7e] hover:bg-[#7a8a6e] text-white px-8 py-4 rounded flex items-center gap-3 transition-colors group">
            Ver Portfólio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-6 pt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Behance">
              <Share2 className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_35%_25%,#d9e0d2_0%,#f2ede3_45%,transparent_75%)] blur-2xl opacity-80" />

          <div className="aspect-[3/4] p-2 bg-gradient-to-br from-[#e8e2d8] via-[#f3eee5] to-[#dfd8cc] rounded-[2rem] shadow-[0_20px_40px_rgba(90,80,60,0.18)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#f5f2ea]">
              <img
                src={bellaImage}
                alt="Isabella Karina Lira Nogueira"
                className="w-full h-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5f2ea] via-[#f5f2ea]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
