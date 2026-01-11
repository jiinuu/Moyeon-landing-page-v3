
import React from 'react';
import { RegionData } from '../types';
import { COLORS } from '../constants';

interface KoreaMapProps {
  data: RegionData[];
  selectedRegion: RegionData;
  onSelectRegion: (region: RegionData) => void;
}

const KoreaMap: React.FC<KoreaMapProps> = ({ data, selectedRegion, onSelectRegion }) => {
  const getRegionColor = (region: RegionData | undefined) => {
    if (!region) return '#e2e8f0'; // Default Slate-200
    const isSelected = selectedRegion.name === region.name;
    const isHighRisk = region.deadZoneScore > 60;
    
    if (isSelected) {
      return isHighRisk ? '#ef4444' : COLORS.primary; // Selected: Red-500 or Brand Green
    }
    // Unselected: Muted Pastel
    return isHighRisk ? '#fca5a5' : '#86efac'; 
  };

  // SVG Paths optimized to look like a stylized South Korea
  // Coordinates designed to interlock perfectly
  const regions = [
    {
      id: 'sudo',
      name: '수도권 (서울/경기/인천)',
      // Top part of Korea
      path: 'M100,20 C140,10 180,30 190,50 C195,60 190,80 170,100 L140,110 L110,90 C100,70 90,40 100,20 Z',
      label: { x: 145, y: 65 }
    },
    {
      id: 'chungcheong',
      name: '충청권',
      // Middle part connecting Sudo, Honam, Yeongnam
      path: 'M110,90 L140,110 L170,100 C175,120 160,140 145,150 L100,140 C90,120 100,100 110,90 Z',
      label: { x: 135, y: 125 }
    },
    {
      id: 'yeongnam',
      name: '영남권',
      // Bottom Right, larger area
      path: 'M170,100 C210,90 240,120 230,180 C220,220 190,210 160,190 L145,150 C160,140 175,120 170,100 Z',
      label: { x: 195, y: 155 }
    },
    {
      id: 'honam',
      name: '호남권',
      // Bottom Left
      path: 'M100,140 L145,150 L160,190 C130,220 90,210 70,180 C60,160 80,150 100,140 Z',
      label: { x: 105, y: 180 }
    }
  ];

  // Jeju is visually mapped to Honam for this dataset logic
  const jejuColor = getRegionColor(data.find(d => d.name === '호남권'));

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white rounded-[3rem] p-4 md:p-8 shadow-inner border border-slate-100">
      <svg viewBox="0 0 320 350" className="w-full h-full max-h-[600px] filter drop-shadow-lg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        
        {/* Background Decorative Circles representing sea */}
        <circle cx="280" cy="80" r="40" fill="#f1f5f9" opacity="0.5" />
        <circle cx="40" cy="250" r="30" fill="#f1f5f9" opacity="0.5" />

        {/* East Sea & Dokdo (Symbolic) */}
         <circle cx="290" cy="110" r="3" fill="#cbd5e1" />
         <circle cx="295" cy="112" r="2" fill="#cbd5e1" />

        {regions.map((geo) => {
          const regionData = data.find(d => d.name === geo.name);
          const isSelected = selectedRegion.name === geo.name;
          
          return (
            <g 
              key={geo.id} 
              onClick={() => regionData && onSelectRegion(regionData)}
              className="cursor-pointer transition-all duration-500 ease-out hover:opacity-90"
              style={{ 
                transform: isSelected ? 'scale(1.03) translateY(-5px)' : 'scale(1)', 
                transformOrigin: 'center',
                zIndex: isSelected ? 10 : 1
              }}
            >
              <path
                d={geo.path}
                fill={getRegionColor(regionData)}
                stroke="white"
                strokeWidth={isSelected ? "3" : "1.5"}
                strokeLinejoin="round"
                className="transition-colors duration-300 shadow-xl"
                filter={isSelected ? "url(#glow)" : ""}
              />
              {/* Region Label */}
              <text
                x={geo.label.x}
                y={geo.label.y}
                textAnchor="middle"
                fill={isSelected ? "white" : "#475569"}
                fontSize={isSelected ? "14" : "11"}
                fontWeight="900"
                pointerEvents="none"
                style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.1)' }}
              >
                {regionData?.deadZoneScore}
              </text>
            </g>
          );
        })}
        
        {/* Jeju Island */}
        <g 
           onClick={() => {
             const honam = data.find(d => d.name === '호남권');
             if(honam) onSelectRegion(honam);
           }}
           className="cursor-pointer transition-transform duration-300 hover:scale-110 origin-center"
        >
          <ellipse cx="100" cy="280" rx="25" ry="15" fill={jejuColor} stroke="white" strokeWidth="2" />
          <text x="100" y="284" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" pointerEvents="none">제주</text>
        </g>

        {/* Connection Lines (Decorations) */}
        <path d="M190,50 Q230,40 260,30" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="260" cy="30" r="3" fill="#94a3b8" />
        <text x="270" y="33" fontSize="10" fill="#94a3b8" fontWeight="bold">DMZ</text>

      </svg>

      {/* Legend Box */}
      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl border border-slate-100 shadow-lg text-xs">
        <div className="font-black text-slate-800 mb-3 text-sm">Dead Zone Score</div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm shadow-red-200"></div>
            <span className="text-slate-600 font-bold">위험 (70+)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-green-400 shadow-sm shadow-green-200"></div>
            <span className="text-slate-600 font-bold">안전 (70 미만)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreaMap;
