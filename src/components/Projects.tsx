import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Identidade Visual',
    subtitle: 'Delta Funnel',
    description: 'Criacao de logomarca e identidade visual alinhadas ao posicionamento estrategico da empresa de tecnologia e solucoes em IA.',
    color: 'from-[#e8e4df] to-[#d8d4cf]'
  },
  {
    title: 'Design de Interface',
    subtitle: 'Aplicacao Movel Academica',
    description: 'Desenvolvimento de interfaces no Figma para projeto universitario, com estrutura visual funcional e coerente para uso mobile.',
    color: 'from-[#8a9a7e] to-[#7a8a6e]'
  },
  {
    title: 'Branding Freelance',
    subtitle: 'Projetos de Identidade Visual',
    description: 'Desenvolvimento de conceitos visuais, sistemas de marca e materiais de comunicacao para diferentes clientes.',
    color: 'from-[#a8b5a0] to-[#98a590]'
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          Projetos Recentes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="text-gray-700 hover:text-gray-900 flex items-center gap-3 text-lg font-medium transition-colors group">
            Ver Portfólio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
