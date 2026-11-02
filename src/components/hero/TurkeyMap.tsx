import React, { useState, useEffect } from 'react';
import { mapPins } from '../../data/mockData';
import type { PinLocation } from '../../types';
import { MapPin, Users, BookOpen, Sparkles } from 'lucide-react';

interface TurkeyMapProps {
  onSelectCity?: (pin: PinLocation) => void;
}

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ onSelectCity }) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [activePin, setActivePin] = useState<PinLocation | null>(null);
  const [hoveredPin, setHoveredPin] = useState<PinLocation | null>(null);

  useEffect(() => {
    fetch('/turkiye.svg')
      .then((res) => res.text())
      .then((raw) => {
        // Extract the inner provinces group
        const match = raw.match(/<g id="turkiye">([\s\S]*?)<\/g>\s*<\/svg>/);
        if (match) {
          setSvgContent(match[1]);
        }
      })
      .catch((err) => {
        console.error('Harita yüklenemedi:', err);
      });
  }, []);

  // Erzurum is default active pin
  const mainHub = mapPins.find((p) => p.isMainHub) || mapPins[0];
  const displayedPin = hoveredPin || activePin || mainHub;

  return (
    <div className="relative w-full max-w-[700px] mx-auto select-none">
      {/* Ambient watermark background tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cloud icon */}
        <div className="absolute top-[8%] left-[45%] text-slate-300/40 animate-float">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>

        {/* Code icon */}
        <div className="absolute top-[38%] left-[2%] text-slate-300/40 animate-float" style={{ animationDelay: '1.5s' }}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        {/* Brain / AI network icon */}
        <div className="absolute bottom-[10%] left-[44%] text-slate-300/40 animate-float" style={{ animationDelay: '3s' }}>
          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2a4 4 0 0 0-4 4c0 .74.2 1.44.56 2.04A5 5 0 0 0 4 13a5 5 0 0 0 2.5 4.33A4 4 0 0 0 10 21h4a4 4 0 0 0 3.5-3.67A5 5 0 0 0 20 13a5 5 0 0 0-4.56-4.96A4 4 0 0 0 12 2Z" />
          </svg>
        </div>

        {/* Tree / Hierarchy icon */}
        <div className="absolute bottom-[18%] left-[24%] text-slate-300/40 animate-float" style={{ animationDelay: '2s' }}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="9" y="3" width="6" height="4" rx="1" />
            <rect x="3" y="17" width="6" height="4" rx="1" />
            <rect x="15" y="17" width="6" height="4" rx="1" />
            <path d="M12 7v5m0 0H6v5m6-5h6v5" />
          </svg>
        </div>

        {/* Chip / Hexagon */}
        <div className="absolute top-[5%] right-[10%] text-slate-300/40 animate-float" style={{ animationDelay: '4s' }}>
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
          </svg>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative">
        <svg
          viewBox="0 0 1007.478 527.323"
          className="w-full h-auto drop-shadow-sm filter transition-all duration-300"
        >
          <style>{`
            #turkiye-map-base path {
              fill: #ffffff;
              stroke: #cbd5e1;
              stroke-width: 0.9;
              transition: all 0.25s ease;
            }
            #turkiye-map-base path:hover {
              fill: #fee2e2;
              stroke: #f87171;
              cursor: pointer;
            }
            #turkiye-map-base #erzurum path {
              fill: #fef2f2 !important;
              stroke: #dc2626 !important;
              stroke-width: 1.6 !important;
            }
          `}</style>

          {/* Render base map paths */}
          <g
            id="turkiye-map-base"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />

          {/* Interactive Connection Lines radiating gently towards Erzurum (Main Hub) */}
          <g className="opacity-20 pointer-events-none">
            {mapPins
              .filter((pin) => !pin.isMainHub)
              .slice(0, 7)
              .map((pin) => (
                <line
                  key={`line-${pin.id}`}
                  x1={pin.x}
                  y1={pin.y}
                  x2={mainHub.x}
                  y2={mainHub.y}
                  stroke="#ef4444"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
              ))}
          </g>

          {/* Pins Layer */}
          <g id="turkey-pins">
            {mapPins.map((pin) => {
              const isMain = pin.isMainHub;
              const isHovered = (hoveredPin?.id === pin.id) || (activePin?.id === pin.id);

              return (
                <g
                  key={pin.id}
                  transform={`translate(${pin.x}, ${pin.y})`}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredPin(pin)}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => {
                    setActivePin(pin);
                    if (onSelectCity) onSelectCity(pin);
                  }}
                >
                  {/* Concentric animated pulse rings */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isMain ? 22 : 14}
                    className="animate-ping text-red-500/35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={isMain ? 2 : 1.2}
                    style={{ animationDuration: isMain ? '2s' : '3s' }}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={isMain ? 34 : 20}
                    className="text-red-500/20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />

                  {/* Pin Base Shadow */}
                  <ellipse cx="0" cy="5" rx="5" ry="2" fill="rgba(0,0,0,0.25)" />

                  {/* Teardrop Pin Shape */}
                  {isMain ? (
                    // Prominent Star/Hub Marker for Atatürk Üniversitesi
                    <g transform="translate(0, -10)">
                      <circle
                        cx="0"
                        cy="0"
                        r="12"
                        className="fill-red-600 stroke-white drop-shadow-md"
                        strokeWidth="2.5"
                      />
                      <circle cx="0" cy="0" r="4.5" fill="#ffffff" />
                      {/* Pulse beacon dot */}
                      <circle cx="0" cy="0" r="2" fill="#dc2626" />
                    </g>
                  ) : (
                    // Regular City Marker
                    <g transform="translate(0, -6)">
                      <circle
                        cx="0"
                        cy="0"
                        r={isHovered ? 8 : 6.5}
                        className={`${
                          isHovered ? 'fill-red-600' : 'fill-red-500'
                        } stroke-white drop-shadow-sm transition-transform duration-200`}
                        strokeWidth="1.8"
                      />
                      <circle cx="0" cy="0" r="2.2" fill="#ffffff" />
                    </g>
                  )}

                  {/* Main Hub label tag */}
                  {isMain && (
                    <g transform="translate(0, -26)" className="pointer-events-none">
                      <rect
                        x="-70"
                        y="-12"
                        width="140"
                        height="20"
                        rx="10"
                        className="fill-red-600 drop-shadow-md"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="9.5"
                        fontWeight="700"
                        fontFamily="sans-serif"
                      >
                        ★ ATATÜRK ÜNİVERSİTESİ
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {/* Floating Interactive Chapter Card */}
        {displayedPin && (
          <div className="mt-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-red-500/5 transition-all duration-300">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    displayedPin.isMainHub
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}
                >
                  {displayedPin.isMainHub ? (
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  ) : (
                    <MapPin className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {displayedPin.chapterName}
                    </h4>
                    {displayedPin.isMainHub && (
                      <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Ana Merkez
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{displayedPin.university}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {displayedPin.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-4 h-4 text-red-500" />
                <span>
                  <strong className="text-slate-800">{displayedPin.membersCount}</strong> kayıtlı geliştirici
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>
                  <strong className="text-slate-800">{displayedPin.activeBootcamps}</strong> aktif çalışma grubu
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
