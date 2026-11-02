import React from 'react';
import { projectItems } from '../../data/mockData';
import { Sparkles, Star, GitFork, ExternalLink, FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Açık Kaynak & İnovasyon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Topluluğumuz Tarafından Geliştirilen{' '}
            <span className="text-[#CE0E2D]">Projeler</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            HSD Atatürk Üniversitesi bünyesindeki geliştirici takımlarının ürettiği, HMS Core,
            ModelArts ve Huawei Cloud servislerini kullanan açık kaynak projelerimiz.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#CE0E2D] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                    <FolderGit2 className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-slate-800 transition-colors">
                      <GitFork className="w-4 h-4 text-slate-400" />
                      {project.forks}
                    </span>
                  </div>
                </div>

                <div className="mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#CE0E2D] transition-colors mt-0.5">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#CE0E2D] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub'da İncele</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-red-50 flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
