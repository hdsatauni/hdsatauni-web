import React from 'react';

interface HuaweiLogoProps {
  className?: string;
}

export const HuaweiLogo: React.FC<HuaweiLogoProps> = ({ className = 'h-7' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Huawei Iconic 8-Petal Red Flower */}
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-8 text-[#CE0E2D] shrink-0 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(50, 68)">
          {/* Symmetrical Huawei Fan Petals */}
          <path d="M0,-42 C-4,-30 -5,-15 0,0 C5,-15 4,-30 0,-42 Z" />
          <path d="M0,0 C-9,-12 -20,-24 -30,-29 C-22,-20 -12,-8 0,0 Z" />
          <path d="M0,0 C9,-12 20,-24 30,-29 C22,-20 12,-8 0,0 Z" />
          <path d="M0,0 C-15,-7 -32,-11 -42,-10 C-32,-3 -18,1 0,0 Z" />
          <path d="M0,0 C15,-7 32,-11 42,-10 C32,-3 18,1 0,0 Z" />
          <path d="M0,0 C-18,-2 -37,3 -45,10 C-33,12 -18,7 0,0 Z" />
          <path d="M0,0 C18,-2 37,3 45,10 C33,12 18,7 0,0 Z" />
          <path d="M0,0 C-18,4 -36,15 -42,24 C-31,21 -16,13 0,0 Z" />
          <path d="M0,0 C18,4 36,15 42,24 C31,21 16,13 0,0 Z" />
        </g>
      </svg>

      {/* Vertical separator */}
      <div className="h-5 w-[1px] bg-slate-200" />

      {/* < HSD > Badge */}
      <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-200/90 px-2 py-0.5 rounded-md font-mono text-xs font-bold shadow-xs">
        <span className="text-red-600">&lt;</span>
        <span className="text-slate-900 tracking-wider">HSD</span>
        <span className="text-red-600">&gt;</span>
      </div>

      {/* Title */}
      <div className="flex flex-col">
        <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-none">
          HSD Atatürk Üniversitesi
        </span>
        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
          Huawei Student Developers
        </span>
      </div>
    </div>
  );
};
