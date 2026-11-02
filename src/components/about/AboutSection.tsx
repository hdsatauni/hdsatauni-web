import React from 'react';
import { Target, Users2, ShieldCheck, Sparkles, Code2, Globe2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Users2 className="w-5 h-5 text-red-600" />,
      title: 'Akran Öğrenimi & Atölyeler',
      desc: 'Öğrencilerin birbirinden öğrendiği, haftalık uygulamalı kodlama oturumları ve laboratuvar çalışmaları.',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-600" />,
      title: 'Huawei Küresel Ekosistemi',
      desc: 'Doğrudan Huawei Ar-Ge mühendisleri ve çözüm mimarlarından mentorluk ve teknik eğitim desteği.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      title: 'Açık Kaynak & Proje Üretimi',
      desc: 'Sadece teorik bilgi değil; GitHub üzerinde yaşayan, kampüsümüze ve dünyaya fayda sağlayan açık kaynak projeler.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: 'Kariyer & Sertifikasyon',
      desc: 'HCIA, HCIP gibi global geçerliliğe sahip Huawei sertifika kuponları ve Huawei staj/kariyer fırsatları.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biz Kimiz?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Geleceğin Teknolojilerini Atatürk Üniversitesi’nde{' '}
            <span className="text-[#CE0E2D]">Birlikte Üretiyoruz</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Huawei Student Developers (HSD) Atatürk Üniversitesi, teknolojiye tutkulu öğrencileri
            dünya standartlarında mühendislik pratikleri, Huawei Cloud servisleri, HarmonyOS ve
            yapay zeka araçlarıyla buluşturan bağımsız bir üniversite geliştirici topluluğudur.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Interactive Feature Story Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background ambient pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-red-400">
                <Target className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  Misyonumuz & Vizyonumuz
                </span>
                <h3 className="text-2xl font-bold mt-2 leading-snug">
                  Doğu Anadolu’dan Küresel Teknoloji Sahnesine
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Atatürk Üniversitesi kampüsünde başlayan yolculuğumuz, Doğu Anadolu Bölgesi’nin
                en dinamik yazılım ve donanım geliştirici üssü olmayı amaçlıyor. Huawei’nin yenilikçi
                ekosistemini kampüsümüze taşıyarak, öğrencilerin mezun olmadan önce gerçek dünya
                deneyimi kazanmalarını sağlıyoruz.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-slate-700/60">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-red-500 border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-white">
                    AI
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-white">
                    CL
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-white">
                    OS
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">1,850+ Öğrenci & Geliştirici</h4>
                  <p className="text-xs text-slate-400">Atatürk Üniversitesi & Çevre İller</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#CE0E2D] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Detayları Keşfet</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
