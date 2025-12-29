
import { Story, RegionData } from './types';

export const COLORS = {
  primary: '#009223', // Good Neighbors Green
  secondary: '#ff8c00', // Warm orange
  background: '#f8fafc',
  accent: '#e2e8f0',
  danger: '#ef4444'
};

export const BRAND = {
  name: "모두의 문제 연구소",
  engName: "Everyone's Problem Lab",
  affiliation: "한양대학교 ERICA 수리데이터사이언스 연구실 창업 사회적기업"
};

export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    title: '186,992명의 마리아: 데이터 속에 가려진 결혼이민자의 삶',
    excerpt: '법무부 통계상 F-6 비자 소지자는 18만 명을 넘었습니다. 하지만 이들 중 53.7%가 수도권에 집중되면서, 지방 거주자들의 의료·복지 접근성은 데이터상 심각한 결핍을 보입니다.',
    content: '마리아 씨는 화성시 외곽에 거주하는 결혼이민자입니다. 통계월보에 따르면 화성시는 외국인 밀집도가 높지만, 대중교통 데이터와 결합했을 때 마리아 씨의 집에서 복지센터까지는 도보와 버스로 84분이 소요됩니다.',
    author: '모두의 문제 연구소 데이터 팀',
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5310f94a17?auto=format&fit=crop&q=80&w=800',
    region: '수도권 외곽',
    tags: ['F-6 결혼이민', '수도권집중', '데이터결핍']
  },
  {
    id: '2',
    title: '1.2%의 문턱: 난민 신청 134,121건이 남긴 숙제',
    excerpt: '1994년 이후 누적 난민 신청자는 13만 명에 달하지만 인정률은 1.2%에 불과합니다. 행정의 문턱에서 멈춘 아이들의 교육권을 데이터로 추적합니다.',
    content: '난민 신청자 중 심사가 완료된 61,649명 중 단 1,630명만이 인정을 받았습니다. 나머지 인도적 체류자들의 사회적 안전망 부재를 수리 모델로 분석했습니다.',
    author: '수리데이터사이언스 랩',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    region: '전국',
    tags: ['난민인정률', '인도적체류', '행정장벽']
  }
];

export const REGION_STATS: RegionData[] = [
  { name: '수도권 (서울/경기/인천)', multiculturalPop: 862540, povertyRate: 18.5, serviceCenters: 124, deadZoneScore: 42, budgetPerCapita: 62000 },
  { name: '영남권', multiculturalPop: 328910, povertyRate: 24.2, serviceCenters: 45, deadZoneScore: 68, budgetPerCapita: 48000 },
  { name: '충청권', multiculturalPop: 209049, povertyRate: 26.5, serviceCenters: 28, deadZoneScore: 75, budgetPerCapita: 41000 },
  { name: '호남권', multiculturalPop: 143782, povertyRate: 29.8, serviceCenters: 18, deadZoneScore: 84, budgetPerCapita: 37000 }
];

export const MOJ_STATS = {
  totalForeigners: 2837525, // 2025.10 기준
  increaseRate: 3.6,
  f6Pop: 186992,
  refugeeApplicants: 134121,
  refugeeRecognized: 1630
};
