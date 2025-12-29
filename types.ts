
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  imageUrl: string;
  region: string;
  tags: string[];
}

export interface RegionData {
  name: string;
  multiculturalPop: number;
  povertyRate: number;
  serviceCenters: number;
  deadZoneScore: number; // 0-100, higher means more neglected
  budgetPerCapita: number;
}

export interface PolicyProposal {
  title: string;
  background: string;
  problem: string;
  solution: string;
  expectedEffect: string;
}
