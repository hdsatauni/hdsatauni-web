import React, { useState } from 'react';
import { faqItems } from '../../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Sıkça Sorulan <span className="text-[#CE0E2D]">Sorular</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            HSD Atatürk Üniversitesi hakkında aklınıza takılabilecek temel sorular ve yanıtları.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-slate-200/90 rounded-2xl bg-white transition-all duration-200 overflow-hidden shadow-2xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-red-50 text-red-600 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
