import React from 'react';
import { trackItems } from '../../data/mockData';
import { Cloud, Cpu, Smartphone, Globe, Sparkles, ArrowRight } from 'lucide-react';

interface TracksSectionProps {
  onSelectTrack?: (trackId: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({ onSelectTrack }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      default:
        return <Cloud className="w-6 h-6" />;
    }
  };

  return (
    <section id="tracks" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teknoloji & Çalışma Grupları</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Uzmanlaşabileceğin <span className="text-[#CE0E2D]">Odak Alanlarımız</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              İlgini çeken alanda eğitimlere katıl, çalışma gruplarına dahil ol ve doğrudan
              gerçek projeler geliştirerek sektör standartlarında portföy oluştur.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#CE0E2D] transition-colors"
            >
              <span>Etkinlik Takvimini İncele</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trackItems.map((track) => (
            <div
              key={track.id}
              onClick={() => onSelectTrack && onSelectTrack(track.id)}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform ${track.color}`}>
                    {getIcon(track.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    {track.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#CE0E2D] transition-colors">
                  {track.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {track.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-red-50 flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
