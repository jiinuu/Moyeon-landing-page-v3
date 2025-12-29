
import React, { useState } from 'react';
import { generatePolicyProposal } from '../services/geminiService';
import { REGION_STATS, COLORS } from '../constants';

const ProposalGenerator: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGION_STATS[0].name);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const data = REGION_STATS.find(r => r.name === selectedRegion);
    const result = await generatePolicyProposal(selectedRegion, data);
    setReport(result || "생성 실패");
    setLoading(false);
  };

  return (
    <section id="action" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-black text-sm tracking-widest uppercase mb-4 block">B2G CHEAT KEY</span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">행정(Policy)으로 해결하다</h2>
          <p className="text-slate-500 text-lg">AI가 시민의 목소리를 공무원용 고품질 제안서로 변환합니다.</p>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <select 
              className="flex-grow p-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-green-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {REGION_STATS.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
            </select>
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 min-w-[200px]"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  작성 중...
                </>
              ) : '제안서 자동 생성'}
            </button>
          </div>

          {report ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-inner overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Confidential / Draft</span>
                </div>
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-center text-2xl font-black text-slate-900 mb-8 underline decoration-slate-200 underline-offset-8">정책 제안 보고서</h3>
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">
                    {report}
                  </pre>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-xs text-slate-400">
                    * 위 문서는 시민 공감 데이터와 AI 분석을 기반으로 작성되었습니다.
                  </div>
                  <div className="flex gap-2">
                    <button className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-200">PDF 다운로드</button>
                    <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl text-sm hover:bg-green-500" onClick={() => alert('시청 민원 창구로 전송되었습니다.')}>시청에 전달하기</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-slate-300 border-2 border-dashed border-slate-200 rounded-3xl">
              <div className="text-4xl mb-2">📄</div>
              <p className="text-sm font-medium">지역을 선택하고 제안서를 생성해보세요</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProposalGenerator;
