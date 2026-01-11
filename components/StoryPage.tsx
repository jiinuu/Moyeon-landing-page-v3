
import React from 'react';
import Layout from './Layout';
import { MOCK_STORIES, COLORS } from '../constants';

interface StoryPageProps {
  onBack: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-24">
        <div className="bg-slate-900 text-white pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm"
            >
              ← 메인으로 돌아가기
            </button>
            <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">Research Cases</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">데이터로 발굴한<br />우리 곁의 이야기</h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              통계 수치 뒤에 가려진 실제 이웃들의 삶을 조명합니다.<br />
              SNS 제보와 데이터 분석이 만나 발견된 사각지대 리포트입니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-10">
          <div className="grid gap-8">
            {MOCK_STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-shadow">
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                  <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {story.region}
                  </div>
                </div>
                <div className="flex-grow py-2">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {story.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">#{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight hover:text-green-600 transition-colors cursor-pointer">
                    {story.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {story.content}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">🖋️</div>
                       <div>
                         <div className="text-xs text-slate-400 font-bold">Research By</div>
                         <div className="text-sm font-bold text-slate-900">{story.author}</div>
                       </div>
                    </div>
                    <button className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-green-600 transition-colors">
                      자세히 보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mock Placeholder for More */}
            <div className="bg-slate-50 rounded-3xl p-12 text-center border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[300px]">
               <div className="text-5xl mb-6">🕵️‍♀️</div>
               <h3 className="text-xl font-black text-slate-900 mb-2">3번째 리포트를 작성 중입니다</h3>
               <p className="text-slate-500">현재 '지방 소멸과 다문화 청소년 교육 격차' 데이터를 분석하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryPage;
