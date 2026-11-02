import React, { useState, useEffect } from 'react';
import { HuaweiLogo } from '../common/HuaweiLogo';
import { navItems } from '../../data/mockData';
import { LogIn, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'tracks', 'events', 'projects', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group">
            <HuaweiLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 bg-[#CE0E2D] hover:bg-[#b00c26] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-red-600/25 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/35 hover:-translate-y-0.5 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Giriş Yap</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenJoinModal}
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#CE0E2D] text-white px-3.5 py-1.5 rounded-full font-bold text-xs shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Katıl</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#CE0E2D] text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-red-600/20"
            >
              <LogIn className="w-4 h-4" />
              <span>Topluluğa Katıl / Giriş Yap</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
