
import React from 'react';
import { COLORS, BRAND } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: COLORS.primary }}>
                모
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900">{BRAND.name}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium ml-10 hidden sm:block">
              {BRAND.affiliation}
            </span>
          </div>
          <nav className="hidden lg:flex gap-10 text-sm font-bold text-slate-500">
            <a href="#stories" className="hover:text-green-600 transition-colors uppercase tracking-widest">Stories</a>
            <a href="#data" className="hover:text-green-600 transition-colors uppercase tracking-widest">Evidence</a>
            <a href="#action" className="hover:text-green-600 transition-colors uppercase tracking-widest">Policy Hack</a>
          </nav>
          <div className="flex items-center gap-4">
             <button 
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
            >
              캠페인 참여
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-xs">모</div>
                <span className="text-white font-black">{BRAND.name}</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                한양대학교 ERICA 수리데이터사이언스 연구실에서 시작된 우리는, 
                데이터의 힘으로 사회적 결핍을 증명하고 실질적인 정책 변화를 이끌어냅니다.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4 text-xs">
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">데이터 출처: 법무부 통계월보(2025.10)</a>
              </div>
              <p>© 2025 Everyone's Problem Research Lab. Proudly Built at Hanyang Univ ERICA.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
