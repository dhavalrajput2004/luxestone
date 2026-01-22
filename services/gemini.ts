
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getDesignAdvice(userQuery: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert luxury interior designer specializing in marble and natural stone. 
        Answer the following user query with professional, sophisticated, and helpful advice. 
        Focus on marble types like Carrara, Calacatta, and Nero Marquina.
        
        User Query: ${userQuery}`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      });

      return response.text || "I'm sorry, I couldn't generate advice at this time. Please try again.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The Stone Consultant is currently unavailable. Please visit our showroom for expert advice.";
    }
  }
}

export const geminiService = new GeminiService();
