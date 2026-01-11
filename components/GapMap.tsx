
import React, { useState } from 'react';
import { REGION_STATS, MOJ_STATS } from '../constants';
import KoreaMap from './KoreaMap';

const GapMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGION_STATS[0]);

  return (
    <section id="data" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black text-sm tracking-widest uppercase mb-4 block">Regional Evidence</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
              Evidence: 시스템의 <span className="text-green-600">결함</span>을 지도로 증명하다
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              법무부 2025년 10월 통계월보의 권역별 외국인 분포와 복지 자원 데이터를 매핑했습니다. 
              지도를 클릭하여 지역별 결핍 지수(Dead Zone Score)를 확인하세요.
            </p>
          </div>
          <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
             <div className="text-xs text-slate-400 font-bold mb-1">누적 데이터 샘플링</div>
             <div className="text-2xl font-black text-slate-900 tracking-tighter">
                {MOJ_STATS.totalForeigners.toLocaleString()}명분 분석
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch h-full">
          {/* Left: Interactive Map */}
          <div className="lg:h-[600px] w-full">
             <KoreaMap 
                data={REGION_STATS} 
                selectedRegion={selectedRegion} 
                onSelectRegion={setSelectedRegion} 
             />
             <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
               <span className="text-2xl">💡</span>
               <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">데이터 인사이트:</span> 호남권과 충청권의 붉은색(위험) 지표가 두드러집니다. 이는 체류 인구가 증가함에도 불구하고, 다문화 지원 예산 및 전담 센터가 수도권(53.7%)에 편중되어 있기 때문인 것으로 분석됩니다.
               </p>
            </div>
          </div>

          {/* Right: Detail Card */}
          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center relative overflow-hidden h-full min-h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-black tracking-widest mb-4 uppercase">
                  Selected Area Analysis
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{selectedRegion.name}</h3>
                <p className="text-slate-500 text-sm font-bold tracking-wide">수리데이터사이언스 랩 분석 보고서 2025-10</p>
              </div>
              
              <div className="space-y-10 my-12">
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Dead Zone Score (결핍 지수)</span>
                    <span className={`text-5xl font-black ${selectedRegion.deadZoneScore > 70 ? 'text-red-500' : 'text-green-500'}`}>
                      {selectedRegion.deadZoneScore}
                      <span className="text-lg text-slate-500 ml-1">/ 100</span>
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ease-out ${selectedRegion.deadZoneScore > 70 ? 'bg-red-500' : 'bg-green-500'}`} 
                      style={{ width: `${selectedRegion.deadZoneScore}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-[10px] text-slate-500 mt-2 font-medium">
                    * 점수가 높을수록 복지 사각지대 위험이 큽니다.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm">
                    <div className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-wider">등록 외국인 및 다문화</div>
                    <div className="text-2xl font-black text-white">{selectedRegion.multiculturalPop.toLocaleString()} <span className="text-sm font-normal text-slate-500">명</span></div>
                  </div>
                  <div className="bg-slate-800/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm">
                    <div className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-wider">이용 가능 센터</div>
                    <div className="text-2xl font-black text-white">{selectedRegion.serviceCenters} <span className="text-sm font-normal text-slate-500">개소</span></div>
                  </div>
                  <div className="bg-slate-800/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm col-span-2">
                    <div className="flex justify-between items-center mb-2">
                       <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">1인당 예산 지원액</div>
                       <div className="text-xs font-bold bg-slate-700 px-2 py-1 rounded text-slate-300">전국 평균 대비 {(selectedRegion.budgetPerCapita / 50000 * 100).toFixed(0)}%</div>
                    </div>
                    <div className="text-2xl font-black text-white">{selectedRegion.budgetPerCapita.toLocaleString()} <span className="text-sm font-normal text-slate-500">원</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-800">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <p className="text-xs text-slate-300 font-medium">
                      해당 지역의 데이터 기반 정책 제안서 생성이 가능합니다.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapMap;
