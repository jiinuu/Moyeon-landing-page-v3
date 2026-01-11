
import React from 'react';
import { MOCK_STORIES, COLORS } from '../constants';

const StorySection: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Trigger: Story으로 문을 열다</h2>
            <p className="text-slate-500">인스타그램과 숏츠에서 시작된 한 사람의 이야기가 사회를 바꿉니다.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600">
               SNS Viral Campaign #마리아의편지
             </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MOCK_STORIES.map(story => (
            <div key={story.id} className="group cursor-pointer bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                  {story.region}
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {story.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">#{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">{story.author}</span>
                  <button className="text-sm font-bold flex items-center gap-1" style={{ color: COLORS.primary }}>
                    사연 더보기 <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
