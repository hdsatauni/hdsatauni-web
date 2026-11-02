import React from 'react';
import { heroBadges } from '../../data/mockData';
import { SocialIcons } from '../common/SocialIcons';
import { EagleMascot } from './EagleMascot';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 z-10">
            {/* Tech Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200/90 text-slate-700 shadow-2xs"
                >
                  <span className={`w-2 h-2 rounded-full ${badge.color}`} />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                HSD Atatürk
                <span className="block text-[#CE0E2D] relative mt-1">
                  Üniversitesi
                  {/* Subtle red accent bar under the highlighted word (matches the reference screenshot) */}
                  <span className="block w-24 h-1.5 bg-[#CE0E2D] rounded-full mt-2" />
                </span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Atatürk Üniversitesi genelinde teknoloji ve inovasyon eğitimleri. Cloud,
              AI, DevOps ve daha fazlası. Geleceğin Huawei ekosistemi geliştiricilerini Doğu Anadolu’nun zirvesinde buluşturuyoruz.
            </p>

            {/* Social Media Row */}
            <div className="pt-1 space-y-2.5">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                En güncel haberler ve etkinlikler için sosyal medya hesaplarımızı takip edin:
              </p>
              <SocialIcons />
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              {/* Primary Red Button */}
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 bg-[#CE0E2D] hover:bg-[#b50c27] text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-red-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
                <span>Giriş Yap</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Navy Blue Button */}
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 bg-[#002C6C] hover:bg-[#002254] text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-blue-900/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-blue-200" />
                <span>Daha Fazla Bilgi</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cartoon Tech Eagle Mascot */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <EagleMascot />
          </div>
        </div>
      </div>
    </section>
  );
};
