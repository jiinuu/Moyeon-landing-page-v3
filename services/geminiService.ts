
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePolicyProposal = async (regionName: string, data: any) => {
  const prompt = `
    지역: ${regionName}
    데이터 지표: ${JSON.stringify(data)}
    
    위 데이터를 바탕으로 해당 지자체(시장/시의원)에게 제출할 '다문화 상생 정책 제안서'를 공무원 보고서 스타일(개조식)로 작성해줘.
    
    포함될 내용:
    1. 정책명
    2. 현황 및 문제점 (데이터 기반)
    3. 해결 방안 (실행 가능한 대안)
    4. 기대 효과 (민원 감소 및 행정 효율 중심)
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating proposal:", error);
    return "제안서 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};
