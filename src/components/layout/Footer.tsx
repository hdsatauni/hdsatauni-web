import React from 'react';
import { HuaweiLogo } from '../common/HuaweiLogo';
import { SocialIcons } from '../common/SocialIcons';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-4">
            <div className="brightness-125">
              <HuaweiLogo />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Atatürk Üniversitesi genelinde teknoloji ve inovasyon eğitimleri. Cloud, Yapay Zeka,
              HarmonyOS ve DevOps ile geleceğin yeteneklerini yetiştiriyoruz.
            </p>

            <div className="pt-2">
              <SocialIcons />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">
                  Odak Alanları & Çalışma Grupları
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Etkinlik Takvimi & Bootcamp
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Açık Kaynak Projeler
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Huawei Developer Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Huawei Ekosistemi
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://developer.huawei.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>HUAWEI Developers Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.huaweicloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Huawei Cloud Global</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://developer.huawei.com/consumer/en/hms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>HMS Core & Kits</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.harmonyos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>HarmonyOS NEXT Ekosistemi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            © {new Date().getFullYear()} HSD Atatürk Üniversitesi. Tüm Hakları Saklıdır.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Atatürk Üniversitesi</span>
            <span>•</span>
            <span>Erzurum</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by HSD Core Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
