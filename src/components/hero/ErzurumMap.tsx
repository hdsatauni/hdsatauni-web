import React from 'react';
import { ERZURUM_PATH } from './erzurumPath';
import { districtLabels } from '../../data/erzurumData';

export const ErzurumMap: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center select-none py-2">
      {/* Soft ambient background glows behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[260px] h-[260px] bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Enlarged Erzurum Vector Map without borders or frames */}
      <div className="relative w-full max-w-[560px] lg:max-w-[620px] mx-auto">
        <svg
          viewBox="753 84 126 130"
          className="w-full h-auto drop-shadow-xl transition-all duration-300"
          aria-label="Erzurum İli Haritası"
        >
          <defs>
            {/* Soft land gradient */}
            <linearGradient id="erzurumLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fff8f8" />
              <stop offset="100%" stopColor="#fef2f2" />
            </linearGradient>

            {/* Glowing drop shadow filter for the province */}
            <filter id="erzurumShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#CE0E2D" floodOpacity="0.18" />
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.08" />
            </filter>

            {/* Subtle tech dot pattern */}
            <pattern id="erzurumMesh" width="3.5" height="3.5" patternUnits="userSpaceOnUse">
              <circle cx="1.75" cy="1.75" r="0.22" fill="#ef4444" opacity="0.25" />
            </pattern>

            {/* Boundary Clip */}
            <clipPath id="erzurumClipPath">
              <path d={ERZURUM_PATH} />
            </clipPath>
          </defs>

          {/* Concentric elevation radar rings centered at Atatürk Üniversitesi */}
          <g className="opacity-20 pointer-events-none">
            <circle cx="811" cy="147" r="16" fill="none" stroke="#dc2626" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
            <circle cx="811" cy="147" r="32" fill="none" stroke="#dc2626" strokeWidth="0.3" strokeDasharray="2.5 2.5" />
            <circle cx="811" cy="147" r="48" fill="none" stroke="#dc2626" strokeWidth="0.2" strokeDasharray="3.5 3.5" />
          </g>

          {/* Erzurum Province Base Silhouette */}
          <path
            d={ERZURUM_PATH}
            fill="url(#erzurumLandGrad)"
            stroke="#CE0E2D"
            strokeWidth="1.2"
            strokeLinejoin="round"
            filter="url(#erzurumShadow)"
          />

          {/* Interior Mesh Pattern Overlay */}
          <rect
            x="753"
            y="84"
            width="126"
            height="130"
            fill="url(#erzurumMesh)"
            clipPath="url(#erzurumClipPath)"
            className="pointer-events-none"
          />

          {/* Static District Watermarks / Geographic Context */}
          <g className="pointer-events-none select-none">
            {districtLabels.map((district) => (
              <g key={district.id} transform={`translate(${district.x}, ${district.y})`}>
                <circle cx="0" cy="0" r="0.55" fill="#94a3b8" />
                <text
                  x="0"
                  y="2.6"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="2.5"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  className="opacity-70 tracking-wider uppercase"
                >
                  {district.name}
                </text>
              </g>
            ))}
          </g>

          {/* Palandöken Mountain Icon Marker */}
          <g transform="translate(815, 160)" className="pointer-events-none opacity-60">
            <path
              d="M-2.2,1.4 L0,-1.8 L2.2,1.4 Z"
              fill="none"
              stroke="#CE0E2D"
              strokeWidth="0.4"
            />
            <text
              x="0"
              y="3.2"
              textAnchor="middle"
              fill="#CE0E2D"
              fontSize="1.9"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              ▲ 3,176m
            </text>
          </g>

          {/* Atatürk Üniversitesi (Ana Merkez) Prominent Pin */}
          <g transform="translate(811, 147)" className="pointer-events-none">
            {/* Animated Beacon Waves */}
            <circle
              cx="0"
              cy="0"
              r="5.5"
              fill="none"
              stroke="#CE0E2D"
              strokeWidth="0.5"
              className="animate-ping opacity-75"
              style={{ animationDuration: '2.5s' }}
            />
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="none"
              stroke="#CE0E2D"
              strokeWidth="0.3"
              className="opacity-35"
            />

            {/* Base Drop Shadow */}
            <ellipse cx="0" cy="1.6" rx="1.8" ry="0.6" fill="rgba(0,0,0,0.25)" />

            {/* Star Marker Pin */}
            <g transform="translate(0, -2)">
              <circle
                cx="0"
                cy="0"
                r="3.2"
                fill="#CE0E2D"
                stroke="#ffffff"
                strokeWidth="0.8"
                className="drop-shadow-sm"
              />
              <circle cx="0" cy="0" r="1.2" fill="#ffffff" />
              <circle cx="0" cy="0" r="0.6" fill="#CE0E2D" />
            </g>

            {/* Elegant Main Campus Badge Tag */}
            <g transform="translate(0, -7.5)">
              <rect
                x="-21"
                y="-3.2"
                width="42"
                height="6.4"
                rx="3.2"
                fill="#CE0E2D"
                stroke="#ffffff"
                strokeWidth="0.45"
                className="drop-shadow-md"
              />
              <text
                x="0"
                y="0.9"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="2.4"
                fontWeight="800"
                fontFamily="sans-serif"
                letterSpacing="0.03em"
              >
                ★ ATATÜRK ÜNİVERSİTESİ
              </text>
            </g>

            {/* Sub-label tag: HSD Ana Üssü */}
            <g transform="translate(0, 5.5)">
              <rect
                x="-13"
                y="-2.2"
                width="26"
                height="4.4"
                rx="2.2"
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth="0.3"
                className="drop-shadow-xs"
              />
              <text
                x="0"
                y="0.8"
                textAnchor="middle"
                fill="#002C6C"
                fontSize="1.9"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                HSD ANA MERKEZ
              </text>
            </g>
          </g>

          {/* Compass Rose in Corner */}
          <g transform="translate(862, 98)" className="pointer-events-none opacity-40">
            <circle cx="0" cy="0" r="4.5" fill="none" stroke="#94a3b8" strokeWidth="0.3" strokeDasharray="1 1" />
            <path d="M0,-4.5 L0.9,-0.9 L4.5,0 L0.9,0.9 L0,4.5 L-0.9,0.9 L-4.5,0 L-0.9,-0.9 Z" fill="#CE0E2D" />
            <text x="0" y="-5.2" textAnchor="middle" fill="#CE0E2D" fontSize="1.8" fontWeight="800">K</text>
          </g>

          {/* Province Tag Watermark in bottom corner */}
          <g transform="translate(762, 206)" className="pointer-events-none opacity-60">
            <text x="0" y="0" fill="#64748b" fontSize="3" fontWeight="800" letterSpacing="0.08em">
              ERZURUM • 25
            </text>
            <text x="0" y="3" fill="#94a3b8" fontSize="2" fontWeight="500">
              39°54' K • 41°16' D
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
