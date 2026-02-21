import { Share2, Instagram, Linkedin, ArrowRight } from 'lucide-react';

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

        <div className="relative">
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
