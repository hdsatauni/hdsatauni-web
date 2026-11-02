import React, { useState } from 'react';
import { upcomingEvents } from '../../data/mockData';
import type { EventItem } from '../../types';
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  User,
  Sparkles,
  Users,
} from 'lucide-react';

interface EventsSectionProps {
  onRegisterEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Cloud', 'AI', 'Mobile', 'Hackathon'];

  const filteredEvents =
    selectedCategory === 'Tümü'
      ? upcomingEvents
      : upcomingEvents.filter((ev) => ev.category === selectedCategory);

  return (
    <section id="events" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Etkinlik Takvimi & Bootcamp'ler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Gelecek <span className="text-[#CE0E2D]">Etkinlikler & Atölyeler</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Huawei Student Developers Atatürk Üniversitesi tarafından düzenlenen ücretsiz
              bootcamp, seminer ve hackathonlara katılın, yerinizi şimdiden ayırtın.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#CE0E2D] text-white shadow-md shadow-red-600/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => {
            const percentFilled = Math.round(
              ((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100
            );

            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Category badge & Location type */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {event.category}
                    </span>

                    {event.isOnline ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        <Video className="w-3.5 h-3.5" />
                        <span>Online Canlı</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Kampüs Yüz Yüze</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#CE0E2D] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  {/* Date & Time Info */}
                  <div className="mt-5 space-y-2 text-xs text-slate-600 bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="font-semibold text-slate-800">{event.date}</span>
                      <span className="text-slate-300">•</span>
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60">
                      <User className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="font-medium text-slate-900">{event.speaker}</span>
                      <span className="text-slate-400 text-[11px]">({event.speakerRole})</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Spots progress & Register button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      Doluluk: %{percentFilled}
                    </span>
                    <span className="font-bold text-red-600">
                      {event.spotsLeft} Boş Kontenjan
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-[#CE0E2D] h-full rounded-full transition-all duration-500"
                      style={{ width: `${percentFilled}%` }}
                    />
                  </div>

                  <button
                    onClick={() => onRegisterEvent(event)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#CE0E2D] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>Kayıt Ol & Yerini Ayır</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
