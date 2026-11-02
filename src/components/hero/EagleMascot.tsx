import React from 'react';
import { Sparkles, Code2, Cpu, Terminal } from 'lucide-react';

export const EagleMascot: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none py-4">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] bg-red-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Holographic Tech Tags around the Mascot */}
      <div className="relative w-full max-w-[520px] lg:max-w-[560px]">
        {/* Top-Left Floating Badge: HarmonyOS & Code */}
        <div className="absolute -top-2 left-2 sm:left-6 z-20 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-red-500/5 rounded-2xl px-3 py-1.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-red-50 text-[#CE0E2D] flex items-center justify-center font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-extrabold text-slate-900 leading-tight">HarmonyOS</div>
            <div className="text-[9px] font-semibold text-slate-500">Developer Ecosystem</div>
          </div>
        </div>

        {/* Top-Right Floating Badge: AI & Cloud */}
        <div
          className="absolute top-6 -right-2 sm:right-4 z-20 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/5 rounded-2xl px-3 py-1.5 flex items-center gap-2"
          style={{ animationDelay: '1.8s' }}
        >
          <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#002C6C] flex items-center justify-center font-bold">
            <Cpu className="w-4 h-4 text-blue-700" />
          </div>
          <div className="text-left">
            <div className="text-[11px] font-extrabold text-slate-900 leading-tight">Ascend AI</div>
            <div className="text-[9px] font-semibold text-slate-500">Doğu Anadolu Hub</div>
          </div>
        </div>

        {/* Bottom-Left Floating Badge: Erzurum Dadaş Ruhu */}
        <div
          className="absolute bottom-16 -left-2 sm:left-4 z-20 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-2"
          style={{ animationDelay: '3s' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-800">Atatürk Üniversitesi • 1,890m</span>
        </div>

        {/* Vector Cartoon Tech Eagle Mascot Illustration */}
        <svg
          viewBox="0 0 500 520"
          className="w-full h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          aria-label="HSD Erzurum Teknoloji Kartalı Maskotu"
        >
          <defs>
            {/* Ambient Base Glow */}
            <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CE0E2D" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#002C6C" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* Feather Gradients */}
            <linearGradient id="whiteFeather" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <linearGradient id="featherShade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Beak & Claw Gradient */}
            <linearGradient id="goldBeak" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Developer Hoodie Navy & Red */}
            <linearGradient id="hoodieNavy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003580" />
              <stop offset="50%" stopColor="#002C6C" />
              <stop offset="100%" stopColor="#001C45" />
            </linearGradient>

            <linearGradient id="hoodieRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E11D48" />
              <stop offset="40%" stopColor="#CE0E2D" />
              <stop offset="100%" stopColor="#9F0720" />
            </linearGradient>

            {/* Eye Iris Gradient */}
            <linearGradient id="eyeIris" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>

            {/* Headphone Red Accent */}
            <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CE0E2D" />
              <stop offset="100%" stopColor="#FF4D6D" />
            </linearGradient>

            {/* Tablet Glow */}
            <linearGradient id="tabletScreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Soft Shadow Filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#CE0E2D" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* ================= PEDESTAL & GROUND TECH RINGS ================= */}
          <ellipse cx="250" cy="468" rx="170" ry="26" fill="url(#pedestalGlow)" />
          <ellipse
            cx="250"
            cy="468"
            rx="145"
            ry="20"
            fill="none"
            stroke="#CE0E2D"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="opacity-40 animate-pulse"
          />
          <ellipse
            cx="250"
            cy="468"
            rx="115"
            ry="15"
            fill="none"
            stroke="#002C6C"
            strokeWidth="0.8"
            className="opacity-30"
          />

          {/* ================= BACK WINGS (SPREAD HEROICALLY) ================= */}
          {/* Left Wing (Back Layer) */}
          <g>
            <path
              d="M190,260 C120,220 70,250 45,310 C35,335 48,360 80,350 C110,340 145,325 180,310 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Wing Feather Layers */}
            <path
              d="M55,305 C70,320 100,328 135,325"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M75,340 C100,345 130,342 165,335"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Right Wing (Back Layer) */}
          <g>
            <path
              d="M310,260 C380,220 430,250 455,310 C465,335 452,360 420,350 C390,340 355,325 320,310 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Wing Feather Layers */}
            <path
              d="M445,305 C430,320 400,328 365,325"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M425,340 C400,345 370,342 335,335"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* ================= SNEAKER FEET (CARTOON DEVELOPER KICKS) ================= */}
          {/* Left Sneaker */}
          <g transform="translate(195, 428)">
            {/* Sole */}
            <rect x="-32" y="22" width="62" height="14" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="-30,32 L28,32" stroke="#E2E8F0" strokeWidth="2" />
            {/* Shoe Body in Huawei Red */}
            <path
              d="M-28,22 C-28,10 -15,4 -2,8 C12,12 24,18 26,22 Z"
              fill="url(#hoodieRed)"
              stroke="#9F0720"
              strokeWidth="1.5"
            />
            {/* White Toe Cap & Details */}
            <path d="M12,18 C18,19 25,20 26,22 L14,22 Z" fill="#FFFFFF" />
            <circle cx="-10" cy="14" r="2" fill="#FFFFFF" />
            <circle cx="-3" cy="15" r="2" fill="#FFFFFF" />
          </g>

          {/* Right Sneaker */}
          <g transform="translate(305, 428)">
            {/* Sole */}
            <rect x="-30" y="22" width="62" height="14" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="-28,32 L30,32" stroke="#E2E8F0" strokeWidth="2" />
            {/* Shoe Body in Huawei Red */}
            <path
              d="M-26,22 C-24,18 -12,12 2,8 C15,4 28,10 28,22 Z"
              fill="url(#hoodieRed)"
              stroke="#9F0720"
              strokeWidth="1.5"
            />
            {/* White Toe Cap & Details */}
            <path d="M-14,22 C-14,20 -18,19 -26,22 Z" fill="#FFFFFF" />
            <circle cx="3" cy="15" r="2" fill="#FFFFFF" />
            <circle cx="10" cy="14" r="2" fill="#FFFFFF" />
          </g>

          {/* ================= BODY & HOODIE ================= */}
          {/* Main Body (Navy Developer Hoodie) */}
          <path
            d="M175,260 C160,330 162,390 178,435 C200,442 300,442 322,435 C338,390 340,330 325,260 C295,245 205,245 175,260 Z"
            fill="url(#hoodieNavy)"
            stroke="#001838"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Red Hoodie Sleeves (Left & Right) */}
          <path
            d="M175,260 C155,290 148,340 162,370 C172,375 190,365 194,340 C185,310 188,280 185,265 Z"
            fill="url(#hoodieRed)"
            stroke="#9F0720"
            strokeWidth="2"
          />
          <path
            d="M325,260 C345,290 352,340 338,370 C328,375 310,365 306,340 C315,310 312,280 315,265 Z"
            fill="url(#hoodieRed)"
            stroke="#9F0720"
            strokeWidth="2"
          />

          {/* Hoodie Red Kangaroo Pocket */}
          <path
            d="M205,360 L295,360 L285,410 C265,416 235,416 215,410 Z"
            fill="url(#hoodieRed)"
            stroke="#9F0720"
            strokeWidth="1.8"
          />
          {/* Pocket Hand Openings */}
          <line x1="205" y1="365" x2="216" y2="395" stroke="#7A0014" strokeWidth="2" strokeLinecap="round" />
          <line x1="295" y1="365" x2="284" y2="395" stroke="#7A0014" strokeWidth="2" strokeLinecap="round" />

          {/* Hoodie Zipper / Center Accent */}
          <line x1="250" y1="260" x2="250" y2="355" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 2" />

          {/* Hoodie Drawstrings with Golden Aglets */}
          <path
            d="M232,255 C230,285 233,315 228,335"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <rect x="226" y="335" width="4" height="9" rx="2" fill="#F59E0B" />

          <path
            d="M268,255 C270,285 267,315 272,335"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <rect x="270" y="335" width="4" height="9" rx="2" fill="#F59E0B" />

          {/* Hoodie Collar / Neck Red Wrap */}
          <path
            d="M185,255 C210,278 290,278 315,255 C310,230 190,230 185,255 Z"
            fill="url(#hoodieRed)"
            stroke="#9F0720"
            strokeWidth="2"
          />

          {/* ================= TABLET / LAPTOP HELD BY MASCOT ================= */}
          <g transform="translate(190, 315)">
            {/* Tablet Shell */}
            <rect
              x="0"
              y="0"
              width="120"
              height="80"
              rx="12"
              fill="url(#tabletScreen)"
              stroke="#475569"
              strokeWidth="2.5"
              className="drop-shadow-lg"
            />
            {/* Glowing Screen Inner Border */}
            <rect
              x="5"
              y="5"
              width="110"
              height="70"
              rx="8"
              fill="#0F172A"
              stroke="#0284C7"
              strokeWidth="1.2"
              className="opacity-90"
            />
            {/* Holographic Glowing Code on Screen */}
            <circle cx="16" cy="16" r="2.5" fill="#EF4444" />
            <circle cx="24" cy="16" r="2.5" fill="#F59E0B" />
            <circle cx="32" cy="16" r="2.5" fill="#10B981" />

            {/* Glowing Code Lines */}
            <text x="14" y="32" fill="#38BDF8" fontSize="7.5" fontWeight="700" fontFamily="monospace">
              const hsd = new Erzurum();
            </text>
            <text x="14" y="44" fill="#F43F5E" fontSize="7" fontWeight="600" fontFamily="monospace">
              hsd.connect(&quot;Huawei Cloud&quot;);
            </text>
            <text x="14" y="56" fill="#4ADE80" fontSize="7" fontWeight="600" fontFamily="monospace">
              &gt; HarmonyOS Ready! ★
            </text>

            {/* Blinking Terminal Cursor */}
            <rect x="86" y="50" width="4.5" height="7.5" fill="#38BDF8" className="animate-pulse" />

            {/* Little Huawei Red Star Badge on Tablet Corner */}
            <g transform="translate(102, 14)">
              <circle cx="0" cy="0" r="4.5" fill="#CE0E2D" />
              <path d="M0,-2.5 L0.8,-0.8 L2.5,0 L0.8,0.8 L0,2.5 L-0.8,0.8 L-2.5,0 L-0.8,-0.8 Z" fill="#FFFFFF" />
            </g>
          </g>

          {/* Eagle Wing-Hands (Clasping the sides of the tablet) */}
          {/* Left Wing Hand */}
          <path
            d="M178,340 C182,345 192,352 204,350 C206,342 198,335 186,332 Z"
            fill="url(#whiteFeather)"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          {/* Right Wing Hand */}
          <path
            d="M322,340 C318,345 308,352 296,350 C294,342 302,335 314,332 Z"
            fill="url(#whiteFeather)"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* ================= EAGLE HEAD & CREST ================= */}
          {/* Back Tuft Feathers (Crest) */}
          <g>
            <path
              d="M230,120 C220,70 170,75 160,95 C175,105 195,115 210,128 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <path
              d="M250,110 C250,55 210,50 190,75 C215,85 235,100 242,120 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <path
              d="M270,110 C270,55 310,50 330,75 C305,85 285,100 278,120 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <path
              d="M280,120 C300,70 340,75 350,95 C335,105 315,115 300,128 Z"
              fill="url(#whiteFeather)"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
          </g>

          {/* Main Head Base Shape (Chubby Cute Friendly Eagle) */}
          <path
            d="M170,190 C155,140 185,90 250,85 C315,90 345,140 330,190 C345,215 330,250 250,255 C170,250 155,215 170,190 Z"
            fill="url(#whiteFeather)"
            stroke="#CBD5E1"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Cheek Feathers Tufts (Left & Right) */}
          <path
            d="M170,195 C145,205 152,225 175,225"
            fill="url(#whiteFeather)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />
          <path
            d="M330,195 C355,205 348,225 325,225"
            fill="url(#whiteFeather)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* ================= EXPRESSIVE CARTOON EYES ================= */}
          {/* Eyebrows (Determined & Friendly Techie) */}
          <path
            d="M185,142 C202,136 225,144 235,152"
            fill="none"
            stroke="#334155"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M315,142 C298,136 275,144 265,152"
            fill="none"
            stroke="#334155"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Eye */}
          <g>
            <ellipse cx="212" cy="165" rx="19" ry="24" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
            {/* Iris */}
            <ellipse cx="216" cy="166" rx="13" ry="17" fill="url(#eyeIris)" />
            {/* Pupil */}
            <ellipse cx="217" cy="166" rx="8.5" ry="11" fill="#0F172A" />
            {/* Catchlight sparkles (Gives lively anime/cartoon expression) */}
            <circle cx="213" cy="159" r="4.2" fill="#FFFFFF" />
            <circle cx="221" cy="172" r="2.2" fill="#FFFFFF" />
          </g>

          {/* Right Eye */}
          <g>
            <ellipse cx="288" cy="165" rx="19" ry="24" fill="#FFFFFF" stroke="#334155" strokeWidth="2.5" />
            {/* Iris */}
            <ellipse cx="284" cy="166" rx="13" ry="17" fill="url(#eyeIris)" />
            {/* Pupil */}
            <ellipse cx="283" cy="166" rx="8.5" ry="11" fill="#0F172A" />
            {/* Catchlight sparkles */}
            <circle cx="280" cy="159" r="4.2" fill="#FFFFFF" />
            <circle cx="288" cy="172" r="2.2" fill="#FFFFFF" />
          </g>

          {/* Cute Cheek Blushes */}
          <ellipse cx="182" cy="188" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.6" />
          <ellipse cx="318" cy="188" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.6" />

          {/* ================= GOLDEN CARTOON BEAK ================= */}
          <g>
            {/* Upper Beak */}
            <path
              d="M232,175 C242,168 258,168 268,175 C275,190 272,215 250,225 C228,215 225,190 232,175 Z"
              fill="url(#goldBeak)"
              stroke="#B45309"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Beak Smile Curve / Lower Beak */}
            <path
              d="M236,192 C245,196 255,196 264,192"
              fill="none"
              stroke="#92400E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Beak Upper Highlight */}
            <path
              d="M242,174 C247,172 253,172 258,174 C260,182 256,195 250,198 C244,195 240,182 242,174 Z"
              fill="#FDE68A"
              opacity="0.75"
            />
            {/* Nostrils */}
            <circle cx="242" cy="179" r="1.2" fill="#92400E" />
            <circle cx="258" cy="179" r="1.2" fill="#92400E" />
          </g>

          {/* ================= DEVELOPER TECH HEADPHONES ================= */}
          {/* Headband Over Head */}
          <path
            d="M165,155 C160,85 340,85 335,155"
            fill="none"
            stroke="url(#hpGrad)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M175,152 C170,95 330,95 325,152"
            fill="none"
            stroke="#1E293B"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Earcup */}
          <g transform="translate(162, 175)">
            <ellipse cx="0" cy="0" rx="14" ry="24" fill="#0F172A" stroke="#334155" strokeWidth="2.5" />
            <ellipse cx="0" cy="0" rx="9" ry="17" fill="url(#hpGrad)" />
            {/* Glowing Earcup Ring */}
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" className="animate-pulse" />
          </g>

          {/* Right Earcup */}
          <g transform="translate(338, 175)">
            <ellipse cx="0" cy="0" rx="14" ry="24" fill="#0F172A" stroke="#334155" strokeWidth="2.5" />
            <ellipse cx="0" cy="0" rx="9" ry="17" fill="url(#hpGrad)" />
            {/* Glowing Earcup Ring */}
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" className="animate-pulse" />
          </g>

          {/* Headphone Boom Mic with Glowing Tip */}
          <path
            d="M162,185 C160,215 190,225 210,218"
            fill="none"
            stroke="#334155"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="212" cy="217" r="4" fill="#CE0E2D" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="212" cy="217" r="1.8" fill="#FFFFFF" className="animate-ping" />

          {/* Floating Sparkles & Tech Particles */}
          <g className="animate-pulse">
            <path d="M125,160 L128,166 L134,169 L128,172 L125,178 L122,172 L116,169 L122,166 Z" fill="#FBBF24" />
            <path d="M375,150 L378,155 L383,157 L378,160 L375,165 L372,160 L367,157 L372,155 Z" fill="#38BDF8" />
            <path d="M250,45 L252,50 L257,52 L252,54 L250,59 L248,54 L243,52 L248,50 Z" fill="#EF4444" />
          </g>
        </svg>

        {/* Mascot Name Banner & Status */}
        <div className="mt-2 flex flex-col items-center justify-center gap-1.5">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-[#CE0E2D] to-[#002C6C] text-white px-5 py-2 rounded-2xl shadow-lg shadow-red-600/25">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-extrabold text-xs sm:text-sm tracking-wide">
              HSD ERZURUM TEKNOLOJİ KARTALI
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
            <Terminal className="w-3.5 h-3.5 text-red-500" />
            <span>Atatürk Üniversitesi Geliştirici Ekosistemi Maskotu</span>
          </p>
        </div>
      </div>
    </div>
  );
};
