
import React, { useState } from 'react';
import { REGION_STATS, COLORS, MOJ_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const GapMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGION_STATS[0]);

  return (
    <section id="data" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black text-sm tracking-widest uppercase mb-4 block">Regional Evidence</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
              Evidence: 시스템의 <span className="text-green-600">결함</span>을 데이터로 증명하다
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              법무부 2025년 10월 통계월보의 권역별 외국인 분포와 복지 자원 데이터를 수리적으로 분석했습니다. 
              수도권 집중도는 53.7%에 달하며, 지역 사각지대는 갈수록 심화되고 있습니다.
            </p>
          </div>
          <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
             <div className="text-xs text-slate-400 font-bold mb-1">누적 데이터 샘플링</div>
             <div className="text-2xl font-black text-slate-900 tracking-tighter">
                {MOJ_STATS.totalForeigners.toLocaleString()}명분 분석
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-xl font-black flex items-center gap-3">
                <span className="w-2.5 h-8 bg-green-500 rounded-full"></span>
                권역별 복지 사각지대 지수 (Dead Zone Score)
              </h4>
              <div className="flex gap-4 text-xs font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-500"></div>
                  <span>안전</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500"></div>
                  <span>결핍</span>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={REGION_STATS}>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#475569', fontSize: 13, fontWeight: 700}} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12}}
                    label={{ value: '지수(Score)', angle: -90, position: 'insideLeft', style: {textAnchor: 'middle', fill: '#94a3b8', fontSize: 10, fontWeight: 700} }}
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.02)'}}
                    contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px'}}
                  />
                  <Bar dataKey="deadZoneScore" radius={[12, 12, 0, 0]} barSize={60}>
                    {REGION_STATS.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.deadZoneScore > 70 ? COLORS.danger : (entry.deadZoneScore < 50 ? COLORS.primary : '#94a3b8')} 
                        onClick={() => setSelectedRegion(entry)}
                        className="cursor-pointer transition-all hover:brightness-110"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
               <span className="text-2xl">💡</span>
               <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">데이터 인사이트:</span> 호남권과 충청권의 결핍 지수가 급격히 상승하고 있습니다. 이는 체류 인구가 증가함에도 불구하고, 다문화 지원 예산 및 전담 센터가 수도권(53.7%)에 편중되어 있기 때문인 것으로 분석됩니다.
               </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col min-h-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-black tracking-widest mb-4 uppercase">
                  Data Diagnosis
                </span>
                <h3 className="text-3xl font-black mb-1">{selectedRegion.name}</h3>
                <p className="text-slate-500 text-sm font-bold">수리데이터사이언스 기반 분석 보고서</p>
              </div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-400 text-xs font-bold uppercase">Dead Zone Index</span>
                    <span className={`text-3xl font-black ${selectedRegion.deadZoneScore > 70 ? 'text-red-500' : 'text-green-500'}`}>
                      {selectedRegion.deadZoneScore}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${selectedRegion.deadZoneScore > 70 ? 'bg-red-500' : 'bg-green-500'}`} 
                      style={{ width: `${selectedRegion.deadZoneScore}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/40 p-5 rounded-3xl border border-slate-800">
                    <div className="text-slate-500 text-[10px] font-bold mb-1 uppercase tracking-wider">체류 인구</div>
                    <div className="text-xl font-black">{selectedRegion.multiculturalPop.toLocaleString()}명</div>
                  </div>
                  <div className="bg-slate-800/40 p-5 rounded-3xl border border-slate-800">
                    <div className="text-slate-500 text-[10px] font-bold mb-1 uppercase tracking-wider">지원 인프라</div>
                    <div className="text-xl font-black">{selectedRegion.serviceCenters}개소</div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border border-slate-800 bg-green-500/5">
                  <div className="text-green-500 text-[10px] font-bold mb-2 uppercase tracking-widest">연구소 권고 사항</div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    해당 지역은 F-6 결혼이민자 인구 증가율이 전국 평균(3.6%)을 상회하나, 예산 집행률은 <span className="text-white font-bold">전국 최하위권</span>입니다. 즉각적인 지원 확대가 필요합니다.
                  </p>
                </div>
              </div>

              <button className="w-full mt-12 py-5 bg-green-600 hover:bg-green-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-600/20 active:scale-95 text-lg">
                현장 데이터 보태기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapMap;
