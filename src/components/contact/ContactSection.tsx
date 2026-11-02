import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    interest: 'Cloud',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate secure network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        department: '',
        interest: 'Cloud',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bize Ulaşın</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Topluluğumuza Katılın & <span className="text-[#CE0E2D]">İletişime Geçin</span>
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Etkinliklerimiz, çalışma gruplarımız veya üniversite içi iş birlikleri hakkında
                sorularınız mı var? Ekibimizle hemen irtibata geçin.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Yerleşke & Laboratuvar</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Atatürk Üniversitesi Kampüsü, Mühendislik Fakültesi & ATA Teknokent, Yakutiye / Erzurum
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Resmi E-Posta</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    hsd@atauni.edu.tr / studentdevelopers@huawei.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Topluluk Kanalları</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Discord & Telegram duyuru kanallarımızla 7/24 iletişimdeyiz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Join / Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/40 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Tebrikler! Başvurunuz Alındı
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  HSD Atatürk Üniversitesi topluluğumuza gösterdiğin ilgi için teşekkür ederiz.
                  Ekibimiz en kısa sürede seninle e-posta üzerinden iletişime geçecektir.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#CE0E2D] transition-colors cursor-pointer"
                  >
                    Yeni Başvuru Yap
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Aramıza Katıl & Bilgi Al
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Bilgilerini doldur, çalışma gruplarımıza ve atölyelerimize öncelikli erişim sağla.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-Posta Adresi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ad.soyad@ogr.atauni.edu.tr"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Bölüm / Fakülte *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Bilgisayar Mühendisliği 2. Sınıf"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      İlgilendiğin Ana Alan *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-slate-50/50"
                    >
                      <option value="Cloud">Huawei Cloud & DevOps</option>
                      <option value="AI">Yapay Zeka & ModelArts</option>
                      <option value="HarmonyOS">HarmonyOS & Mobil (ArkTS)</option>
                      <option value="Web">Modern Web Geliştirme</option>
                      <option value="Hackathon">Hackathon & Yarışmalar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mesajın veya Beklentin (Opsiyonel)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Bize kendinden, projelerinden veya öğrenmek istediğin konulardan bahset..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#CE0E2D] hover:bg-[#b00c26] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-md shadow-red-600/30 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/40 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Başvuruyu Gönder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
