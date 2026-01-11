
import React from 'react';
import Layout from './components/Layout';
import StorySection from './components/StorySection';
import GapMap from './components/GapMap';
import ProposalGenerator from './components/ProposalGenerator';
import { COLORS, BRAND, MOJ_STATS } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold mb-8 border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {BRAND.affiliation}
          </div>
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-10 tracking-tighter">
              데이터의<br /> 시선으로 <br />
              <span className="text-green-600">세상이 놓친 질문을<br /></span>다시 던집니다.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
              모두의 문제 연구소는 정밀한 데이터 분석을 통해 <br className="hidden md:block" />
              기존 시스템이 놓친 소외 계층을 규명하고, 그들에게 닿을 수 있는 <span className="text-slate-900 font-bold underline decoration-green-500 underline-offset-4"><br />가장 실효성 있는 솔루션</span>을 연구합니다.
            </p>
            <div className="flex flex-wrap gap-5">
              <a 
                href="#stories" 
                className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/30 text-lg active:scale-95"
              >
                연구 사례 보기
              </a>
              <a 
                href="#data" 
                className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all text-lg active:scale-95"
              >
                전국 결핍 지도
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-slate-400 text-xs font-bold mb-1">체류 외국인 현황</div>
            <div className="text-2xl font-black text-slate-900">{MOJ_STATS.totalForeigners.toLocaleString()}명</div>
            <div className="text-[10px] text-green-600 font-bold">전월比 {MOJ_STATS.increaseRate}% 증가</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-slate-400 text-xs font-bold mb-1">결혼 이민자 (F-6)</div>
            <div className="text-2xl font-black text-slate-900">{MOJ_STATS.f6Pop.toLocaleString()}명</div>
            <div className="text-[10px] text-slate-500 font-medium">가족 단위 복지 사각지대 발생</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-slate-400 text-xs font-bold mb-1">난민 인정률</div>
            <div className="text-2xl font-black text-red-500">1.2%</div>
            <div className="text-[10px] text-slate-500 font-medium">13.4만 명 신청 중 1.6천 명</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-slate-400 text-xs font-bold mb-1">수도권 집중도</div>
            <div className="text-2xl font-black text-slate-900">53.7%</div>
            <div className="text-[10px] text-slate-500 font-medium">지방 소도시 서비스 단절 심화</div>
          </div>
        </div>
      </section>

      {/* Logic Flow Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 relative">
             <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-800 z-0"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-3xl mb-8 shadow-xl shadow-green-600/20">📱</div>
                <h3 className="text-2xl font-black mb-4">01. Story Trigger</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  데이터는 차갑습니다. 하지만 그 숫자를 살아가는 사람들의 이야기는 뜨겁습니다. SNS Viral을 통해 데이터의 주인공을 조명합니다.
                </p>
             </div>

             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl mb-8 shadow-xl">📊</div>
                <h3 className="text-2xl font-black mb-4">02. Mathematical Evidence</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  수리 모델링을 통해 개인의 사연이 아닌 시스템의 결함임을 증명합니다. 인구 대비 센터 부족률, 대기 시간, 접근성 지표를 산출합니다.
                </p>
             </div>

             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white text-slate-900 flex items-center justify-center text-3xl mb-8 shadow-xl shadow-white/10">🏛️</div>
                <h3 className="text-2xl font-black mb-4">03. Policy Action</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  정책 제안자가 바로 사용 가능한 논리적 근거가 담긴 '정책 치트키' 제안서를 자동 생성하여 전달합니다.
                </p>
             </div>
          </div>
        </div>
      </section>

      <StorySection />
      <GapMap />
      <ProposalGenerator />

      {/* CTA Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">수치가 아닌, <span className="text-green-600 underline underline-offset-8">상생</span>을 연구합니다.</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            한양대학교 ERICA 수리데이터사이언스 연구실의 전문성과 <br />
            모두의 문제 연구소의 사회적 미션이 만나 더 나은 대한민국을 만듭니다.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button className="px-12 py-5 bg-green-600 text-white font-black rounded-2xl hover:bg-green-500 shadow-2xl shadow-green-600/30 transition-all text-xl">
              연구소와 협업하기
            </button>
            <p className="text-sm text-slate-400 font-bold">전국 243개 지자체 대응 데이터 확보 완료</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
