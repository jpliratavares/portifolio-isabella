const milestones = [
  {
    period: '2019 - 2020',
    title: 'Formacao em Design',
    description:
      'Base criativa em identidade visual, teoria das cores e composicao aplicada a projetos autorais e comerciais.'
  },
  {
    period: '2021 - 2022',
    title: 'Foco em Ecodesign',
    description:
      'Atuacao em projetos com materiais sustentaveis, embalagens conscientes e estrategias de marca com menor impacto ambiental.'
  },
  {
    period: '2023 - 2024',
    title: 'Expansao para Web Design',
    description:
      'Criacao de interfaces responsivas, prototipos e experiencias digitais que unem estetica, clareza e conversao.'
  },
  {
    period: '2025 - Atual',
    title: 'Projetos Integrados',
    description:
      'Direcao criativa para marcas que buscam presenca digital consistente, narrativa visual forte e posicionamento sustentavel.'
  }
];

export default function History() {
  return (
    <section id="sobre" className="px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#8a9a7e] mb-3">Sobre</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-5">Historico Profissional</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Uma linha do tempo com os principais passos da minha jornada em design, ecodesign e
            experiencias digitais.
          </p>
        </div>

        <div className="relative pl-6 md:pl-10 space-y-8">
          <div className="absolute left-2 md:left-4 top-1 bottom-1 w-px bg-[#d8d2c8]" />

          {milestones.map((item) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-[#e4ded3] bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_10px_28px_rgba(70,60,45,0.08)]"
            >
              <span className="absolute -left-[1.7rem] md:-left-[2.25rem] top-8 w-3.5 h-3.5 rounded-full bg-[#8a9a7e] ring-4 ring-[#f7f4ef]" />

              <p className="text-sm font-medium tracking-wide text-[#7a8a6e] mb-2">{item.period}</p>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}