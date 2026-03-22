export default function Header() {
  return (
    <header className="bg-[#f5f3f0] py-6 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif text-gray-800">Isabella Karina</h1>
          <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase">Ecodesign & Webdesign</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors">Início</a>
          <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition-colors">Sobre</a>
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">Portfólio</a>
          <a href="#contato" className="text-gray-700 hover:text-gray-900 transition-colors">Contato</a>
        </nav>

        <button className="hidden md:block bg-[#d4cec4] hover:bg-[#c4beb4] text-gray-800 px-6 py-3 rounded transition-colors">
          Orçamento
        </button>

        <button className="md:hidden text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
