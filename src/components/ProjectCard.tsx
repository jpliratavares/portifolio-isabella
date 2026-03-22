interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export default function ProjectCard({ title, subtitle, description, color }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className={`aspect-[4/3] bg-gradient-to-br ${color} rounded-lg mb-4 overflow-hidden relative`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
          <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-serif text-gray-800">
          {title} <span className="text-gray-500">— {subtitle}</span>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
