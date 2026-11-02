import React, { useState, useEffect } from 'react';
import type { EventItem } from '../../types';
import { X, LogIn, Sparkles, CheckCircle2, User, Mail, Lock, BookOpen } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent?: EventItem | null;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, selectedEvent }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const activeTab = selectedEvent ? 'register' : tab;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {activeTab === 'login' ? 'Giriş Başarılı!' : 'Kayıt Başarıyla Tamamlandı!'}
            </h3>
            <p className="text-xs text-slate-500">
              {selectedEvent
                ? `"${selectedEvent.title}" etkinliğine kaydınız yapıldı.`
                : 'HSD Atatürk Üniversitesi topluluğuna hoş geldiniz.'}
            </p>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 font-bold text-[11px] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HSD Atatürk Üniversitesi</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950">
                {selectedEvent ? 'Etkinliğe Kayıt Ol' : activeTab === 'login' ? 'Giriş Yap' : 'Aramıza Katıl'}
              </h3>
              {selectedEvent && (
                <p className="text-xs text-[#CE0E2D] font-bold mt-1 max-w-xs mx-auto truncate">
                  {selectedEvent.title}
                </p>
              )}
            </div>

            {/* Tabs */}
            {!selectedEvent && (
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl mb-6">
                <button
                  type="button"
                  onClick={() => setTab('login')}
                  className={`py-2 text-xs font-bold rounded-xl transition-all ${
                    tab === 'login'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Giriş Yap
                </button>
                <button
                  type="button"
                  onClick={() => setTab('register')}
                  className={`py-2 text-xs font-bold rounded-xl transition-all ${
                    tab === 'register'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Kayıt Ol
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ad Soyad
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  E-Posta Adresi
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="ornek@ogr.atauni.edu.tr"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {activeTab === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Bölüm / Fakülte
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Örn: Bilgisayar Mühendisliği"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'login' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Şifre
                    </label>
                    <a href="#" className="text-[11px] text-red-600 hover:underline font-semibold">
                      Şifremi Unuttum
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#CE0E2D] hover:bg-[#b00c26] text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md shadow-red-600/25 transition-all mt-2 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>İşleniyor...</span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>{activeTab === 'login' ? 'Giriş Yap' : 'Kayıt Ol & Devam Et'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
