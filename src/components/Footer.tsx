import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#f5f3f0] px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Isabella Karina</h3>
            <p className="text-gray-600 leading-relaxed">
              Designer especializada em soluções sustentáveis e experiências digitais memoráveis.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">Sobre</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="text-gray-600 hover:text-gray-900 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>contato@isabellakarina.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+55 (83) 99823-1251</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>João Pessoa, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2026 Isabella Karina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
